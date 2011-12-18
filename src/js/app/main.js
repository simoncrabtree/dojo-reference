define(['dojo/ready', 
       'dijit/form/Button', 
       'app/widgets/DemoWidget'],

       function(ready, Button, DemoWidget){
         ready(function(){
           dojo.query('h1')[0].innerHTML = "Dojo is Ready!";
           new Button({
             label:'Dijit Button'
           }, 'buttonPlaceholder');

           new DemoWidget({}, 'customWidgetPlaceholder');
         });
       });
