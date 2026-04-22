import csv
import json
import random
import sys
import re

def main():
    stations = []
    # We want a mix: 50 from NY, and 50 random from across the USA
    ny_stations = []
    other_stations = []
    
    with open('ev_data.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                lat = float(row.get('latitude', 0))
                lon = float(row.get('longitude', 0))
                connectors = int(float(row.get('num_conn', 2))) if row.get('num_conn') else 2
                power = int(float(row.get('total_kw', 150))) if row.get('total_kw') else 150
                rating = float(row.get('rating', 4.0)) if row.get('rating') else 4.0
                
                if lat != 0 and lon != 0:
                    st = {
                        'name': row.get('name', 'Charging Station'),
                        'lat': lat,
                        'lon': lon,
                        'connectors': connectors,
                        'power': power,
                        'rating': rating
                    }
                    
                    city = row.get('city', '').lower().strip()
                    if 'new york' in city or 'brooklyn' in city or 'queens' in city or 'manhattan' in city:
                        ny_stations.append(st)
                    else:
                        other_stations.append(st)
            except ValueError:
                pass

    random.shuffle(ny_stations)
    random.shuffle(other_stations)
    
    # Take 30 from NY to keep a dense cluster
    final_stations = ny_stations[:30]
    # Take 70 from the rest of the country to guarantee distances > 800km
    final_stations.extend(other_stations[:70])
    
    # Generate index.js code
    js_stations = []
    for i, s in enumerate(final_stations):
        s['id'] = i
        s['congestion'] = round(random.uniform(0.1, 0.9), 3) # MIX OF COLORS
        s['isBlocked'] = False
        js_stations.append(s)

    start_lat = final_stations[0]['lat']  # Start in NY
    start_lon = final_stations[0]['lon']

    with open('index.js', 'r', encoding='utf-8') as f:
        js_code = f.read()

    split_marker = '// Build Graph (Adjacency List)'
    parts = js_code.split(split_marker)

    new_header = f'''// --- Configuration ---
const DALLAS_LAT = {start_lat};
const DALLAS_LON = {start_lon};

const stations = [
'''
    for s in js_stations:
        new_header += f'    {json.dumps(s)},\n'
        
    new_header += '];\n\n'
    
    new_header += '''// Calculate distance using Haversine formula (km)
function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

'''
    
    new_code = new_header + split_marker + parts[1]
    
    # 1. Replace the edge creation logic with K-Nearest Neighbors
    old_edge_logic = '''for (let i = 0; i < stations.length; i++) {
    for (let j = i + 1; j < stations.length; j++) {
        const dist = haversine(stations[i].lat, stations[i].lon, stations[j].lat, stations[j].lon);
        if (dist <= 1.0) { // Max edge length 1.0km to connect isolated clusters
            // Base weight is distance. Plus dynamic congestion penalty.
            graph.get(stations[i].id).push({ to: stations[j].id, distance: dist });
            graph.get(stations[j].id).push({ to: stations[i].id, distance: dist });
        }
    }
}'''
    
    new_edge_logic = '''// Use K-Nearest Neighbors (K=3) to guarantee connection regardless of distance!
for (let i = 0; i < stations.length; i++) {
    let closest = [];
    for (let j = 0; j < stations.length; j++) {
        if (i !== j) {
            const dist = haversine(stations[i].lat, stations[i].lon, stations[j].lat, stations[j].lon);
            closest.push({ id: stations[j].id, distance: dist });
        }
    }
    // Sort by closest distance
    closest.sort((a, b) => a.distance - b.distance);
    
    // Connect to the 3 closest stations
    for (let k = 0; k < 3; k++) {
        if (closest[k]) {
            // Check if edge already exists to prevent duplicates
            let exists = graph.get(stations[i].id).some(e => e.to === closest[k].id);
            if (!exists) {
                graph.get(stations[i].id).push({ to: closest[k].id, distance: closest[k].distance });
                graph.get(closest[k].id).push({ to: stations[i].id, distance: closest[k].distance });
            }
        }
    }
}'''
    new_code = new_code.replace(old_edge_logic, new_edge_logic)
    
    # 2. Fix the Vis.js labels to show 1 decimal place
    new_code = new_code.replace("label: n.distance.toFixed(0)", "label: n.distance.toFixed(1) + 'km'")
    
    # 3. Update the Vis.js scaling to 2000 instead of 60000 since nodes span the whole USA now
    new_code = new_code.replace("x: (s.lon - DALLAS_LON) * 60000", "x: (s.lon - DALLAS_LON) * 2000")
    new_code = new_code.replace("y: -(s.lat - DALLAS_LAT) * 60000", "y: -(s.lat - DALLAS_LAT) * 2000")
    
    with open('index.js', 'w', encoding='utf-8') as f:
        f.write(new_code)

    import re
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    html = re.sub(r'id=\"userLat\" value=\"[^\"]*\"', f'id=\"userLat\" value=\"{start_lat}\"', html)
    html = re.sub(r'id=\"userLon\" value=\"[^\"]*\"', f'id=\"userLon\" value=\"{start_lon}\"', html)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
        
    print("Successfully built KNN graph with national dataset!")

if __name__ == '__main__':
    main()
