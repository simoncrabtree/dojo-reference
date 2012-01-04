define(['dojo/ready', 
       'dijit/form/Button', 
       'app/widgets/DemoWidget',
       'dojo/on',
       'dojo/dom',
       'app/core/featureManager'
],

function(ready, Button, DemoWidget, on, dom, featureManager){
  ready(function(){
    featureManager.init(['featureone', 'featuretwo']);
    dojo.query('h1')[0].innerHTML = "Dojo is Ready!";
    new Button({
      label:'Dijit Button'
    }, 'buttonPlaceholder');

    new DemoWidget({}, 'customWidgetPlaceholder');

    on(dom.byId('invokeFeatureOne'), 'click', function(){
      featureManager.invokeFeature('featureone');
    });

    on(dom.byId('invokeFeatureTwo'), 'click', function(){
      featureManager.invokeFeature('featuretwo');
    });
  });
});
