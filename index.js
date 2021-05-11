
// add a new field when enter is being pressed

document.addEventListener("keydown", addNewInputWithEnter);

function addNewInputWithEnter(event) {
    if (event.keyCode === 13) {

        var form = document.querySelector("form");
        form.style.display = "inline-flex";

        var textInput = document.createElement('input');
        textInput.setAttribute('type', 'text');

        var quantity = document.createElement('input');
        quantity.setAttribute('type', 'number');
        quantity.addEventListener('keyup', calculateTotal);

        var price = document.createElement('input');
        price.setAttribute('type', 'number');
        price.addEventListener('keyup', calculateTotal);

        var total = document.createElement('span');

        var buttonDelete = document.createElement('button');
        buttonDelete.innerText = "X";
        buttonDelete.addEventListener('click', deleteRow);

        var div = document.createElement('div');
        div.appendChild(textInput);
        div.appendChild(quantity);
        div.appendChild(price);
        div.appendChild(total);
        div.appendChild(buttonDelete);

        var section = document.querySelector('section');
        section.appendChild(div);

    }
}

// add new fields via Add button

// var buttonAdd = document.querySelector(".add");
// buttonAdd.addEventListener('click', addNewInput);

// // addNewInput();

// function addNewInput() {

//     var form = document.querySelector("form");
//     form.style.border = "solid red";
//     form.style.display = "inline-flex";
//     form.style.padding = 10 + "px";

//     var textInput = document.createElement('input');
//     textInput.setAttribute('type', 'text');

//     var quantity = document.createElement('input');
//     quantity.setAttribute('type', 'number');
//     quantity.addEventListener('keyup', calculateTotal);

//     var price = document.createElement('input');
//     price.setAttribute('type', 'number');
//     price.addEventListener('keyup', calculateTotal);

//     var total = document.createElement('span');

//     var buttonDelete = document.createElement('button');
//     buttonDelete.innerText = "X";
//     buttonDelete.addEventListener('click', deleteRow);

//     var div = document.createElement('div');
//     div.appendChild(textInput);
//     div.appendChild(quantity);
//     div.appendChild(price);
//     div.appendChild(total);
//     div.appendChild(buttonDelete);

//     var section = document.querySelector('section');
//     section.appendChild(div);
// }

function calculateTotal(event) {
    var div = event.target.parentNode;
    console.log(div);
    var quantity = div.childNodes[1];
    var price = div.childNodes[2];
    var total = div.childNodes[3];

    console.log(quantity.value);
    if (isNaN(quantity.value)) {
        quantity.value = 0;
    }

    if (isNaN(price.value)) {
        price.value = 0;
    }

    total.innerText = price.value * quantity.value;
}

function deleteRow(event) {
    event.target.parentNode.remove();
}


