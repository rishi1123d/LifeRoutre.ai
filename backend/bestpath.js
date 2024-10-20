const axios = require('axios');

async function findBestPaths(apiKey, origin, destination) {
    const endpoint = 'https://maps.googleapis.com/maps/api/directions/json';
    
    const departure_time = new Date();
    departure_time.setHours(3, 0, 0, 0);

    const params = {
        origin: origin,
        destination: destination,
        trafficModel: "OPTIMISTIC", // Get the best route based on best traffic condition
        departureTime: departure_time.toISOString(), // Get the best route based on 12am time (so no traffic time)
        alternatives: true, // Get multiple routes
        routeModifiers: {
            avoidTolls: false,
            avoidHighways: false,
            avoidFerries: false,
            avoidIndoor: false
        },

        key: apiKey
    };
    
    try {
        const response = await axios.get(endpoint, { params });
        if (response.data.status === 'OK') {
            const routes = response.data.routes;
            return routes;
        } else {
            console.error(`Error: ${response.data.status}`);
            return null;
        }
    } catch (error) {
        console.error(`HTTP Error: ${error.message}`);
        return null;
    }
}

async function countTurns(route) {
    if (route) {
        let turns = 0;
        for (let i = 0; i < route.legs.length; i++) {
            for (let j = 0; j < route.legs[i].steps.length; j++) {
                if (route.legs[i].steps[j].maneuver && route.legs[i].steps[j].maneuver.includes('turn')) {
                    turns++;
                }
            }
        }
        return turns;
    } else {
        return null;
    }
}

async function getLeastTurnsPath(routes) {
    if (routes) {
        let leastTurns = routes[0];
        let minCount = countTurns(routes[0]);
        for (let i = 1; i < routes.length; i++) {
            let t = countTurns(routes[i]);
            if (t < minCount) {
                leastTurns = routes[i];
                minCount = t;
            }
        }
        return leastTurns;
    } else {
        return null;
    }
}

async function getBestPath(apiKey, origin, destination) {
    return findBestPaths(apiKey, origin, destination)
        .then(routes => {
            if (routes) {
                return getLeastTurnsPath(routes);
            } else {
                return null;
            }
        });
}

module.exports = {
    getBestPath
};