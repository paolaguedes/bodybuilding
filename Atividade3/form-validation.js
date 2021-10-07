// funçao para validar input com regex testando o terminal
document.getElementById("submit").addEventListener("click", function(event) {
    
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const tel = document.getElementById("tel").value
    const cep = document.getElementById("cep").value

    const regexEmail = /^\w+@\w+\.\w+$/
    const regexTel = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
    const regexCep = /^[0-9]{5}\-?[\d]{3}$/

    const emailVal = regexEmail.test(email)
    const telVal = regexTel.test(tel)
    const cepVal = regexCep.test(cep)

    if (!emailVal) {
        alert("O email não foi inserido corretamente. Tente algo como email@email.com")
    } else if (!telVal) {
        alert("O telefone não foi inserido corretamente. Tente algo como XX XXXXX-XXXX")
    } else if (!cepVal) {
        alert("O cep não foi inserido corretamente. Tente algo como XXXXX-XXX")
    } else {
        alert("Obrigado por se cadastrar, " +nome+"!")
    }

    event.preventDefault()

})
// usando a lib para mascarar os valores dos inputs
VMasker(document.querySelector('#tel')).maskPattern('(99) 99999-9999')
VMasker(document.querySelector('#cep')).maskPattern('99999-999')

// para adicionar scroll macio
document.querySelectorAll('a[href^="#"]').forEach(function (element) {
    if (!element.hash) return
    if (element.origin + element.pathname !== self.location.href) return
  
    (function (destination) {
      element.addEventListener(
        'click',
        function (event) {
          window.scrollTo({
            top: destination.offsetTop,
            behavior: 'smooth',
          })
          event.preventDefault()
        },
        false
      )
    })(document.querySelector(element.hash))
  })