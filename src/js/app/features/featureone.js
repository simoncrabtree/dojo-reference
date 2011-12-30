define([
       'app/core/dataChannel',
       'dojo/i18n!./nls/featureone'
], function(dataChannel, localstrings){
  return {
    local: localstrings,
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
