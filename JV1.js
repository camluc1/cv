function iniciar(){
  var dom = document.getElementById("dom");
  dom.addEventListener("click", function(){
    dom.style.color= 'green';
    dom.witdh= 200;
  }, false);
}

iniciar();



