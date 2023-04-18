import * as alt from 'alt-client';
import * as native from 'natives';
import * as MenuFramework from '../menu/src/menu.js';
import { MainBrowser } from "../browser/index.js";


MainBrowser.on('client.shop.buy', (weapon) => {
    alt.emitServer('shop:buy', weapon);
    native.playSound(-1, 'SELECT', 'HUD_MINI_GAME_SOUNDSET', false, 0, true);
});

alt.onServer('show:Shop', (items) => {
    // MenuFramework.Menu.current = null;
    // BuildMenu(items);
    MainBrowser.showPage('weapon_shop');
});

alt.onServer('hide:Shop', () => {
    MenuFramework.Menu.current.visible = false;
});

function BuildMenu(items) {
    const menu = new MenuFramework.Menu('alt:V Menu Framework');
    MenuFramework.Menu.current = menu; // We set this as entry menu when script is loaded to ensure when Pressing the toggle key it opens this or the last seen menu

    items.forEach((item) => {
        const menuItem = new MenuFramework.MenuItem(item.name, item.description);
        menu.addItem(menuItem);
    });

    menu.itemSelect.on((item, state) => {
        alt.emitServer('shop:buy', item.text);
    });
    MenuFramework.Menu.current.visible = true;
}

const toggleMenu = () => {
    if (MainBrowser.isVisible) {
        MainBrowser.hidePage();
        return;
    }else {
        alt.emitServer('show:interact');
    }
}

alt.on('keydown', (key) => {
    switch (key) {
        //E
        case 0x45:
            toggleMenu();
            break;
        case 0x1B:
            MainBrowser.hidePage();
    }
});
