// Constructor para Seguro
function Seguro(marca,anio,tipo){
    this.marca = marca;
    this.anio=anio;
    this.tipo=tipo;
}

//todo lo que se muestra
function Interfaz(){}

//mensaje que se imprime en el html

Interfaz.prototype.mostrarError= function(mensaje,tipo){
    const div = document.createElement('div');
    if (tipo ==='error'){
        div.classList.add('mensaje','error');
    }else{
        div.classList.add('mensaje','correcto');
    }
    div.innerHTML= `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));
    setTimeout(() => {
        document.querySelector('.mensaje').remove();
    }, 3000);
}
//eventListeners
 const formulario= document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //leer la marca seleccionada del select
    const marca= document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    
    //leer el año seleccionado del select
    const anio = document.getElementById('anio');
    const anioSeleccionado= anio.options[anio.selectedIndex].value;
    
    //leer el valor del value button
    const tipo = document.querySelector('input[name="tipo"]:checked');
    
    //crear instancia del interfaz
    const interfaz = new Interfaz();

    //revisamos que los campos no esten vacios
    if(marcaSeleccionada==='' || anioSeleccionado === '' || tipo===''){
        interfaz.mostrarError('Faltan datos, revisar el formulario y prueba de nuevo', 'error');
    }else{
        console.log('todo correcto');
    }
    })





const max = new Date().getFullYear(),
    min= max-20;

const selectAnios= document.getElementById('anio');

for(let i=max; i> min; i--){
    let option = document.createElement('option');
    option.value=i;
    option.innerHTML=i;
    selectAnios.appendChild(option);
}