<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Green Yacht Solution: Ansicht {{ship.name}} {{ $filters.formatTime(ship.id)}}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="background">
            <ion-card>
                <ion-card-content>
                    <ion-list>
                        <ion-item v-for="d in shipData" :key="d">
                            <ion-label>{{d.name}}:</ion-label>
                            <ion-label>{{d.value}}</ion-label>
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>
        </ion-content>
        <ion-fab vertical="bottom" horizontal="end">
            <ion-fab-button @click="save()">
                <ion-icon name="home"></ion-icon>
            </ion-fab-button>
        </ion-fab>

    </ion-page>
</template>

<script>
    import {
        IonIcon,
        IonFab, IonFabButton,
        IonHeader, IonToolbar, IonTitle,
        IonContent,
        IonPage,
        IonCard,
        IonCardContent,
        IonList,
        IonItem,
        IonLabel
    } from '@ionic/vue';

    import {
        information,
        save,
        arrowBackOutline,
        arrowForwardOutline,
        arrowBackSharp,
        arrowForwardSharp,
        home
    } from "ionicons/icons";

    addIcons({information, save, arrowBackOutline, arrowForwardOutline, arrowBackSharp, arrowForwardSharp, home});

    import {defineComponent} from 'vue';
    import shipStorage from "@/model/shipStorage";
    import {addIcons} from "ionicons";


    export default defineComponent({
        name: 'Preview',
        components: {
            IonIcon,
            IonFab, IonFabButton,
            IonToolbar, IonHeader, IonTitle,
            IonContent,
            IonPage,
            IonCard,
            IonCardContent,
            IonList,
            IonItem,
            IonLabel,
        },


        data() {
            return {
                ship: {},
                id: this.$route.params.id,
            }
        },
        mounted() {
            this.queryShip(this.$route.params.id);
        },
        computed: {
            shipData() {
                let arr = [];
                for (let key in this.ship) {
                    arr.push({name: key, value: this.ship[key]})
                }
                return arr;
            }
        },
        watch: {
            '$route.params.preview': function () {
                console.log("saved " + this.$route.params.id);
                if (this.$route.params.id) {
                    this.queryShip(this.$route.params.id);
                }
            },
        },
        methods:
            {
                queryShip(id) {
                    shipStorage.getShip("ship_" + id).then(ship => {
                        this.ship = JSON.parse(ship.value);
                    });
                },
                save() {
                    this.$router.push({name: "Home", params: {saved: new Date().getTime()}});
                }
            }

    })
    ;
</script>

<style scoped>
</style>