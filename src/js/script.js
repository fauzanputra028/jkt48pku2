// Text Berjalan
const textEl = document.getElementById('text')
const texts = [
    '1st Fanbase JKT48 From Pekanbaru,Riau',
    'Ayo Bergabung Bersama Kami!',
    'Dukung JKT48 Bersama!'
]

let idx = 1
let textIndex = 0
let speed = 180

function writeText() {
    const currentText = texts[textIndex] 
    textEl.innerText = currentText.slice(0, idx)

    idx++

    if (idx > currentText.length) {
        idx = 1
        textIndex++
        if (textIndex >= texts.length) {
            textIndex = 0
        }
    }

    setTimeout(writeText, speed)
}

writeText()


//Warning
document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        // Disable F12
        document.addEventListener('keydown', function (e) {
            if (e.keyCode === 123) { // F12
                e.preventDefault();
            }
        });

// Year
document.getElementById('year').textContent = new Date().getFullYear();


