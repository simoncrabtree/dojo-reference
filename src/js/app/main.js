define(['dojo/ready', 
       'dijit/form/Button', 
       'app/widgets/DemoWidget',
       'app/features/featurelist',
       'dojo/on',
       'dojo/dom'
],

function(ready, Button, DemoWidget, featurelist, on, dom){
  ready(function(){
    dojo.query('h1')[0].innerHTML = "Dojo is Ready!";
    new Button({
      label:'Dijit Button'
    }, 'buttonPlaceholder');

    new DemoWidget({}, 'customWidgetPlaceholder');

    on(dom.byId('invokeFeatureOne'), 'click', function(){
      featurelist['featureone'].invoke();
    });

  });
});
