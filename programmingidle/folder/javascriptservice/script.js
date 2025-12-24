var money = 0;
var scripts = 0;

var programmers = 0;
var securities = 0;
var ads = 0;
var worker = 0;
var employee = 0;
var javaserver = 0;
var website = 0;
var moderator = 0;
var variables = 0;
var headquarters = 0;

var level = 0;
var scriptlevel = 1;
var levelupPrice = 9;
var scriptpersecond = 0
var multiplied = 1
var sell_multiplier = 1;



function Makescripts() {
    scripts += 1 * scriptlevel;
	var abbreviatedScripts = scripts.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptsWritten").innerText = abbreviatedScripts;
}


function sellscripts() {
    money += scripts * sell_multiplier;
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
    document.getElementById("MyMoney").innerText = abbreviatedMoney;
    scripts = 0;
    document.getElementById("ScriptsWritten").innerText = scripts;
}


setInterval (function(){
	scripts += scriptpersecond * multiplied;
	var abbreviatedScripts = scripts.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptsWritten").innerText = abbreviatedScripts;
}, 1000)

function LevelUp(){
	if (money > levelupPrice) {
	money -= levelupPrice;
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	levelupPrice *= 2;
	var abbreviatelevelupPrice = levelupPrice.toLocaleString('en', { notation: 'compact' });
	document.getElementById("LvPrice").innerText = abbreviatelevelupPrice;
	level += 1;
	scriptlevel *= 2;
	document.getElementById("YourLevel").innerText = level;}
}

