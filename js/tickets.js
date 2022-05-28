function Validar()
{
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email = document.getElementById("email").value.trim();
    var cantidad = document.getElementById("cant").value.trim();
    var inputState = document.getElementById("inputState").value;
    var textError = "";

    if(nombre.length==0) 
    {
        textError= "El nombre es requerido.\n";
    }
    
    if(apellido.length==0) 
    {
        textError= textError + "El apellido es requerido.\n";
    }

    if(email.length==0)
    {
        textError= textError + "El email es requerido.\n";        
    }
    else
    {
        if(!validarCorreo(email))
        {
            textError= textError + "Debe indicar un email valido.\n";
        }
    }

    if (!isNumeric(cantidad))
    {
        cantidad = "0";    
    }

    if(cantidad.length == 0  || parseInt(cantidad) <=0 || parseInt(cantidad) >100)
    {
        textError= textError + "La cantidad debe ser mayor que 0 y menor o igual que 100.\n";        
    }
    
    if(textError.length>0)
    {
        alert(textError);
        return false;
    }
    
    
}

function Totales()
{
    var cantidad = document.getElementById("cant").value.trim();
    var inputState = document.getElementById("inputState").value;
    var total = "";
    var costoTicket = 200;

    if (!isNumeric(cantidad))
    {
        cantidad = "0";    
    }

    if(cantidad.length == 0  || parseInt(cantidad) <=0 || parseInt(cantidad) >100) 
    { 
        alert("La cantidad debe ser mayor que 0 y menor o igual que 100.");
        document.getElementById("cant").value = "";
    }
    else
    {
        switch(inputState)
        {
            case "Estudiante": 
                total = costoTicket-((costoTicket*80)/100);
                break;
            case "Trainee": 
                total = costoTicket-((costoTicket*50)/100);
                break;
            case "Junior": 
                total = costoTicket-((costoTicket*15)/100);
                break;
            default:
                total = ((costoTicket));
                break;
        }
        total=total*cantidad;
    }
    document.getElementById("total").value ="Total a Pagar: " + total + "$";

}

function isNumeric(val) 
{
    return /^-?\d+$/.test(val);
}

function validarCorreo (valor)
{
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
        return false;
	}
    return true;
	
}