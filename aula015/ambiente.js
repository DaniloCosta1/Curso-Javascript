let num = [55,22,33,44]
num.push(66)
num.sort()

/*console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro elemento do nosso array é ${num[0]}`)
console.log(`Nosso array tem o total de ${num.length} elementos`)*/

for(var c =0 ; c < num.length ; c++){
      console.log(`vetor num na posição ${c} é o ${num[c]}`)
}

for(let pos in num){
      console.log(`O vetor num na posição ${pos} tem o valor de ${num[pos]}`)
}

console.log(`55 está na posição ${num.indexOf(2)} do vetor`)
