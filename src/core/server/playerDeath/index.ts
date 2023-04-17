import * as alt from 'alt-server';
import { FractionsInfo } from '../auth/index.js'
// @ts-ignore
import * as chat from "chat";

const randomMessages = [
    'Дал в рот',
    'Трахнул в попку',
    'Выйбал',
    'Жёстко трахнул',
    'Асадил',
    'ЗАСАДИЛ',
    'ЗАСАДИЛ без резины',
    'ЗАСАДИЛ без вазелина',
    'обоссал',
    'отправил в военкамат',
    'отправил груз 200',
    'насрал в рот',
    'Отдал повестку',
    'Отдал повестку в загробный мир',
    'Отдал 500 в ебало',
    'отпидарасил в рот',
    'У него сейчас бой',
    'сделал из него АСПИДА',
    'промыл анал маленьким членом',
    'промыл анал',
    'ЗАЛИЛ в рот ХЛОМИДИЙ',
]

alt.on('playerDeath', (player: alt.Player, killer: alt.Player, weapon: number) => {
    // @ts-ignore
    const position = FractionsInfo[player.getMeta('fraction')].position;
    player.spawn(position.x, position.y, position.z, 0);

    if(player.getMeta('vehicle')) {
        player.getMeta<alt.Vehicle>('vehicle').destroy();
    };

    player.setMeta<alt.Vehicle>('vehicle', null);

    if (!killer) return;
    const message: string = `${killer.name} {80eb34}${randomMessages[Math.floor(Math.random() * randomMessages.length)]} {ffffff}${player.name}`;
    chat.broadcast(message);
    alt.emitAllClients("playerKill", { killerName: killer.name, killerGang: killer.getMeta('fraction'), victimName: player.name, victimGang: killer.getMeta('fraction'), weapon: weapon });
})

chat.registerCmd("veh", (player, args)=>{
    if (args.length === 0) {
        chat.send(player, "Usage: /veh (vehicleModel)");
        return;
    }
    try {

        if(player.getMeta('vehicle')) {
            player.getMeta('vehicle').destroy();
        };

        player.setMeta('vehicle', null);

        let vehicle = new alt.Vehicle(args[0], player.pos.x, player.pos.y, player.pos.z, 0, 0, 0);
        let pvehs = player.getMeta("vehicles");
        if (pvehs.length >= 3) {
            let toDestroy = pvehs.pop();
            if (toDestroy != null) {
                toDestroy.destroy();
            }
        }
        pvehs.unshift(vehicle);
        player.setMeta("vehicles", pvehs);
    } catch (e) {
        chat.send(player, `{ff0000} Vehicle Model {ff9500}${args[0]} {ff0000}does not exist..`);
        alt.log(e);
    }
});