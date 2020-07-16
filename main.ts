input.onButtonPressed(Button.A, function () {
    led.unplot(x, 0)
    x += -1
    led.plot(x, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 0)
    x += 1
    led.plot(x, 0)
})
let x = 0
let Dir = 1
x = 0
led.plot(x, 0)
basic.forever(function () {
    basic.pause(1000)
    led.unplot(x, 0)
    x += Dir
    if (x == 4) {
        Dir = -1
    } else if (x == 0) {
        Dir = 1
    }
    led.plot(x, 0)
})
