define(['app/core/featureManager', 'app/features/featureone'], function(featureManager, featureOne){
  describe("Feature Manager", function(){

    it("hasFeature method returns true if the feature is enabled", function(){
      featureManager.init(['featureone', 'featuretwo']);

      expect(featureManager.hasFeature('featureone')).toBe(true);
      expect(featureManager.hasFeature('featuretwo')).toBe(true);
      expect(featureManager.hasFeature('myimaginaryfeature')).toBe(false);
    });

    it("Can invoke a feature", function(){
      featureManager.init(['featureone']);
      spyOn(featureOne, 'invoke');

      featureManager.invokeFeature('featureone');

      expect(featureOne.invoke).toHaveBeenCalled();
    });

    it("If you attempt to invoke an unknown feature, an exception is thrown", function(){
      featureManager.init(['featureone']);
      expect(
        function(){ featureManager.invokeFeature('myimaginaryfeature')})
        .toThrow
        (new Error("Attempted to invoke unknown feature:'myimaginaryfeature'"));
    });

    it("Can provide the full localized name of feature", function(){
      featureManager.init(['featureone', 'featuretwo']);

      feature = featureManager.getFeature('featureone');

      expect(feature.name).toBe("English Feature One");
    });

  });
});
