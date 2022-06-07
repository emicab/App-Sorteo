const contenedorNumeros = document.querySelector('.contenedorNumeros')

const contenedorSorteo = document.querySelector('.contenedorSorteo');

function crearBtn(){
    //numerosRifas = prompt("cuantos numeros sorteas?");
    for(let i = 1; i <= 100; i++){
    let numeros = document.createElement("button");
    numeros.type = 'button';
    
    contenedorNumeros.appendChild(numeros);

    numeros.classList.add('numero');
    
    numeros.textContent = i; 
 } 
}
crearBtn(); 

function numVendido(){
   let numeros = document.querySelectorAll('.numero');
   
   numeros.forEach(numeros => {
        numeros.onclick = function(){
        numeros.classList.toggle('numeroVendido');
       }
   });
   
}
document.querySelector('.numero').onclick = function(){
    numVendido();
}

function sorteo(){
    //let cantidadPremios = prompt('Cuantos numeros quieres sortear?');
        for (let i = 1; i <= 4; ++i) {
            let premios = document.createElement('h2');
            // premios.type = 'submit';
        
            let numPremio = document.createElement('h3');
            numPremio.textContent = i + " Premio."


            contenedorSorteo.appendChild(numPremio);
            contenedorSorteo.appendChild(premios);

            premios.classList.add('boxPremio');
    }
}
let btnSortear = document.querySelector('.btnSortear');

btnSortear.addEventListener('click', ()=>{
    let boxPremio = document.querySelectorAll('.boxPremio');
    let numeroVendido = document.querySelectorAll('.numeroVendido');

    let numSortear = []
    numeroVendido.forEach(e => {
    numSortear.push(e.innerHTML)
    })
    console.log(numSortear)

    
    boxPremio.forEach(e => {
        for (let i = 0; i < numSortear.length; i++) {
            let sortear = Math.floor(Math.random()*numSortear.length);
            let numSorteado = numSortear[sortear]
            console.log(numSorteado)

            e.textContent = numSorteado
        }
    })

    // for (let i = 0; i < numeroVendido.length; i++) {

    //     let element = numeroVendido[i].textContent;
    //     let cantidadElement = element.length;
    //     // console.log(cantidadElement)

    //     boxPremio.forEach(boxPremio =>{

    //         let numeroSorteado = element.charAt(Math.round(Math.random())) ;

    //         boxPremio.textContent = numeroSorteado;
    //     });
    //     // console.log(numeroVendido[i])
    // }

    // console.log(arrayNum);
});
sorteo();


    

    


