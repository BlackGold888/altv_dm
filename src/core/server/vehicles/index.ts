export class Vehicle {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public model: string;
    public tags: Array<string>;
    public type: string;

    constructor(id, name, description, price, model, type, tags = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.model = model;
        this.tags = tags;
        this.type = type;
    }
}

class Car extends Vehicle {
    constructor(id, name, description, price, model, type, tags = []) {
        super(id, name, description, price, model, type, tags);
    }
}

class VehiclesApi{
    public vehicles: any;
    constructor(){
        this.vehicles = [];
    }

    addVehicle(vehicle: Vehicle){
        this.vehicles.push(vehicle);
    }

    removeVehicle(vehicle: Vehicle){
        this.vehicles = this.vehicles.filter(v => v.id !== vehicle.id);
    }

    getVehicleById(id: number){
        return this.vehicles.find((vehicle) => vehicle.id === id);
    }

    getVehicleByName(name: string){
        return this.vehicles.find((vehicle) => vehicle.name === name);
    }
}

export const vehiclesApi = new VehiclesApi();

vehiclesApi.addVehicle(new Car(1, 'Police bike', 'A policeb', 999, 'policeb', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(2, 'Police car', 'A policeb', 999, 'police3', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(3, 'Chernobog', 'Chernobog', 999, 'chernobog', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(4, 'Rhino', 'Rhino', 999, 'rhino', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(4, 'besra', 'besra', 999, 'besra', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(4, 'hunter', 'hunter', 999, 'hunter', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(4, 'khanjali', 'khanjali', 999, 'khanjali', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(4, 'rhino', 'rhino', 999, 'khanjali', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(4, 'halftrack', 'halftrack', 999, 'halftrack', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(4, 'trailersmall2', 'trailersmall2', 999, 'trailersmall2', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(4, 'chernobog', 'chernobog', 999, 'chernobog', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(4, 'insurgent', 'insurgent', 999, 'insurgent', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(4, 'hydra', 'hydra', 999, 'hydra', 'car', ['shop']));
vehiclesApi.addVehicle(new Car(4, 'lazer', 'lazer', 999, 'lazer', 'car', ['shop']));
