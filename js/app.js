//funcao de login
function login() {
    localStorage.setItem("user", "Sergio");
    window.location.href = "dashboard.html";
}

//funcao de registo
function register() {
    alert("Conta criada com sucesso!");
    window.location.href="login.html";
}

//buscar o nome do usuario para mostrar no dashboard
document.getElementById("username").innerText = localStorage.getItem("user") || "Visitante";

//funcao de logout
function logout() {
    localStorage.removeItem("user");
    window.location.href = "index.html";
}

function completeActivity() {
    alert("Atividade concluída! Parabéns ganhas-te 50XP!");
}