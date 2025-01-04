basic.forever(function () {
    if (led.brightness() < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    basic.showString("" + (led.brightness()))
})
