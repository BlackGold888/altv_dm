import * as alt from 'alt-client';
import '../menu/index.js';
import { MainBrowser } from "../browser/index.js";

MainBrowser.on('auth.select.fraction', (fraction) => {
    alt.emitServer('auth', fraction);
});

alt.onServer('client.auth.hide', (status) => {
    MainBrowser.hidePage();
});

alt.onServer('client.auth.show', (status) => {
    MainBrowser.showPage('auth');
});
