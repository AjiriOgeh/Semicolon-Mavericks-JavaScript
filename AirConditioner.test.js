let AirConditioner= require("./AirConditioner");

test("AirConditioner is off", ()=>{
    airConditioner = new AirConditioner;
    expect(airConditioner.getIsOn()).toBe(false);
})

test("AirContioner is off , AirConditioner is on", ()=>{
    airConditioner = new AirConditioner;
    expect(airConditioner.getIsOn()).toBe(false);
    
    airConditioner.turnOn();
    expect(airConditioner.getIsOn()).toBe(true);
})

test("AirConditioner is On, AirConditioner is Off", ()=>{
    airConditioner = new AirConditioner;
    expect(airConditioner.getIsOn()).toBe(false)

    airConditioner.turnOn();
    expect(airConditioner.getIsOn()).toBe(true)

    airConditioner.turnOff();
    expect(airConditioner.getIsOn()).toBe(false)
})

test("AirContioner is On, Temperature increases by 1", ()=>{
    airConditioner = new AirConditioner;
    expect(airConditioner.getIsOn()).toBe(false)

    airConditioner.turnOn();
    expect(airConditioner.getIsOn()).toBe(true)

    airConditioner.increaseTemperature()
    expect(airConditioner.getTemperature()).toBe(17)
})

test("AirContioner is Off, Temperature does not increase", ()=>{
    airConditioner = new AirConditioner;
    expect(airConditioner.getIsOn()).toBe(false)

    airConditioner.turnOn();
    expect(airConditioner.getIsOn()).toBe(true)

    airConditioner.turnOff();
    expect(airConditioner.getIsOn()).toBe(false)

    airConditioner.increaseTemperature()
    expect(airConditioner.getTemperature()).toBe(16)
})

test("AirConditioner is On, Temperature does not increase past 30", ()=>{
    airConditioner = new AirConditioner;
    expect(airConditioner.getIsOn()).toBe(false)

    airConditioner.turnOn();
    expect(airConditioner.getIsOn()).toBe(true)

    for(let count = 0; count < 14; count++){
        airConditioner.increaseTemperature()
    }
    expect(airConditioner.getTemperature()).toBe(30)

    airConditioner.increaseTemperature()
    expect(airConditioner.getTemperature()).toBe(30)
})

test("AirConditioner is On, Temperature is increased by 5, Temperature is decreased by 1", ()=>{
    airConditioner = new AirConditioner;
    expect(airConditioner.getIsOn()).toBe(false)

    airConditioner.turnOn();
    expect(airConditioner.getIsOn()).toBe(true)

    for(let count = 0; count < 5; count++){
        airConditioner.increaseTemperature()
    }
    expect(airConditioner.getTemperature()).toBe(21)

    airConditioner.decreaseTemperature()
    expect(airConditioner.getTemperature()).toBe(20)
})

test("AirConditioner is On, Temperature does not decrease below 16", ()=>{
    airConditioner = new AirConditioner;
    expect(airConditioner.getIsOn()).toBe(false)

    airConditioner.turnOn();
    expect(airConditioner.getIsOn()).toBe(true)

    airConditioner.decreaseTemperature()
    expect(airConditioner.getTemperature()).toBe(16)
})

test("Temperature is increased by 8, AirConditioner is Off, Temperature does not decrease", ()=>{
    airConditioner = new AirConditioner;
    expect(airConditioner.getIsOn()).toBe(false)

    airConditioner.turnOn();
    expect(airConditioner.getIsOn()).toBe(true)

    for(let count = 0; count < 8; count++){
        airConditioner.increaseTemperature()
    }
    expect(airConditioner.getTemperature()).toBe(24)

    airConditioner.turnOff();
    expect(airConditioner.getIsOn()).toBe(false)

    airConditioner.decreaseTemperature()
    expect(airConditioner.getTemperature()).toBe(24)


})

