import * as alt from 'alt-server';
import { Vehicle, vehiclesApi } from '../vehicles';

class VehiclesShop {
    public id: number;
    public position: alt.Vector3;
    public spawnPosition: alt.Vector3;
    public type: string;
    public name: string;
    public shape: alt.Checkpoint;

    /**
     *
     * @param id
     * @param position
     * @param spawnPosition
     * @param type
     * @param name
     */
    constructor(id, position, spawnPosition, type, name = 'Shop') {
        this.position = position;
        this.spawnPosition = spawnPosition;
        this.type = type;
        this.name = name;
        this.shape = new alt.Checkpoint(60, position.x, position.y, position.z - 0.5, 2, 2, 255, 0, 0, 255);
        this.id = id;
        alt.on('entityEnterColshape', this.handlePlayerEnter);
        alt.on('entityLeaveColshape', this.handlePlayerLeave);
    }

    spawnVehicle = async (player: alt.Player, vehicle: Vehicle) => {
        player.pos = this.spawnPosition;
        console.log('spawnVehicle', vehicle);
        const veh = new alt.Vehicle(alt.hash(vehicle.model), this.spawnPosition.x, this.spawnPosition.y, this.spawnPosition.z, 0, 0, 0);
        player.setIntoVehicle(veh, 1);
        alt.emitClient(player, 'hide:vehicle:shop');
    };

    handlePlayerEnter = (shape: alt.Colshape, player: alt.Player) => {
        if (shape !== this.shape) return;
        console.log(`Player ${this.name} entered shop`);
        player.setMeta('vehicle_shop', this.id);
    };

    handlePlayerLeave = (shape: alt.Colshape, player: alt.Player) => {
        if (shape !== this.shape) return;
        console.log(`Player ${this.name} exit shop`);
        player.setMeta('vehicle_shop', null);
        alt.emitClient(player, 'hide:vehicle:shop');
    };
}

class VehiclesShopApi {
    public shops: any;

    constructor() {
        this.shops = new Map();
    }

    handlePlayerBuy = (player: alt.Player, vehicle: string) => {
        alt.log(`Player ${player.name} bought ${vehicle}`);
        if (!player.getMeta('vehicle_shop')) return;
        const veh = vehiclesApi.getVehicleByName(vehicle);
        if (!veh) console.log('Vehicle not found');

        this.shops.get(player.getMeta('vehicle_shop')).spawnVehicle(player, veh);
    };

    handlePlayerInteract = (player: alt.Player) => {
        if (!player.getMeta('vehicle_shop')) return;
        alt.emitClient(player, 'show:vehicle:shop', [...vehiclesApi.vehicles]);
    };

    addShop = (shop: VehiclesShop) => {
        this.shops.set(shop.id, shop);
    };

}

const vehiclesShopApi = new VehiclesShopApi();

const shopRu = new VehiclesShop(1, new alt.Vector3(-965.8153686523438, -3009.82421875, 13.9296875), new alt.Vector3(-990.1318359375, -2990.716552734375, 13.9296875), 'car', 'Car Shop RU');
const shopUSA = new VehiclesShop(2, new alt.Vector3(-1635.8505859375, -3152.993408203125, 13.980224609375), new alt.Vector3(-1643.85498046875, -3123.7978515625, 13.980224609375), 'car', 'Car Shop USA');
vehiclesShopApi.addShop(shopRu);
vehiclesShopApi.addShop(shopUSA);

alt.onClient('server:vehicle:buy', vehiclesShopApi.handlePlayerBuy);
alt.onClient('server:vehicle:interact', vehiclesShopApi.handlePlayerInteract);
