'use strict';

let div = document.querySelectorAll('p');
document.getElementById('1').addEventListener('click', () => {
    div.forEach(paragraph => {
        paragraph.innerText = paragraph.innerText.replace(/'/g, '"');
    });
});
document.getElementById('2').addEventListener('click', () => {
    div.forEach(paragraph => {
        paragraph.innerText = paragraph.innerText.replace(/\B'|'\B/g, '"');
    });
})