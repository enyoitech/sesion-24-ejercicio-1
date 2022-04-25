/**
 * aqui accedemos al document.
 * utilizamos el selector 'getElementById' el cual recibe el id del nodo o elemento 
 * del document que queremos accesar.
 * y  utilizamos el metodo addEventListener() el cual sirve para escuchar y recibe 2 argumentos 
 * 1er argumento es el nombre del evento que pondremos a escuchar
 * 2do argumento es una expresion funcion anonima o tambien puede recibir una funcion arrow
 */
document
  .getElementById("suma-form")
  .addEventListener("submit", function (event) {

    /**
     * (event)  hace referencia al evento que se captura tambien es habitual usar (e)
     * event.preventDefault() se utiliza para evitar que el evento se ejecute por default
     *al cargar la pagina evitando que se envie el formulario vacio.
     */
    event.preventDefault();
    // hacemos el llamado a nuestra funcion suma
    suma();
});

function suma (){
    /**
     * guardamos en constantes los nodos que contienen los datos que ingreso el usuario
     * y tambien guardamos el nodo donde vamos a mostrar el resultado el cual esta identificado
     * con el id='resultadoSuma' y lo guardaremos en una variable para poder modificarlo,
     * tambien guardamos el nodo donde mostraremos un mensaje de error en caso de que el usuario
     * ingrese numeros negativos el cual esta identificado en nuestro html con el id='errorMsn' 
     * y lo guardamos en una variable para luego poder modificarlo
     */
      const nodoPrimerNumero = document.getElementById("1erNumero");
      const nodoSegundoNumero = document.getElementById("2doNumero");
      const nodoTercerNumero = document.getElementById("3erNumero");
      let nodoResultadoSuma = document.getElementById("resultadoSuma");
      let nodoErrorMsn = document.getElementById("errorMsn");

      /**
       * accedemos a la propiedad .valueAsNumber de cada nodo la cual guarda el valor numerico
       * ingresado por elusuario y lo guaramos en constantes
       */
    const primerNumero = nodoPrimerNumero.valueAsNumber;
    const segundoNumero = nodoSegundoNumero.valueAsNumber;
    const tercerNumero = nodoTercerNumero.valueAsNumber;

    /**
     * validaremos que los numeros no sean menores a 0
     * es decir utilizaremos logica negativa.
     * si alguno de los numeros llega a ser menor a 0 mostraremos un error al usuario
     * Usamos el operador '||' conocido como 'ó', en este caso con que una sola condicion
     * se cumpla sera suficnete para mostrar el mensaje de error
     */
    if (primerNumero <0 || segundoNumero <0 || tercerNumero <0 ) {

        /**
         * en nuestro nodoErrorMsn accedemos al metodo .setAttribute()
         * el cual recibe como primer argumento el nombre de la propiead html que desamos modificar
         * para este caso vamos modificar la propiedad 'class' y como segundo argumento
         * enviamos las clases de estilo que seran asignadas a la propiedad 'class' en este caso
         * asignaremos algunas clases de estilos pertenecientes al framework de estilos boostrap
         * bg-danger --> genera un fondo rojo
         * rounded-3 --> redondea las esquinas 
         * mb-2 ---> margin-bottom agrega un margen en la parte inferior del nodoErrorMsn
         * p-2 ---> agrega un padding alrededor de todo el nodoErrorMsn 
         * 
         */
        
        nodoErrorMsn.setAttribute('class', 'bg-danger rounded-3 mb-2 p-2');
        /**
         * modificamos el nodoErrorMsn accediendo a su propiedad .textContent
         */
         nodoErrorMsn.textContent = 'No se permiten numeros negativos'
        
        /**
         * utilizamos la instruccion de return para romper el flujo de nuestra aplicacion
         * y evitar que continue a realizar la suma
        */
         return;
    } 

    /**
     * creamos una constante llamada suma para guardar el resultado de la operacion suma de los
     * 3 numeros
     */
    const suma = primerNumero+segundoNumero+tercerNumero;

    /**
     *  utilizaremos  nodoResultadoSuma accediendo a su propiedad '.textContent'
     * y asignaremos alli el resultado de la suma.
     * empleamos  un template-string para mostrar texto y nuestro resultado
     */
    //  nodoResultadoSuma.textContent = `EL resultado es: ${suma}`;
     nodoResultadoSuma.innerHTML = `EL resultado es: <strong> ${suma}</strong> `;
}