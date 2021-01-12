<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Green Yacht Solution: Bearbeiten {{ $filters.formatTime(ship.id)}}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="background">
            <ion-slides pager="true" :options="slideOpts" ref="slider">

                <!-- Welche Antriebsform ist verbaut?  -->

                <!-- Welches System soll montiert werden? -->
                <ion-slide>
                    <ion-card>
                        <ion-card-header class="cardheader">
                            <ion-card-title class="cardtitle">
                                Welche Antriebsform ist verbaut?
                            </ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <toggle-button v-model:target="ship.propulsion"
                                           :buttons="propulsionButtons" />
                            <ion-list>
                                <ion-item-group>
                                <ion-item-divider class="divider">
                                    <ion-label>Welches System soll montiert werden?</ion-label>
                                </ion-item-divider>


                                <ion-radio-group v-model="ship.system">
                                    <!--
                                    <ion-item>
                                        <ion-radio value="Green Yacht Solution"></ion-radio>
                                        <ion-label>Green Yacht Solution</ion-label>
                                        <ion-button @click="open('info1.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>
                                    -->

                                    <ion-item v-show="green || red">
                                        <ion-radio value="Oceanvolt"></ion-radio>
                                        <ion-label>Oceanvolt</ion-label>
                                        <ion-button @click="open('info2.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>

                                    <ion-item v-show="green">
                                        <ion-radio value="Waterworld"></ion-radio>
                                        <ion-label>Waterworld</ion-label>
                                        <ion-button @click="open('info3.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>

                                    <ion-item v-show="green || red">
                                        <ion-radio value="Torqeedo"></ion-radio>
                                        <ion-label>Torqeedo</ion-label>
                                        <ion-button @click="open('info4.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>

                                </ion-radio-group>
                                <ion-item>
                                    <ion-label>Anderer</ion-label>
                                    <ion-input v-model="ship.systemName"></ion-input>
                                </ion-item>
                                </ion-item-group>
                            </ion-list>

                        </ion-card-content>
                    </ion-card>
                </ion-slide>

                <!-- Wie viel kW wird benötigt? -->
                <ion-slide>
                    <ion-card>
                        <ion-card-header class="cardheader">
                            <ion-card-title class="cardtitle">
                                Wie viel kW wird benötigt?
                            </ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-list>
                                <ion-item>
                                    <ion-label>Bootslänge</ion-label>
                                    <ion-input type="number" v-model="ship.length"></ion-input>
                                    m
                                </ion-item>
                                <ion-item>
                                    <ion-label>Bootsbreite</ion-label>
                                    <ion-input type="number" v-model="ship.width"></ion-input>
                                    m
                                </ion-item>
                                <ion-item>
                                    <ion-label>Bugstrahl</ion-label>
                                    <toggle-button v-model:target="ship.bowStream"
                                                   :buttons="yesnoButtons"></toggle-button>
                                </ion-item>
                                <ion-item>
                                    <ion-label>Ankerwinde</ion-label>
                                    <toggle-button v-model:target="ship.anchor"
                                                   :buttons="yesnoButtons"></toggle-button>
                                </ion-item>

                                <ion-item>
                                    <ion-label>Gewicht</ion-label>
                                    <ion-input type="number" v-model="ship.weight"></ion-input>
                                    kg
                                </ion-item>

                                <ion-item>
                                    <ion-label>Verdrängung</ion-label>
                                    <ion-input type="number" v-model="ship.suppression"></ion-input>
                                    kg
                                </ion-item>

                                <ion-item>
                                    <ion-label>Leistung aktueller Motor</ion-label>
                                    <ion-input type="number" v-model="ship.currentPower"></ion-input>
                                    kW
                                </ion-item>

                            </ion-list>

                        </ion-card-content>
                    </ion-card>
                </ion-slide>

                <!-- Wie viel Energie muss gespeichert werden können? -->
                <ion-slide>
                    <ion-card>
                        <ion-card-header class="cardheader">
                            <ion-card-title class="cardtitle">
                                Batterie-Art
                            </ion-card-title>
                        </ion-card-header>
                        <ion-card-content>

                            <toggle-button v-model:target="ship.batteryType"
                                           :buttons="batteryTypeButtons"></toggle-button>
                            <ion-list>

                                <ion-item-group>
                                    <ion-item-divider class="divider">
                                        <ion-label>Batterie-Hersteller</ion-label>
                                    </ion-item-divider>
                                    <ion-radio-group v-model="ship.batteryBrand">
                                        <ion-item v-show="blue || orange">
                                            <ion-radio value="Victron"></ion-radio>
                                            <ion-label>Victron</ion-label>
                                            <ion-button @click="open('batt1.pdf')">
                                                <ion-icon name="information"></ion-icon>
                                            </ion-button>
                                        </ion-item>

                                        <ion-item v-show="orange">
                                            <ion-radio value="Torqueedo"></ion-radio>
                                            <ion-label>Torqueedo</ion-label>
                                            <ion-button @click="open('batt2.pdf')">
                                                <ion-icon name="information"></ion-icon>
                                            </ion-button>
                                        </ion-item>

                                        <ion-item v-show="orange">
                                            <ion-radio value="CS-Batteries"></ion-radio>
                                            <ion-label>CS-Batteries</ion-label>
                                            <ion-button @click="open('batt3.pdf')">
                                                <ion-icon name="information"></ion-icon>
                                            </ion-button>
                                        </ion-item>

                                        <ion-item v-show="blue">
                                            <ion-radio value="Aquamot"></ion-radio>
                                            <ion-label>Aquamot</ion-label>
                                            <ion-button @click="open('batt3.pdf')">
                                                <ion-icon name="information"></ion-icon>
                                            </ion-button>
                                        </ion-item>

                                    </ion-radio-group>

                                    <ion-item>
                                        <ion-label>Anderer</ion-label>
                                        <ion-input v-model="ship.batteryBrandName"></ion-input>
                                    </ion-item>
                                </ion-item-group>


                                <ion-item-group>
                                    <ion-item-divider class="divider">
                                        <ion-label>Wie weit und lange soll man
                                            fahren können?&nbsp;
                                        </ion-label>
                                    </ion-item-divider>

                                    <ion-item>
                                        <ion-label>Zeit</ion-label>
                                        <ion-input type="number" v-model="ship.runTime"></ion-input>
                                        Std.
                                    </ion-item>

                                    <ion-item>
                                        <ion-label>Strecke</ion-label>
                                        <ion-input type="number" v-model="ship.runLength"></ion-input>
                                        sm
                                    </ion-item>

                                </ion-item-group>

                                <ion-item-group>
                                    <ion-item-divider class="divider">
                                        <ion-label>
                                            Welche Verbraucher sind noch an Bord?
                                        </ion-label>
                                    </ion-item-divider>
                                    <ion-item>
                                        <ion-textarea v-model="ship.batteryOther"></ion-textarea>
                                    </ion-item>

                                </ion-item-group>
                            </ion-list>
                        </ion-card-content>
                    </ion-card>
                </ion-slide>

                <!-- Batterie-Management -->
                <ion-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-title>
                                Batterie-Management
                            </ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-list>
                                <ion-list-header>
                                    <ion-label>Batterieladeanzeigen</ion-label>
                                </ion-list-header>
                                <ion-radio-group v-model="ship.batteryDisplay">
                                    <ion-item>
                                        <ion-radio value="Sterling Power"></ion-radio>
                                        <ion-label>Sterling Power</ion-label>
                                    </ion-item>

                                    <ion-item>
                                        <ion-radio value="Mastervolt"></ion-radio>
                                        <ion-label>Mastervolt</ion-label>
                                    </ion-item>

                                    <ion-item>
                                        <ion-radio value="Waterworld"></ion-radio>
                                        <ion-label>Waterworld</ion-label>
                                    </ion-item>
                                </ion-radio-group>

                                <ion-item>
                                    <ion-label>Anderer</ion-label>
                                    <ion-input v-model="ship.batteryDisplayName"></ion-input>
                                </ion-item>

                            </ion-list>

                            <ion-list>
                                <ion-item>
                                    <ion-label>BMS vom Antriebshersteller</ion-label>
                                    <ion-select v-model="ship.bms">
                                        <ion-select-option>Ja</ion-select-option>
                                        <ion-select-option>Nein</ion-select-option>
                                    </ion-select>
                                </ion-item>

                                <ion-item>
                                    <ion-label>Muss ein Batterietrennsystem vorhanden sein?</ion-label>
                                    <ion-select v-model="ship.btsExist">
                                        <ion-select-option>Ja</ion-select-option>
                                        <ion-select-option>Nein</ion-select-option>
                                    </ion-select>
                                </ion-item>

                                <ion-item>
                                    <ion-label>Gibt es ein Can-Bus an Bord?</ion-label>
                                    <ion-select v-model="ship.canBus">
                                        <ion-select-option>Ja</ion-select-option>
                                        <ion-select-option>Nein</ion-select-option>
                                    </ion-select>
                                </ion-item>

                                <ion-item>
                                    <ion-label>Soll über Bluetooth Daten übermittelt werden?</ion-label>
                                    <ion-select v-model="ship.bluetooth">
                                        <ion-select-option>Ja</ion-select-option>
                                        <ion-select-option>Nein</ion-select-option>
                                    </ion-select>
                                </ion-item>


                            </ion-list>
                        </ion-card-content>
                    </ion-card>
                </ion-slide>

                <!-- Ladesysteme und Bordspannung -->
                <ion-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-title>
                                Ladesysteme und Bordspannung
                            </ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-list>
                                <ion-list-header>
                                    <ion-title>Welche Lademöglichkeiten sollen genutzt werden?</ion-title>
                                </ion-list-header>

                                <ion-radio-group v-model="ship.loadSystem">
                                    <ion-item>
                                        <ion-radio value="Solar"></ion-radio>
                                        <ion-label>Solar</ion-label>
                                        <ion-button @click="open('load1.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>

                                    <ion-item>
                                        <ion-radio value="Landstrom"></ion-radio>
                                        <ion-label>Landstrom</ion-label>
                                        <ion-button @click="open('load2.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>

                                    <ion-item>
                                        <ion-radio value="Windgenerator"></ion-radio>
                                        <ion-label>Windgenerator</ion-label>
                                        <ion-button @click="open('load3.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>

                                </ion-radio-group>
                                <ion-item>
                                    <ion-label>Wird ein Wechselrichter für 220V benötigt?</ion-label>
                                    <ion-select v-model="ship.switchPower" placeholder="Wechselrichter?">
                                        <ion-select-option>Ja</ion-select-option>
                                        <ion-select-option>Nein</ion-select-option>
                                    </ion-select>
                                </ion-item>

                            </ion-list>
                            <ion-list>
                                <ion-list-header>
                                    <ion-title>Wie viel Leistung wird für 12V benötigt?</ion-title>
                                </ion-list-header>
                                <ion-item>
                                    <ion-label></ion-label>
                                    <ion-input type="number" v-model="ship.power12V"></ion-input>
                                    kW
                                </ion-item>
                            </ion-list>

                            <ion-list>
                                <ion-list-header>
                                    <ion-title>Ist die Beleuchtung auf LED umgerüstet und gibt es weitere
                                        Einsparmöglichkeiten?
                                    </ion-title>
                                </ion-list-header>


                                <ion-item>
                                    <ion-label></ion-label>
                                    <ion-input type="number" v-model="ship.powerSave"></ion-input>
                                    kW
                                </ion-item>


                            </ion-list>

                        </ion-card-content>
                    </ion-card>
                </ion-slide>

                <!-- Instrumente -->
                <ion-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-title>
                                Instrumente
                            </ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-list>
                                <ion-list-header>
                                    <ion-title>Wo sollen Instrumente installiert werden?</ion-title>
                                </ion-list-header>

                                <ion-item>
                                    <ion-label>Steuerstand</ion-label>
                                    <ion-select v-model="ship.instrumentSteering" placeholder="Steuerstand?">
                                        <ion-select-option>Ja</ion-select-option>
                                        <ion-select-option>Nein</ion-select-option>
                                    </ion-select>
                                </ion-item>

                                <ion-item>
                                    <ion-label>Innenraum</ion-label>
                                    <ion-select v-model="ship.instrumentInnerRoom" placeholder="Innenraum?">
                                        <ion-select-option>Ja</ion-select-option>
                                        <ion-select-option>Nein</ion-select-option>
                                    </ion-select>
                                </ion-item>

                                <ion-item>
                                    <ion-label>Niedergang</ion-label>
                                    <ion-select v-model="ship.instrumentDescent" placeholder="Niedergang?">
                                        <ion-select-option>Ja</ion-select-option>
                                        <ion-select-option>Nein</ion-select-option>
                                    </ion-select>
                                </ion-item>
                            </ion-list>

                            <ion-list>
                                <ion-list-header>
                                    <ion-title>Welches System ist schon an Bord?</ion-title>
                                </ion-list-header>

                                <ion-radio-group v-model="ship.instrumentSystem">
                                    <ion-item>
                                        <ion-radio value="Garmin"></ion-radio>
                                        <ion-label>Garmin</ion-label>
                                        <ion-button @click="open('instrument1.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>

                                    <ion-item>
                                        <ion-radio value="B&amp;G"></ion-radio>
                                        <ion-label>B&amp;G</ion-label>
                                        <ion-button @click="open('instrument2.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>

                                    <ion-item>
                                        <ion-radio value="Raymarine"></ion-radio>
                                        <ion-label>Raymarine</ion-label>
                                        <ion-button @click="open('instrument3.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label>Anderes</ion-label>
                                        <ion-input v-model="ship.instrumentName"></ion-input>
                                    </ion-item>

                                </ion-radio-group>
                            </ion-list>

                        </ion-card-content>
                    </ion-card>
                </ion-slide>

                <!-- Fahrhebel -->
                <ion-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-title>
                                Soll der aktuelle Fahrhebel genutzt und somit umgebaut werden?
                            </ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <toggle-button v-model:target="ship.driver"
                                           :buttons="yesnoButtons"></toggle-button>

                            <ion-list v-show="ship.driver === 'Nein'">

                                <ion-list-header>
                                    <ion-title>Alternative</ion-title>
                                </ion-list-header>

                                <ion-radio-group v-model="ship.driverSystem">
                                    <ion-item>
                                        <ion-radio value="Green Yacht Solution"></ion-radio>
                                        <ion-label>Green Yacht Solution</ion-label>
                                        <ion-button @click="open('driver1.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>

                                    <ion-item>
                                        <ion-radio value="Oceanvolt"></ion-radio>
                                        <ion-label>Oceanvolt</ion-label>
                                        <ion-button @click="open('driver2.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>

                                    <ion-item>
                                        <ion-radio value="Torqeedo"></ion-radio>
                                        <ion-label>Torqeedo</ion-label>
                                        <ion-button @click="open('driver3.pdf')">
                                            <ion-icon name="information"></ion-icon>
                                        </ion-button>
                                    </ion-item>
                                </ion-radio-group>
                            </ion-list>

                        </ion-card-content>
                    </ion-card>
                </ion-slide>

                <!-- Preisvorstellung -->
                <ion-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-title>
                                Preisvorstellung
                            </ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-list>
                                <ion-item>
                                    <ion-label>Wie hoch ist das Budget?</ion-label>
                                    <ion-input type="number" v-model="ship.budget"></ion-input>
                                    &euro;
                                </ion-item>
                            </ion-list>
                        </ion-card-content>
                    </ion-card>
                </ion-slide>

                <!-- Maßaufnahme des Motorfundaments -->
                <ion-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-title>
                                Maßaufnahme des Motorfundaments {{ship.propulsion}}
                            </ion-card-title>
                        </ion-card-header>

                        <ion-card-content v-show="green">
                            <ion-list>
                                <ion-item>
                                    <ion-title>Winkel Gerade Motorfundament und Propellerwelle</ion-title>
                                </ion-item>
                                <ion-item>
                                    <ion-input type="number" v-model="ship.engineDegree"></ion-input>
                                    &deg;Grad
                                </ion-item>

                                <ion-item>
                                    <ion-title>Motorraum</ion-title>
                                </ion-item>
                                <ion-item>
                                    <ion-label>Höhe</ion-label>
                                    <ion-input type="number" v-model="ship.engineHeight"></ion-input>
                                    mm
                                </ion-item>
                                <ion-item>
                                    <ion-label>Breite</ion-label>
                                    <ion-input type="number" v-model="ship.engineWidth"></ion-input>
                                    mm
                                </ion-item>
                                <ion-item>
                                    <ion-label>Tiefe</ion-label>
                                    <ion-input type="number" v-model="ship.engineDepth"></ion-input>
                                    mm
                                </ion-item>

                                <ion-item>
                                    <ion-title>Fundament</ion-title>
                                </ion-item>
                                <ion-item>
                                    <ion-label>Höhe</ion-label>
                                    <ion-input type="number" v-model="ship.foundationHeight"></ion-input>
                                    mm
                                </ion-item>
                                <ion-item>
                                    <ion-label>Breite</ion-label>
                                    <ion-input type="number" v-model="ship.foundationWidth"></ion-input>
                                    mm
                                </ion-item>
                                <ion-item>
                                    <ion-label>Tiefe</ion-label>
                                    <ion-input type="number" v-model="ship.foundationDepth"></ion-input>
                                    mm
                                </ion-item>

                                <ion-item>
                                    <ion-label>Fundamentstegbreite</ion-label>
                                    <ion-input type="number" v-model="ship.foundationWay"></ion-input>
                                    mm
                                </ion-item>

                                <ion-item>
                                    <ion-label>Wellendurchmesser</ion-label>
                                    <ion-input type="number" v-model="ship.waveDiameter"></ion-input>
                                    mm
                                </ion-item>

                                <ion-item>
                                    <ion-title>Weg Welle zum Anfang Fundament</ion-title>
                                </ion-item>

                                <ion-item>
                                    <ion-input type="number" v-model="ship.waveDiameter"></ion-input>
                                    mm
                                </ion-item>

                                <ion-item>
                                    <ion-title>Fundamentbolzen</ion-title>
                                </ion-item>
                                <ion-item>
                                    <ion-label>Höhe</ion-label>
                                    <ion-input type="number" v-model="ship.foundationBoltHeight"></ion-input>
                                    mm
                                </ion-item>
                                <ion-item>
                                    <ion-label>Breite</ion-label>
                                    <ion-input type="number" v-model="ship.foundationBoltWidth"></ion-input>
                                    mm
                                </ion-item>

                                <ion-item>
                                    <ion-label>Propellerwellendrehzahl</ion-label>
                                    <ion-input type="number" v-model="ship.rpm"></ion-input>
                                    RPM
                                </ion-item>

                            </ion-list>
                        </ion-card-content>

                        <ion-card-content v-show="red">
                            <ion-list>

                                <ion-item>
                                    <ion-title>Motorraum</ion-title>
                                </ion-item>
                                <ion-item>
                                    <ion-label>Höhe</ion-label>
                                    <ion-input type="number" v-model="ship.engineHeight"></ion-input>
                                    mm
                                </ion-item>
                                <ion-item>
                                    <ion-label>Breite</ion-label>
                                    <ion-input type="number" v-model="ship.engineWidth"></ion-input>
                                    mm
                                </ion-item>
                                <ion-item>
                                    <ion-label>Tiefe</ion-label>
                                    <ion-input type="number" v-model="ship.engineDepth"></ion-input>
                                    mm
                                </ion-item>

                                <ion-item>
                                    <ion-title>Fundament</ion-title>
                                </ion-item>
                                <ion-item>
                                    <ion-label>Höhe</ion-label>
                                    <ion-input type="number" v-model="ship.foundationHeight"></ion-input>
                                    mm
                                </ion-item>
                                <ion-item>
                                    <ion-label>Breite</ion-label>
                                    <ion-input type="number" v-model="ship.foundationWidth"></ion-input>
                                    mm
                                </ion-item>
                                <ion-item>
                                    <ion-label>Tiefe</ion-label>
                                    <ion-input type="number" v-model="ship.foundationDepth"></ion-input>
                                    mm
                                </ion-item>

                                <ion-item>
                                    <ion-label>Fundamentstegbreite</ion-label>
                                    <ion-input type="number" v-model="ship.foundationWay"></ion-input>
                                    mm
                                </ion-item>

                                <ion-item>
                                    <ion-title>Getriebehersteller und Typ</ion-title>
                                </ion-item>

                                <ion-item>
                                    <ion-input type="text" v-model="ship.gearFactory"></ion-input>
                                </ion-item>

                            </ion-list>
                        </ion-card-content>

                    </ion-card>
                </ion-slide>


                <!-- Zeitplanung -->
                <ion-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-title>
                                Zeitplanung
                            </ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-list>
                                <ion-list-header>
                                    <ion-title>Zu wann soll das Projekt stattfinden?</ion-title>
                                </ion-list-header>
                                <ion-item>
                                    <ion-label></ion-label>
                                    <ion-input type="date" v-model="ship.timing"></ion-input>
                                </ion-item>
                            </ion-list>
                        </ion-card-content>
                    </ion-card>
                </ion-slide>

                <!--Persönliche Daten-->
                <ion-slide>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-title>
                                Persönliche Daten
                            </ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-list>
                                <ion-item>
                                    <ion-title>Bootsname</ion-title>
                                </ion-item>
                                <ion-item>
                                    <ion-input type="text" v-model="ship.name"></ion-input>
                                </ion-item>
                                <ion-item>
                                    <ion-title>Vor- und Nachname</ion-title>
                                </ion-item>
                                <ion-item>
                                    <ion-input type="text" v-model="ship.fullName"></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-title>Adresse</ion-title>
                                </ion-item>
                                <ion-item>
                                    <ion-input type="text" v-model="ship.address"></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-title>E-Mail</ion-title>
                                </ion-item>
                                <ion-item>
                                    <ion-input type="text" v-model="ship.mail"></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-title>Telefonnummer</ion-title>
                                </ion-item>
                                <ion-item>
                                    <ion-input type="text" v-model="ship.phone"></ion-input>
                                </ion-item>

                                <ion-item>
                                    <ion-title>Hafen und Liegeplatz</ion-title>
                                </ion-item>
                                <ion-item>
                                    <ion-input type="text" v-model="ship.harbor"></ion-input>
                                </ion-item>

                            </ion-list>
                        </ion-card-content>
                    </ion-card>
                </ion-slide>


            </ion-slides>
        </ion-content>
        <ion-fab vertical="bottom" horizontal="end" v-show="!loading">
            <ion-fab-button @click="save()">
                <ion-icon name="save"></ion-icon>
            </ion-fab-button>
        </ion-fab>

    </ion-page>
