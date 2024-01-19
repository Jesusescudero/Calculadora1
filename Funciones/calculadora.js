let pantalla = document.getElementById('pantalla');
let operacionActual = '';
let operador = '';
let resultado = 0;

function actualizarPantalla() {
  pantalla.textContent = operacionActual;
}

function agregarDigito(digito) {
  operacionActual += digito;
  actualizarPantalla();
}

function agregarOperador(op) {
  operacionActual += ' ' + op + ' ';
  operador = op;
  actualizarPantalla();
}

function agregarPunto() {
  operacionActual += '.';
  actualizarPantalla();
}

function calcularResultado() {
  let operandos = operacionActual.split(' ');
  let num1 = parseFloat(operandos[0]);
  let num2 = parseFloat(operandos[2]);

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num1 / num2;
      break;
    default:
      resultado = 0;
  }

  operacionActual = resultado.toString();
  actualizarPantalla();
}
function eliminar() {
    operacionActual = '';
    actualizarPantalla();
  }