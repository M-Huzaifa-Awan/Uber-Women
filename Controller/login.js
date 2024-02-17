function check(){
    let number = document.getElementById('number').value;
    number = +number;
    let password = document.getElementById('Password').value;
    let saveddata = {number:03078222203,password:"zaifa"};
let isUser = false;
    if (number===saveddata.number && password === saveddata.password) {
        isUser = true;
        location.replace("./dashboard.html");
    }
    else{
        alert(isUser);
    }
}