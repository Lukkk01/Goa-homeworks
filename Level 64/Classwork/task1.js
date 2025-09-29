function handleLogin() {
  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  const combined = username + password;

  console.log("everything:", combined);
}
