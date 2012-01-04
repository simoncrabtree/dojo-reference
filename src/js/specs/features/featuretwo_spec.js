define(['app/features/featuretwo'], function(feature){

  describe("Feature Two", function(){
    xit("Has a name", function(){
       expect(feature.name).toBe("Feature Two");
    });

    it("Posts data to the server", function(){
      feature.invoke();

    });
  });

});
