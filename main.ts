input.onButtonPressed(Button.A, function () {
    Step_count = 0
})
input.onButtonPressed(Button.B, function () {
    Step_count += -1
})
input.onGesture(Gesture.Shake, function () {
    Step_count += 1
})
let Step_count = 0
Step_count = 0
basic.forever(function () {
    basic.showNumber(Step_count)
})
