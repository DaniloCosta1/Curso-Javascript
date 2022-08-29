

function calcular() {

      var velocidade = Number(window.document.getElementById('txtvel').value)
      
      document.getElementById('resp').innerHTML = `Sua velocidade é ${velocidade} km/h `
      if(velocidade > 60){
            document.getElementById('resp').innerHTML += `Você foi Multado`
      }
}