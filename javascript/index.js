// for coll javascript write:--> node javascript


// section-1
document.getElementById('main-input-btn-1').
addEventListener('click', function () {

const inputField = document.getElementById('imp_1_id');
const inputText = inputField.value;

if (isNaN(inputText)) {
    return alert("This is not a number");
}
 else if (inputText < 0) {
    return alert("Error: Negative number not allowed");
} 

const inputGrund = document.getElementById('dona-id_1');
const inputNumber = inputGrund.innerText;

const eqalNum = Number(inputText) + Number(inputNumber);

const p = document.getElementById('dona-id_1');
p.innerText = eqalNum;

// 5500 TK

const mainReg = document.getElementById('5500TK') ;
const amunt = mainReg.innerText;
const changValu = Number(amunt) - Number(inputText) ;
mainReg.innerText = changValu;


inputField.value = '';
});


// section_2

document.getElementById('main-input-btn-2').
addEventListener('click', function () {

const inputField = document.getElementById('imp_2_id');
const inputText = inputField.value;

if (isNaN(inputText)) {
    return alert("This is not a number");
}
 else if (inputText < 0) {
    return alert("Error: Negative number not allowed");
} 

const inputGrund = document.getElementById('dona-id_2');
const inputNumber = inputGrund.innerText;

const eqalNum = Number(inputText) + Number(inputNumber);

const p = document.getElementById('dona-id_2');
p.innerText = eqalNum;

const mainReg = document.getElementById('5500TK') ;
const amunt = mainReg.innerText;
const changValu = Number(amunt) - Number(inputText) ;
mainReg.innerText = changValu;



inputField.value = '';
});





// section_3

document.getElementById('main-input-btn-3').
addEventListener('click', function () {

const inputField = document.getElementById('imp_3_id');
const inputText = inputField.value;

if (isNaN(inputText)) {
    return alert("This is not a number");
}
 else if (inputText < 0) {
    return alert("Error: Negative number not allowed");
} 

const inputGrund = document.getElementById('dona-id_3');
const inputNumber = inputGrund.innerText;

const eqalNum = Number(inputText) + Number(inputNumber);

const p = document.getElementById('dona-id_3');
p.innerText = eqalNum;

const mainReg = document.getElementById('5500TK') ;
const amunt = mainReg.innerText;
const changValu = Number(amunt) - Number(inputText) ;
mainReg.innerText = changValu;



inputField.value = '';
});










