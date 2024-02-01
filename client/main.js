
async function showMessage() {
    const response = await fetch("http://localhost:8080/api/message");
    const json = await response.json();
    const message = document.getElementById("message");
    message.innerText = json.data;
}

async function showDatabaseMessage() {
    const response = await fetch("http://localhost:8080/api/database/message");
    const json = await response.json();
    const message = document.getElementById("database-message");
    message.innerText = json.data;
}

async function main() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <p>nodejs-re-exam</p>
        <p id="message"></p>
        <p id="database-message"></p>
    `;

    await showMessage();
    await showDatabaseMessage();
    
}
await main();
