function convercao(){
  var valDolar = document.getElementById('valDolar').value;
  var myDolars  = document.getElementById('myDolars').value;
  
  valDolar = parseFloat(valDolar);
  myDolars = parseFloat(myDolars);
  result = valDolar * myDolars;
  document.getElementById('result').innerHTML =      result.innerHTML = result.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

  
}
