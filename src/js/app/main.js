define(['dojo/ready', 'dijit/form/Button'], function(ready, Button){
  ready(function(){
    dojo.query('h1')[0].innerHTML = "Dojo is Ready!";
    new Button({
      label:'Dijit Button'
    }, 'buttonPlaceholder');
  });
});
