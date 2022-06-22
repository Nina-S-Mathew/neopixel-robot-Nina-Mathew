input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 36, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.shift(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    strip.rotate(1)
    basic.pause(200)
})
