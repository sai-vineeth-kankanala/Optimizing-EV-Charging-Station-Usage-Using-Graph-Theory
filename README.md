<div align="center">

# ⚡ EVRoute Optimizer

### Intelligent Electric Vehicle Charging Navigation Powered by Graph Theory

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://github.com/sai-vineeth-kankanala/Optimizing-EV-Charging-Station-Usage-Using-Graph-Theory)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)](https://github.com/sai-vineeth-kankanala/Optimizing-EV-Charging-Station-Usage-Using-Graph-Theory)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff)](https://github.com/sai-vineeth-kankanala/Optimizing-EV-Charging-Station-Usage-Using-Graph-Theory)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff)](https://github.com/sai-vineeth-kankanala/Optimizing-EV-Charging-Station-Usage-Using-Graph-Theory)

> 🚗 *Drive smarter. Charge faster. Arrive better.*

</div>

---

## 📖 About the Project

**EVRoute Optimizer** is an interactive, graph-theory-based routing engine designed to help electric vehicle drivers find the most efficient charging stations along their journey. By modeling real-world EV charging networks as weighted graphs, the application computes optimal paths using classical algorithms — **Dijkstra's** and **A\* Search** — while accounting for real-time congestion levels, vehicle range constraints, and charging station ratings.

Built with vanilla JavaScript and Leaflet.js, it runs entirely in the browser with no backend dependencies — a clean, fast, and fully self-contained experience.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🗺️ **Interactive Map** | Dark-themed Leaflet map with live EV station markers across New York |
| 🔋 **Range-Aware Routing** | Adjustable vehicle range (50–1000 km) to filter reachable stations |
| 🧠 **Dual Algorithm Support** | Toggle between Dijkstra (reliable) and A\* Search (heuristic-optimized) |
| 🚦 **Congestion Simulation** | Randomized traffic/congestion scores that dynamically impact edge weights |
| 🌐 **Graph Topology View** | Abstract network visualization of all station interconnections |
| 📍 **Live GPS Input** | Set your current location or drag the map marker to your position |
| 🔗 **Google Maps Integration** | Export your optimal route directly to Google Maps for turn-by-turn navigation |
| 🎨 **Modern UI** | Sleek glassmorphism sidebar, smooth animations, and responsive design |

---

## 🛠️ How to Run

Getting started is as simple as opening a file:

1. 📂 Clone or download this repository
2. 🌐 Open `index.html` in any modern web browser
3. 📍 Enter your current location (latitude & longitude)
4. ⚙️ Adjust your **vehicle range** using the slider
5. 🎯 Select your preferred algorithm: **Dijkstra** or **A\* Search**
6. ⚡ Click **"Find Optimal Route"** and watch the magic happen!

---

## 🔬 Technical Highlights

### Graph Construction
- Each **EV charging station** is a node with attributes: `power`, `connectors`, `rating`, `congestion`, and `isBlocked`
- **K-Nearest Neighbors (K=3)** ensures every node connects to its 3 closest neighbors
- **National Highway Guarantee**: Sequential linking ensures a single connected component
- **Edge weights** = `distance + (congestion × 15)` — penalizing congested routes

### Pathfinding Algorithms
- **Dijkstra's Algorithm** — Guarantees the shortest weighted path from source to destination
- **A\* Search** — Uses Haversine distance as a heuristic for faster, goal-directed exploration

### Map & Visualization
- **Leaflet.js** for the interactive dark-mode map with custom markers
- **Vis.js** for the abstract graph topology view
- **Real-time route animation** visualizing the algorithm's exploration process

---

## 🖼️ Screenshots

<div align="center">

### 🗺️ Map Routing View
*(Interactive dark-themed map with route visualization)*

### 🌐 Graph Topology View
*(Abstract network of EV charging stations and their interconnections)*

</div>

---

## 📊 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Mapping** | Leaflet.js, OpenStreetMap |
| **Graph Visualization** | Vis.js |
| **Data Processing** | Python (for dataset generation) |
| **Routing Algorithms** | Dijkstra, A\* Search |
| **Distance Calculation** | Haversine Formula |

---

## 🚀 Usage Tips

- 🟢 **Green markers** = Low congestion (Fast charge expected)
- 🟡 **Orange markers** = Moderate congestion
- 🔴 **Red markers** = High congestion (Expect delays)
- ⚫ **Gray markers** = Station currently blocked/offline
- 🧭 Drag the **blue pulsing marker** to set your starting location
- 🔀 Use **"Randomize Congestion"** to simulate live network conditions
- 🗺️ Click **"Open in Maps"** after route calculation for Google Maps directions

---

## 📁 Project Structure

```
Optimizing-EV-Charging-Station-Usage-Using-Graph-Theory/
├── index.html      # Main HTML entry point
├── index.css       # Modern glassmorphism styling
├── index.js        # Graph algorithms, map logic & UI handlers
├── ev_data.csv     # Raw EV charging station dataset
├── bundle.py       # Bundles all files into a standalone HTML
├── fix_all.py      # Generates KNN graph & processes station data
├── graph_topology.png   # Topology visualization screenshot
└── map_routing.png      # Map routing screenshot
```

---

## 💡 Future Enhancements

- [ ] Multi-stop route planning with multiple charging waypoints
- [ ] Real-time API integration for live station availability
- [ ] Battery level & charging time estimation
- [ ] User authentication & saved favorite routes
- [ ] WebSocket-based live congestion updates
- [ ] Support for additional routing algorithms (Bellman-Ford, Floyd-Warshall)

---

<div align="center">

### ⚡ Built with passion for the future of electric mobility

👨‍💻 **Developer**: [Sai Vineeth Kankanala](https://github.com/sai-vineeth-kankanala)

---

⭐ *If this project helped you, consider giving it a star!*

</div>
