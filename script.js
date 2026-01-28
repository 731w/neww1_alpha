const tabsData = {
    Self: ["God Mode", "Heal", "Armor", "Invisible"],
    Server: ["Clear Chat", "Restart", "Announce"],
    Online: ["Players List", "Spectate", "Teleport"],
    Cfw: ["Option 1", "Option 2", "Option 3"],
    Vrp: ["Give Money", "Give Item"],
    Esx: ["Spawn Item", "Add Money"],
    Misc: ["Fun 1", "Fun 2", "Fun 3"],
    Bypass: ["Bypass 1", "Bypass 2"],
    Settings: ["Close Menu"]
};

const tabs = Object.keys(tabsData);
let tabIndex = 0;
let btnIndex = 0;

const tabsDiv = document.getElementById("tabs");
const contentDiv = document.getElementById("content");

function renderTabs() {
    tabsDiv.innerHTML = "";
    tabs.forEach((t, i) => {
        const el = document.createElement("div");
        el.className = "tab" + (i === tabIndex ? " active" : "");
        el.textContent = t;
        tabsDiv.appendChild(el);
    });
}

function renderButtons() {
    contentDiv.innerHTML = "";
    tabsData[tabs[tabIndex]].forEach((b, i) => {
        const el = document.createElement("div");
        el.className = "btn" + (i === btnIndex ? " active" : "");
        el.textContent = b;
        contentDiv.appendChild(el);
    });
}

function updateUI() {
    renderTabs();
    renderButtons();
}

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "q":
        case "Q":
            tabIndex = (tabIndex - 1 + tabs.length) % tabs.length;
            btnIndex = 0;
            break;

        case "e":
        case "E":
            tabIndex = (tabIndex + 1) % tabs.length;
            btnIndex = 0;
            break;

        case "ArrowUp":
            btnIndex = Math.max(0, btnIndex - 1);
            break;

        case "ArrowDown":
            btnIndex = Math.min(
                tabsData[tabs[tabIndex]].length - 1,
                btnIndex + 1
            );
            break;

        case "Enter":
            console.log(
                `Pressed: ${tabs[tabIndex]} -> ${tabsData[tabs[tabIndex]][btnIndex]}`
            );
            break;

        case "Backspace":
            btnIndex = 0;
            break;
    }
    updateUI();
});

updateUI();
