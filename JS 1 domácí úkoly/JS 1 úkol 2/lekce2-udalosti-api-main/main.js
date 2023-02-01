// tady je místo pro náš program
// Ukol na lekci: Písmo v odstavci po najetí myši ztuční.

let odstavec = document.querySelector('p')

function ztucniText() {
odstavec.style.fontWeight='bold'
}

function odtucniText() {
odstavec.style.fontWeight='normal'
}

/*Ukol 1: Tlačítko “červené po kliknutí” bude odstavci 
přidávat/odebírat třídu, která bude barvu písma v odstavci měnit na 
červenou.*/

function zmenNaCervenou() {
odstavec.classList.toggle('cerveny')
}

/*Ukol 2: Přidej tlačítko “větší po kliknutí”, které písmo zvětší o 
jeden pixel oproti jeho aktuální velikost.*/

function zvetseni() {
    let text = document.querySelector('.odstavec')    
    let pocatecnyStav = window.getComputedStyle(text).getPropertyValue('font-size')
    let currentSize = parseFloat(pocatecnyStav)
    text.style.fontSize = (currentSize + 1) +'px'
    }

/*Ukol 3: Dopracuj ovládání audio souboru
• pauznutí zvukové stopy
• nastavení zvuku na 0, 0.5 a 1
• vrácení se na začátek 
tlačítka jsou v pořadí: PLAY, STOP, RESET, VOL0, VOL0.5, VOL1 */

let prehravac = document.querySelector('.mujPrehravac')

function spustAudio() {
    prehravac.play()
}

function zastavAudio() {
    prehravac.pause()
}

function resetAudio() {
    prehravac.currentTime = 0
}

function hlasitost0() {
    prehravac.volume = 0
}

function hlasitost05() {
    prehravac.volume = 0.5
}

function hlasitost1() {
    prehravac.volume = 1
}