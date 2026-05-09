document.addEventListener("DOMContentLoaded", () => {

  const user = JSON.parse(localStorage.getItem("user"));

  // 🔒 proteção
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  // 👋 info do user
  document.getElementById("welcome").innerText = "Olá " + user.name;
  document.getElementById("progressBar").style.width = user.progress + "%";

});

function goExercise(type) {
  window.location.href = `exercise.html?type=${type}`;
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}