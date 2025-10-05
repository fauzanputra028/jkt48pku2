//Gfroms
const iframe = document.getElementById('gform');
      iframe.onload = function () {
        try {
          // ambil tinggi konten di dalam iframe
          const iframeDoc = iframe.contentWindow.document.documentElement;
          iframe.style.height = iframeDoc.scrollHeight + 'px';
        } catch (e) {
          // fallback kalau cross-origin (Google Forms tidak selalu izinkan)
          iframe.style.height = "1000px";
        }
      };

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

// Year

document.getElementById('year').textContent = new Date().getFullYear();
