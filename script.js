function Libretto (){
    this.lista = [];
    this.aggiungivoto = function(ivoto, imateria, idata){
        var obj = {
      voto: ivoto,
      materia: imateria,
      data: idata      
        }
        this.lista.push(obj);
        this.rendervoto(obj);
        this.save();
    }
    
this.rendervoto = function (objvoto) {
   var ul= document.querySelector("#lista-voti");
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = "in" + objvoto.materia + "ho preso" +objvoto.voto + "il giorno"  +objvoto.data;
    ul.appendChild(li);
 }
this.save = function(){
    localStorage.setItem("db", JSON.stringify(this.lista));
}
this.clear = function(){
  this.lista = [];
  this.save = []; 
  location.href = location.href;  
}
if(localStorage.getItem("db")){
  this.lista = JSON.parse(localStorage.getItem("db"));
    for(var i=0;i<this.lista.length;i++){
     this.rendervoto(this.lista[i]);   
    }
}
}

var libretto = new Libretto();


var button =document.querySelector("#save");
button.addEventListener("click",function(){
var voto = document.querySelector("input[name=voto]").value;
var materia = document.querySelector("input[name=materia]").value;
var data = document.querySelector("input[name=data]").value;

if(data == ""){
    data= new Date();
}
libretto.aggiungivoto(voto,materia,data);    
});
var clearbutton = document.querySelector("clear")
clearbutton.addEventListener("click",function() {
     libretto.clear();
});