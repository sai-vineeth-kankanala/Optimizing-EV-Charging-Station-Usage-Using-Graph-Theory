// --- Configuration ---
const DALLAS_LAT = 40.6930459;
const DALLAS_LON = -74.00016529999999;

const stations = [
    {"name": "Tesla Destination Charger", "lat": 40.6930459, "lon": -74.00016529999999, "connectors": 2, "power": 8, "rating": 4.0, "id": 0, "congestion": 0.154, "isBlocked": false},
    {"name": "EV Connect Charging Station", "lat": 40.713831899999995, "lon": -74.0000589, "connectors": 2, "power": 0, "rating": 4.0, "id": 1, "congestion": 0.759, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.7046296, "lon": -74.01080019999999, "connectors": 2, "power": 8, "rating": 4.0, "id": 2, "congestion": 0.439, "isBlocked": false},
    {"name": "EVoke Charging Station", "lat": 40.705242, "lon": -74.016123, "connectors": 2, "power": 8, "rating": 4.0, "id": 3, "congestion": 0.824, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.727796999999995, "lon": -73.990746, "connectors": 2, "power": 10, "rating": 5.0, "id": 4, "congestion": 0.548, "isBlocked": false},
    {"name": "FLO Charging Station", "lat": 40.713898, "lon": -74.00434, "connectors": 2, "power": 6, "rating": 4.0, "id": 5, "congestion": 0.292, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.730723, "lon": -73.990854, "connectors": 2, "power": 8, "rating": 4.0, "id": 6, "congestion": 0.614, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 40.701812499999996, "lon": -73.9869231, "connectors": 2, "power": 7, "rating": 4.0, "id": 7, "congestion": 0.162, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.7166036, "lon": -74.0122703, "connectors": 2, "power": 8, "rating": 1.0, "id": 8, "congestion": 0.222, "isBlocked": false},
    {"name": "OpConnect Charging Station", "lat": 40.7287195, "lon": -74.0091372, "connectors": 2, "power": 0, "rating": 4.0, "id": 9, "congestion": 0.586, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.706102699999995, "lon": -74.007398, "connectors": 2, "power": 19, "rating": 4.0, "id": 10, "congestion": 0.217, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.6986444, "lon": -73.9921724, "connectors": 2, "power": 10, "rating": 5.0, "id": 11, "congestion": 0.522, "isBlocked": false},
    {"name": "Tesla Supercharger", "lat": 40.717622, "lon": -73.99677799999999, "connectors": 2, "power": 72, "rating": 4.0, "id": 12, "congestion": 0.174, "isBlocked": false},
    {"name": "FLO Charging Station", "lat": 40.716079, "lon": -74.0021639, "connectors": 2, "power": 6, "rating": 1.0, "id": 13, "congestion": 0.655, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.7212337, "lon": -74.0034828, "connectors": 2, "power": 0, "rating": 3.0, "id": 14, "congestion": 0.413, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.710636, "lon": -74.00619499999999, "connectors": 2, "power": 16, "rating": 4.0, "id": 15, "congestion": 0.304, "isBlocked": false},
    {"name": "Blink Charging Station", "lat": 40.7177236, "lon": -74.015047, "connectors": 2, "power": 0, "rating": 4.0, "id": 16, "congestion": 0.541, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 40.716305299999995, "lon": -74.016194, "connectors": 2, "power": 0, "rating": 3.0, "id": 17, "congestion": 0.415, "isBlocked": false},
    {"name": "Electric Vehicle Charging Station", "lat": 40.718384199999996, "lon": -73.99928969999999, "connectors": 2, "power": 0, "rating": 4.0, "id": 18, "congestion": 0.565, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.7016701, "lon": -73.9958565, "connectors": 2, "power": 8, "rating": 5.0, "id": 19, "congestion": 0.725, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.717138399999996, "lon": -73.9918513, "connectors": 2, "power": 10, "rating": 4.0, "id": 20, "congestion": 0.689, "isBlocked": false},
    {"name": "Blink Charging Station", "lat": 40.71695, "lon": -74.01494799999999, "connectors": 2, "power": 15, "rating": 5.0, "id": 21, "congestion": 0.218, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 40.730485, "lon": -74.000728, "connectors": 2, "power": 0, "rating": 4.0, "id": 22, "congestion": 0.636, "isBlocked": false},
    {"name": "Evoke Charging Station", "lat": 40.724323999999996, "lon": -73.99420099999999, "connectors": 2, "power": 8, "rating": 4.0, "id": 23, "congestion": 0.143, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.7281968, "lon": -73.9925485, "connectors": 2, "power": 8, "rating": 5.0, "id": 24, "congestion": 0.826, "isBlocked": false},
    {"name": "Noodoe EV Charging Station", "lat": 40.709687699999996, "lon": -74.01096799999999, "connectors": 2, "power": 0, "rating": 4.0, "id": 25, "congestion": 0.246, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 40.716133, "lon": -74.01556, "connectors": 2, "power": 7, "rating": 4.0, "id": 26, "congestion": 0.635, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.716268, "lon": -74.009491, "connectors": 2, "power": 8, "rating": 4.0, "id": 27, "congestion": 0.601, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 40.7077917, "lon": -74.0170916, "connectors": 2, "power": 16, "rating": 4.0, "id": 28, "congestion": 0.603, "isBlocked": false},
    {"name": "Tesla Supercharger", "lat": 40.7143051, "lon": -74.01639569999999, "connectors": 2, "power": 72, "rating": 2.0, "id": 29, "congestion": 0.745, "isBlocked": false},
    {"name": "Thunder Plus Charging Station", "lat": 28.629863, "lon": 77.251184, "connectors": 2, "power": 3, "rating": 4.0, "id": 30, "congestion": 0.403, "isBlocked": false},
    {"name": "ChargeMOD Charging Station", "lat": 8.5605823, "lon": 76.9126476, "connectors": 2, "power": 0, "rating": 4.5, "id": 31, "congestion": 0.291, "isBlocked": false},
    {"name": "Jio-bp pulse", "lat": 26.904574699999998, "lon": 80.0136043, "connectors": 2, "power": 0, "rating": 2.0, "id": 32, "congestion": 0.387, "isBlocked": false},
    {"name": "GLIDA Charging Station", "lat": 17.373285499999998, "lon": 78.50254389999999, "connectors": 2, "power": 0, "rating": 4.0, "id": 33, "congestion": 0.408, "isBlocked": false},
    {"name": "Blink Charging Station", "lat": 34.0545721, "lon": -118.24835639999999, "connectors": 2, "power": 7, "rating": 4.0, "id": 34, "congestion": 0.516, "isBlocked": false},
    {"name": "Bijlify Charging Station", "lat": 18.5240989, "lon": 73.84475789999999, "connectors": 2, "power": 0, "rating": 4.0, "id": 35, "congestion": 0.158, "isBlocked": false},
    {"name": "GLIDA Charging Station", "lat": 19.0126551, "lon": 72.8280996, "connectors": 2, "power": 0, "rating": 4.0, "id": 36, "congestion": 0.801, "isBlocked": false},
    {"name": "FLO Charging Station", "lat": 34.052081, "lon": -118.234274, "connectors": 2, "power": 7, "rating": 5.0, "id": 37, "congestion": 0.458, "isBlocked": false},
    {"name": "Ola Charging Station", "lat": 23.2628937, "lon": 77.4182888, "connectors": 2, "power": 0, "rating": 1.8, "id": 38, "congestion": 0.279, "isBlocked": false},
    {"name": "SMC Charging Station", "lat": 21.184165699999998, "lon": 72.83533489999999, "connectors": 2, "power": 60, "rating": 4.0, "id": 39, "congestion": 0.385, "isBlocked": false},
    {"name": "Blink Charging Station", "lat": 34.0545721, "lon": -118.24835639999999, "connectors": 2, "power": 7, "rating": 4.0, "id": 40, "congestion": 0.699, "isBlocked": false},
    {"name": "ChargeZone Charging Station", "lat": 17.4244661, "lon": 78.48716189999999, "connectors": 2, "power": 0, "rating": 3.7, "id": 41, "congestion": 0.154, "isBlocked": false},
    {"name": "Ather Grid Charging Station", "lat": 25.603099999999998, "lon": 85.2088, "connectors": 2, "power": 1, "rating": 5.0, "id": 42, "congestion": 0.586, "isBlocked": false},
    {"name": "Tata Power Charging Station", "lat": 26.862256, "lon": 81.010404, "connectors": 2, "power": 60, "rating": 5.0, "id": 43, "congestion": 0.195, "isBlocked": false},
    {"name": "BESCOM Charging Station", "lat": 12.9759598, "lon": 77.58839259999999, "connectors": 2, "power": 43, "rating": 3.0, "id": 44, "congestion": 0.803, "isBlocked": false},
    {"name": "Sunrise Solar & Electrical Charging Station", "lat": 26.9431917, "lon": 75.7588306, "connectors": 2, "power": 0, "rating": 4.0, "id": 45, "congestion": 0.514, "isBlocked": false},
    {"name": "ChargeGrid Charging Station", "lat": 23.5354597, "lon": 77.839075, "connectors": 2, "power": 7, "rating": 4.0, "id": 46, "congestion": 0.447, "isBlocked": false},
    {"name": "Electric Fuel Charging Station", "lat": 17.442975399999998, "lon": 78.4797935, "connectors": 2, "power": 0, "rating": 4.7, "id": 47, "congestion": 0.685, "isBlocked": false},
    {"name": "Ather Grid Charging Station", "lat": 21.137075, "lon": 79.09, "connectors": 2, "power": 1, "rating": 4.0, "id": 48, "congestion": 0.279, "isBlocked": false},
    {"name": "Adani Charging Station", "lat": 26.428608999999998, "lon": 80.33205, "connectors": 2, "power": 3, "rating": 2.5, "id": 49, "congestion": 0.518, "isBlocked": false},
    {"name": "ElectricPe Charging Station", "lat": 12.9545965, "lon": 77.5772661, "connectors": 2, "power": 3, "rating": 4.0, "id": 50, "congestion": 0.397, "isBlocked": false},
    {"name": "LADWP Charging Station", "lat": 34.0633864, "lon": -118.2411872, "connectors": 2, "power": 7, "rating": 4.0, "id": 51, "congestion": 0.218, "isBlocked": false},
    {"name": "Electric Vehicle Charging Station", "lat": 26.8729256, "lon": 80.99085219999999, "connectors": 2, "power": 0, "rating": 4.0, "id": 52, "congestion": 0.167, "isBlocked": false},
    {"name": "Ather Grid Charging Station", "lat": 21.1206, "lon": 79.01062999999999, "connectors": 2, "power": 1, "rating": 4.0, "id": 53, "congestion": 0.884, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 34.051539, "lon": -118.25850799999999, "connectors": 2, "power": 16, "rating": 4.0, "id": 54, "congestion": 0.638, "isBlocked": false},
    {"name": "Ather Grid Charging Station", "lat": 22.743272599999997, "lon": 75.88410309999999, "connectors": 2, "power": 1, "rating": 2.3, "id": 55, "congestion": 0.667, "isBlocked": false},
    {"name": "Bolt.Earth Charging Station", "lat": 13.053764399999999, "lon": 80.274992, "connectors": 2, "power": 0, "rating": 4.0, "id": 56, "congestion": 0.474, "isBlocked": false},
    {"name": "Battery Smart Charging Station", "lat": 26.906009299999997, "lon": 75.8414315, "connectors": 2, "power": 0, "rating": 1.0, "id": 57, "congestion": 0.624, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 38.841718, "lon": -106.120212, "connectors": 2, "power": 132, "rating": 2.9, "id": 58, "congestion": 0.329, "isBlocked": false},
    {"name": "Kazam Charging Station", "lat": 12.947810299999999, "lon": 77.5617068, "connectors": 2, "power": 0, "rating": 2.3, "id": 59, "congestion": 0.716, "isBlocked": false},
    {"name": "Electric Vehicle Charging Station", "lat": 12.9523426, "lon": 77.5777609, "connectors": 2, "power": 0, "rating": 4.0, "id": 60, "congestion": 0.747, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 39.356004999999996, "lon": -107.03770499999999, "connectors": 2, "power": 7, "rating": 4.0, "id": 61, "congestion": 0.118, "isBlocked": false},
    {"name": "Pilot Electric Vehicle Charging Station", "lat": 27.91737, "lon": -81.718919, "connectors": 2, "power": 0, "rating": 5.0, "id": 62, "congestion": 0.677, "isBlocked": false},
    {"name": "EESL Charging Station", "lat": 21.103145299999998, "lon": 79.06820739999999, "connectors": 2, "power": 0, "rating": 5.0, "id": 63, "congestion": 0.401, "isBlocked": false},
    {"name": "Tata Power Charging Station", "lat": 21.0323769, "lon": 79.0518982, "connectors": 2, "power": 60, "rating": 5.0, "id": 64, "congestion": 0.24, "isBlocked": false},
    {"name": "Electric Vehicle Charging Station", "lat": 34.0510801, "lon": -118.25435259999999, "connectors": 2, "power": 7, "rating": 4.0, "id": 65, "congestion": 0.885, "isBlocked": false},
    {"name": "Jio-bp pulse Charging Station", "lat": 23.040001, "lon": 72.530001, "connectors": 2, "power": 0, "rating": 3.3, "id": 66, "congestion": 0.705, "isBlocked": false},
    {"name": "Bolt.Earth Charging Station", "lat": 17.7253295, "lon": 83.30082469999999, "connectors": 2, "power": 0, "rating": 4.0, "id": 67, "congestion": 0.257, "isBlocked": false},
    {"name": "Ather Charging Station", "lat": 17.696067799999998, "lon": 83.16428259999999, "connectors": 2, "power": 1, "rating": 5.0, "id": 68, "congestion": 0.499, "isBlocked": false},
    {"name": "Ather Grid Charging Station", "lat": 12.973695099999999, "lon": 77.58710239999999, "connectors": 2, "power": 0, "rating": 4.0, "id": 69, "congestion": 0.285, "isBlocked": false},
    {"name": "Ather Grid Charging Station", "lat": 13.122062, "lon": 80.23758, "connectors": 2, "power": 1, "rating": 4.0, "id": 70, "congestion": 0.285, "isBlocked": false},
    {"name": "BMW Destination Charging Station", "lat": 39.18664, "lon": -106.821218, "connectors": 2, "power": 10, "rating": 4.0, "id": 71, "congestion": 0.412, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 39.190495, "lon": -106.815383, "connectors": 2, "power": 7, "rating": 4.0, "id": 72, "congestion": 0.149, "isBlocked": false},
    {"name": "Electric Vehicle Charging Station", "lat": 17.4025432, "lon": 78.4911023, "connectors": 2, "power": 0, "rating": 4.0, "id": 73, "congestion": 0.785, "isBlocked": false},
    {"name": "Ather Charging Station", "lat": 17.428593799999998, "lon": 78.4555555, "connectors": 2, "power": 1, "rating": 3.0, "id": 74, "congestion": 0.583, "isBlocked": false},
    {"name": "SMC Charging Station", "lat": 21.1875788, "lon": 72.8454671, "connectors": 2, "power": 72, "rating": 5.0, "id": 75, "congestion": 0.597, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 42.3501999, "lon": -71.0481142, "connectors": 2, "power": 0, "rating": 5.0, "id": 76, "congestion": 0.631, "isBlocked": false},
    {"name": "Electric Vehicle Charging Station", "lat": 22.7548586, "lon": 75.8719824, "connectors": 2, "power": 0, "rating": 4.0, "id": 77, "congestion": 0.845, "isBlocked": false},
    {"name": "SMC Charging Station", "lat": 21.1598759, "lon": 72.797405, "connectors": 2, "power": 72, "rating": 4.0, "id": 78, "congestion": 0.7, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 34.051268799999995, "lon": -118.2513403, "connectors": 2, "power": 7, "rating": 5.0, "id": 79, "congestion": 0.847, "isBlocked": false},
    {"name": "Thunder Plus Charging Station", "lat": 17.68901, "lon": 83.187646, "connectors": 2, "power": 3, "rating": 4.0, "id": 80, "congestion": 0.679, "isBlocked": false},
    {"name": "Ather Grid Charging Station", "lat": 22.672361, "lon": 75.87705, "connectors": 2, "power": 1, "rating": 3.0, "id": 81, "congestion": 0.579, "isBlocked": false},
    {"name": "Bolt.Earth", "lat": 13.036583499999999, "lon": 80.25621009999999, "connectors": 2, "power": 0, "rating": 4.0, "id": 82, "congestion": 0.688, "isBlocked": false},
    {"name": "BPCL Charging Station", "lat": 20.615955, "lon": 78.607805, "connectors": 2, "power": 30, "rating": 1.0, "id": 83, "congestion": 0.454, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 42.3480243, "lon": -71.07409659999999, "connectors": 2, "power": 7, "rating": 4.0, "id": 84, "congestion": 0.54, "isBlocked": false},
    {"name": "Tata Power Charging Station", "lat": 17.6860929, "lon": 83.20663309999999, "connectors": 2, "power": 0, "rating": 5.0, "id": 85, "congestion": 0.201, "isBlocked": false},
    {"name": "Ather Charging Station", "lat": 8.5183897, "lon": 76.95123989999999, "connectors": 2, "power": 1, "rating": 5.0, "id": 86, "congestion": 0.465, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 39.244895, "lon": -106.301496, "connectors": 2, "power": 7, "rating": 4.0, "id": 87, "congestion": 0.865, "isBlocked": false},
    {"name": "Ather Grid Charging Station", "lat": 21.225082, "lon": 72.84147, "connectors": 2, "power": 55, "rating": 3.0, "id": 88, "congestion": 0.822, "isBlocked": false},
    {"name": "Porsche Destination Charging", "lat": 28.5845567, "lon": 77.1914038, "connectors": 2, "power": 11, "rating": 5.0, "id": 89, "congestion": 0.194, "isBlocked": false},
    {"name": "Ather Grid Charging Station", "lat": 11.036524, "lon": 76.92739, "connectors": 2, "power": 1, "rating": 4.0, "id": 90, "congestion": 0.549, "isBlocked": false},
    {"name": "GOEC Charging Station", "lat": 8.5152185, "lon": 76.89658589999999, "connectors": 2, "power": 0, "rating": 4.6, "id": 91, "congestion": 0.491, "isBlocked": false},
    {"name": "Tesla Destination Charger", "lat": 42.352134899999996, "lon": -71.06867299999999, "connectors": 2, "power": 8, "rating": 4.0, "id": 92, "congestion": 0.747, "isBlocked": false},
    {"name": "KSEB Charging Station", "lat": 8.498142699999999, "lon": 76.94993699999999, "connectors": 2, "power": 0, "rating": 3.1, "id": 93, "congestion": 0.539, "isBlocked": false},
    {"name": "Hop Motors ( Green India Motors )", "lat": 25.5889793, "lon": 85.2368043, "connectors": 2, "power": 0, "rating": 5.0, "id": 94, "congestion": 0.279, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 42.353375199999995, "lon": -71.04745989999999, "connectors": 2, "power": 7, "rating": 1.0, "id": 95, "congestion": 0.445, "isBlocked": false},
    {"name": "Electric Vehicle Charging Station", "lat": 23.0060351, "lon": 72.5972492, "connectors": 2, "power": 0, "rating": 1.2, "id": 96, "congestion": 0.659, "isBlocked": false},
    {"name": "Tata Power Charging Station", "lat": 26.900039, "lon": 75.833952, "connectors": 2, "power": 37, "rating": 4.0, "id": 97, "congestion": 0.503, "isBlocked": false},
    {"name": "EV Connect Charging Station", "lat": 27.601599099999998, "lon": -81.51389329999999, "connectors": 2, "power": 0, "rating": 4.1, "id": 98, "congestion": 0.294, "isBlocked": false},
    {"name": "ChargePoint Charging Station", "lat": 34.0518222, "lon": -118.25706489999999, "connectors": 2, "power": 7, "rating": 4.0, "id": 99, "congestion": 0.24, "isBlocked": false},
];

