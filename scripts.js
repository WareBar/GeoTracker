// initializes the map
let map = L.map('map').setView([13.9462549, 121.5899067], 13)



// Sets map data source and associates with map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '© OpenStreetMap'
}).addTo(map); 


// watches or monitor the position of the user
navigator.geolocation.getCurrentPosition(success, error);

let marker, circle, zoomed;



function success(position){
    const lat = position.coords.latitude;
    const ltd = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    console.log(`
        lat: ${lat}
        latitude: ${ltd}
        `)

    if (marker){
        map.removeLayer(marker);
        map.removeLayer(circle);

    }

    marker = L.marker([lat, ltd]).addTo(map);
    circle = L.circle([lat, ltd], {radius: accuracy}).addTo(map);
    console.log('marked')
    
    if (!zoomed){
        zoomed = map.fitBounds(circle.getBounds())
    }

    map.setView([lat, ltd])

    map.fitBounds(circle.getBounds());

}

function error(err){
    if (err.code === 1){
        alert('Please allow geolocation access')
    }
    else{
        alert('Cannot get user current location')
    }

}


schoolMark = L.marker([13.9464715, 121.5871204]).addTo(map);
