import * as alt from 'alt-server';
// @ts-ignore

alt.log(`alt:V Server - Boilerplate Started`);

export const FractionsInfo = {
    usa: {
        name: 'USA',
        position: { 'x': -1638.3165283203125, 'y': -3140.24169921875, 'z': 13.980224609375 },
        model: 'u_m_y_rsranger_01'
    },
    ru: {
        name: 'RU',
        position: {"x":-980.123046875,"y":-3009.71875,"z":13.9296875},
        model: 's_m_y_swat_01'
    }
}

function handlePlayerConnect(player: alt.Player) {
    alt.log(`[${player.id}] ${player.name} has connected to the server.`);
    player.model = 'mp_m_freemode_01';
    player.spawn(36.19486618041992, 859.3850708007812, 197.71343994140625, 0);
    alt.emitClient(player, 'log:Console', 'alt:V Server - Boilerplate Started');
    alt.emitClient(player, 'show:Menu', true);
}

alt.on('playerConnect', handlePlayerConnect);

alt.onClient('auth', (player: alt.Player, auth: string) => {
    if (!FractionsInfo[auth]) return;
    player.setMeta('fraction', auth);
    player.model = FractionsInfo[auth].model;
    player.spawn(FractionsInfo[auth].position.x, FractionsInfo[auth].position.y, FractionsInfo[auth].position.z, 0);
    alt.emitClient(player, 'show:Menu', false);
});