// Calculate distance using Haversine formula (km)
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

// Build Graph (Adjacency List)
// Connect stations that are within 50km of each other
const graph = new Map();
stations.forEach(s => graph.set(s.id, []));

// Use K-Nearest Neighbors (K=3) to guarantee connection regardless of distance!
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
    
    // Connect to the 3 closest stations to build local road meshes
    for (let k = 0; k < 3; k++) {
        if (closest[k]) {
            let exists = graph.get(stations[i].id).some(e => e.to === closest[k].id);
            if (!exists) {
                graph.get(stations[i].id).push({ to: closest[k].id, distance: closest[k].distance });
                graph.get(closest[k].id).push({ to: stations[i].id, distance: closest[k].distance });
            }
        }
    }
}

// GUARANTEE 1 CONNECTED COMPONENT (National Highway System)
// We link every station i to i+1. This ensures mathematically that there are zero disconnected islands!
for (let i = 0; i < stations.length - 1; i++) {
    let exists = graph.get(stations[i].id).some(e => e.to === stations[i+1].id);
    if (!exists) {
        const dist = haversine(stations[i].lat, stations[i].lon, stations[i+1].lat, stations[i+1].lon);
        graph.get(stations[i].id).push({ to: stations[i+1].id, distance: dist });
        graph.get(stations[i+1].id).push({ to: stations[i].id, distance: dist });
    }
}

