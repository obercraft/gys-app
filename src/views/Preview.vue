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
                    <div v-for="(category, index) in categories" :key="category">
                        <ion-list>
                            <ion-item-group>
                                <ion-list-header class="cardheader">
                                    <ion-label>{{category}}</ion-label>
                                </ion-list-header>

                                <ion-item v-for="data in getData(index, ship)" :key="data" v-show="data.show">
                                    <ion-label>{{data.label}}:
                                        <span v-if="data.value">
                                            {{data.value}} {{data.unit}}
                                        </span>
                                        <span v-else>-/-</span>
                                    </ion-label>
                                </ion-item>
                            </ion-item-group>
                        </ion-list>
                    </div>
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
        IonList, IonListHeader,
        IonItem,
        IonLabel,
        //IonItemDivider,
        IonItemGroup,
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
    import {categories, descriptions} from "../model/configuration";


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
            IonItem, IonListHeader, IonItemGroup,
            IonLabel,
        },


        data() {
            return {
                categories: categories,
                descriptions: descriptions,
                ship: {},
                id: this.$route.params.id,
            }
        },
        mounted() {
            this.queryShip(this.$route.params.id);
        },
        computed: {},
        watch: {
            '$route.params.preview': function () {
                if (this.$route.params.id) {
                    this.queryShip(this.$route.params.id);
                }
            },
        },
        methods:
            {
                getData(categoryId, ship) {
                    let data = [];
                    descriptions.forEach(description => {
                        if (description.categoryId == categoryId) {
                            let value = description.computed ? description.computed(ship) : ship[description.key];
                            let show = true;
                            if (description.show) {
                                show = description.show(ship);
                            }
                            data.push({
                                label: description.label,
                                unit: description.unit,
                                value: value,
                                show: show,
                            });
                        }
                    });
                    return data;
                },
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