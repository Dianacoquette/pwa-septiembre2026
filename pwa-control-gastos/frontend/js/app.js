const formulario = document.querySelector('#form-gasto');
const listaGastos= document.querySelector('#lista-gastos');
const totalGastos = document.querySelector('#total-gastos');

// console.log(formulario);
// console.log(listaGastos);
// console.log(totalGastos);


const gastos = [];

formulario.addEventListener("submit", evento =>{
    evento.preventDefault();

    const descripcion = document.querySelector('#descripcion').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    const categoria = document.querySelector('#categoria').value;
    const fecha = document.querySelector('#fecha').value;

    const gasto = {
        id: crypto.randomUUID,
        descripcion: descripcion,
        cantidad: cantidad,
        categoria: categoria,
        fecha: fecha
    }

    gastos.push();
    //TO-DO: invocar funcion renderizarGastos()
    
    formulario.reset();

    console.log(gasto);
})


//TODO: Construir la funcion renderizarGastos()

function renderizarGastos(){
    
}
