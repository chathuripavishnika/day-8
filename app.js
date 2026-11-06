const customerList = [];

function btnclickme(inputId, listId) {

    let name = document.getElementById(inputId).value;

    if (name === "") {
        alert("Please enter a name");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = name;

    document.getElementById(listId).appendChild(li);

    document.getElementById(inputId).value = "";
}


function addcustomer() {

    let customerId = document.getElementById("textid").value;
    let customerName = document.getElementById("textName").value;
    let customerAge = document.getElementById("textAge").value;
    let customerAddress = document.getElementById("textAddress").value;
    let customerSalary = document.getElementById("textSalary").value;

    let table = document.getElementById("customerTable");

    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${customerId}</td>
        <td>${customerName}</td>
        <td>${customerAge}</td>
        <td>${customerAddress}</td>
        <td>${customerSalary}</td>
    `;

    table.appendChild(tr);
}


function addItem() {

    let itemName = document.getElementById("textItemName").value;
    let itemNumber = document.getElementById("textItemNumber").value;
    let itemPrice = document.getElementById("textItemPrice").value;
    let itemCode = document.getElementById("textItemCode").value;
    let itemWeight = document.getElementById("textItemWeight").value;

    let table = document.getElementById("itemTable");

    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${itemName}</td>
        <td>${itemNumber}</td>
        <td>${itemPrice}</td>
        <td>${itemCode}</td>
        <td>${itemWeight}</td>
    `;

    table.appendChild(tr);
}