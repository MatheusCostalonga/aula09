document.getElementById('button').addEventListener("click", (event) => {
    event.preventDefault(); 
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    if (usuario == "admin" && senha =="admin") {
        alert('Login realizado com sucesso');
       window.location.href = "pages/projeto2.html";
    } if (usuario != "admin" || senha != "admin") {
        alert('algo esta incorreto, verefique se os campos estão corretos e tente novamente.');
    }
    if (usuario.trim() === "" || senha.trim() === "") {
        alert('Por favor, preencha todos os campos.');
    }
});