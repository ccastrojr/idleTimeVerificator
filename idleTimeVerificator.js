/* 
  * Mude para o intervalo que você deseja 
  * Change to the interval you want 
*/
var waitingTime = 3 * 1000;
var timeout = setTimeout(inactivity, waitingTime);

function hasActivity(e) {
  clearInterval(timeout);
  timeout = setTimeout(inactivity, waitingTime);

  /* Aqui vai sua função | Here goes your function */
  console.log(`Houve evento de 
    ${e.type === 'keypress' ? 'teclado' : 'ponteiro'}`);
}

function inactivity() {
  alert(`Inativo há mais de ${waitingTime/1000} segundos.`);
}

/* 
  * Você pode incluir quantos eventos quiser :) 
  * You can add as many events as you want
*/
['keypress', 'click'].forEach(function(e) {
  window.addEventListener(e, hasActivity);
});