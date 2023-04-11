function getButtons () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Up)) {
        BTN_UP = 3
    } else if (BTN_UP == 1) {
        BTN_UP = 2
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Down)) {
        BTN_DOWN = 3
    } else if (BTN_DOWN == 1) {
        BTN_DOWN = 2
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left)) {
        BTN_LEFT = 3
    } else if (BTN_LEFT == 1) {
        BTN_LEFT = 2
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right)) {
        BTN_RIGHT = 3
    } else if (BTN_RIGHT == 1) {
        BTN_RIGHT = 2
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire1)) {
        FIRE_1 = 3
    } else if (FIRE_1 == 1) {
        FIRE_1 = 2
    }
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Fire2)) {
        FIRE_2 = 3
    } else if (FIRE_2 == 1) {
        FIRE_2 = 2
    }
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (isTx == 0) {
        isTx = 1
    } else {
        isTx = 0
    }
})
function updateLeds () {
    if (BTN_UP == 3) {
        led.plot(1, 1)
        BTN_UP = 1
    } else if (BTN_UP == 2) {
        led.unplot(1, 1)
        BTN_UP = 0
    }
    if (BTN_DOWN == 3) {
        led.plot(1, 3)
        BTN_DOWN = 1
    } else if (BTN_DOWN == 2) {
        led.unplot(1, 3)
        BTN_DOWN = 0
    }
    if (BTN_LEFT == 3) {
        led.plot(0, 2)
        BTN_LEFT = 1
    } else if (BTN_LEFT == 2) {
        led.unplot(0, 2)
        BTN_LEFT = 0
    }
    if (BTN_RIGHT == 3) {
        led.plot(2, 2)
        BTN_RIGHT = 1
    } else if (BTN_RIGHT == 2) {
        led.unplot(2, 2)
        BTN_RIGHT = 0
    }
    if (FIRE_1 == 3) {
        led.plot(4, 1)
        FIRE_1 = 1
    } else if (FIRE_1 == 2) {
        led.unplot(4, 1)
        FIRE_1 = 0
    }
    if (FIRE_2 == 3) {
        led.plot(4, 3)
        FIRE_2 = 1
    } else if (FIRE_2 == 2) {
        led.unplot(4, 3)
        FIRE_2 = 0
    }
}
function sendRadio () {
    radioCmd = 0
    if (BTN_UP == 1) {
        radioCmd = radioCmd + 1
    }
    if (BTN_DOWN == 1) {
        radioCmd = radioCmd + 2
    }
    if (BTN_LEFT == 1) {
        radioCmd = radioCmd + 4
    }
    if (BTN_RIGHT == 1) {
        radioCmd = radioCmd + 8
    }
    if (FIRE_1 == 1) {
        radioCmd = radioCmd + 16
    }
    if (FIRE_2 == 1) {
        radioCmd = radioCmd + 32
    }
    radio.sendNumber(radioCmd)
}
let radioCmd = 0
let isTx = 0
let FIRE_2 = 0
let FIRE_1 = 0
let BTN_RIGHT = 0
let BTN_LEFT = 0
let BTN_DOWN = 0
let BTN_UP = 0
radio.setGroup(179)
BTN_UP = 0
BTN_DOWN = 0
BTN_LEFT = 0
BTN_RIGHT = 0
FIRE_1 = 0
FIRE_2 = 0
isTx = 1
Kitronik_Game_Controller.setBuzzerPin()
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
    led.toggle(0, 0)
    getButtons()
    updateLeds()
    sendRadio()
})
