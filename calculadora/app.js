
//inserir os números e sinais no display
function insert(num){
  let amount = document.querySelector('#result').innerHTML;
  let allNumbers = document.querySelector('#result').innerHTML = amount + num;
  if(allNumbers === '..'){
    alert('ERRO')
    clean();
  }
}

//limpar display
function clean(){
  document.querySelector('#result').innerHTML = '';
}

//limpa apenas um item de cada vez do display
function cleanOne(){
  let res = document.querySelector('#result').innerHTML;
  document.querySelector('#result').innerHTML = res.substring(0, res.length - 1);
}

//calcular
//o eval é responsável por fazer os calculos
function calculate(){
  let res = document.querySelector('#result').innerHTML;
  if (res) {
    document.querySelector('#result').innerHTML = eval(res);
    console.log(eval(res))
  } else {
    document.querySelector('#result').innerHTML = 'ERRO';
  }
}
