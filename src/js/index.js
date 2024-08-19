const form = document.getElementById('form');
const input = document.querySelectorAll('.inputs');



function validarFormulario(){
  input.forEach(function(input){
    addEventListener('submit', function(){
      if(input.value === ""){
        input.classList.add('requerido');
        input.nextElementSibling.classList.add('hidden');
      }else {
        input.classList.remove('requerido');
        input.nextElementSibling.classList.remove('hidden');
        input.classList.add('preenchido');
      };
    });
  });

};

form.addEventListener('submit', e => {
  e.preventDefault();

  validarFormulario();
})


