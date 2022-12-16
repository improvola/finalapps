navigator.serviceWorker.register('sw.js');
const btnSave = document.querySelector('#btn-save');
const textArea = document.querySelector('#text-1');
let container = document.querySelector('.collection');
let lista = [];
// FORMATO:
//let lista = [ { nota: 'descripción de la nota', fecha: '17/11/2022'} ];


document.addEventListener('DOMContentLoaded', function() {
    let sideNav = document.querySelectorAll('.sidenav');
    let instanciaSide = M.Sidenav.init(sideNav  , {});

    let modal = document.querySelectorAll('.modal');
    let instanciaModal = M.Modal.init(modal, {});

    lista = leerNotas();
    renderizarNotas(lista);
});

/* - FUNCION 1:  Obtiene el texto del textArea y guarda en el texto en el array - */
btnSave.addEventListener('click', ()=>{
  let nota = textArea.value;
  let fecha = new Date().toLocaleString();
  lista.push({
    nota: nota,
    fecha: fecha
  })
  guardarNotas(lista);
  textArea.value = '';
})

/* -------- FUNCION 2: Recibe el array y lo guarda en el localStorage ------- */
function guardarNotas(array){
  localStorage.setItem('notas', JSON.stringify(array)  );
  renderizarNotas(array);
}

/* --------- FUNCION 3: Lee los datos del localStorage y lo retorna --------- */
function leerNotas(){
  let array = JSON.parse( localStorage.getItem('notas'));
  if( array){
    return array;
  } else {
    return [];

  }
}

/* -------- FUNCION 4: Recibe el array y lo renderiza en el container ------- */
function renderizarNotas(array){
  console.log(array)
  container.innerHTML = '';
  array.forEach(item => {
    container.innerHTML += `<li class="collection-item">
                            <div>${item.nota}
                              <a href="#!" class="secondary-content">${item.fecha}</a>
                            </div>
                        </li>`;
  });
}
