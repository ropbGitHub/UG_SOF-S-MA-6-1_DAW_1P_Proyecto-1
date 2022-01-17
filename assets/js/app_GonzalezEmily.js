const formEG = document.querySelector(".movForm");
const cancelar = document.querySelector(".btn-cancelar");
// botones siguientes y atras
const btn_sig2 = document.querySelector(".sigPag");
const btn_atras = document.querySelector(".atr-pag1");
const btn_sig3 = document.querySelector(".sig-pag3");
const btn_atras2 = document.querySelector(".atr-pag2");
const btn_sig4 = document.querySelector(".sig-pag4");
const btn_atras3 = document.querySelector(".atr-pag3");
const btn_fin = document.querySelector(".btnfin");

// progress bar
const progressCheck = document.querySelectorAll(".pasos .check");
const progressText = document.querySelectorAll(".pasos p");
const num = document.querySelectorAll(".pasos .numPB");

//GUARDAR DATOS.


let max = 4;
let cont = 1;



// para ir hacia delante
btn_sig2.addEventListener('click', function(e){
    e.preventDefault();

    var name = document.getElementById("name").value;
    var lastn= document.getElementById("last_name").value;
    var idn= document.getElementById("idn").value;

    
    if (name=="" && lastn=="" && idn==""){
  
        document.getElementById("name-error").innerHTML = "* Este campo no puede quedar vacio"
        document.getElementById("name").style.borderColor = "rgb(255, 0, 0)"
        document.getElementById("lastname-error").innerHTML = "* Este campo no puede quedar vacio"
        document.getElementById("last_name").style.borderColor = "rgb(255, 0, 0)"
        document.getElementById("ruc-error").innerHTML = "* Este campo no puede quedar vacio"
        document.getElementById("idn").style.borderColor = "rgb(255, 0, 0)"

    }else if ( (name=="" || lastn=="" || idn=="") ||
    (name.length<2 || lastn.length<2 || idn.length<2) ||
    (!verificarNombre(name) || !verificarNombre(lastn) || !verificarCell(idn))
    ){

    if ( name=="" ){
    document.getElementById("name-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("name").style.borderColor="#DA2A33"      
    }else if ( name.length<2 ){
    document.getElementById("name-error").innerHTML = "* Debe tener 2 o más caractéres."
    document.getElementById("name").style.borderColor="#DA2A33"      
    }else if ( !verificarNombre(name) ){
    document.getElementById("name-error").innerHTML = "* Dato no válido."
    document.getElementById("name").style.borderColor="#DA2A33"      
    }else {
    document.getElementById("name-error").innerHTML = ""
    document.getElementById("name").style.borderColor="lightgrey"      
    }

    if ( lastn=="" ){
    document.getElementById("lastname-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("last_name").style.borderColor="#DA2A33"      
    }else if ( lastn.length<10 ){
    document.getElementById("lastname-error").innerHTML = "* Debe tener 2 o más caractéres."
    document.getElementById("last_name").style.borderColor="#DA2A33"      
    }else if ( !verificarNombre(lastn) ){
    document.getElementById("lastname-error").innerHTML = "* Dato no válido."
    document.getElementById("last_name").style.borderColor="#DA2A33"      
    }else {
    document.getElementById("lastname-error").innerHTML = ""
    document.getElementById("last_name").style.borderColor="lightgrey"      
    }

    if ( idn=="" ){
    document.getElementById("ruc-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("idn").style.borderColor="#DA2A33"      
}else if ( idn.length!=10 && !verificarCell(idn) ){
    document.getElementById("ruc-error").innerHTML = "* Debe ingresar solo números."
    document.getElementById("idn").style.borderColor="#DA2A33"      
    }else if ( idn.length!=10 ){
    document.getElementById("ruc-error").innerHTML = "* Debe tener 10 dígitos."
    document.getElementById("idn").style.borderColor="#DA2A33"      
    }else if ( !verificarCell(idn) ){
    document.getElementById("ruc-error").innerHTML = "* Dato no válido."
    document.getElementById("idn").style.borderColor="#DA2A33"      
    }else {
    document.getElementById("ruc-error").innerHTML = ""
    document.getElementById("idn").style.borderColor="lightgrey"      
    }

    } else {

    document.getElementById("name-error").innerHTML = ""
    document.getElementById("name").style.borderColor="lightgrey"
    document.getElementById("lastname-error").innerHTML = ""
    document.getElementById("last_name").style.borderColor="lightgrey"
    document.getElementById("ruc-error").innerHTML = ""
    document.getElementById("idn").style.borderColor="lightgrey"

    formEG.style.marginLeft = "-25%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;

    var aux = name + ", " + lastn + " " +idn;
  

    }

    function verificarNombre($n){
    var ExpRegular_Nombre = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+((?:[\s{1}][A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+)+)?$/;
    return ExpRegular_Nombre.test($n);
    }
    function verificarCell($m){
        var ExpRegular_Num = /^[\d]+$/;
        return ExpRegular_Num.test($m);
        }

    });

    btn_sig3.addEventListener("click", function(e){

    e.preventDefault();

    var fec_nacimiento = document.querySelector('input[type="date"]').value;
    var sexo = document.getElementById("sexo").value;

    if ( sexo==-1 && fec_nacimiento=="" ){
    document.getElementById("fn-error").innerHTML = "* Seleccione una fecha."
    document.getElementById("fec_nacimiento").style.borderColor="#DA2A33"
    document.getElementById("sex-error").innerHTML = "* Seleccione una opción."
    document.getElementById("sexo").style.borderColor="#DA2A33"

    }else if ( sexo==-1 || fec_nacimiento=="" ){

    if ( sexo==-1 ){
    document.getElementById("sex-error").innerHTML = "* Seleccione una opción."
    document.getElementById("sexo").style.borderColor="#DA2A33"      
    }else {
    document.getElementById("sex-error").innerHTML = ""
    document.getElementById("sexo").style.borderColor="lightgrey"      
    }

    if ( fec_nacimiento=="" ){
    document.getElementById("fn-error").innerHTML = "* Seleccione una fecha."
    document.getElementById("fec_nacimiento").style.borderColor="#DA2A33"      
    }else {
    document.getElementById("fn-error").innerHTML = ""
    document.getElementById("fec_nacimiento").style.borderColor="lightgrey"      
    }

    } else {

    document.getElementById("sex-error").innerHTML = ""
    document.getElementById("sexo").style.borderColor="lightgrey"
    document.getElementById("fn-error").innerHTML = ""
    document.getElementById("fec_nacimiento").style.borderColor="lightgrey"

    formEG.style.marginLeft = "-50%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;

    }

    });
    btn_sig4.addEventListener("click", function(e){

    e.preventDefault();

    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if ( email=="" && phone=="" ){

    document.getElementById("email-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("email").style.borderColor="#DA2A33"
    document.getElementById("phone-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("phone").style.borderColor="#DA2A33"  

    }else if ( email=="" || phone=="" || 
    email.length<6 || phone.length!=9 || 
    !verificarCorreo(email) || !verificarNumCel(phone) 
    ){

    if ( email=="" ){
    document.getElementById("email-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("email").style.borderColor="#DA2A33"      
    }else if ( email.length<6 ){
    document.getElementById("email-error").innerHTML = "* Debe tener 6 o más caractéres."
    document.getElementById("email").style.borderColor="#DA2A33"      
    }else if ( !verificarCorreo(email) ){
    document.getElementById("email-error").innerHTML = "* Ingreso de datos inválidos."
    document.getElementById("email").style.borderColor="#DA2A33"      
    }else {
    document.getElementById("email-error").innerHTML = ""
    document.getElementById("email").style.borderColor="lightgrey"      
    }

    if ( phone=="" ){
    document.getElementById("phone-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("phone").style.borderColor="#DA2A33"      
    }else if ( phone.length!=9 && !verificarNumCel(phone) ){
    document.getElementById("phone-error").innerHTML = "* Debe ingresar solo números."
    document.getElementById("phone").style.borderColor="#DA2A33"      
    }else if ( phone.length!=9 ){
    document.getElementById("phone-error").innerHTML = "* Debe tener 9 dígitos."
    document.getElementById("phone").style.borderColor="#DA2A33"      
    }else if ( !verificarNumCel(phone) ){
    document.getElementById("phone-error").innerHTML = "* Ingreso de datos inválidos."
    document.getElementById("phone").style.borderColor="#DA2A33"      
    }else {
    document.getElementById("phone-error").innerHTML = ""
    document.getElementById("phone").style.borderColor="lightgrey"      
    }

    } else {

    document.getElementById("email-error").innerHTML = ""
    document.getElementById("email").style.borderColor="lightgrey"
    document.getElementById("phone-error").innerHTML = ""
    document.getElementById("phone").style.borderColor="lightgrey"

    formEG.style.marginLeft = "-75%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;

    }

    function verificarCorreo($n){
    var ExpRegular_Correo = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return ExpRegular_Correo.test($n);

    /*     if ($n.match(ExpRegular_Correo)){
    return true
    }else{
    return false;
    } */

    }

    function verificarNumCel($m){
    var ExpRegular_Num = /^[\d]+$/;
    return ExpRegular_Num.test($m);
    }

    });

    let c = 0;

    btn_fin.addEventListener("click", function(e){

    e.preventDefault();

    var fec_ev = document.querySelector('input[id="eventoF"]').value;
    var salon = document.getElementById("salon").value;
    var nin = document.getElementById("ninos").value;

    if ( salon==-1 && fec_ev=="" && nin==-1){
        document.getElementById("eventoF-error").innerHTML = "* Seleccione una fecha."
        document.getElementById("eventoF").style.borderColor="#DA2A33"
        document.getElementById("salon-error").innerHTML = "* Seleccione una opción."
        document.getElementById("salon").style.borderColor="#DA2A33"
        document.getElementById("ninos-error").innerHTML = "* Seleccione una opción."
        document.getElementById("ninos").style.borderColor="#DA2A33"
    
        }else if ( salon==-1 || fec_ev=="" || nin==-1 ){
    
        if ( salon==-1 ){
        document.getElementById("salon-error").innerHTML = "* Seleccione una opción."
        document.getElementById("salon").style.borderColor="#DA2A33"      
        }else {
        document.getElementById("salon-error").innerHTML = ""
        document.getElementById("salon").style.borderColor="lightgrey"      
        }
    
        if ( fec_ev=="" ){
        document.getElementById("eventoF-error").innerHTML = "* Seleccione una fecha."
        document.getElementById("eventoF").style.borderColor="#DA2A33"      
        }else {
        document.getElementById("eventoF-error").innerHTML = ""
        document.getElementById("eventoF").style.borderColor="lightgrey"      
        }
        if ( nin==-1 ){
            document.getElementById("ninos-error").innerHTML = "* Seleccione una opción."
            document.getElementById("ninos").style.borderColor="#DA2A33"      
            }else {
            document.getElementById("ninos-error").innerHTML = ""
            document.getElementById("ninos").style.borderColor="lightgrey"      
            }
    
        } else {
            document.getElementById("salon-error").innerHTML = ""
        document.getElementById("salon").style.borderColor="lightgrey"
        document.getElementById("eventoF-error").innerHTML = ""
        document.getElementById("eventoF").style.borderColor="lightgrey"
        document.getElementById("ninos-error").innerHTML = ""
        document.getElementById("ninos").style.borderColor="lightgrey"
    
        
        num[cont - 1].classList.add("active");
        progressText[cont - 1].classList.add("active");
        progressCheck[cont - 1].classList.add("active");
        cont += 1;
          
         alert("Se enviara un confirmacion a su correo electronico con los datos para la trasferencia (50%) antes de los 15 dias desde el mensaje");
        limpiar();
        }

       
    function limpiar(){
    document.getElementById("name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("idn").value = "";
    document.querySelector('input[type="date"]').value = "";
    document.getElementById("sexo").value = -1;
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

    }

    });

    
    btn_atras.addEventListener("click", function(e){

        e.preventDefault();
    
        formEG.style.marginLeft = "0%";
        num[cont - 2].classList.remove("active");
        progressText[cont - 2].classList.remove("active");
        progressCheck[cont - 2].classList.remove("active");
        cont -= 1;
        });
    
        btn_atras2.addEventListener("click", function(e){
    
        e.preventDefault();
    
        formEG.style.marginLeft = "-25%";
        num[cont - 2].classList.remove("active");
        progressText[cont - 2].classList.remove("active");
        progressCheck[cont - 2].classList.remove("active");
        cont -= 1;
        });
    
        btn_atras3.addEventListener("click", function(e){
    
        e.preventDefault();
    
        formEG.style.marginLeft = "-50%";
        num[cont - 2].classList.remove("active");
        progressText[cont - 2].classList.remove("active");
        progressCheck[cont - 2].classList.remove("active");
        cont -= 1;
        });

   

