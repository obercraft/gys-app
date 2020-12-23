<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Green Yacht Solution: Ansicht {{ $filters.formatTime(ship.id)}}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="background">
            {{ship}}
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