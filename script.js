function MensagemEnviada() {
    var emailcliente = document.getElementById("EmailContato")
    let email = String(emailcliente.value)
    let user = document.getElementById("NomeContato")
    var nome= String(user.value)
    if (email.length == 0 || nome.length == 0) {
        alert("Preencha nome e Email")
    } else {
        
        alert(nome+", sua mensagem já está no nosso sistema. Entraremos em contato em breve =-)")
        document.getElementById("NomeContato").value="";
        document.getElementById("EmailContato").value="";
        document.getElementById("Msg").value="";
    }
    
}

function OutroDep() {
    document.getElementById("fotoDepoimento").style.backgroundColor = '#000000'
}

function AtendimentoPers() {
    document.write("Olá! Como posso ajudá-lo ?")
}

function Orcamentos(){
    document.write("Olá! Qual de nossos produtos você deseja tirar um orçamento ?")
}

function Agende() {
    document.write("Olá! Para quando deseja agendar a visita?")
}

function CondicaoEsp(){
    document.write("Olá! Qual serviço deseja requisitar ?")
}