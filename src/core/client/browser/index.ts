import * as alt from 'alt-client';
import { showCursor, toggleGameControls } from 'alt-client';
import * as native from 'natives';

class MyWebView extends alt.WebView {
    constructor(url: string) {
        super(url);
        this.isVisible = false;
    }

    public showPage(page: string) {
        this.emit('setPage', page);
        this.isVisible = true;
        this.focus();
        showCursor(true);
        native.freezeEntityPosition(alt.Player.local.scriptID, true);
        alt.setCamFrozen(true);
        alt.toggleGameControls(false);
    }

    public hidePage() {
        this.emit('setPage', '');
        this.isVisible = false;
        this.unfocus();
        showCursor(false);
        native.freezeEntityPosition(alt.Player.local.scriptID, false);
        alt.setCamFrozen(false);
        alt.toggleGameControls(true);
    }
}

export const MainBrowser = new MyWebView('http://resource/client/web/index.html');
