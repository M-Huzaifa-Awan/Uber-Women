function check(){
    let number =document.getElementById('number').value;
    number = +number;
    let password =document.getElementById('Password').value;
    let saveddata = {number:234,password:"root"};
let isUser = false;
    if (number===saveddata.number && password === saveddata.password) {
        isUser = true;
        // alert(isUser);
        // window.open("./dashboard.html");
        // window.close("./Login.html")
        location.replace("./dashboard.html");
    }
    else{
        alert(isUser);
    }
}