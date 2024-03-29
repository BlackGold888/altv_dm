import * as alt from 'alt-client';
import * as native from 'natives';
import * as MenuFramework from '../menu/src/menu.js';


alt.onServer('show:vehicle:shop', (vehicles) => {
    MenuFramework.Menu.current = null;
    alt.log(vehicles)
    BuildMenu(vehicles);
});

alt.onServer('hide:vehicle:shop', () => {
    MenuFramework.Menu.current.visible = false;
});

function BuildMenu(vehicles) {
    const menu = new MenuFramework.Menu('alt:V Menu Framework');
    MenuFramework.Menu.current = menu; // We set this as entry menu when script is loaded to ensure when Pressing the toggle key it opens this or the last seen menu

    vehicles.forEach((vehicle) => {
        const menuItem = new MenuFramework.MenuItem(vehicle.name, vehicle.description);
        menu.addItem(menuItem);
    });

    menu.itemSelect.on((item, state) => {
        alt.emitServer('server:vehicle:buy', item.text);
    });

    MenuFramework.Menu.current.visible = true;
}

alt.on('keydown', (key) => {
    switch (key) {
        //E
        case 0x45:
            alt.emitServer('server:vehicle:interact');
            break;
    }
});
