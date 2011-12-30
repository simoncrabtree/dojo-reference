define(['app/core/dataChannel'], function(dataChannel){
  return {
    name: 'Feature One',
    currentMessageToDisplay: 'Not yet set',
    invoke: function(){
      dataChannel.getData('FeatureOneQuery', this.onDataReceived);
    },
    onDataReceived: function(data){
      this.currentMessageToDisplay = data.message;
    }
  };
});
