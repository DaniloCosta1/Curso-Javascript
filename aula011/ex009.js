

function checar() {

      var nac = window.document.getElementById('origem').value
      

      var resultado = window.document.getElementById('resp')

      if(nac != 'brasil'){
            resultado.innerHTML = 'estrangeiro'
      }
      else{
            resultado.innerHTML = 'brasileiro'
      }
}