import {reactive} from 'vue';

export class Store {
    constructor() {
        this.stateData = {};

        this.data = {
            slider: 0,
            sliderChange: new Date().getTime(),
            blocked: false,
            // user: localStorage.user ? JSON.parse(localStorage.user) : {},
        };
        this.stateData = reactive(this.data);
    }

    isBlocked() {
        return this.stateData.blocked;
    }

    setBlock(isBlocked) {
        this.stateData.blocked = isBlocked;
    }

    getSlider() {
        return this.stateData.slider;
    }

    getSliderChange() {
        return this.stateData.sliderChange;
    }

    setSlider(slider) {
        this.stateData.slider = slider;
        this.stateData.sliderChange = new Date().getTime();
    }

    // setUser(user) {
    //     this.stateData.user = user;
    //     localStorage.user = JSON.stringify(user);
    // }
    //
    // getUser() {
    //     return this.stateData.user;
    // }

}

export const store = new Store();
