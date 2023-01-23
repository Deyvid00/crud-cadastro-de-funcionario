function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
      alert("obrigatorio tudo");
      return false;
    }
    
  }
  var validCredentials = [
    {username: "user1", password: "password1"},
    {username: "user2", password: "password2"},
    {username: "deyvid", password: "12345"}
  ];
  
  function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
      alert("Both fields are required");
      return false;
    }
    
    var matchingCredentials = validCredentials.find(credentials => {
      return credentials.username === username && credentials.password === password;
    });
    
    if (matchingCredentials) {
      // Credenciais válidas, redireciona para a página protegida
      window.location.href = "/Crud.html";
    } else {
      // Credenciais inválidas, exibe mensagem de erro
      alert("USUARIO OU SENHA INVALIDA");
    }
  }
  