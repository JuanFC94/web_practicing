function Login(){
    var correctEmail = "test@gmail.com";
    var correctPasswd = "12345678";

    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;
    
    if(email == ""){
        alert("Please type in your email!");
    }else if(passwd == ""){
        alert("Please type in your password!");
    }else if(email != correctEmail){
        alert("Incorrect email!");
    }else if(passwd != correctPasswd){
        alert("Incorrect password!");
    }else{
        window.location.href = "home.html";
    }
}