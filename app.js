function btnclickme(){
    let txtname = document.getElementById("txtname").value;
    document.getElementById("lblCustomername").innerText=txtname;
    document.getElementById("olCustomer").innerHTML+=`<li>${txtname}</li>`

}