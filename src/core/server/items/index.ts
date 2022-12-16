import * as alt from 'alt-server';

export class Item {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public drop: any;
    public tags: Array<string>;

    constructor(id, name, description, price, drop, tags = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.drop = drop;
        this.tags = tags;
    }

    use = (player: alt.Player) => {}
}

class Weapon extends Item {
    public hash: string;

    constructor(id, name, description, price, drop, hash, tags = []) {
        super(id, name, description, price, drop, tags);
        this.hash = hash;
    }

    use = (player: alt.Player) => {
        player.giveWeapon(alt.hash(this.hash), 1000, true);
    }
}

class ItemsApi {
    public items: Array<Item>;

    constructor() {
        this.items = [];
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    getItem(id: number) {
        return this.items.find((item) => item.id === id);
    }

    getItemByName(name: string) {
        return this.items.find((item) => item.name === name);
    }
}

export const itemsApi = new ItemsApi();

itemsApi.addItem(new Weapon(1, 'Pistol', 'A pistol', 999, null, 'weapon_pistol', ['shop']));
itemsApi.addItem(new Weapon(2, 'Pistol Combat', 'A pistol', 999, null, 'weapon_combatpistol', ['shop']));
itemsApi.addItem(new Weapon(3, 'Military Rifle', 'Military Rifle', 999, null, 'weapon_militaryrifle', ['shop']));
itemsApi.addItem(new Weapon(4, ' Combat MG Mk II', ' Combat MG Mk II', 999, null, 'weapon_combatmg_mk2', ['shop']));
itemsApi.addItem(new Weapon(5, 'Tactical Rifle', 'Tactical Rifle', 999, null, 'weapon_tacticalrifle', ['shop']));