function clock() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =  h + ":" + m;
  setTimeout(clock, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// -- Upgrade - PC

var pc1price = 1000000000000
var pc2price = 5000000000000;
var pc3price = 25000000000000;
var pc4price = 100000000000000;
var pc5price = 550000000000000;
var pc6price = 12500000000000000;
var pc7price = 150000000000000000;
var pc8price = 925000000000000000;
var pc9price = 5000000000000000000;
var pc10price = 22500000000000000000;
function BuyNormalPC() {
	if (money < pc1price) {
	    alert("I'm sorry, but you don't have enough money to purchase this.");
	} else {
	    money -= pc1price;
		var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	   document.getElementById("MyMoney").innerText = abbreviatedMoney;
	    multiplied = 5;
	    document.getElementById("MultiplyScriptsPerSec").innerText = multiplied.toLocaleString();
	    document.getElementById("NormalPCOwn").innerText = "Owned";
		pc1price = 0;
	}
}

function BuyBetterPC() {
	if (money < pc2price) {
	    alert("I'm sorry, but you don't have enough money to purchase this.");
	} else {
	    money -= pc2price;
	    var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	   document.getElementById("MyMoney").innerText = abbreviatedMoney;
	    multiplied = 25;
	    document.getElementById("MultiplyScriptsPerSec").innerText = multiplied.toLocaleString();
	    document.getElementById("BetterPCOwn").innerText = "Owned";
		pc2price = 0;
	}
}

function BuyModernPC() {
	if (money < pc3price) {
	    alert("I'm sorry, but you don't have enough money to purchase this.");
	} else {
	    money -= pc3price;
	    var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	   document.getElementById("MyMoney").innerText = abbreviatedMoney;
	    multiplied = 100;
	    document.getElementById("MultiplyScriptsPerSec").innerText = multiplied.toLocaleString();
	    document.getElementById("ModernPCOwn").innerText = "Owned";
		pc3price = 0;
	}
}

function BuyCoolLaptop() {
	if (money < pc4price) {
	    alert("I'm sorry, but you don't have enough money to purchase this.");
	} else {
	    money -= pc4price;
	    var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	   document.getElementById("MyMoney").innerText = abbreviatedMoney;
	    multiplied = 750;
	    document.getElementById("MultiplyScriptsPerSec").innerText = multiplied.toLocaleString();
	    document.getElementById("CoolLaptopOwn").innerText = "Owned";
		pc4price = 0;
	}
}

function BuyYoutuberPC() {
	if (money < pc5price) {
	    alert("I'm sorry, but you don't have enough money to purchase this.");
	} else {
	    money -= pc5price;
	    var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	   document.getElementById("MyMoney").innerText = abbreviatedMoney;
	    multiplied = 2500;
	    document.getElementById("MultiplyScriptsPerSec").innerText = multiplied.toLocaleString();
	    document.getElementById("YoutuberPCOwn").innerText = "Owned";
		pc5price = 0;
	}
}

function BuyOfficePC() {
	if (money < pc6price) {
	    alert("I'm sorry, but you don't have enough money to purchase this.");
	} else {
	    money -= pc6price;
	    var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	   document.getElementById("MyMoney").innerText = abbreviatedMoney;
	    multiplied = 37500;
	    document.getElementById("MultiplyScriptsPerSec").innerText = multiplied.toLocaleString();
	    document.getElementById("OfficePCOwn").innerText = "Owned";
		pc6price = 0;
	}
}

function BuyTouchscreenLaptop() {
	if (money < pc7price) {
	    alert("I'm sorry, but you don't have enough money to purchase this.");
	} else {
	    money -= pc7price;
	    var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	   document.getElementById("MyMoney").innerText = abbreviatedMoney;
	    multiplied = 100000;
	    document.getElementById("MultiplyScriptsPerSec").innerText = multiplied.toLocaleString();
	    document.getElementById("TouchscreenLaptopOwn").innerText = "Owned";
		pc7price = 0;
	}
}

function BuyGamingPC() {
	if (money < pc8price) {
	    alert("I'm sorry, but you don't have enough money to purchase this.");
	} else {
	    money -= pc8price;
	    var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	   document.getElementById("MyMoney").innerText = abbreviatedMoney;
	    multiplied = 225000;
	    document.getElementById("MultiplyScriptsPerSec").innerText = multiplied.toLocaleString();
	    document.getElementById("GamingPCOwn").innerText = "Owned";
		pc8price = 0;
	}
}

function BuyDeluxePC() {
	if (money < pc9price) {
	    alert("I'm sorry, but you don't have enough money to purchase this.");
	} else {
	    money -= pc9price;
	    var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	   document.getElementById("MyMoney").innerText = abbreviatedMoney;
	    multiplied = 650000;
	    document.getElementById("MultiplyScriptsPerSec").innerText = multiplied.toLocaleString();
	    document.getElementById("DeluxePCOwn").innerText = "Owned";
		pc9price = 0;
	}
}

function BuyAIScriptWriter() {
	if (money < pc10price) {
	    alert("I'm sorry, but you don't have enough money to purchase this.");
	} else {
	    money -= pc10price;
	    var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	   document.getElementById("MyMoney").innerText = abbreviatedMoney;
	    multiplied = 1500000;
	    document.getElementById("MultiplyScriptsPerSec").innerText = multiplied.toLocaleString();
	    document.getElementById("AIScriptWriterOwn").innerText = "Owned";
		pc10price = 0;
	}
}

// -- Houses
function TinyHouse() {
	if (level < 10) {
	    alert("You must be at least Level 10 to own this house.");
	} else {
	    sell_multiplier = 2;
		document.getElementById("Level10").innerText = "Owned";
	}
}
function SmallHouse() {
	if (level < 15) {
	    alert("You must be at least Level 30 to own this house.");
	} else {
	    sell_multiplier = 4;
		document.getElementById("Level15").innerText = "Owned";
	}
}
function ModernHouse() {
	if (level < 20) {
	    alert("You must be at least Level 50 to own this house.");
	} else {
	    sell_multiplier = 8;
		document.getElementById("Level20").innerText = "Owned";
	}
}
function StrandedHouse() {
	if (level < 30) {
	    alert("You must be at least Level 100 to own this house.");
	} else {
	    sell_multiplier = 25;
		document.getElementById("Level30").innerText = "Owned";
	}
}
function PartyEstate() {
	if (level < 50) {
	    alert("You must be at least Level 150 to own this house.");
	} else {
	    sell_multiplier = 150;
		document.getElementById("Level50").innerText = "Owned";
	}
}
function ModernMansion() {
	if (level < 70) {
	    alert("You must be at least Level 200 to own this house.");
	} else {
	    sell_multiplier = 500;
		document.getElementById("Level70").innerText = "Owned";
	}
}
function CozyNightHouse() {
	if (level < 100) {
	    alert("You must be at least Level 225 to own this house.");
	} else {
	    sell_multiplier = 6250;
		document.getElementById("Level100").innerText = "Owned";
	}
}
function JapaneseCastle() {
	if (level < 125) {
	    alert("You must be at least Level 350 to own this house.");
	} else {
	    sell_multiplier = 50000;
		document.getElementById("Level125").innerText = "Owned";
	}
}
function BeachHouse() {
	if (level < 150) {
	    alert("You must be at least Level 425 to own this house.");
	} else {
	    sell_multiplier = 125000;
		document.getElementById("Level150").innerText = "Owned";
	}
}
function RichApartment() {
	if (level < 200) {
	    alert("You must be at least Level 500 to own this house.");
	} else {
	    sell_multiplier = 950000;
		document.getElementById("Level200").innerText = "Owned";
	}
}


// -- JS Programmers
function Hire1Programmer() {
	if (money > 24) {
	money -= 25;
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	programmers += 1;
	document.getElementById("JSProgrammers").innerText = programmers;
	scriptpersecond += 1;
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire10Programmer() {
	if (money > (25 - 1)) {
	money -= (25 * 10);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	programmers += 10;
	document.getElementById("JSProgrammers").innerText = programmers;
	scriptpersecond += (1 * 10);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire25Programmer() {
	if (money > (625 - 1)) {
	money -= (25 * 25);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	programmers += 25;
	document.getElementById("JSProgrammers").innerText = programmers;
	scriptpersecond += (1 * 25);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire50Programmer() {
	if (money > (1250 - 1)) {
	money -= (25 * 50);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	programmers += 50;
	document.getElementById("JSProgrammers").innerText = programmers;
	scriptpersecond += (1 * 50);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire100Programmer() {
	if (money > (2500 - 1)) {
	money -= (25 * 100);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	programmers += 100;
	document.getElementById("JSProgrammers").innerText = programmers;
	scriptpersecond += (1 * 100);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}

// -- JavaSecurities
function Buy1JSec() {
	if (money > (500 - 1)) {
	money -= 500;
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	securities += 1;
	document.getElementById("JavaSecurity").innerText = securities;
	scriptpersecond += 5;
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
	
}
function Buy10JSec() {
	if (money > (5000 - 1)) {
	money -= (500 * 10);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	securities += 10;
	document.getElementById("JavaSecurity").innerText = securities;
	scriptpersecond += (5 * 10);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Buy25JSec() {
	if (money > (12500 - 1)) {
	money -= (500 * 25);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	securities += 25;
	document.getElementById("JavaSecurity").innerText = securities;
	scriptpersecond += (5 * 25);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Buy50JSec() {
	if (money > (25000 - 1)) {
	money -= (500 * 50);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	securities += 50;
	document.getElementById("JavaSecurity").innerText = securities;
	scriptpersecond += (5 * 50);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Buy100JSec() {
	if (money > (50000 - 1)) {
	money -= (500 * 100);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	securities += 100;
	document.getElementById("JavaSecurity").innerText = securities;
	scriptpersecond += (5 * 100);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}

// -- Ads
function Make1Ad() {
	if (money > (10000 - 1)) {
	money -= 10000;
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	ads += 1;
	document.getElementById("AdsPublished").innerText = ads;
	scriptpersecond += 25;
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Make10Ads() {
	if (money > (100000 - 1)) {
	money -= (10000 * 10);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	ads += 10;
	document.getElementById("AdsPublished").innerText = ads;
	scriptpersecond += (25 * 10);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Make25Ads() {
	if (money > (250000 - 1)) {
	money -= (10000 * 25);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	ads += 25;
	document.getElementById("AdsPublished").innerText = ads;
	scriptpersecond += (25 * 25);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Make50Ads() {
	if (money > (500000 - 1)) {
	money -= (10000 * 50);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	ads += 50;
	document.getElementById("AdsPublished").innerText = ads;
	scriptpersecond += (25 * 50);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Make100Ads() {
	if (money > (1000000 - 1)) {
	money -= (10000 * 100);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	ads += 100;
	document.getElementById("AdsPublished").innerText = ads;
	scriptpersecond += (25 * 100);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}

// -- JavaScript Workers
function Hire1Worker() {
	if (money > (50000 - 1)) {
	money -= 50000;
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	worker += 1;
	document.getElementById("Workers").innerText = worker;
	scriptpersecond += 50;
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire10Workers() {
	if (money > (500000 - 1)) {
	money -= (50000 * 10);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	worker += 10;
	document.getElementById("Workers").innerText = worker;
	scriptpersecond += (50 * 10);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire25Workers() {
	if (money > (1250000 - 1)) {
	money -= (50000 * 25);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	worker += 25;
	document.getElementById("Workers").innerText = worker;
	scriptpersecond += (50 * 25);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire50Workers() {
	if (money > (2500000 - 1)) {
	money -= (50000 * 50);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	worker += 50;
	document.getElementById("Workers").innerText = worker;
	scriptpersecond += (50 * 50);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire100Workers() {
	if (money > (5000000 - 1)) {
	money -= (50000 * 100);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	worker += 100;
	document.getElementById("Workers").innerText = worker;
	scriptpersecond += (50 * 100);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}

// -- Employee
function Hire1Employee() {
	if (money > (155000 - 1)) {
	money -= 155000;
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	employee += 1;
	document.getElementById("Employees").innerText = employee;
	scriptpersecond += 100;
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire10Employees() {
	if (money > (1550000 - 1)) {
	money -= (155000 * 10);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	employee += 10;
	document.getElementById("Employees").innerText = employee;
	scriptpersecond += (100 * 10);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire25Employees() {
	if (money > (3875000 - 1)) {
	money -= (155000 * 25);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	employee += 25;
	document.getElementById("Employees").innerText = employee;
	scriptpersecond += (100 * 25);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire50Employees() {
	if (money > (7750000 - 1)) {
	money -= (155000 * 50);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	employee += 50;
	document.getElementById("Employees").innerText = employee;
	scriptpersecond += (100 * 50);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire100Employees() {
	if (money > (15500000 - 1)) {
	money -= (155000 * 100);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	employee += 100;
	document.getElementById("Employees").innerText = employee;
	scriptpersecond += (100 * 100);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}

// -- Websites
function Build1Website() {
	if (money > (220000 - 1)) {
	money -= 220000;
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = money;
	website += 1;
	document.getElementById("Website").innerText = website;
	scriptpersecond += 225;
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Build10Website() {
	if (money > (2200000 - 1)) {
	money -= (220000 * 10);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	website += 10;
	document.getElementById("Website").innerText = website;
	scriptpersecond += (225 * 10);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Build25Website() {
	if (money > (5500000 - 1)) {
	money -= (220000 * 25);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	website += 25;
	document.getElementById("Website").innerText = website;
	scriptpersecond += (225 * 25);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Build50Website() {
	if (money > (11000000 - 1)) {
	money -= (220000 * 50);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	website += 50;
	document.getElementById("Website").innerText = website;
	scriptpersecond += (225 * 50);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Build100Website() {
	if (money > (22000000 - 1)) {
	money -= (220000 * 100);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	website += 100;
	document.getElementById("Website").innerText = website;
	scriptpersecond += (225 * 100);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}

// -- JavaServers
function Make1JavaServer() {
	if (money > (500000 - 1)) {
	money -= 500000;
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	javaserver += 1;
	document.getElementById("JavaServer").innerText = javaserver;
	scriptpersecond += 550;
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Make10JavaServers() {
	if (money > (5000000 - 1)) {
	money -= (500000 * 10);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	javaserver += 10;
	document.getElementById("JavaServer").innerText = javaserver;
	scriptpersecond += (550 * 10);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Make25JavaServers() {
	if (money > (12500000 - 1)) {
	money -= (500000 * 25);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	javaserver += 25;
	document.getElementById("JavaServer").innerText = javaserver;
	scriptpersecond += (550 * 25);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Make50JavaServers() {
	if (money > (25000000 - 1)) {
	money -= (500000 * 50);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	javaserver += 50;
	document.getElementById("JavaServer").innerText = javaserver;
	scriptpersecond += (550 * 50);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Make100JavaServers() {
	if (money > (50000000 - 1)) {
	money -= (500000 * 100);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	javaserver += 100;
	document.getElementById("JavaServer").innerText = javaserver;
	scriptpersecond += (550 * 100);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}

// -- Moderators
function Hire1Moderator() {
	if (money > (3000000 - 1)) {
	money -= 3000000;
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	moderator += 1;
	document.getElementById("Mods").innerText = moderator;
	scriptpersecond += 800;
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire10Moderators() {
	if (money > (30000000 - 1)) {
	money -= (3000000 * 10);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	moderator += 10;
	document.getElementById("Mods").innerText = moderator;
	scriptpersecond += (800 * 10);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire25Moderators() {
	if (money > (75000000 - 1)) {
	money -= (3000000 * 25);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	moderator += 25;
	document.getElementById("Mods").innerText = moderator;
	scriptpersecond += (800 * 25);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire50Moderators() {
	if (money > (150000000 - 1)) {
	money -= (3000000 * 50);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	moderator += 50;
	document.getElementById("Mods").innerText = moderator;
	scriptpersecond += (800 * 50);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Hire100Moderators() {
	if (money > (300000000 - 1)) {
	money -= (3000000 * 100);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	moderator += 100;
	document.getElementById("Mods").innerText = moderator;
	scriptpersecond += (800 * 100);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}

// - JavaScript Variables
function Make1Variable() {
	if (money > (5000000 - 1)) {
	money -= 5000000;
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	variables += 1;
	document.getElementById("Variables").innerText = variables;
	scriptpersecond += 1250;
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Make10Variables() {
	if (money > (50000000 - 1)) {
	money -= (5000000 * 10);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	variables += 10;
	document.getElementById("Variables").innerText = variables;
	scriptpersecond += (1250 * 10);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Make25Variables() {
	if (money > (125000000 - 1)) {
	money -= (5000000 * 25);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	variables += 25;
	document.getElementById("Variables").innerText = variables;
	scriptpersecond += (1250 * 25);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Make50Variables() {
	if (money > (250000000 - 1)) {
	money -= (5000000 * 50);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	variables += 50;
	document.getElementById("Variables").innerText = variables;
	scriptpersecond += (1250 * 50);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Make100Variables() {
	if (money > (500000000 - 1)) {
	money -= (5000000 * 100);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	variables += 100;
	document.getElementById("Variables").innerText = variables;
	scriptpersecond += (1250 * 100);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}

// -- Headquarters
function Build1Headquarter() {
	if (money > (17000000 - 1)) {
	money -= 17000000;
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	headquarters += 1;
	document.getElementById("HeadQuarters").innerText = headquarters;
	scriptpersecond += 2000;
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Build10Headquarters() {
	if (money > (170000000 - 1)) {
	money -= (17000000 * 10);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	headquarters += 10;
	document.getElementById("HeadQuarters").innerText = headquarters;
	scriptpersecond += (2000 * 10);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Build25Headquarters() {
	if (money > (425000000 - 1)) {
	money -= (17000000 * 25);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	headquarters += 25;
	document.getElementById("HeadQuarters").innerText = headquarters;
	scriptpersecond += (2000 * 25);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Build50Headquarters() {
	if (money > (850000000 - 1)) {
	money -= (17000000 * 50);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	headquarters += 50;
	document.getElementById("HeadQuarters").innerText = headquarters;
	scriptpersecond += (2000 * 50);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
function Build100Headquarters() {
	if (money > (1700000000 - 1)) {
	money -= (17000000 * 100);
	var abbreviatedMoney = money.toLocaleString('en', { notation: 'compact' });
	document.getElementById("MyMoney").innerText = abbreviatedMoney;
	headquarters += 100;
	document.getElementById("HeadQuarters").innerText = headquarters;
	scriptpersecond += (2000 * 100);
	var abbreviatedScriptspersecond = scriptpersecond.toLocaleString('en', { notation: 'compact' });
	document.getElementById("ScriptPerSec").innerText = abbreviatedScriptspersecond;}
}
