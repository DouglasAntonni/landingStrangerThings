
function switchTheme() {
    // Alterna a classe 'inverted-theme' no body
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
}
document.getElementById('subscriptionForm').addEventListener('submit', function (event) {
    // Prevenir o envio automático do formulário
    event.preventDefault();

    // Limpando mensagens de erro anteriores
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('levelError').textContent = '';
    document.getElementById('characterError').textContent = '';

    // Obtendo valores dos campos do formulário
    const name = document.getElementById('txtName').value.trim();
    const email = document.getElementById('txtEmail').value.trim();
    const level = document.getElementById('txtLevel').value.trim();
    const character = document.getElementById('txtCharacter').value.trim();
    
    // Expressão regular para validação de e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true; // Flag para controle de validação

    // Validação do campo Nome
    if (name === '') {
        document.getElementById('nameError').textContent = 'Por favor, insira o seu nome completo.';
        isValid = false;
    }

    // Validação do campo E-mail
    if (email === '') {
        document.getElementById('emailError').textContent = 'Por favor, insira o seu e-mail.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.';
        isValid = false;
    }

    // Validação do campo Level
    if (level === '') {
        document.getElementById('levelError').textContent = 'Por favor, insira o seu level.';
        isValid = false;
    }

    // Validação do campo Personagem
    if (character === '') {
        document.getElementById('characterError').textContent = 'Por favor, insira a descrição do seu personagem.';
        isValid = false;
    }

    // Se todas as validações passarem
    if (isValid) {
        // Aqui você pode continuar com o envio do formulário ou realizar qualquer outra ação necessária
        alert('Formulário enviado com sucesso!');
        // Por exemplo: enviar o formulário via AJAX ou outra lógica
    }
});
