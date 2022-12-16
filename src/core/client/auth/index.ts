import * as alt from 'alt-client';
import * as native from 'natives';
import * as MenuFramework from '../menu/src/menu';

alt.onServer('log:Console', handleLogConsole);

function handleLogConsole(msg: string) {
    alt.log(msg);
}

alt.on('keyup', (key: number) => {
    switch (key) {
        case 112: // F1
            alt.log(`POS: ${JSON.stringify(alt.Player.local.pos)}`);
            break;
    }
});

alt.on('connectionComplete', () => {
    BuildMenu();
});

function BuildMenu() {
    const menu = new MenuFramework.Menu('alt:V Menu Framework');
    MenuFramework.Menu.current = menu; // We set this as entry menu when script is loaded to ensure when Pressing the toggle key it opens this or the last seen menu

    menu.addItem(new MenuFramework.MenuItem('RU'));
    menu.addItem(new MenuFramework.MenuItem('USA'));

    menu.itemSelect.on((item, state) => {
        switch (item.text) {
            case 'RU':
                alt.emitServer('auth', 'ru');
                break;
            case 'USA':
                alt.emitServer('auth', 'usa');
                break;
        }
    });
}

alt.onServer('show:Menu', (status) => {
    MenuFramework.Menu.current.visible = status;
    native.displayRadar(!status);
    native.freezeEntityPosition(alt.Player.local.scriptID, status);
});
