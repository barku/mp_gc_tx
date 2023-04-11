BTN_UP = 0
def getButtons():
    global BTN_UP
    if Kitronik_Game_Controller.button_is_pressed(Kitronik_Game_Controller.ControllerButtonPins.UP):
        BTN_UP = 3
    else:
        BTN_UP = 2
def updateLeds():
    global BTN_UP
    if BTN_UP == 3:
        led.plot(1, 1)
        BTN_UP = 1
    elif BTN_UP == 2:
        led.unplot(1, 1)
        BTN_UP = 0

def on_forever():
    pass
basic.forever(on_forever)

def on_every_interval():
    led.toggle(0, 0)
    getButtons()
    updateLeds()
loops.every_interval(100, on_every_interval)
