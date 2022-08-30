


function carregar(){

      var msg = window.document.getElementById('msg')
      var img = window.document.getElementById('imagem')
      var data = new Date()
      var hora = data.getHours()
      var min = data.getMinutes()
      msg.innerHTML = `Agora são ${hora}:${min} horas.`
      

      if(hora >= 0 && hora < 12){
            //bom dia
            img.src = 'imagens/manha.png'
            document.body.style.backgroundColor = '#d8cfc6'
      }
      else if(hora > 12 && hora < 18){
            //boa tarde
            img.src = 'imagens/tarde.png'
            document.body.style.backgroundColor = '#dec5a6'
      }
      else{
            //boa noite
            img.src = 'imagens/noite.png'
            document.body.style.backgroundColor = '#150a35'
      }

}