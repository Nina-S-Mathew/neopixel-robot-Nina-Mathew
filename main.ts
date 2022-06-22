input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.showIcon(IconNames.Happy)
    strip = neopixel.create(DigitalPin.P1, 37, NeoPixelMode.RGB)
    strip.showRainbow(0, 255)
})
input.onButtonPressed(Button.AB, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.Giraffe)
    basic.pause(100)
    strip = neopixel.create(DigitalPin.P1, 37, NeoPixelMode.RGB)
    strip.showRainbow(0, 255)
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showIcon(IconNames.Sad)
    basic.pause(100)
    strip = neopixel.create(DigitalPin.P1, 36, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 37, NeoPixelMode.RGB)
strip.showRainbow(0, 255)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
