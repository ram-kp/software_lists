

function displayAr() {
    let data = document.querySelectorAll('input');
    let x = "";
    x += `${data[0].value}, You are Welcome!\n Your Email is : ${data[2].value}\nYou are born on: ${data[4].value}\nYou are ${data[5].value}`;
    document.getElementById('displayArea').innerHTML = x;
}