document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let senha = document.getElementById("senha").value;
  let confirmarSenha = document.getElementById("confirmarSenha").value;
  let mensagem = document.getElementById("mensagem");

  // Validação de senha
  if (senha !== confirmarSenha) {
    mensagem.style.color = "red";
    mensagem.textContent = "❌ As senhas não coincidem!";
    return;
  }

  if (senha.length < 6) {
    mensagem.style.color = "red";
    mensagem.textContent = "⚠️ A senha deve ter pelo menos 6 caracteres.";
    return;
  }

  // Mensagem de sucesso
  mensagem.style.color = "green";
  mensagem.textContent = "✅ Cadastro realizado com sucesso!";

  // Mostra loader
  document.getElementById("loading").style.display = "flex";


  // Redireciona após 3 segundos
  setTimeout(() => {
    window.location.href = "inicial.html";
  }, 3000);
});

