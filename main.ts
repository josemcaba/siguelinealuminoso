input.onButtonPressed(Button.A, function () {
    velocidad += -5
    basic.showNumber(velocidad)
    basic.showIcon(IconNames.Happy)
})
function sigueLinea (núm: number) {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == negro && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == negro) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, núm)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == blanco && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == blanco) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, núm)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == blanco && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == negro) {
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, núm)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        strip.showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == negro && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == blanco) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, núm)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        strip.showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    }
}
input.onButtonPressed(Button.B, function () {
    velocidad += 5
    basic.showNumber(velocidad)
    basic.showIcon(IconNames.Happy)
})
let strip: neopixel.Strip = null
let velocidad = 0
let blanco = 0
let negro = 0
negro = 0
blanco = 1
velocidad = 40
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.showNumber(velocidad)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    sigueLinea(velocidad)
})
