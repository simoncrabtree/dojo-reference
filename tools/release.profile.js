var profile = { 

  basePath: "../src/js",  //relative to this profile's dir
  releaseDir: "../../../dojo-reference-release/js", //relative to basePath
  layerOptimize: "shrinksafe", 
  stripConsole: "all", 
  cssOptimize: "comments", 

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
  
  layers:{
			"dojo/dojo":{
				include:[
					"dojo/selector/acme",
					"app/main",
          "app/features/featureone",
          "app/features/featuretwo"
				]
			}
		}

}; 
