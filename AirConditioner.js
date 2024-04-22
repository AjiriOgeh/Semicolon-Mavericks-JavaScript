class AirConditioner {
    constructor() {
        this.isOn = false;
        this.temperature = 16;
    }

    getIsOn(){
        return this.isOn;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

    increaseTemperature() {
        if (this.isOn == true && this.temperature < 30 && this.temperature >= 16) {
            this.temperature++;
        }
        
    }

    getTemperature() {
        return this.temperature;
    }

    decreaseTemperature() {
        if (this.isOn == true && this.temperature <= 30 && this.temperature > 16) {
            this.temperature--;
        }
    }
}

module.exports = AirConditioner;