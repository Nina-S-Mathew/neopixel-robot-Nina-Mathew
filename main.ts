input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.Giraffe)
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showIcon(IconNames.Sad)
    basic.pause(100)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 36, NeoPixelMode.RGB_RGB)
strip.showRainbow(0, 255)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    strip.rotate(1)
    basic.pause(200)
})
