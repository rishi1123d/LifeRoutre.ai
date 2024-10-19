const axios = require('axios');

async function findBestPaths(apiKey, origin, destination) {
    const endpoint = 'https://maps.googleapis.com/maps/api/directions/json';
    
    const departure_time = new Date();
    departure_time.setHours(0, 0, 0, 0);

    const params = {
        origin: origin,
        destination: destination,
        trafficModel: "OPTIMISTIC", // Get the best route based on best traffic condition
        departure_time: departure_time, // Get the best route based on 12am time (so no traffic time)
        alternatives: true, // Get multiple routes
        key: apiKey
    };

    try {
        const response = await axios.get(endpoint, { params });
        if (response.data.status === 'OK') {
            const route = response.data.routes[0];
            return route;
        } else {
            console.error(`Error: ${response.data.status}`);
            return null;
        }
    } catch (error) {
        console.error(`HTTP Error: ${error.message}`);
        return null;
    }
}

module.exports = {
    findBestPath
};