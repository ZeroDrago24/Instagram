document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("forgot-password").addEventListener("click", function(event) {
        event.preventDefault(); 
        window.location.href = "forgot_password.html";
    });

    document.getElementById("register").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "register.html"; 
    });
   
    document.getElementById("facebook-login").addEventListener("click", function(event) {
        console.log("Haz clic en Iniciar sesión con Facebook");
    });

    document.getElementById("google-login").addEventListener("click", function(event) {
        console.log("Haz clic en Iniciar sesión con Google");
    });
});



