var map = L.map('map').setView([0, 0], 2);
var marker = L.marker([0, 0]).addTo(map);

marker.bindPopup("<b>Welcome to Interactive World Map!</b><br>Click and drag to explore areas around the world.").openPopup();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

async function getCountryName(lat, lng) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=3&addressdetails=1`);
        const data = await response.json();
        return data.address && data.address.country ? data.address.country : "⚠️ [Unable to fetch Location]";
    } catch (error) {
        console.error("Error fetching country:", error);
        return "⚠️ [Unable to fetch Location]";
    }
}

function getLocalTime(lat, lng) {
    try {
        const offset = Math.round(lng / 15);
        const date = new Date();
        const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
        const localTime = new Date(utcTime + (offset * 3600000));
        return localTime.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        });
    } catch (error) {
        console.error("Error calculating time:", error);
        return "Unknown";
    }
}

map.on('click', async function(e) {
    const lat = e.latlng.lat.toFixed(4);
    const lng = e.latlng.lng.toFixed(4);
    const country = await getCountryName(lat, lng);
    const localTime = getLocalTime(lat, lng);

    const popupContent = `
        <b>Area Location:</b> ${lat}, ${lng}<br>
        <b>Country:</b> ${country}<br>
        <b>Local Time:</b> ${localTime}
    `;

    L.popup()
        .setLatLng(e.latlng)
        .setContent(popupContent)
        .openOn(map);
});

