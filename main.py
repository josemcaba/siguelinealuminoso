velocidad = 0
blanco = 0
negro = 0
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
negro += 0
blanco += 1
basic.show_icon(IconNames.HAPPY)

def on_forever():
    if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == negro and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == negro:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 50)
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
        strip.show_color(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    else:
        if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == blanco and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == negro:
            maqueen.motor_stop(maqueen.Motors.M2)
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
            maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
        if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == negro and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == blanco:
            maqueen.motor_stop(maqueen.Motors.M1)
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
            maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
basic.forever(on_forever)

def on_in_background():
    global velocidad
    velocidad = randint(30, 70)
    basic.pause(5000)
control.in_background(on_in_background)
