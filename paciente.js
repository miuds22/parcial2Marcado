var urlParams = new URLSearchParams(window.location.search);
var username =urlParams.get("usuario")
var turnos = obtenerTurnos();

function obtenerTurnos(){
    return(
    [
        {fecha:"11-06-2023",hora:"19:00", paciente:"juan"   ,medico:"house"     ,especialidad:"pediatria"   ,observaciones:"no quiere ir a laburar y pide turno" },
        {fecha:"13-06-2023",hora:"08:00", paciente:"juan"   ,medico:"house"     ,especialidad:"prostata"    ,observaciones:"pidio turno temprano porque a la tarde juega futbol" },
        {fecha:"13-06-2023",hora:"12:00", paciente:"mirtita",medico:"house"     ,especialidad:"pediatria"   ,observaciones:"trae a su nieto a control" },
        {fecha:"14-06-2023",hora:"12:30", paciente:"juan"   ,medico:"favaloro"  ,especialidad:"urgencias"   ,observaciones:"se lesiono jugando al futbol y vamos a tener que cortarle la gamba" },
        {fecha:"14-06-2023",hora:"12:30", paciente:"mirtita",medico:"favaloro"  ,especialidad:"otros"       ,observaciones:"" },
        {fecha:"14-06-2023",hora:"9:30",  paciente:"mirtita",medico:"favaloro"  ,especialidad:"otros"       ,observaciones:"" },
    ]
    )
};

function cargarTurnos(username){
    var tabla = document.getElementById("tbody"); 
    tabla.innerHTML ="";
    var turnosUsuario =  turnos.filter(turno => turno.paciente === username)
    for (var i = 0; i < turnosUsuario.length; i++) 
    {
        var row = "<tr><td>" + turnosUsuario[i].fecha + "</td><td>" +turnosUsuario[i].hora + "</td><td>" +turnosUsuario[i].especialidad + "</td><td>" +turnosUsuario[i].medico+ "</td><td>" +turnosUsuario[i].observaciones+ "</td><td> <button>cancelar turno </button></td></tr>";
        tabla.innerHTML += row;
    }
};

document.getElementById("AgregarTurno").addEventListener
    ("submit" , function(event) 
    {
        event.preventDefault();
        
        /*Variables a tomar */
        var txtEspecialidad =  document.getElementById("cbEspecialidad").value;
        var cbDoctor            = document.getElementById("cbDoctor").value;
        var txtFecha            = document.getElementById("txtFecha").value;
        var txthora             = document.getElementById("txthora").value;
        var txtminutos          = document.getElementById("txtminutos").value;
        var txtEmail            = document.getElementById("txtEmail").value;
        var txtObservaciones    = document.getElementById("txtObservaciones").value;
        var horaEntera             = txthora + ":" + txtminutos

        /*Validaciones */    
        if(txtEspecialidad  === ""){alert("valor invalido en Especialidad "); return;};
        if(cbDoctor         === ""){alert("valor invalido en Doctor"); return;};
        if(txtFecha         === ""){alert("valor invalido en Fecha"); return;};
        if(txthora          === ""){alert("valor invalido en hora"); return;};
        if(txtminutos       === ""){alert("valor invalido en minutos");return; };
        if(txtEmail         === ""){alert("valor invalido en Email"); return; };
        if(txthora          === ""){alert("valor invalido en hora"); return;};

        /*Carga del elemento */    
        var NuevoTurno = {fecha:txtFecha,hora: horaEntera, paciente: username ,medico:cbDoctor ,especialidad:txtEspecialidad   ,observaciones:txtObservaciones };
        turnos.push(NuevoTurno);
        cargarTurnos(username);
        document.getElementById("mensaje").textContent = "Turno Asignado Correctamente para el: " + txtFecha + " a las " + horaEntera;
        document.getElementById("mensaje").style.color="green"
        
        /*Borrar valores ya Cargados */    
        document.getElementById("cbEspecialidad").value = "";
        document.getElementById("cbDoctor").value = "";
        document.getElementById("txtFecha").value = "";
        document.getElementById("txthora").value = "";
        document.getElementById("txtminutos").value = "";
        document.getElementById("txtEmail").value = "";
        document.getElementById("txtObservaciones").value = "";
    });

/*Carga pagina*/
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("titulo").textContent = "Bienvenido " + username
    cargarTurnos(username);

});
