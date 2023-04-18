import * as alt from 'alt-client';
import {showCursor} from 'alt-client';

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
    }

    public hidePage() {
        this.emit('setPage', '');
        this.isVisible = false;
        this.unfocus();
        showCursor(false);
    }
}

export const MainBrowser = new MyWebView('http://resource/client/web/index.html');
