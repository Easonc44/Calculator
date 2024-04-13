let FIRST_NUMBER = "";
let OPERATION = "";
let SECOND_NUMBER = "";
let result = '';

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnAdd = document.getElementById("btn+");
const btnDivide = document.getElementById("btnDivision");
const btnMultiply = document.getElementById("btn*");
const btnSubtract = document.getElementById("btn-");
const btnDecimal = document.getElementById("btn.");
const clear = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const equals = document.getElementById("equalBtn");
const display = document.getElementById("display");

equals.addEventListener('click', () => {
    if (OPERATION === '+') {
        result = parseFloat(FIRST_NUMBER) + parseFloat(SECOND_NUMBER);
    }
    else if (OPERATION === '/') {
        result = parseFloat(FIRST_NUMBER) / parseFloat(SECOND_NUMBER);
    }
    else if (OPERATION === '*') {
        result = parseFloat(FIRST_NUMBER) * parseFloat(SECOND_NUMBER);
    }
    else if (OPERATION === '-') {
        result = parseFloat(FIRST_NUMBER) - parseFloat(SECOND_NUMBER);
    }
    else {

    }
    updatedisplay(result);
    FIRST_NUMBER = result.toString();
    SECOND_NUMBER = '';
    OPERATION = '';
});

clear.addEventListener('click', () => {
    FIRST_NUMBER = '';
    OPERATION = '';
    SECOND_NUMBER = '';
    updatedisplay();
});

deleteBtn.addEventListener('click', () => {
    if (SECOND_NUMBER === '' && OPERATION === '') {
        FIRST_NUMBER = '';
        updatedisplay()
    }
    else if (SECOND_NUMBER === '') {
        OPERATION = '';
        updatedisplay(FIRST_NUMBER)
    }
    else if (SECOND_NUMBER === '' && OPERATION === '' && FIRST_NUMBER === ''){

    }
    else {
        SECOND_NUMBER = '';
        updatedisplay(FIRST_NUMBER)
    }
});

btn1.addEventListener('click', () => {
    if (OPERATION === "") {
        FIRST_NUMBER += btn1.value;
        updatedisplay(FIRST_NUMBER);
    }
    else {
        SECOND_NUMBER += btn1.value;
        updatedisplay(SECOND_NUMBER);
    };
});
btn2.addEventListener('click', () => {
    if (OPERATION === "") {
        FIRST_NUMBER += btn2.value;
        updatedisplay(FIRST_NUMBER);
    }
    else {
        SECOND_NUMBER += btn2.value;
        updatedisplay(SECOND_NUMBER);
    };
});
btn3.addEventListener('click', () => {
    if (OPERATION === "") {
        FIRST_NUMBER += btn3.value;
        updatedisplay(FIRST_NUMBER);
    }
    else {
        SECOND_NUMBER += btn3.value;
        updatedisplay(SECOND_NUMBER);
    };
});
btn4.addEventListener('click', () => {
    if (OPERATION === "") {
        FIRST_NUMBER += btn4.value;
        updatedisplay(FIRST_NUMBER);
    }
    else {
        SECOND_NUMBER += btn4.value;
        updatedisplay(SECOND_NUMBER);
    };
});
btn4.addEventListener('click', () => {
    if (OPERATION === "") {
        FIRST_NUMBER += btn4.value;
        updatedisplay(FIRST_NUMBER);
    }
    else {
        SECOND_NUMBER += btn4.value;
        updatedisplay(SECOND_NUMBER);
    };
});
btn5.addEventListener('click', () => {
    if (OPERATION === "") {
        FIRST_NUMBER += btn5.value;
        updatedisplay(FIRST_NUMBER);
    }
    else {
        SECOND_NUMBER += btn5.value;
        updatedisplay(SECOND_NUMBER);
    };
});
btn6.addEventListener('click', () => {
    if (OPERATION === "") {
        FIRST_NUMBER += btn6.value;
        updatedisplay(FIRST_NUMBER);
    }
    else {
        SECOND_NUMBER += btn6.value;
        updatedisplay(SECOND_NUMBER);
    };
});
btn7.addEventListener('click', () => {
    if (OPERATION === "") {
        FIRST_NUMBER += btn7.value;
        updatedisplay(FIRST_NUMBER);
    }
    else {
        SECOND_NUMBER += btn7.value;
        updatedisplay(SECOND_NUMBER);
    };
});
btn8.addEventListener('click', () => {
    if (OPERATION === "") {
        FIRST_NUMBER += btn8.value;
        updatedisplay(FIRST_NUMBER);
    }
    else {
        SECOND_NUMBER += btn8.value;
        updatedisplay(SECOND_NUMBER);
    };
});
btn9.addEventListener('click', () => {
    if (OPERATION === "") {
        FIRST_NUMBER += btn9.value;
        updatedisplay(FIRST_NUMBER);
    }
    else {
        SECOND_NUMBER += btn9.value;
        updatedisplay(SECOND_NUMBER);
    };
});
btn0.addEventListener('click', () => {
    if (OPERATION === "") {
        FIRST_NUMBER += btn0.value;
        updatedisplay(FIRST_NUMBER);
    }
    else {
        SECOND_NUMBER += btn0.value;
        updatedisplay(SECOND_NUMBER);
    };
});
btnDecimal.addEventListener('click', () => {
    if (OPERATION === "") {
        FIRST_NUMBER += btnDecimal.value;
        updatedisplay(FIRST_NUMBER);
    }
    else {
        SECOND_NUMBER += btnDecimal.value;
        updatedisplay(SECOND_NUMBER);
    };
});

btnAdd.addEventListener('click', () => {
    OPERATION = "+";
});

btnDivide.addEventListener('click', () => {
    OPERATION = "/";
});

btnSubtract.addEventListener('click', () => {
    OPERATION = "-";
});

btnMultiply.addEventListener('click', () => {
    OPERATION = "*";
});




function updatedisplay(number) {
    display.textContent = number;
}
