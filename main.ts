input.onButtonPressed(Button.A, function () {
    if (Ergebnis == Zufallsergebnis) {
        basic.showIcon(IconNames.Yes)
        basic.setLedColor(0x00ff00)
        Punkte += 1
    } else {
        basic.showIcon(IconNames.No)
        basic.setLedColor(0xff0000)
        basic.pause(750)
    }
    Antwort_aktiv = 0
})
input.onButtonPressed(Button.B, function () {
    if (Ergebnis != Zufallsergebnis) {
        basic.showIcon(IconNames.Yes)
        basic.setLedColor(0x00ff00)
        Punkte += 1
    } else {
        basic.showIcon(IconNames.No)
        basic.setLedColor(0xff0000)
        basic.pause(750)
    }
    Antwort_aktiv = 0
})
let Zahl2 = 0
let Zahl1 = 0
let Antwort_aktiv = 0
let Punkte = 0
let Zufallsergebnis = 0
let Ergebnis = 0
let Runde = 0
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        basic.turnRgbLedOff()
        Zahl1 = randint(1, 10)
        Zahl2 = randint(1, 10)
        Ergebnis = Zahl1 + Zahl2
        if (randint(0, 1) == 0) {
            Zufallsergebnis = randint(Ergebnis - 10, Ergebnis + 10)
        } else {
            Zufallsergebnis = Ergebnis
        }
        basic.showString("" + Zahl1 + ("+" + ("" + Zahl2 + ("=" + Zufallsergebnis))))
        Antwort_aktiv = 1
        while (Antwort_aktiv == 1) {
            basic.pause(50)
        }
    }
    for (let index = 0; index < 3; index++) {
        basic.showString("" + Punkte + " Punkte")
    }
})
