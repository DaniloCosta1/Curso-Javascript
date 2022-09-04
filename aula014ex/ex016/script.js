function contar() {

      var inicio = window.document.getElementById('txti')
      var fim = window.document.getElementById('txtf')
      var passo = window.document.getElementById('txtp')
      var resultado = document.getElementById('res')

      if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            window.alert('ERRO Faltam dados!')
      }else{
            
            resultado.innerHTML = 'Contando: <br>'

            var i = Number(inicio.value)
            var f = Number(fim.value)
            var p = Number(passo.value)
            if(p <= 0){
                  window.alert('Passo Inválido! considerando passo 1')
                  p = 1
            }

            if( i < f){

                  for(var c = i ; c <= f ; c += p){
                        resultado.innerHTML += ` ${c} \u{1F449}`
                  }
                  
            }else{

                  for(var c = i ; c >= f ; c -= p){
                        resultado.innerHTML += ` ${c} \u{1F449}`
                  }
            }
            resultado.innerHTML += `\u{1F3C1}`
            
      }

}