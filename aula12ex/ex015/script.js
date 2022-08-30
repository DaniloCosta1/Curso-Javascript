
function verificar(){
      var data = new Date()
      var ano = data.getFullYear()
      var fano =  document.getElementById('ano')
      var res = document.getElementById('res')

      if(fano.value == 0 || fano.value > ano){
            window.alert('[ERRO] Verifique os dados e tente novamente!')
      }
      else{
            var fsex = document.getElementsByName('sexo')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            

            if(fsex[0].checked){
                  genero = 'Homem'

                  if(idade >= 0 && idade < 10){
                        img.setAttribute('src', 'imagens/babyboy.png')
                  }
                  else if( idade < 21 ){
                        img.setAttribute('src', 'imagens/garoto.png')
                  }
                  else if(idade < 50){
                        img.setAttribute('src', 'imagens/homem.png')
                  }
                  else{
                        img.setAttribute('src', 'imagens/idoso.png')
                  }
            }
            else if(fsex[1].checked){
                  genero = 'Mulher'

                  if(idade >= 0 && idade < 10){
                        img.setAttribute('src', 'imagens/babygirl.png.png')
                  }
                  else if( idade < 21 ){
                        img.setAttribute('src', 'imagens/garota.png')
                  }
                  else if(idade < 50){
                        img.setAttribute('src', 'imagens/mulher.png')
                  }
                  else{
                        img.setAttribute('src', 'imagens/idosa.png')
                  }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
      }
}