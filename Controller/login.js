
function check(){
    let number = document.getElementById('number').value;
    number = +number;
    let password = document.getElementById('Password').value;
    let saveddata = {number:3078222203,password:"zaifa"};
    let isUser = false;
    if (number===saveddata.number && password === saveddata.password) {
        location.replace("./dashboard.html");
        isUser = true;
        document.getElementById('de').checked = true;
        return true;
    }
    else{
        alert(isUser);
        return false;
    }
}