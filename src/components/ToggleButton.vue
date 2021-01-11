<template>
  <ion-buttons>
    <ion-button
     style="text-transform:none"
      v-for="button in buttons"
      :key="button"
      :color="getColor(button)"
      :fill="getFill(button)"
      @click="setButton(button)"
      >{{ button.name }}
    </ion-button>
  </ion-buttons>
</template>

<script>
import { IonButtons, IonButton } from "@ionic/vue";
export default {
  name: "ToggleButton",
  components: {IonButtons, IonButton},
  props: {
      value: String,
    // buttons: Array,
  },
  data() {
    return {
      buttons: [
        {
          name: "Festpropeller",
        },
        {
          name: "Saildrive",
        },
      ],
      selected: {},
    };
  },
  mounted() {
    this.selected = this.buttons[0];
    this.buttons.forEach(button => {
        if (button.name === this.value) {
            this.selected = button;
        }
    })
    
  },
  methods: {
    getColor(button) {
      return button && this.selected && this.selected.name && button.name == this.selected.name
        ? "primary"
        : "secondary";
    },
    getFill(button) {
      return button && this.selected && this.selected.name && button.name == this.selected.name
        ? "solid"
        : "outline";
    },

    setButton(button) {
        this.selected = button;
        this.$emit('change', button.name);
    }
  },
};
</script>