// Ensure the graph is at least softly connected
// For any isolated stations, connect to nearest
stations.forEach(s => {
    if (graph.get(s.id).length === 0) {
        let nearest = null;
        let minDist = Infinity;
        stations.forEach(other => {
            if (s.id !== other.id) {
                const dist = haversine(s.lat, s.lon, other.lat, other.lon);
                if (dist < minDist) {
                    minDist = dist;
                    nearest = other;
                }
            }
        });
        if (nearest) {
            graph.get(s.id).push({ to: nearest.id, distance: minDist });
            graph.get(nearest.id).push({ to: s.id, distance: minDist });
        }
    }
});

function getEdgeWeight(fromId, toId) {
    const maxRange = parseFloat(document.getElementById('rangeInput').value);
    const toStation = stations[toId];
    if (toStation.isBlocked || stations[fromId].isBlocked) return Infinity;
    // Cost = distance + 15km penalty per degree of congestion
    let edges = graph.get(fromId);
    let edge = edges.find(e => e.to === toId);
    if (!edge) return Infinity;
    
    // If the edge distance is > maxRange, the EV cannot make this hop
    // Allow the start node (stations.length - 1) to make the hop if manually selected
    if (edge.distance > maxRange && fromId !== stations.length - 1) return Infinity;
    
    return edge.distance + (toStation.congestion * 15);
}

