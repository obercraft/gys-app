<template>
    <ion-app>
        <ion-router-outlet id="main"/>
        <ion-menu side="start" menu-id="mainmenu" content-id="main">
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>{{appData.name}}</ion-title>
                    <ion-buttons slot="end">
                        <ion-button>{{appData.version}}</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item button @click="addShip()">
                        <ion-label>
                            Neues Projekt
                        </ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>

        <ion-menu side="start" menu-id="editmenu" content-id="main">
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>{{appData.name}}</ion-title>
                    <ion-buttons slot="end">
                        <ion-button>{{appData.version}}</ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item button @click="gotoSlide(0)">
                        <ion-label>
                            Antriebsform
                        </ion-label>
                    </ion-item>

                    <ion-item button @click="gotoSlide(1)">
                        <ion-label>
                            Leistung kW
                        </ion-label>
                    </ion-item>

                    <ion-item button @click="gotoSlide(2)">
                        <ion-label>
                            Batterie-Art
                        </ion-label>
                    </ion-item>

                    <ion-item button @click="gotoSlide(3)">
                        <ion-label>
                            Batterie-Managment
                        </ion-label>
                    </ion-item>

                    <ion-item button @click="gotoSlide(4)">
                        <ion-label>
                            Ladesystem
                        </ion-label>
                    </ion-item>

                    <ion-item button @click="gotoSlide(5)">
                        <ion-label>
                            Instrumente
                        </ion-label>
                    </ion-item>

                    <ion-item button @click="gotoSlide(6)">
                        <ion-label>
                            Fahrhebel
                        </ion-label>
                    </ion-item>

                    <ion-item button @click="gotoSlide(7)">
                        <ion-label>
                            Preis
                        </ion-label>
                    </ion-item>

                    <ion-item button @click="gotoSlide(8)">
                        <ion-label>
                            Maße
                        </ion-label>
                    </ion-item>

                    <ion-item button @click="gotoSlide(9)">
                        <ion-label>
                            Zeitplanung
                        </ion-label>
                    </ion-item>

                    <ion-item button @click="gotoSlide(10)">
                        <ion-label>
                            Persönliche Daten
                        </ion-label>
                    </ion-item>



                </ion-list>
            </ion-content>
        </ion-menu>


    </ion-app>

</template>

<script lang="ts">
    import {
        IonApp,
        IonRouterOutlet,
        IonMenu,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonButton, IonButtons,
        menuController,
    } from '@ionic/vue';
    import {defineComponent} from 'vue';
    import shipStorage from "./model/shipStorage";
    import {store} from "@/model/store";

    export default defineComponent({
        name: 'App',
        components: {
            IonApp,
            IonRouterOutlet,
            IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,
            IonButton, IonButtons,
        },
        data() {
            return {
                appData: this.$appData,
            }
        },
        methods: {
            addShip() {
                let ship = shipStorage.createShip();
                shipStorage.addShip(ship).then(() => {
                    menuController.close('mainmenu');
                    this.$router.push({
                        name: "Edit", params: {
                            id: ship.id,
                        }
                    })
                })
            },
            gotoSlide(slideNo) {
                store.setSlider(slideNo);
            }
        }
    });
</script>

<style>

    .background {
        background: url('assets/background.png') no-repeat center fixed;
    }

    .cardheader {
        background: #a1cf90;
        color: white;
    }

    .divider {
        /* background: #617e54; */
        background: #a1cf90;
        color: white;
        /* font-weight: bold; */
    }

    .cardtitle {
        color: white;
    }
    .green {
        color: green;
    }
    .bigslide {
        min-width: 600px;
    }
    .whitespace {
        white-space: normal;
    }
</style>