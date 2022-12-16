import * as alt from 'alt-client';

let mainView = null;
let viewLoaded = false;

function loadWebView() {
    mainView = new alt.WebView("http://resource/client/html/index.html");
    mainView.on("viewLoaded", () => {
        alt.log("GangWar view loaded");
        alt.emitServer("viewLoaded");
        viewLoaded = true;
    });

    mainView.on("teamSelected", (teamId) => {
        alt.emitServer("teamSelected", teamId);
        alt.toggleGameControls(true);
        alt.showCursor(false);
    });
}

alt.onServer("playerKill", (data) => {
    if (!viewLoaded) return;
    mainView.emit("registerKill", data);
});

alt.on('connectionComplete', () => {
    loadWebView();
})
