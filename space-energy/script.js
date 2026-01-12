let rocketfuel = 0;
let worldPopulation = 8256921232;
let frequency = 2.4;
let spaceshipStatus = "Stable";
let satelliteStatus = "Stable";
let rocketsLaunched = 0;
let fuel = 100;

function togglePopup() {
	document.getElementById("popup").classList.toggle('show');
	document.getElementById("overlay").classList.toggle('show');
}


const satelliteDesc = ["Satellites orbit Earth to transmit signals and collect data.", "Satellites need a power source such as solar panels that convert sunlight into electricity, and an antenna to send and receive information.", 
"Satellites are used to control all communications around the world."];
const spaceshipDesc = ["Spaceships use onboard computers for navigation and communication systems", "Spaceships travel beyond Earth using powerful rocket propulsion."];
const earthDesc = ["Earth rotates once every 24 hours creating day and night.", 
"Do you know that Earth is the safest planet", 
"Earth’s gravity keeps satellites in stable orbital paths"];

function describeSattelite() {
	let satelliteIndex = Math.floor(Math.random() * satelliteDesc.length);
	document.getElementById("description-text").innerText = satelliteDesc[satelliteIndex];
}


function describeSpaceship() {
	let spaceshipIndex = Math.floor(Math.random() * spaceshipDesc.length);
	document.getElementById("description-text").innerText = spaceshipDesc[spaceshipIndex];
}


function describeEarth() {
	let earthIndex = Math.floor(Math.random() * earthDesc.length);
	document.getElementById("description-text").innerText = earthDesc[earthIndex];
}


setInterval(function() {
	document.getElementById("totalPopulation").innerText = worldPopulation.toLocaleString();
	document.getElementById("checkSpaceshipStatus").innerText = spaceshipStatus;
	document.getElementById("checkSatelliteStatus").innerText = satelliteStatus;
	document.getElementById("totalRocketsLaunched").innerText = rocketsLaunched;
}, 1000)

const texts = ["Stable", "Normal", "Critical"];


function changeSpaceshipStatus() {
	let randomIndex = Math.floor(Math.random() * texts.length);
	spaceshipStatus = texts[randomIndex];
}


function changeSatelliteStatus() {
	let randomIndex = Math.floor(Math.random() * texts.length);
	satelliteStatus = texts[randomIndex];
}

setInterval(function() {
	fuel -= 1;
	document.getElementById("energyFuel").innerText = fuel;
}, 10000)

setInterval(function() {
	rocketsLaunched += 1;
}, 1500)

setInterval(function() {
	frequency += 0.01;
	document.getElementById("countFrequency").innerText = frequency;
	fuel = 100;
	document.getElementById("energyFuel").innerText = fuel;
}, 300000)


function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function callStrength() {
	const min = 80;
	const max = 100;
	const randomNumber = getRandomInt(min, max);
	document.getElementById("signalStrength").innerText = randomNumber;
}

const intervalId = setInterval(callStrength, 2000); 


setInterval(changeSpaceshipStatus, 10000);
setInterval(changeSatelliteStatus, 10000);

