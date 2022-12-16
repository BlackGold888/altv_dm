import * as alt from 'alt-client';
import * as native from 'natives';
import * as MenuFramework from '../menu/src/menu';


alt.onServer('show:Shop', (items) => {
    MenuFramework.Menu.current = null;
    BuildMenu(items);
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

alt.on('keydown', (key) => {
    switch (key) {
        //E
        case 0x45:
            alt.emitServer('show:interact');
            break;
    }
});
