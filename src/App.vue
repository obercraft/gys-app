<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet} from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
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
</style>