// Helper: Priority Queue
class PriorityQueue {
    constructor() {
        this.elements = [];
    }
    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }
    dequeue() {
        return this.elements.shift().element;
    }
    isEmpty() {
        return this.elements.length === 0;
    }
}

// Pathfinding ALGORITHMS
function findPathDijkstra(startId, endId) {
    const frontier = new PriorityQueue();
    frontier.enqueue(startId, 0);
    
    const cameFrom = new Map();
    const costSoFar = new Map();
    const history = [];
    
    cameFrom.set(startId, null);
    costSoFar.set(startId, 0);
    history.push(startId);
    
    while (!frontier.isEmpty()) {
        const current = frontier.dequeue();
        
        if (current === endId) break;
        
        const neighbors = graph.get(current) || [];
        for (const neighbor of neighbors) {
            const next = neighbor.to;
            const edgeCost = getEdgeWeight(current, next);
            if (edgeCost === Infinity) continue;
            
            const newCost = costSoFar.get(current) + edgeCost;
            
            if (!costSoFar.has(next) || newCost < costSoFar.get(next)) {
                costSoFar.set(next, newCost);
                frontier.enqueue(next, newCost);
                cameFrom.set(next, current);
                history.push(next);
            }
        }
    }
    
    // Reconstruct path
    let current = endId;
    const path = [];
    while (current !== null && cameFrom.has(current)) {
        path.push(current);
        current = cameFrom.get(current);
    }
    path.reverse();
    return { path, cost: costSoFar.get(endId), history };
}

