define(['dojo/i18n!app/nls/features', 'dojo/_base/array'], function(localizedStrings, array){
  var _featureKeys;
  var _features = {};
  return {
    init: function(featureKeys){
      _featurekeys = featureKeys;
      array.forEach(featureKeys, function(featureKey){
        _features[featureKey] = {name: localizedStrings[featureKey].name};
      });
    },

    hasFeature: function(featureKey){
      return _featurekeys.indexOf(featureKey) > -1;
    },

    invokeFeature: function(featureKey){
      if(this.hasFeature(featureKey)){
        require(['app/features/' + featureKey], function(feature){
          feature.invoke();
        });
      }else{
        throw new Error("Attempted to invoke unknown feature:'" + featureKey + "'");
      }
    },

    getFeature: function(featureKey){
      return _features[featureKey];
    }
  }
});
