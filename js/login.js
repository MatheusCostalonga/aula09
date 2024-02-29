document.addEventListener("DOMContentLoaded",function () {
    GamepadButton.preventDefault();
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
if(usuario == "admin" && senha == "admin"){
    alert("Login efetuado com sucesso");

    window.location.href ="index.html";
} else if (usuario != "admin" && senha != "admin"){
    alert("usuario ou senha incorreto");
}
});