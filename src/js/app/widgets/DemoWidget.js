define([
       'dojo/_base/declare',
       'dijit/_Widget',
       'dijit/_TemplatedMixin',
       'dojo/i18n',
       'dojo/text!./templates/DemoWidget.html',
       'dojo/i18n!./nls/DemoWidget'
],function(declare, _Widget, _Templated, i18n, template){

  return declare("app.widgets.DemoWidget", [_Widget, _Templated], {

    templateString: template,

    postMixInProperties: function(){
      this.i18n = i18n.getLocalization('app.widgets', 'DemoWidget');
    }

  });

});
