// tady je místo pro náš program

// zmena barvy nadpisu
let nadpis = document.querySelector('.nadpis');
nadpis.style.color = 'red';

// zmena odstavce
let odstavec = document.querySelector('.odstavec');
odstavec.style.fontSize = '26px';
odstavec.innerHTML = '<em><strong>Učím se manipulovat s obsahem stránky. K tomu se používá divná a tajemná věc, které se říká DOM (Document Object Model). Pomocí ní mohu ke všm prvkům na stránce přistupovat jako k objektům a měnit jejich vlastnosti. Jako první chci zvládnout následující úkoly...</strong></em>';


// vymena obrazku
let obrazek = document.querySelector('.obrazek');
obrazek.src = 'pes.jpg';

// posun a otoceni ctverecku
let ctverecek = document.querySelector('.ctverecek');
ctverecek.style.marginLeft = '300px';
ctverecek.style.transform = 'rotate(90deg)'
