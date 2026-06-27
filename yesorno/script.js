window.onload = function() {
    document.getElementById("question").textContent = "Are you playing the game Yes or No?";
}

document.addEventListener("DOMContentLoaded", () => {
    
    const buttonYes = document.getElementById("yes");
    buttonYes.addEventListener("click", nextQuestion);
    
    const buttonNo = document.getElementById("no");
    buttonNo.addEventListener("click", nextQuestion);

});


function nextQuestion() {
    document.getElementById("question").textContent = generateQuestion();
}

function generateQuestion() {

    const patterns = [
        () => `Do you ${pick(actions)}${pick(endings)}`,
        () => `Did you ${pick(pastActions)}${pick(endings)}`,
        () => `You just ${pick(actions)}${pick(state)}`,
        () => `Promise you would ${pick(actions)}${pick(endings)}`,
        () => `Would you ${pick(actions)}${pick(endings)}`,
        () => `Have you ${pick(actions)}${pick(endings)}`,
        () => `Do you think ${pick(statements)}${pick(endings)}`,
        () => `Do you believe ${pick(statements)}${pick(endings)}`,
        () => `Have you ever ${pick(pastActions)}${pick(endings)}`,
        () => `If you could ${pick(hypothetical)}, would you do it${pick(endings)}`,
        () => `Will you ${pick(decisions)}${pick(endings)}`,
        () => `Will you ${pick(actions)}${pick(endings)}`,
        () => `If ${pick(situations)}, would you ${pick(actions)}${pick(endings)}`
    ];

    const actions = [
        "try something completely new",
        "help someone you don't know",
        "tell the truth in a difficult situation",
        "take a big risk",
        "change your daily routine",
        "make your own game",
        "forgive someone who hurt you",
        "stand up for yourself",
        "follow your dreams",
        "try to practice your mathematical skill",
        "learn a difficult skill",
        "leave your comfort zone",
        "do something embarrassing in public",
        "spend time alone without your phone"
    ];

    const pastActions = [
        "lied to avoid trouble",
        "helped a stranger",
        "regretted a decision you made",
        "felt proud of yourself",
        "taken a big risk",
        "missed an important opportunity",
        "done something brave",
        "made a difficult choice"
    ];

    const hypothetical = [
        "travel anywhere instantly",
        "read minds",
        "be invisible",
        "restart your life",
        "live in another world",
        "control time",
        "know your future",
        "change the past"
    ];

    const statements = [
        "people can truly change",
        "honesty is always the best choice",
        "success brings happiness",
        "fear can stop someone from growing",
        "everyone deserves a second chance",
        "hard work always pays off",
        "kindness matters more than talent"
    ];

    const decisions = [
        "tell the truth even if it hurts someone",
        "keep a secret forever",
        "choose money over happiness",
        "walk away from a bad situation",
        "admit your mistakes openly",
        "take responsibility for something difficult"
    ];

    const situations = [
        "you found a lost wallet",
        "you were given a second chance",
        "you had nothing to lose",
        "you were under pressure",
        "no one was watching you",
        "you had to decide quickly"
    ];

    const endings = [
        "?",
        " right now?",
        " without hesitation?",
        " even if it's difficult?",
        " if it changed your life?",
        " when no one is watching?"
    ];

    const state = [
        "until you lose your mind.", "when they didn't notice what you're doing.",
        "until they appreciate for what you did.", "when you're bored",
        "until the past midnight you weren't sleep.", "when someone didn't notice that you're actually",
        "until you realized that you're in the university.",
        "until they didn't notice what you're actually doing."
    ];

    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    let pattern = pick(patterns);
    return pattern();
}