function findPathAStar(startId, endId) {
    const frontier = new PriorityQueue();
    frontier.enqueue(startId, 0);
    
    const cameFrom = new Map();
    const costSoFar = new Map();
    const history = [];
    
    cameFrom.set(startId, null);
    costSoFar.set(startId, 0);
    history.push(startId);
    
    const endStation = stations[endId];

    while (!frontier.isEmpty()) {
        const current = frontier.dequeue();
        
        if (current === endId) break;
        
        const currentStation = stations[current];
        const neighbors = graph.get(current) || [];
        for (const neighbor of neighbors) {
            const next = neighbor.to;
            const edgeCost = getEdgeWeight(current, next);
            if (edgeCost === Infinity) continue;
            
            const newCost = costSoFar.get(current) + edgeCost;
            
            if (!costSoFar.has(next) || newCost < costSoFar.get(next)) {
                costSoFar.set(next, newCost);
                const nextStation = stations[next];
                const priority = newCost + haversine(nextStation.lat, nextStation.lon, endStation.lat, endStation.lon);
                frontier.enqueue(next, priority);
                cameFrom.set(next, current);
                history.push(next);
            }
        }
    }
    
    // Reconstruct path
    let current = endId;
    const path = [];
    while (current !== null && cameFrom.has(current)) {
        path.push(current);
        current = cameFrom.get(current);
    }
    path.reverse();
    return { path, cost: costSoFar.get(endId), history };
}


// --- MAP LOGIC ---
let map;
let userMarker;
let stationMarkers = [];
let networkLayers = L.layerGroup();
let routeLayer = L.layerGroup();
window.reachableLayer = null;

window.updateReachableConnections = function() {
    if (!map || !userMarker) return;
    if (!window.reachableLayer) {
        window.reachableLayer = L.layerGroup().addTo(map);
    }
    window.reachableLayer.clearLayers();
    
    const maxRange = parseFloat(document.getElementById('rangeInput').value);
    const userPos = userMarker.getLatLng();
    
    stations.forEach(s => {
        if (s.isBlocked || s.name === "Your Start Location") return;
        
        const d = haversine(userPos.lat, userPos.lng, s.lat, s.lon);
        const marker = stationMarkers[s.id];
        
        if (d <= maxRange) {
            const line = L.polyline([userPos, [s.lat, s.lon]], {
                className: 'reachable-connection'
            }).addTo(window.reachableLayer);
            
            if (marker && typeof marker.setOpacity === 'function') {
                marker.setOpacity(1);
                // Bind a floating tooltip to show exactly how far this station is!
                marker.bindTooltip(`&#128663; ${d.toFixed(1)} km`, {
                    permanent: true,
                    direction: 'right',
                    className: 'distance-tooltip',
                    offset: [10, 0]
                });
            }
        } else {
            if (marker && typeof marker.setOpacity === 'function') {
                marker.setOpacity(0.2);
                marker.unbindTooltip();
            }
        }
    });
};

