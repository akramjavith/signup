const alert = document.querySelector(".password-alert");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");

password.addEventListener("keyup", e => {
    if(password.value !== confirm.value){
        alert.style.display = "inline-block";
    }
})

confirm.addEventListener("keyup", e => {
    if(password.value == confirm.value){
        alert.style.display = "none";
        
       
    }
})