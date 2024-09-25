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

inputField.value = '';
});


// section_2











// section_3

