// Initialize the Map
function initMap() {
    map = L.map('map', {
        zoomControl: false // Move to bottom right
    }).setView([DALLAS_LAT, DALLAS_LON], 8);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Dark Map Tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
    
    networkLayers.addTo(map);
    routeLayer.addTo(map);

    // Initial User Marker (Fallback to Dallas)
    createUserMarker(DALLAS_LAT, DALLAS_LON);

    // Attempt to get Real User Location (Commented out to keep map in NY for presentation)
    /*
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;
            createUserMarker(userLat, userLon);
            document.getElementById('userLat').value = userLat.toFixed(4);
            document.getElementById('userLon').value = userLon.toFixed(4);
            map.setView([userLat, userLon], 10);
        }, (err) => {
            console.warn("Geolocation denied or failed. Fallback to Dallas center used.");
        });
    }
    */

    // Draw Graph
    drawGraph();
    window.updateReachableConnections();
}

function createUserMarker(lat, lon) {
    if (userMarker) {
        map.removeLayer(userMarker);
    }
    const icon = L.divIcon({
        className: 'user-marker',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
    });
    userMarker = L.marker([lat, lon], {
        icon: icon, 
        draggable: true,
        zIndexOffset: 1000
    }).addTo(map);

    userMarker.on('dragend', function(e) {
        const pos = userMarker.getLatLng();
        document.getElementById('userLat').value = pos.lat.toFixed(4);
        document.getElementById('userLon').value = pos.lng.toFixed(4);
        window.updateReachableConnections();
    });
}

function getCongestionClass(score) {
    if (score < 0.33) return 'marker-low';
    if (score < 0.66) return 'marker-mid';
    return 'marker-high';
}

function getCongestionText(score) {
    if (score < 0.33) return 'Low';
    if (score < 0.66) return 'Moderate';
    return 'High';
}

function drawGraph() {
    networkLayers.clearLayers();
    stationMarkers = [];

    // Draw Edges (Road Network) - Hidden per user request to avoid messy map
    /*
    const drawnEdges = new Set();
    for (const [fromId, neighbors] of graph.entries()) {
        const s1 = stations[fromId];
        for (const n of neighbors) {
            const edgeKey = fromId < n.to ? `${fromId}-${n.to}` : `${n.to}-${fromId}`;
            if (!drawnEdges.has(edgeKey)) {
                drawnEdges.add(edgeKey);
                const s2 = stations[n.to];
                L.polyline([[s1.lat, s1.lon], [s2.lat, s2.lon]], {
                    color: 'rgba(255,255,255,0.05)',
                    weight: 1.5,
                    dashArray: '4, 4'
                }).addTo(networkLayers);
            }
        }
    }
    */

    // Draw Stations (Nodes)
    stations.forEach(s => {
        const cls = s.isBlocked ? 'marker-blocked' : getCongestionClass(s.congestion);
        const icon = L.divIcon({
            className: `custom-station-marker ${cls}`,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
            html: `<span>⚡</span>`
        });

        const m = L.marker([s.lat, s.lon], {icon}).addTo(networkLayers);
        
        const blockText = s.isBlocked ? 'Fix Station' : 'Simulate Outage';
        m.bindPopup(`
            <div class="popup-title">${s.name} ${s.isBlocked ? '(OFFLINE)' : ''}</div>
            <div class="popup-stat">🔋 ${s.power} kW (${s.connectors} ports)</div>
            <div class="popup-stat">⭐ ${s.rating} Ratings</div>
            <div class="popup-stat">🚥 ${s.isBlocked ? 'Offline' : getCongestionText(s.congestion)}</div>
            <button onclick="calculateRouteToStation(${s.id})" style="margin-top:10px; padding:5px; width:100%; border-radius:4px; border:none; cursor:pointer; background: var(--accent-primary); color:white; margin-bottom: 5px;">Calculate EV Route</button>
            <button onclick="toggleStationStatus(${s.id})" style="padding:5px; width:100%; border-radius:4px; border:none; cursor:pointer; background: ${s.isBlocked ? 'var(--success)' : 'var(--danger)'}; color:white;">${blockText}</button>
        `);
        stationMarkers.push(m);
    });
}

// Global hook for popup buttons
window.calculateRouteToStation = function(targetId) {
    if (map) map.closePopup();
    const bestTarget = stations[targetId];
    if (bestTarget) triggerRouting(bestTarget);
}

window.toggleStationStatus = function(id) {
    stations[id].isBlocked = !stations[id].isBlocked;
    routeLayer.clearLayers();
    document.getElementById('routeList').innerHTML = "";
    document.getElementById('btnOpenMaps').style.display = 'none';
    document.getElementById('routeStats').innerHTML = "Network topology changed. Recalculate route.";
    drawGraph();
    resetTopology();
}

// --- UI LOGIC ---

document.getElementById('btnSetLocation').addEventListener('click', () => {
    // Just center map on marker
    if (userMarker) {
        map.setView(userMarker.getLatLng());
    }
});

document.getElementById('rangeInput').addEventListener('input', (e) => {
    document.getElementById('rangeVal').innerText = e.target.value;
    window.updateReachableConnections();
});

document.getElementById('btnRandomize').addEventListener('click', () => {
    stations.forEach(s => {
        s.congestion = Math.random();
    });
    drawGraph();
    resetTopology();
    // Clear routes
    routeLayer.clearLayers();
    document.getElementById('routeStats').innerHTML = "Congestion updated. Run route again.";
    document.getElementById('routeList').innerHTML = "";
});

