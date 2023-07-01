var urlParams = new URLSearchParams(window.location.search);
var username =urlParams.get("usuario")
function obtenerTurnos(){
    return(
    [
        {fecha:"11-06-2023",hora:"19:00", paciente:"juan"   ,medico:"house"     ,especialidad:"pediatria"   ,observaciones:"no quiere ir a laburar y pide turno" },
        {fecha:"13-06-2023",hora:"08:00", paciente:"juan"   ,medico:"house"     ,especialidad:"prostata"    ,observaciones:"pidio turno temprano porque a la tarde juega futbol" },
        {fecha:"13-06-2023",hora:"12:00", paciente:"mirtita",medico:"house"     ,especialidad:"pediatria"   ,observaciones:"trae a su nieto a control" },
        {fecha:"13-06-2023",hora:"12:00", paciente:"mirtita",medico:"house"     ,especialidad:"pediatria"   ,observaciones:"asdasd control" },
        {fecha:"14-06-2023",hora:"12:00", paciente:"mirtita",medico:"house"     ,especialidad:"pediatria"   ,observaciones:"trae aaaaaaaa a control" },
        {fecha:"15-06-2023",hora:"12:00", paciente:"mirtita",medico:"house"     ,especialidad:"pediatria"   ,observaciones:"trae a su nietoaaaaaaa" },
        {fecha:"16-06-2023",hora:"12:00", paciente:"mirtita",medico:"house"     ,especialidad:"pediatria"   ,observaciones:"trae a su nieto a control" },
        {fecha:"14-06-2023",hora:"12:30", paciente:"juan"   ,medico:"favaloro"  ,especialidad:"urgencias"   ,observaciones:"se lesiono jugando al futbol y vamos a tener que cortarle la gamba" },
        {fecha:"14-06-2023",hora:"12:30", paciente:"mirtita",medico:"favaloro"  ,especialidad:"otros"       ,observaciones:"pija" },
        {fecha:"14-06-2023",hora:"9:30",  paciente:"mirtita",medico:"favaloro"  ,especialidad:"otros"       ,observaciones:" puto el que lee" },
    ]
    )
};

var turnos = obtenerTurnos();


/*Carga pagina*/
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("titulo").textContent = "Bienvenido " + username
    cars = document.getElementById("turnosDoctor");
    cars.innerHTML =  cargarDia(username);

});


  
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  

function cargarDia(usuario){
    var turnosUsuario = turnos.filter(turno => turno.medico === usuario) 
    const fechas = turnosUsuario.map(a => a.fecha);
    console.log(fechas)
    var listadoTurnoshtml = fechas.filter(onlyUnique);
    console.log(listadoTurnoshtml);
    var ret = ''
    listadoTurnoshtml.forEach(fecha => {ret +=  cardDia(fecha,turnosUsuario)  });

    return (ret);
}

function colorPastelRandom(){
    var num=(Math.floor(Math.random()*4)*4).toString(16);
    var letters = ['0','F',num];
    var color = '#';
    
    for (var i = 0; i < 3; i++ ) {
        let pos=Math.floor(Math.random() * letters.length);
        color += letters[pos];
        letters.splice(pos,1);
    }
    return color;
}

function cardDia(fecha,turnos){
    turnosFiltrados = turnos.filter(turno => turno.fecha === fecha)
    listadoTurnos ="";
    console.log(turnosFiltrados);
    turnosFiltrados.forEach(turno => { 
                        listadoTurnos += '<li class="list-group-item bordeabajo"> <b>Paciente:' + turno.paciente + '</b> <br> <u>Horario</u>:'+  turno.hora + '<br> <u>Especialidad</u>:'+  turno.especialidad + '<br> <u>Observaciones</u>:'+  turno.observaciones + '</li>' ;
                        }) 
    var randomColor  = colorPastelRandom()
    console.log(listadoTurnos)

    var card =  `<div class="card col-xl-3 col-sm-6"  style="margin:8px; width: 18rem; background-color:` +  randomColor + `; ">
                    <ul class="list-group list-group-flush">
                    ` +  fecha + `
                    </ul>
                    <div class="card-footer">
                        `  + listadoTurnos + `
                    </div>
                </div> `;
console.log(card);
    return (card);
}