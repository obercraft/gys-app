<template>
    <ion-grid>
        <ion-row>
            <ion-col class="ion-align-self-center">
                <ion-button
                        style="text-transform:none"
                        v-for="button in buttons"
                        :key="button"
                        :color="getColor(button)"
                        :fill="getFill(button)"
                        @click="setButton(button)"
                >{{ button.name }}
                </ion-button>
            </ion-col>

        </ion-row>
    </ion-grid>
</template>

<script>
    import {IonButton, IonGrid, IonCol, IonRow} from "@ionic/vue";

    export default {
        name: "ToggleButton",
        components: {IonButton, IonGrid, IonCol, IonRow},
        props: ["target", "buttons", "ship"],
        data() {
            return {
                selected: {},
            };
        },
        mounted() {
            this.initButtons(this.target);
        },
        watch: {
            'target'(newValue) {
                this.initButtons(newValue);
            }
        },
        methods: {
            initButtons(defaultName) {
                this.selected = this.buttons[0];
                this.buttons.forEach(button => {
                    if (button.name === defaultName) {
                        this.selected = button;
                    }
                })

            },
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
                this.$emit('update:target', button.name);
            },
        },
    };
</script>