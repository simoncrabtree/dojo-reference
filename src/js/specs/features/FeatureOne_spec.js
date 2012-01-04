define(['app/features/featureone', 'app/core/dataChannel'], function(feature, dataChannel){
  describe("Feature One", function(){
    it("Requests a list of things from the server", function(){
      spyOn(dataChannel, 'getData');

      feature.invoke();
      expect(dataChannel.getData).toHaveBeenCalledWith('FeatureOneQuery', feature.onDataReceived );
    });

    it("Receives data and displays it", function(){
      feature.onDataReceived({message: 'Hello World'});

      expect(feature.currentMessageToDisplay).toBe('Hello World');
    });


  });
});