document.getElementById('btnFindRoute').addEventListener('click', () => {
    const userPos = userMarker.getLatLng();
    const maxRange = parseFloat(document.getElementById('rangeInput').value);

    // 1. Find nearest station to user
    let startStation = null;
    let minStartDist = Infinity;
    stations.forEach(s => {
        const d = haversine(userPos.lat, userPos.lng, s.lat, s.lon);
        if (d < minStartDist) {
            minStartDist = d;
            startStation = s;
        }
    });

    if (minStartDist > maxRange) {
        document.getElementById('routeStats').innerHTML = `<span style="color:var(--danger)">No stations within reach! Nearest: ${minStartDist.toFixed(1)}km</span>`;
        return;
    }

    // 2. Find target station
    let bestTarget = null;
    let maxScore = -Infinity;

    stations.forEach(s => {
        const straightDist = haversine(userPos.lat, userPos.lng, s.lat, s.lon);
        
        if (straightDist <= maxRange && !s.isBlocked) {
            // Heavily penalize distance so we prioritize finding the absolute nearest best station
            const score = s.power - (s.congestion * 150) - (straightDist * 15);
            if (score > maxScore) {
                maxScore = score;
                bestTarget = s;
            }
        }
    });

    if (!bestTarget) bestTarget = startStation; // fallback
    triggerRouting(bestTarget);
});

