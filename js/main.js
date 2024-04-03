let producto;  // declarando variables
let valor;
let valorProducto;
const discosSSD = [                                                          // Arrays de mis productos que en este caso seria los Discos SSD
    {nombreProducto:"Disco SSD Crucial 500 GB ",valorProducto:49990},
    {nombreProducto:"Disco SSD Kingston 480 GB ",valorProducto:37990},
    {nombreProducto:"Disco SSD Western Digital 480 GB ",valorProducto:39990},
    {nombreProducto:"Disco SSD Lexar 480 GB ",valorProducto:34990},
  ];

  function ListaProductos(discosSSD) {                                      // Funcion que recorre la Array (discosSSD) completa e imprime en pantalla

    let listar ="Productos Disponibles:\n";

    for (i = 0; i < discosSSD.length; i++ ) { 

    
          listar = listar+("\nProducto: " + discosSSD[i].nombreProducto + "Valor: " + discosSSD[i].valorProducto)

    }
    
    alert(listar)
    
  }

  function agregarProducto(producto,valor) {                              // Funcion que agrega un producto nuevo al Array (discosSSD) y lo agrega al ultimo de la lista.

    discosSSD.push({nombreProducto: producto,valorProducto: valor});
    

  }

  function eliminarProducto(producto) {                                   // Funcion que elimina un producto ingresado por pantalla y recorre el array para verificar si existe.

    let arrayProductos=discosSSD.map(el=>el.nombreProducto); 
    let posicion=arrayProductos.indexOf(producto); 
        if(posicion>=0){
           discosSSD.splice(posicion,1);

  } else {
    alert("El Producto que quiere eliminar no se encuentra en la lista")
  }
}

 function modificarProducto(producto) {

  let resultado=discosSSD.find(el=>el.nombreProducto===producto)     // En esta Funcion se busca el producto en el Array y lo compara con el producto ingresado para modificar
  if(resultado==undefined){ 
    alert("El Producto que quiere modificar no se encuentra en la lista");           
  } else {
  let productoNuevo = prompt("Ingrese el nuevo nombre del producto:");
  let valorProductoNuevo = parseInt(prompt("Ingrese el nuevo valor del producto:"));
  eliminarProducto(producto);
  agregarProducto(productoNuevo,valorProductoNuevo);
  }
  
 }
  
  

console.log("Bienvenid@s a EBS Informatica Valdivia");

let UsuarioIngresado = prompt("Estimad@ Cliente ingrese su nombre para una mejor atencion."); // Solicita Nombre de cliente

while (UsuarioIngresado === null || UsuarioIngresado === "" ) {      // Verificamos que el campo de nombre no este vacio o si el usuario cancela la operacion.
    
    if (UsuarioIngresado === null) {
      alert("No canceles, ingresa tu Nombre por favor.");
      UsuarioIngresado = prompt("Estimad@ Cliente ingrese su nombre para una mejor atencion.");
    } else {
      alert("No dejes el campo vacio");
      UsuarioIngresado = prompt("Estimad@ Cliente ingrese su nombre para una mejor atencion.");
    }
  }
  alert("Bienvenid@ " + UsuarioIngresado + " a EBS Informatica Valdivia");

  let menuPrincipal;
do {
  ListaProductos(discosSSD);
  menuPrincipal = parseInt(prompt("Seleccione una opción:\n1- Agregar Producto\n2- Eliminar Producto\n3- Modificar Producto\n4- Salir"));

  if(menuPrincipal >=1 && menuPrincipal <=7){
    switch(menuPrincipal){
      case 1:
        producto = prompt("Favor de ingresar el nombre del producto que quiere agregar: ")
        valor = prompt("Ingrese el valor del producto que quiere agregar: ")
        agregarProducto(producto,valor);
        
      break;
      case 2:
        producto = prompt("Que Producto quiere eliminar:")
        eliminarProducto(producto);
      break;
      case 3:
        producto = prompt("Que Producto desea modificar:")
        modificarProducto(producto);
      break;
      case 4:
        alert("Gracias por tu visita a EBS Informatica Valdivia");
      break;  
    }
  }

}while((menuPrincipal !==7)||isNaN(menuPrincipal));

console.log(discosSSD);