</template>

<script>
    import {
        IonFab, IonFabButton,
        IonHeader, IonToolbar, IonTitle,
        IonContent,
        IonPage,
        IonSlides,
        IonSlide,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonList,
        IonItem,
        IonLabel,
        IonRadioGroup,
        IonRadio,
        //IonButtons,
        IonButton,
        IonInput,
        IonSelect,
        IonSelectOption,
        IonListHeader,
        IonTextarea,
        IonIcon,
        IonItemDivider,
        IonItemGroup,
        //IonToggle,
        // IonRow, IonCol, IonGrid,
    } from '@ionic/vue';

    import {
        information,
        save,
        arrowBackOutline,
        arrowForwardOutline,
        arrowBackSharp,
        arrowForwardSharp
    } from "ionicons/icons";

    import ToggleButton from "../components/ToggleButton"

    addIcons({information, save, arrowBackOutline, arrowForwardOutline, arrowBackSharp, arrowForwardSharp});

    import {defineComponent, ref} from 'vue';
    import shipStorage from "@/model/shipStorage";
    import documentViewer from "../model/documentViewer";
    import {addIcons} from "ionicons";
    // import {DocumentViewer} from '@ionic-native/document-viewer';


    export default defineComponent({
        name: 'Edit',
        components: {
            IonFab, IonFabButton,
            IonToolbar, IonHeader, IonTitle,
            IonContent,
            IonPage,
            IonSlides,
            IonSlide,
            IonCardHeader,
            IonCardTitle,
            IonCard,
            IonCardContent,
            IonList,
            IonListHeader,
            IonLabel,
            IonItem,
            IonRadio,
            IonRadioGroup,
            //IonButtons,
            IonButton, IonInput, IonIcon,
            IonSelect, IonSelectOption, IonTextarea,
            // IonRow, IonCol, IonGrid,
            //IonToggle
            ToggleButton,
            IonItemDivider,
            IonItemGroup,
        },

        setup() {
            // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
            const slideOpts = {
                initialSlide: 0,
                speed: 400
            };
            const slider = ref(null);
            return {slideOpts, slider};
        },

        data() {
            return {
                ship: {},
                loading: true,
                id: this.$route.params.id,
                propulsionButtons: [
                    {
                        name: "Festpropeller",
                    },
                    {
                        name: "Saildrive",
                    },
                ],
                batteryTypeButtons: [
                    {
                        name: "AGM",
                    },
                    {
                        name: "Lithium-Ionen",
                    },
                ],
                yesnoButtons: [
                    {
                        name: "Ja",
                    },
                    {
                        name: "Nein",
                    },
                ]


            }
        },
        computed: {
            green() {
                return this.ship.propulsion === 'Festpropeller';
            },
            red() {
                return this.ship.propulsion === 'Saildrive';
            },
            blue() {
                return this.ship.batteryType === 'AGM';
            },
            orange() {
                return this.ship.batteryType === 'Lithium-Ionen';
            },
        },
        mounted() {
            this.queryShip(this.$route.params.id);
        },
        watch: {
            'ship.system'(newValue) {
                this.ship.batteryBrand = newValue;
            },
            'ship.systemName'(newValue) {
                this.ship.batteryBrandName = newValue;
            },
        },
        methods:
            {
                queryShip(id) {
                    this.loading.true;
                    shipStorage.getShip("ship_" + id).then(ship => {
                        this.ship = JSON.parse(ship.value);
                    }).finally(() => {
                        this.loading = false;
                    });
                }
                ,
                save() {
                    shipStorage.addShip(this.ship);
                    this.$router.push({name: "Preview", params: {id: this.ship.id, preview: new Date().getTime()}});
                }
                ,
                back() {
                    this.slider.$el.getActiveIndex().then(response => {
                        let index = parseInt(response) - 1;
                        if (index >= 0) {
                            this.slider.$el.slideTo(index);
                        }
                    });

                }
                ,
                next() {
                    this.slider.$el.getActiveIndex().then(response => {
                        let index = parseInt(response) + 1;
                        this.slider.$el.slideTo(index);
                    });
                },
                open(url) {
                    //window.open(encodeURI(url),"_system","location=yes");
                    console.log(url);
                    documentViewer.preview();
                }
            }

    })
    ;
</script>

<style scoped>
</style>