function triggerRouting(bestTarget) {
    routeLayer.clearLayers();
    document.getElementById('routeList').innerHTML = "";
    document.getElementById('btnOpenMaps').style.display = 'none';

    const userPos = userMarker.getLatLng();
    const useAstar = document.getElementById('algoAstar').checked;

    const maxRange = parseFloat(document.getElementById('rangeInput').value);
    const userNodeId = stations.length;
    stations.push({
        id: userNodeId,
        name: "Your Start Location",
        lat: userPos.lat,
        lon: userPos.lng,
        power: Infinity,
        connectors: Infinity,
        rating: 5,
        congestion: 0,
        isBlocked: false
    });

    const userNeighbors = [];
    for (let i = 0; i < stations.length - 1; i++) {
        const d = haversine(userPos.lat, userPos.lng, stations[i].lat, stations[i].lon);
        if ((d <= maxRange || stations[i].id === bestTarget.id) && !stations[i].isBlocked) {
            userNeighbors.push({ to: i, distance: d });
        }
    }
    graph.set(userNodeId, userNeighbors);

    const t0 = performance.now();
    let res;
    if (useAstar) {
        res = findPathAStar(userNodeId, bestTarget.id);
    } else {
        res = findPathDijkstra(userNodeId, bestTarget.id);
    }
    const t1 = performance.now();

    // Map path before popping the user node so the array binds correct objects
    let rawPathStations = [];
    if (res && res.path && res.path.length >= 2) {
        rawPathStations = res.path.map(id => stations[id]);
    }
    
    // Clean up temporary user node and edges
    graph.delete(userNodeId);
    stations.pop();

    if (rawPathStations.length < 2) {
        document.getElementById('routeStats').innerHTML = "Could not find a valid path to network limits.";
        return;
    }

    // Now safely bound to mapped array
    const pathStations = rawPathStations;
    
    // Animation Logic
    const history = res.history || [];
    let hIndex = 0;
    const historyLayer = L.layerGroup().addTo(map);
    const color = useAstar ? '#10b981' : '#3b82f6';
    
    const btnFind = document.getElementById('btnFindRoute');
    btnFind.disabled = true;
    btnFind.innerText = 'Exploring Topology...';
    document.getElementById('routeStats').innerHTML = `<i>Visualizing ${useAstar ? 'A* Search' : 'Dijkstra'}...</i>`;
    resetTopology();

    function animateStep() {
        if (hIndex >= history.length) {
            btnFind.disabled = false;
            btnFind.innerText = 'Find Optimal Route';
            setTimeout(() => {
                map.removeLayer(historyLayer);
                finalizeRoute();
            }, 300);
            return;
        }

        const batchSz = Math.max(1, Math.floor(history.length / 30));
        for(let i=0; i<batchSz && hIndex < history.length; i++, hIndex++) {
            const hs = stations[history[hIndex]];
            if (hs) {
                L.circleMarker([hs.lat, hs.lon], {
                    radius: 12, color: color, fillColor: color, fillOpacity: 0.4, weight: 2
                }).addTo(historyLayer);
                syncTopologyNode(hs.id, color);
            }
        }
        requestAnimationFrame(animateStep);
    }
    
    animateStep();

    function finalizeRoute() {
        // Draw Route
        const latlngs = [[userPos.lat, userPos.lng]];
        pathStations.forEach(s => latlngs.push([s.lat, s.lon]));

        L.polyline(latlngs, {
            color: 'var(--accent-primary)',
            weight: 4,
            opacity: 0.8,
            lineJoin: 'round'
        }).addTo(routeLayer);

        syncTopologyPath(pathStations);

        // Zoom map to fit route
        map.fitBounds(L.polyline(latlngs).getBounds(), { padding: [50, 50] });

        // Build sidebar UI
        let actualDist = 0;
        for (let i = 0; i < pathStations.length - 1; i++) {
            actualDist += haversine(pathStations[i].lat, pathStations[i].lon, pathStations[i+1].lat, pathStations[i+1].lon);
        }

        document.getElementById('routeStats').innerHTML = `
            <div class="route-stats">
                <div class="stat-box">
                    <span class="val">${actualDist.toFixed(1)} <span style="font-size:0.6rem">km</span></span>
                    <span class="lbl">Distance</span>
                </div>
                <div class="stat-box">
                    <span class="val">${(t1 - t0).toFixed(2)} <span style="font-size:0.6rem">ms</span></span>
                    <span class="lbl">Compute</span>
                </div>
                <div class="stat-box">
                    <span class="val">${pathStations.length}</span>
                    <span class="lbl">Hops</span>
                </div>
                <div class="stat-box">
                    <span class="val">${res.cost.toFixed(0)}</span>
                    <span class="lbl">Graph Cost</span>
                </div>
            </div>
        `;

        const htmlPath = pathStations.map((s, idx) => {
            let badgeCls = 'badge-low';
            let badgeTxt = 'Fast';
            if (s.congestion > 0.66) { badgeCls = 'badge-high'; badgeTxt = 'Wait'; }
            else if (s.congestion > 0.33) { badgeCls = 'badge-mid'; badgeTxt = 'Mod'; }

            return `
            <div class="route-item" style="animation-delay: ${idx * 0.08}s">
                <div class="ri-header">
                    <span class="ri-name">${idx === 0 ? '🚦 Start: ' : idx === pathStations.length - 1 ? '🏁 End: ' : '🔌 Node: '}${s.name}</span>
                    <span class="ri-badge ${badgeCls}">${badgeTxt}</span>
                </div>
                <div class="ri-details">
                    <span>⚡ ${s.power} kW</span>
                    <span>⭐ ${s.rating}</span>
                </div>
            </div>
            `;
        }).join("");

        document.getElementById('routeList').innerHTML = htmlPath;
        
        // Construct and open Google Maps Directions
        const gmapsOrigin = `${userPos.lat.toFixed(6)},${userPos.lng.toFixed(6)}`;
        const destStation = pathStations[pathStations.length - 1];
        const gmapsDest = `${destStation.lat.toFixed(6)},${destStation.lon.toFixed(6)}`;
        
        const gmapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${gmapsOrigin}&destination=${gmapsDest}`;
        
        // Bind to UI Button
        const btnOpenMaps = document.getElementById('btnOpenMaps');
        btnOpenMaps.style.display = 'block';
        btnOpenMaps.onclick = () => window.open(gmapsUrl, '_blank');
    }
}

// Init on load
document.addEventListener('DOMContentLoaded', initMap);

// --- TOPOLOGY GRAPH LOGIC ---
let visNetwork = null;
let visNodes = null;
let visEdges = null;
let isTopologyView = false;

document.getElementById('btnToggleGraph').addEventListener('click', () => {
    isTopologyView = !isTopologyView;
    const container = document.getElementById('topology-container');
    if (isTopologyView) {
        container.style.display = 'block';
        requestAnimationFrame(() => {
            container.classList.add('active');
        });
        document.getElementById('btnToggleGraph').innerText = 'View Map';
        if (!visNetwork) initTopology();
        else {
             setTimeout(() => visNetwork.fit(), 100);
        }
    } else {
        container.classList.remove('active');
        setTimeout(() => {
            if (!isTopologyView) container.style.display = 'none';
        }, 400);
        document.getElementById('btnToggleGraph').innerText = 'View Graph Topology';
    }
});

function initTopology() {
    visNodes = new vis.DataSet();
    visEdges = new vis.DataSet();

    stations.forEach(s => {
        visNodes.add({
            id: s.id,
            label: s.name,
            shape: 'dot',
            size: s.isBlocked ? 10 : 15,
            color: s.isBlocked ? '#4b5563' : (s.congestion < 0.33 ? '#10b981' : (s.congestion < 0.66 ? '#f59e0b' : '#ef4444')),
            font: { color: '#ffffff' }
        });
    });

    const drawnEdges = new Set();
    for (const [fromId, neighbors] of graph.entries()) {
        for (const n of neighbors) {
            const edgeKey = fromId < n.to ? `${fromId}-${n.to}` : `${n.to}-${fromId}`;
            if (!drawnEdges.has(edgeKey)) {
                drawnEdges.add(edgeKey);
                visEdges.add({
                    id: edgeKey,
                    from: fromId,
                    to: n.to,
                    label: n.distance.toFixed(1) + 'km',
                    font: { size: 10, align: 'middle', color: '#64748b', strokeWidth: 0 },
                    color: { color: 'rgba(255,255,255,0.1)' },
                    width: 1
                });
            }
        }
    }

    const container = document.getElementById('topology-container');
    const data = { nodes: visNodes, edges: visEdges };
    const options = {
        physics: {
            stabilization: false,
            barnesHut: { gravitationalConstant: -2000, centralGravity: 0.1, springLength: 150, springConstant: 0.05 }
        },
        interaction: { hover: true, dragNodes: true }
    };
    visNetwork = new vis.Network(container, data, options);
}

function resetTopology() {
    if (!visNetwork) return;
    const updates = [];
    visNodes.forEach(n => {
        const s = stations[n.id];
        if (s) updates.push({ id: n.id, color: s.isBlocked ? '#4b5563' : (s.congestion < 0.33 ? '#10b981' : (s.congestion < 0.66 ? '#f59e0b' : '#ef4444')) });
    });
    visNodes.update(updates);
    const edgeUpdates = [];
    visEdges.forEach(e => {
        edgeUpdates.push({ id: e.id, color: { color: 'rgba(255,255,255,0.1)' }, width: 1 });
    });
    visEdges.update(edgeUpdates);
}

function syncTopologyNode(nodeId, color) {
    if (!visNetwork || nodeId == null || !visNodes.get(nodeId)) return;
    visNodes.update({ id: nodeId, color: color });
}

function syncTopologyPath(pathStations) {
    if (!visNetwork) return;
    for(let i=0; i<pathStations.length - 1; i++) {
        const n1 = pathStations[i].id;
        const n2 = pathStations[i+1].id;
        const edgeKey1 = `${n1}-${n2}`;
        const edgeKey2 = `${n2}-${n1}`;
        if (visEdges.get(edgeKey1)) visEdges.update({id: edgeKey1, color: {color: '#3b82f6'}, width: 3});
        if (visEdges.get(edgeKey2)) visEdges.update({id: edgeKey2, color: {color: '#3b82f6'}, width: 3});
    }
}
