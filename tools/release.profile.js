var profile = { 

  basePath: "../src/js",  //relative to this profile's dir
  releaseDir: "../../../dojo-reference-release/js", //relative to baseBath
  //layerOptimize: "shrinksafe.keepLines", 
  //stripConsole: "all", 
  //cssOptimize: "comments.keepLines", 

  packages:[ 
    { 
    name: "dojo", 
    location: "dojo" 
  }, 
  { 
    name: "dijit", 
    location: "dijit" 
  }, 
  { 
    name: "app", 
    location: "app" 
  } 
  ], 

  layers: { 

    "dojo/dojo": { 
      include: [ 
        "dojo/selector/acme", 
      ] 
    } 

  } 
}; 
