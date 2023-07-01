function marcarInvalido(){
    var lblmensaje =document.getElementById("mensajeError")
        lblmensaje .style.display = "block"; // Mostrar el div
}

document.getElementById("loginForm").addEventListener("submit" , function(event) {
    event.preventDefault();
    
    /* variables a tomar */
    var username = document.getElementById("txtUsuario").value;
    var password = document.getElementById("txtPassword").value;
    var arrUsuarios = [ {user:"house", pass:"1234" ,tipoUsuario:"doctor" },
                        {user:"mirtita", pass:"1234" ,tipoUsuario:"paciente" },
                        {user:"favaloro", pass:"1234" ,tipoUsuario:"doctor" },
                        {user:"juan", pass:"1234" ,tipoUsuario:"paciente" }
                    ];
    var usuario = arrUsuarios.filter( u => u.pass === password && u.user === username);
    if (usuario.length == 1 ){
        var url = usuario[0].tipoUsuario + ".html?usuario="+ usuario[0].user;
        console.log(url)
        window.location.href = url;
    }
    else {marcarInvalido()}
    });