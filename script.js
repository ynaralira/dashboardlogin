function logar (){
    var login = document.getElementById('login').value;
     var senha = document.getElementById('senha').value;
    
    if(login == 'admin' && senha == 'admin'){
      alert("Login feito com sucesso!");
      location.href = "home.html";
    } else {
      alert("Seus dados estão incorretos!")
    }
  }

  function logof(sair) {
    var display = document.getElementById(sair).style.display;
    if(display == "none")
    document.getElementById(sair).style.display = 'none';
  else
    document.getElementById(sair).style.display = 'block';
}