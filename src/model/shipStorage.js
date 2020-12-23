import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

export default {
    addShip(ship) {

        Storage.set({key: "ship_"  + ship.id, value: JSON.stringify(ship)});
    },
    getShip(id) {
        return Storage.get({key: id});
    },
    removeShip(id) {
        Storage.remove({key: "ship_" + id});
    },
    getShips() {
        return Storage.keys();
    }
}