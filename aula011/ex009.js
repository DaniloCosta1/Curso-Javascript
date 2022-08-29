

function checcar() {
      var nac = window.document.getElementById('origem').value

      var resultado = window.document.getElementById('div#resp')

      if(nac == "brasil"){
            resultado.innerHTML = 'brasileiro'
      }
      else{
            resultado.innerHTML = 'estrangeiro'
      }
}