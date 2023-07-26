function valueButton(e){
  calform.screen.value += e.value;
}
function Clear(){
  calform.screen.value = null;
}
function Calculate(){
  calform.screen.value = eval(calform.screen.value)
}