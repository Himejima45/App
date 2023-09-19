window.onload = iniciar;

function iniciar(){
 var btnCalcular = document.getElementById('btnCalcular');
 btnCalcular.addEventListener('click', clickBtnCalcular);
}

function clickBtnCalcular() {
  var txtPeso = document.getElementById("txtPeso");
  var peso = txtPeso.value;

  var txtAltura = document.getElementById("txtAltura");
  var altura = txtAltura.value;

  var imc = peso / (altura * altura);

  var resultado=""
   if (imc < 18.5) {
      resultado="Esta por debajo del peso"
    } else if (imc < 24.9) {
      resultado="Peso normal"
    } else if (imc < 29.9) {
      resultado="Esta con sobrepeso"
    } else if (imc < 39.9) {
      resultado="Esta con obesidad"
    } else if (imc > 39.9) {
      resultado="Esta con obesidad mórbida"
    }
    document.getElementById("resultado").value.result;
  }

  /*document.getElementById('height').addEventListener('input', function(){
    if(this.value.length > 2){
      var val = this.value.replace(/[^\d]/, '');
      val = val.substr(0, val.length-2)+"."+val.substr(-2);
      this.value = val;
    }
  });*/