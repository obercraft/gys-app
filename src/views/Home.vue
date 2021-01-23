<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="openMenu()"
            ><ion-icon name="menu"></ion-icon
          ></ion-button>
        </ion-buttons>
        <ion-title>Green Yacht Solution: Projekte</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding class="background">
      <ion-list
        v-for="ship in ships"
        v-bind:key="ship"
        v-show="ships.length > 0"
      >
        <ion-item>
          <ion-avatar slot="start">
            <img src="../assets/ship.png" />
          </ion-avatar>
          <ion-label v-show="ship.name">
            <h2>{{ ship.name }}</h2>
            <p>{{ $filters.formatTime(ship.id) }}</p>
          </ion-label>
          <ion-label v-show="!ship.name">
            {{ $filters.formatTime(ship.id) }}
          </ion-label>

          <ion-buttons>
            <ion-button @click="viewShip(ship.id)">
              <ion-icon name="document"></ion-icon>
            </ion-button>

            <ion-button @click="editShip(ship.id)">
              <ion-icon name="pencil"></ion-icon>
            </ion-button>

            <ion-button @click="removeShip(ship)">
              <ion-icon name="trash"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-item>
      </ion-list>

      <div v-show="!ships || ships.length == 0">keine Schiffe gefunden</div>

      <ion-fab vertical="bottom" horizontal="end">
        <!-- <ion-fab-button @click="addShip"> -->
        <ion-fab-button @click="addShip()">
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  alertController,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonPage,
  IonList,
  IonFabButton,
  IonFab,
  IonLabel,
  IonItem,
  IonAvatar,
  IonIcon,
  IonButtons,
  IonButton,
  menuController,
} from "@ionic/vue";
import { defineComponent } from "vue";

import { addIcons } from "ionicons";
// import { add, map, warning, earth } from "ionicons/icons";
import {
  add,
  pencil,
  trash,
  documentTextSharp,
  documentText,
  documentSharp,
  document,
  menu,
} from "ionicons/icons";

import shipStorage from "../model/shipStorage";

addIcons({
  add,
  pencil,
  trash,
  documentTextSharp,
  documentText,
  documentSharp,
  document,
  menu,
});

export default defineComponent({
  name: "Home",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonFab,
    IonFabButton,
    IonLabel,
    IonItem,
    IonAvatar,
    IonIcon,
    IonButton,
    IonButtons,
  },
  data() {
    return {
      ships: [],
      directories: [],
      applicationDirectory: [],
    };
  },
  mounted() {
    this.queryShips();
  },
  watch: {
    "$route.params.saved": function () {
      this.queryShips();
    },
  },
  methods: {
    loadDiretory(name, dir) {
      this.directories.push(name + "=>" + dir);
      if (name) {
        
        File.listDir(name, dir)
          .then((entries) => {
              let data = {
                  name: name,
                  entries: [],
              }
            
            entries.forEach(entry => {
                data.entries.push(entry.name);
                if (entry.isDirectory) {
                    this.loadDiretory(name, entry.name);
                }
            });
            
            this.applicationDirectory.push(data);            
          })
          .catch((error) => {
                this.applicationDirectory.push({
                    name: name,
                    error: error,
            });

          })
          .finally(() => {
             this.applicationDirectory.push({
                    name: name,
                    done: 'done',
            });
          });
      }
    },
    queryShips() {
      this.ships = [];
      shipStorage.getShips().then((response) => {
        for (let i = 0; i < response.keys.length; i++) {
          let key = response.keys[i];
          if (key.startsWith("ship_")) {
            shipStorage.getShip(key).then((ship) => {
              this.ships.push(JSON.parse(ship.value));
              //this.ships.push(shipStorage.getShip(key));
            });
          }
        }
      });
    },
    removeShip(ship) {
      let id = ship.id;
      let header = ship.name || "Projekt vom " + this.$filters.formatTime(id);
      alertController
        .create({
          header: header + " löschen?",
          buttons: [
            {
              text: "Nein",
              role: "cancel",
              cssClass: "secondary",
              handler: () => {
                // empty
              },
            },
            {
              text: "Ja",
              handler: () => {
                shipStorage.removeShip(id);
                this.queryShips();
              },
            },
          ],
        })
        .then((response) => {
          response.present();
        });
    },
    viewShip(id) {
      this.$router.push({
        name: "Preview",
        params: {
          id: id,
        },
      });
    },

    editShip(id) {
      this.$router.push({
        name: "Edit",
        params: {
          id: id,
        },
      });
    },
    openMenu() {
      menuController.enable(true, "mainmenu");
      menuController.open("mainmenu");
    },
    addShip() {
      let ship = shipStorage.createShip();
      shipStorage.addShip(ship).then(() => {
        menuController.close("mainmenu");
        this.$router.push({
          name: "Edit",
          params: {
            id: ship.id,
          },
        });
      });
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>