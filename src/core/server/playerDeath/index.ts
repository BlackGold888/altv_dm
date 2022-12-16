import * as alt from 'alt-server';
import { FractionsInfo } from '../auth';

alt.on('playerDeath', (player: alt.Player, killer: alt.Player, weapon: number) => {
    // @ts-ignore
    const position = FractionsInfo[player.getMeta('fraction')].position;
    player.spawn(position.x, position.y, position.z, 0);

    if (!killer) return;
    alt.emitAllClients("playerKill", { killerName: killer.name, killerGang: killer.getMeta('fraction'), victimName: player.name, victimGang: killer.getMeta('fraction'), weapon: weapon });
})
