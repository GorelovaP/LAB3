document.getElementById("linkResults").addEventListener('click', function () {
    let mod = document.querySelector(".modal");
    mod.classList.add("active")
});

document.getElementById("linkHome").addEventListener('click', function () {
    let mod = document.querySelector(".modal");
    mod.classList.remove("active")
});
document.getElementById("close").addEventListener('click', function () {
    let mod = document.querySelector(".modal");
    mod.classList.remove("active")
});


// function getCheckedRadioByName(name) {
//     let a;
//     let el = document.getElementsByName(name);
//     for (let i = 0; i < el.length; i++) {
//         if (el[i].checked) {
//             a = el[i].value
//         }
//     }
//     return a
// }

function getCheckedRadioByName(name){
    let a;
    let elements = document.getElementsByName(name);
    for ( let el of elements){
        if (el.checked) {
            a = el.value
        }
    }
    return a;
}


function getCheckedSelectByName(name) {
    let a;
    let elements = document.getElementsByName(name);
    for ( let el of elements){
        if (el.selected) {
            a = el.value
        }
    }
    return a;
}

function getCheckedCheckBoxByName(name) {
    let checkboxes = document.getElementsByName(name);
    let mass = [];
    for (let ch of checkboxes) {
        if (ch.checked) {
            mass.push(` ${ch.value}`)
        }
    }

    if (mass.length === 0)    return "пусто";
    else return mass.join(', ');
}

document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let table = document.getElementById('tableResults');
    let row = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.classList.add("new");
    let td2 = document.createElement('td');
    td2.classList.add("new");
    let td3 = document.createElement('td');
    td3.classList.add("new");
    let td4 = document.createElement('td');
    td4.classList.add("new");
    let td5 = document.createElement('td');
    td5.classList.add("new");
    let td6 = document.createElement('td');
    td6.classList.add("new");
    let td7 = document.createElement('td');
    td7.classList.add("new");

    td3.innerHTML = getCheckedCheckBoxByName('choice');
    if (td3.innerHTML==="пусто"){
        alert("Сделай выбор!")
    }
    else {

        alert("Форма отправилась")
        td1.innerHTML = document.getElementById('FIO').value;
        if (td1.innerHTML.trim() === "") alert("Введите ФИО!");
        td2.innerHTML = document.getElementById('datetime').value;
        td4.innerHTML = getCheckedSelectByName('select');
        td5.innerHTML = getCheckedRadioByName("radio");
        td6.innerHTML = document.getElementById("textarea").value;
        td7.innerHTML = document.getElementById("l").value;


        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        row.appendChild(td6);
        row.appendChild(td7);

        table.children[1].insertBefore(row, table.children[1].childNodes[2]);


        let names = []
        names.push(td1.innerHTML);
        console.log(names)
        let people = document.getElementById("people")

        for (let n of names) {
            let el = document.createElement('option')
            el.value = n
            people.appendChild(el)
        }
    }

})