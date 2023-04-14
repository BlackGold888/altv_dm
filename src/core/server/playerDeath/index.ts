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

    if (!killer) return;
    const message: string = `${killer.name} ${randomMessages[Math.floor(Math.random() * randomMessages.length)]} ${player.name}`;
    chat.broadcast(message);
    alt.emitAllClients("playerKill", { killerName: killer.name, killerGang: killer.getMeta('fraction'), victimName: player.name, victimGang: killer.getMeta('fraction'), weapon: weapon });
})
