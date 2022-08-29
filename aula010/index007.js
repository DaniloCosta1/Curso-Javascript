


function somar() {
      
      var n1 = Number(window.document.getElementById('txtn1').value)
      var n2 = Number(window.document.querySelector('input#txtn2').value)
      var s = n1 + n2

      window.document.getElementById('res').innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`


}