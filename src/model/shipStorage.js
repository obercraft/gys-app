import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

export default {
    createShip() {
        return {
            id: new Date().getTime(),
            name: "",
            propulsion: "Festpropeller",
            batteryType: "AGM",
            bowStream: "Nein",
            anchor: "Nein"
        };
    },
    addShip(ship) {

        return Storage.set({key: "ship_"  + ship.id, value: JSON.stringify(ship)});
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