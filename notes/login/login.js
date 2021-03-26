const form = document.querySelector('.login-window-form');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

form.onsubmit = function(e){
    e.preventDefault();
    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        ["Content-type"]: "application/json",
      },
      body: JSON.stringify({
        login : emailInput.value,
        pass : passwordInput.value,
      }),
    }).then((res) => {
        if (res.status === 200){
            window.location.href = 'notes.html'
        }
    })
}