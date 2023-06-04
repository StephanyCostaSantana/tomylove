function oi() {
    var data = new Date();
    var hora = data.getHours();
    var escrever;
  
    if (hora >= 6 && hora < 12) {
        escrever = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        escrever = "Boa tarde";
    } else {
        escrever = "Boa noite";
    }
  
    return escrever;
  }
  
  console.log(oi());


document.getElementById("oie").innerText = oi() + " :)";


function pegarVal(){
    var pegaroselect = document.getElementById("select").value;
    var pegaroinput = document.getElementById("input").value;

    document.getElementById("titlee").innerText = "Resultados";

    document.getElementById("resultado").innerText = "Você escolheu " +  pegaroselect;

    
    document.getElementById("toselect").innerText = "Você quer que eu: " +  pegaroinput;

    document.getElementById("desce").innerText = "Desce pra ver os results";

    event.preventDefault();
   

} 
