window.onload = function() {
  document.getElementById("scale").addEventListener("click", toggle);
  
  function toggle() {
    document.getElementById("overlay").classList.toggle('show');
  }
}


function updateClockAndCalendar() {
  const now = new Date();

  // Calendar formatting (e.g., Mon, Nov 16, 2026)
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  document.getElementById('calendar').textContent = now.toLocaleDateString(undefined, options);

  // Digital clock formatting (HH:MM:SS)
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('clock').textContent = `Estimated Time: ${hours}:${minutes}`;
}

// Run immediately, then update every second
updateClockAndCalendar();
setInterval(updateClockAndCalendar, 1000);

function weather() {
          event.preventDefault(); // Prevents the page from reloading
          
          const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Get a key from openweathermap.org
          const city = 'London'; 
          const apiUrl = `https://openweathermap.org{city}&units=metric&appid=${apiKey}`;
            fetch(apiUrl)
              .then(response => {
                  if (!response.ok) throw new Error('Network response error');
                  return response.json();
              })
              .then(data => {
                  document.getElementById('weather').innerHTML = `
                      <h3>Forecast for ${data.name}</h3>
                      <p>Temperature: ${data.main.temp}°C</p>
                      <p>Condition: ${data.weather[0].description}</p>
                      <p>Humidity: ${data.main.humidity}%</p>
                  `;
              })
              .catch(error => {
                  document.getElementById('weatherDisplay').innerHTML = `<p>Error loading forecast.</p>`;
                  console.error('Error:', error);
              });
      };


weather();
calendar();
clock();
