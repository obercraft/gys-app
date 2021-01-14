const colors = {
    green(ship) {
        return ship.propulsion === 'Festpropeller';
    },
    red(ship) {
        return ship.propulsion === 'Saildrive';
    },
    blue(ship) {
        return ship.batteryType === 'AGM';
    },
    orange(ship) {
        return ship.batteryType === 'Lithium-Ionen';
    },

};

const categories = [
    "Antriebsform",
    "Leistung kW",
    "Batterie-Art",
    "Batterie-Managment",
    "Ladesystem",
    "Instrumente",
    "Fahrhebel",
    "Preis",
    "Maße",
    "Zeitplanung",
    "Persönliche Daten",

];


const descriptions = [
    {
        label: "Antriebsform",
        key: "propulsion",
        categoryId: 0,
    },
    {
        label: "System",
        key: "system",
        categoryId: 0,
        computed: function (ship) {
            return ship.systemName || ship.system;
        },
    },

    //

    {
        label: "Bootslänge",
        key: "length",
        unit: "m",
        categoryId: 1,
    },
    {
        label: "Bootsbreite",
        key: "width",
        unit: "m",
        categoryId: 1,
    },
    {
        label: "Bugstrahl",
        key: "bowStream",
        categoryId: 1,
    },
    {
        label: "Ankerwinde",
        key: "anchor",
        categoryId: 1,
    },
    {
        label: "Bootsbreite",
        key: "width",
        unit: "m",
        categoryId: 1,
    },
    {
        label: "Gewicht",
        key: "weight",
        unit: "kg",
        categoryId: 1,
    },
    {
        label: "Verdrängung",
        key: "suppression",
        unit: "kg",
        categoryId: 1,
    },
    {
        label: "Leistung aktueller Motor",
        key: "currentPower",
        unit: "kW",
        categoryId: 1,
    },

    //

    {
        label: "Batterie-Art",
        key: "batteryType",
        categoryId: 2,
    },
    {
        label: "Batterie-Hersteller",
        key: "batteryBrand",
        categoryId: 2,
        computed: function (ship) {
            return ship.batteryBrandName || ship.batteryBrand;
        }
    },
    {
        label: "Laufzeit",
        key: "runtime",
        unit: "Std.",
        categoryId: 2,
    },
    {
        label: "Strecke",
        key: "runLength",
        unit: "sm",
        categoryId: 2,
    },
    {
        label: "Welche Verbraucher sind noch an Bord",
        key: "batteryOther",
        categoryId: 2,
    },

    //

    {
        label: "Batterieladeanzeigen",
        key: "batteryDisplay",
        categoryId: 3,
        computed: function (ship) {
            return ship.batteryDisplayName || ship.batteryDisplay;
        }
    },
    {
        label: "BMS vom Antriebshersteller",
        key: "batteryDisplay",
        categoryId: 3,
    },
    {
        label: "Muss ein Batterietrennsystem vorhanden sein",
        key: "btsExist",
        categoryId: 3,
    },
    {
        label: "Muss ein Batterietrennsystem vorhanden sein",
        key: "canBus",
        categoryId: 3,
    },
    {
        label: "Bluetooth",
        key: "bluetooth",
        categoryId: 3,
    },

    //

    {
        label: "Solar",
        key: "solarPower",
        categoryId: 4,
    },
    {
        label: "Landstrom",
        key: "landPower",
        categoryId: 4,
    },
    {
        label: "Windkraft",
        key: "windPower",
        categoryId: 4,
    },
    {
        label: "Leistung 12V",
        key: "power12V",
        unit: "kW",
        categoryId: 4,
    },
    {
        label: "Einsparmöglichkeiten/LED",
        key: "powerSave",
        unit: "kW",
        categoryId: 4,
    },

    //

    {
        label: "Steuerstand",
        key: "instrumentSteering",
        categoryId: 5,
    },
    {
        label: "Innenraum",
        key: "instrumentInnerRoom",
        categoryId: 5,
    },
    {
        label: "Niedergang",
        key: "instrumentDescent",
        categoryId: 5,
    },
    {
        label: "Instrument-System",
        key: "instrumentSystem",
        categoryId: 5,
        computed: function (ship) {
            return ship.instrumentSystemName || ship.instrumentSystem;
        }
    },

    //

    {
        label: "Fahrhebel-Umbau",
        key: "driver",
        categoryId: 6,
    },

    {
        label: "Fahrhebel-System",
        key: "driverSystem",
        categoryId: 6,
        show: function(ship) {
            return ship.driver === "Nein";
        },
        computed: function (ship) {
            return ship.driverSystemName || ship.driverSystem;
        }
    },

    //

    {
        label: "Budget",
        key: "budget",
        categoryId: 7,
        unit: "€",
    },

    //

    {
        label: "Winkel Gerade Motorfundament und Propellerwelle",
        key: "engineDegree",
        categoryId: 8,
        unit: "Grad",
    },

    {
        label: "Motorraumhöhe",
        key: "engineHeight",
        categoryId: 8,
        unit: "mm",
    },

    {
        label: "Motorraumbreite",
        key: "engineWidth",
        categoryId: 8,
        unit: "mm",
    },

    {
        label: "Motorraumtiefe",
        key: "engineDepth",
        categoryId: 8,
        unit: "mm",
    },

    {
        label: "Fundamenthöhe",
        key: "foundationHeight",
        categoryId: 8,
        unit: "mm",
    },
    {
        label: "Fundamentbreite",
        key: "foundationWidth",
        categoryId: 8,
        unit: "mm",
    },
    {
        label: "Fundamenttiefe",
        key: "foundationDepth",
        categoryId: 8,
        unit: "mm",
    },

    {
        label: "Fundamentstegbreite",
        key: "foundationWay",
        categoryId: 8,
        unit: "mm",
    },
    {
        label: "Wellendurchmesser",
        key: "waveDiameter",
        categoryId: 8,
        unit: "mm",
    },
    {
        label: "Weg Welle zum Anfang Fundament",
        key: "waveFoundationWay",
        categoryId: 8,
        unit: "mm",
    },
    {
        label: "Fundamentbolzenhöhe",
        key: "foundationBoltHeight",
        categoryId: 8,
        unit: "mm",
    },

    {
        label: "Fundamentbolzenbreite",
        key: "foundationBoltWidth",
        categoryId: 8,
        unit: "mm",
    },
    {
        label: "Propellerwellendrehzahl",
        key: "rpm",
        categoryId: 8,
        unit: "RPM",
    },
    {
        label: "Getriebehersteller/Typ",
        key: "gearFactory",
        categoryId: 8,
    },

    //

    {
        label: "Zu wann soll das Projekt stattfinden",
        key: "timing",
        computed: function(ship) {
            if (ship.timing) {
                let timing = ship.timing.split(/-/);
                return timing[2] + '.' +
                timing[1] + '.' + timing[0];
            } else {
                return null;
            }
        },
        categoryId: 9,
    },

    //

    {
        label: "Bootsname",
        key: "name",
        categoryId: 10,
    },
    {
        label: "Vor- und Nachname",
        key: "fullName",
        categoryId: 10,
    },
    {
        label: "Adresse",
        key: "address",
        categoryId: 10,
    },
    {
        label: "E-Mail",
        key: "mail",
        categoryId: 10,
    },
    {
        label: "Telefonnummer",
        key: "phone",
        categoryId: 10,
    },
    {
        label: "Hafen-/Liegeplatz",
        key: "harbor",
        categoryId: 10,
    },
];


export {descriptions, categories, colors};

