function gameSaved() {
  const saveData = {
    money,
    scripts,
    programmers,
    securities,
    ads,
    worker,
    employee,
    javaserver,
    website,
    moderator,
    variables,
    headquarters,
    level,
    scriptlevel,
    levelupPrice,
    scriptpersecond,
    multiplied,
    sell_multiplier
  };

  localStorage.setItem("ProgrammingIdleSave", JSON.stringify(saveData));
}

// Load game data
function gameLoaded() {
  const savedData = localStorage.getItem("ProgrammingIdleSave");
  if (!savedData) {
    alert("No saved game found!");
    return;
  }

  const data = JSON.parse(savedData);

  // Restore variables
  money = data.money || 0;
  scripts = data.scripts || 0;
  programmers = data.programmers || 0;
  securities = data.securities || 0;
  ads = data.ads || 0;
  worker = data.worker || 0;
  employee = data.employee || 0;
  javaserver = data.javaserver || 0;
  website = data.website || 0;
  moderator = data.moderator || 0;
  variables = data.variables || 0;
  headquarters = data.headquarters || 0;
  level = data.level || 0;
  scriptlevel = data.scriptlevel || 1;
  levelupPrice = data.levelupPrice || 9;
  scriptpersecond = data.scriptpersecond || 0;
  multiplied = data.multiplied || 1;
  sell_multiplier = data.sell_multiplier || 1;

  // Update UI immediately
  document.getElementById("MyMoney").innerText = money.toLocaleString('en', { notation: 'compact' });
  document.getElementById("ScriptsWritten").innerText = scripts.toLocaleString('en', { notation: 'compact' });
  document.getElementById("YourLevel").innerText = level;
  document.getElementById("LvPrice").innerText = levelupPrice.toLocaleString('en', { notation: 'compact' });
  document.getElementById("ScriptPerSec").innerText = scriptpersecond.toLocaleString('en', { notation: 'compact' });
  document.getElementById("MultiplyScriptsPerSec").innerText = multiplied.toLocaleString();

  // Workers
  document.getElementById("JSProgrammers").innerText = programmers.toLocaleString;
  document.getElementById("JavaSecurity").innerText = securities.toLocaleString;
  document.getElementById("AdsPublished").innerText = ads.toLocaleString;
  document.getElementById("Workers").innerText = worker.toLocaleString;
  document.getElementById("Employees").innerText = employee.toLocaleString;
  document.getElementById("Website").innerText = website.toLocaleString;
  document.getElementById("JavaServer").innerText = javaserver.toLocaleString;
  document.getElementById("Mods").innerText = moderator.toLocaleString;
  document.getElementById("Variables").innerText = variables.toLocaleString;
  document.getElementById("HeadQuarters").innerText = headquarters.toLocaleString;

  alert("Game progress loaded!");
}
