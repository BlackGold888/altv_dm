import * as alt from 'alt-server';
import { Item, itemsApi } from '../items/index.js';

class Shop {
    public id: number;
    public pos: any;
    public shape: alt.Colshape;
    public name: string;
    public weapons: Array<Item>;

    constructor(id, pos, name = 'Shop') {
        this.pos = pos;
        this.name = name;
        this.shape = new alt.Checkpoint(0, pos.x, pos.y, pos.z - 0.5, 2, 2, 255, 0, 0, 255);
        this.id = id;
        alt.on('entityEnterColshape', this.handlePlayerEnter);
        alt.on('entityLeaveColshape', this.handlePlayerLeave);

        this.weapons = [];
        this.itemsInit();
    }

    handlePlayerEnter = (shape: alt.Colshape, player: alt.Player) => {
        if (shape !== this.shape) return;
        alt.log(`Player ${this.name} ${this.id} weapon shop entered`);
        player.setMeta('shop', this.id);
    }

    handlePlayerLeave = (shape: alt.Colshape, player: alt.Player) => {
        if (shape !== this.shape) return;
        alt.log(`Player ${this.name} ${this.id} weapon shop exit`);
        player.setMeta('shop', null);
    }

    handlePlayerInteract = (player: alt.Player) => {
        if (player.getMeta('shop') === null) return;

        // Это для передачи данных в клиент без ключа use (Нельзя передавать функции клиенту)
        const items = [...this.weapons].map((item: any) => {  return {...item, use:null} })
        alt.emitClient(player, 'show:Shop', items);
    }

    handlePlayerBuy = (player: alt.Player, weapon: string) => {
        alt.log(`Player ${player.name} bought ${weapon}`);

        // // @ts-ignore
        // const item: Item = this.weapons.find((w) => w.name === weapon);
        // if (!item) return;
        // item.use(player);
        player.giveWeapon(alt.hash(weapon), 1000, true);
    }

    itemsInit = () => {
        itemsApi.items.forEach((item) => {
            if (item.tags.includes('shop')) {
                this.weapons.push({...item});
            }
        });
    }
}

class ShopApi {
    public shops: Map<number, Shop>;

    constructor() {
        this.shops = new Map();
    }

    addShop = (shop: Shop) => {
        this.shops.set(shop.id, shop);
    }

    handlePlayerBuy = (player: alt.Player, weapon: string) => {
        if(!player.getMeta('shop')) return;
        // @ts-ignore
        const shop = this.shops.get(player.getMeta('shop'));
        if (!shop) return;
        shop.handlePlayerBuy(player, weapon);
    }

    handlePlayerInteract = (player: alt.Player) => {
        if(!player.getMeta('shop')) return;
        // @ts-ignore
        const shop = this.shops.get(player.getMeta('shop'));
        if (!shop) return;
        shop.handlePlayerInteract(player);
    }
}

const shopApi = new ShopApi();


const shopRU = new Shop(1,{"x":-979.9912109375,"y":-3017.472412109375,"z":13.9296875}, 'Shop RU');
const shopUSA = new Shop(2,{"x":-1630.5494384765625,"y":-3145.595703125,"z":13.980224609375}, 'Shop USA');

shopApi.addShop(shopRU);
shopApi.addShop(shopUSA);

alt.onClient('shop:buy', shopApi.handlePlayerBuy);
alt.onClient('show:interact', shopApi.handlePlayerInteract);
