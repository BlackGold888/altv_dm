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
itemsApi.addItem(new Weapon(5, 'revolver mk2', 'weapon_revolver_mk2', 999, null, 'weapon_revolver_mk2', ['shop']));
itemsApi.addItem(new Weapon(5, 'heavysniper mk2', 'weapon_heavysniper_mk2', 999, null, 'weapon_heavysniper_mk2', ['shop']));
itemsApi.addItem(new Weapon(5, 'minigun', 'weapon_minigun', 999, null, 'weapon_minigun', ['shop']));
itemsApi.addItem(new Weapon(5, 'rpg', 'weapon_rpg', 999, null, 'weapon_rpg', ['shop']));
itemsApi.addItem(new Weapon(5, 'grenadelauncher', 'weapon_grenadelauncher', 999, null, 'weapon_grenadelauncher', ['shop']));
itemsApi.addItem(new Weapon(5, 'grenadelauncher smoke', 'weapon_grenadelauncher_smoke', 999, null, 'weapon_grenadelauncher_smoke', ['shop']));
itemsApi.addItem(new Weapon(5, 'smokegrenade', 'weapon_smokegrenade', 999, null, 'weapon_smokegrenade', ['shop']));
itemsApi.addItem(new Weapon(5, 'molotov', 'weapon_molotov', 999, null, 'weapon_molotov', ['shop']));
itemsApi.addItem(new Weapon(5, 'bzgas', 'weapon_bzgas', 999, null, 'weapon_bzgas', ['shop']));
itemsApi.addItem(new Weapon(5, 'hominglauncher', 'weapon_hominglauncher', 999, null, 'weapon_hominglauncher', ['shop']));
itemsApi.addItem(new Weapon(5, 'sniperrifle', 'weapon_sniperrifle', 999, null, 'weapon_sniperrifle', ['shop']));
itemsApi.addItem(new Weapon(5, 'heavysniper', 'weapon_heavysniper', 999, null, 'weapon_heavysniper', ['shop']));
itemsApi.addItem(new Weapon(5, 'heavysniper mk2', 'weapon_heavysniper_mk2', 999, null, 'weapon_heavysniper_mk2', ['shop']));
itemsApi.addItem(new Weapon(5, 'marksmanrifle', 'weapon_marksmanrifle', 999, null, 'weapon_marksmanrifle', ['shop']));
itemsApi.addItem(new Weapon(5, 'marksmanrifle mk2', 'weapon_marksmanrifle_mk2', 999, null, 'weapon_marksmanrifle_mk2', ['shop']));
itemsApi.addItem(new Weapon(5, 'precisionrifle', 'weapon_precisionrifle', 999, null, 'weapon_precisionrifle', ['shop']));
itemsApi.addItem(new Weapon(5, 'assaultrifle', 'weapon_assaultrifle', 999, null, 'weapon_assaultrifle', ['shop']));
itemsApi.addItem(new Weapon(5, 'assaultrifle mk2', 'weapon_assaultrifle_mk2', 999, null, 'weapon_assaultrifle_mk2', ['shop']));
itemsApi.addItem(new Weapon(5, 'specialcarbine', 'weapon_specialcarbine', 999, null, 'weapon_specialcarbine', ['shop']));
itemsApi.addItem(new Weapon(5, 'heavyrifle', 'weapon_heavyrifle', 999, null, 'weapon_heavyrifle', ['shop']));
itemsApi.addItem(new Weapon(5, 'stone hatchet', 'weapon_stone_hatchet', 999, null, 'weapon_stone_hatchet', ['shop']));
itemsApi.addItem(new Weapon(5, 'rpg', 'weapon_rpg', 999, null, 'weapon_rpg', ['shop']));
itemsApi.addItem(new Weapon(5, 'railgun', 'weapon_railgun', 999, null, 'weapon_railgun', ['shop']));
itemsApi.addItem(new Weapon(5, 'raypistol', 'weapon_raypistol', 999, null, 'weapon_raypistol', ['shop']));
itemsApi.addItem(new Weapon(5, 'machete', 'weapon_machete', 999, null, 'weapon_machete', ['shop']));

