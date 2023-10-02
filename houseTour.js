
	    var mashes = [];
	    var myRoomTextureMap=null;
	    var linkTargetMap = null;
	    var myRoomMap = null;
	    var myRoomLoaded = null;
	    var linkLoaded = null;

	    var init = function () { 
	    
        }	
	
	var scene = null;
	// Initialize GizmoManager
	var gizmoManager = null;
	var createScene = function () {
             myRoomTextureMap = new Map();
	    linkTargetMap = new Map();
	    myRoomMap = new Map();
	    myRoomLoaded = new Map();
	    linkLoaded = new Map();

            myRoomTextureMap.set("skyBox1",["textures/102824418_l.jpg",0,-135,6]);            
	    // Skybox 2
	    myRoomTextureMap.set("skyBox2",["textures/102831187_l.jpg",110,-135,0]);
	    // Skybox 3
	    myRoomTextureMap.set("skyBox3",["textures/102831188_l.jpg",220,-135,0]);
	    // Skybox 4
	    myRoomTextureMap.set("skyBox4",["textures/102824419_l.jpg",340,-135,0]);
	    // Skybox 5
	    myRoomTextureMap.set("skyBox5",["textures/102831199_l.jpg",460,-135,0]);
	    // Skybox 5A
	    myRoomTextureMap.set("skyBox5A",["textures/DocPregChember.jpg",580,-135,0]);
	    // Skybox 5B
	    myRoomTextureMap.set("skyBox5B",["textures/102831190_l.jpg",700,-135,0]);
	    // Skybox 5C
	    myRoomTextureMap.set("skyBox5C",["textures/102831206_l.jpg",820,-135,0]);
	    // Skybox 5D
	    myRoomTextureMap.set("skyBox5D",["textures/102831216_l.jpg",940,-135,0]);
	    // Skybox 5E
	    myRoomTextureMap.set("skyBox5E",["textures/102824467_l.jpg",1060,-135,0]);
	    // Skybox 5F
	    myRoomTextureMap.set("skyBox5F",["textures/102831268_l.jpg",1180,-135,0]);
	    // Skybox 5G
	    myRoomTextureMap.set("skyBox5G",["textures/102831191_l.jpg",1300,-135,0]);
	    //Skybox 5H
	    myRoomTextureMap.set("skyBox5H",["textures/102831218_l.jpg",1420,-135,0]);
	    // Skybox 5I
	    myRoomTextureMap.set("skyBox5I",["textures/102824470_l.jpg",1540,-135,0]);
	    // Skybox 6- 102831217_l.jpg
	    myRoomTextureMap.set("skyBox6",["textures/semi-delux.jpg",1660,-135,0]);
	    // Skybox 7- 102831270_l.jpg
	    myRoomTextureMap.set("skyBox7",["textures/102831270_l.jpg",1780,-135,0]);
	    // Skybox 8- 102831269_l.jpg
	    myRoomTextureMap.set("skyBox8", ["textures/102831269_l.jpg",1900,-135,0]);
	    myRoomTextureMap.set("skyBox9", ["textures/102831193_l.jpg",2020,-135,0]);
	    myRoomTextureMap.set("skyBox10",["textures/102824752_l.jpg",2140,-135,0]);
	    myRoomTextureMap.set("skyBox11",["textures/102831267_l.jpg",2260,-135,0]);

	    
	    //step 1
	    //linkTarget(name,torusPosition, cameraNewPosition, cameraSetTargetPosition, cameraAlpha,cameraBeta,scene,camera)
	    linkTargetMap.set("basement",[[-20, -148, -46], [110, -135, 0],[110, -135, 0], 0,12]);
	    //step 2
	    linkTargetMap.set("stair1",[[110, -150, -40], [220, -135, 0],[220, -135, 0],6,0]);
	    //step 3
	    linkTargetMap.set("stair2",[[265, -146, 15], [340, -135, 0],[340, -135, 0],0,0]);
	    //step 4
	    linkTargetMap.set("firstfloor",[[340, -150, 40], [460, -135, 0],[460, -135, 0],0,0]);
	    //step 5
	    linkTargetMap.set("PregChember",[[506, -155, 11], [580, -135, 0],[580, -135, 0],0,0]);
	    //back step 4
	    linkTargetMap.set("firstfloor-back",[[625, -150, 15], [460, -135, 0],[460, -135, 0],0,0]);
	    //step 6
	    linkTargetMap.set("coridor",[[480, -142, 40], [700, -135, 0],[700, -135, 0],0,0]);
	    //step 7
	    linkTargetMap.set("coridorA",[[682, -147, -44.5], [820, -135, 0],[820, -135, 0],0,0]);
	    //step 8
	    linkTargetMap.set("Consultency",[[796, -151, -31], [940, -135, 0],[940, -135, 0],0,0]);
 	    //back step 7
	    linkTargetMap.set("coridor1",[[899, -158, -15], [820, -135, 0],[820, -135, 0],0,0]);
	    //step 9
	    linkTargetMap.set("coridor2",[[867, -145.7, -47.4], [1060, -135, 0],[1060, -135, 0],0,0]);
 	    //step 10
	    linkTargetMap.set("coridor3",[[1041, -156, -35], [1180, -135, 0],[1180, -135, 0],0,0]);
	    //step 11
	    linkTargetMap.set("coridor4",[[1172, -143, 45], [1300, -135, 0],[1300, -135, 0],0,0]);
	    //step 12
	    linkTargetMap.set("coridor5",[[1311, -151, -44], [1420, -135, 0],[1420, -135, 0],0,0]);
	    //step 13
	    linkTargetMap.set("coridor6",[[1438, -147.5, -44.5], [1540, -135, 0],[1540, -135, 0],0,0]);
	    //step 14
	    linkTargetMap.set("room",[[1526, -151, -46.2], [1660, -135, 0],[1660, -135, 0],0,0]);
	    //step 14- back
	    linkTargetMap.set("room-coridor6",[[1612, -151.5, -24.5], [1540, -135, 0],[1540, -135, 0],0,0]);
	    //step 15
	    linkTargetMap.set("room1",[[1540+20, -150, 10], [1780, -135, 0],[1780, -135, 0],0,0]);
	    //step 15
	    linkTargetMap.set("junction",[[1780+20, -150, 10], [1900, -135, 0],[1900, -135, 0],0,0]);	

	
        myRoomMap.set('basement', [['skyBox3', 'skyBox4'],['firstfloor', 'PregChember']]);
        myRoomMap.set('stair1', [['skyBox4', 'skyBox5'],['PregChember',"firstfloor-back"]]);
        myRoomMap.set('stair2', [['skyBox5', 'skyBox5A'],['coridorA','Consultency']]);
 	myRoomMap.set('firstfloor', [['skyBox5A','skyBox5B'],['Consultency','coridor1']]);
 	myRoomMap.set('PregChember', [['skyBox5B','skyBox5C'],['coridor1','coridor2']]);
 	myRoomMap.set('coridor', [['skyBox5C','skyBox5D'],['coridorA','Consultency']]);
	myRoomMap.set('coridorA', [['skyBox5D', 'skyBox5E'],['Consultency','coridor1']]);
	myRoomMap.set('Consultency', [['skyBox5E', 'skyBox5F'],['coridor1','coridor2']]);
	myRoomMap.set('coridor1', [['skyBox5F', 'skyBox5G'],['coridor2', 'coridor3']]);
	myRoomMap.set('coridor2', [['skyBox5G', 'skyBox5H'],['coridor3', 'coridor4']]);
	myRoomMap.set('coridor3', [['skyBox5H', 'skyBox5I'],['coridor4', 'coridor5']]);
	myRoomMap.set('coridor4', [['skyBox5I', 'skyBox6'],['coridor5','coridor6']]);
	myRoomMap.set('coridor5', [['skyBox6', 'skyBox7'],['coridor6',"room"]]);
	myRoomMap.set('coridor6', [['skyBox7', 'skyBox8'],["room", "room-coridor6"]]);
	myRoomMap.set('room1', [['skyBox8', 'skyBox9'],["room", "room-coridor6"]]);
	myRoomMap.set('junction', [['skyBox9', 'skyBox10'],["room", "room-coridor6"]]);
        //console.log(myRoomMap.has('skyBox1'));
        //console.log(myRoomMap.get('skyBox1'));

            // This creates a basic Babylon Scene object (non-mesh)
            scene = new BABYLON.Scene(mainEngine);
            scene.useRightHandedSystem = true
            // This creates and positions a free camera (non-mesh)
            var camera = new BABYLON.ArcRotateCamera("camera1",Math.PI, Math.PI / 2.0, 20, new BABYLON.Vector3(0,-135,0), scene);
        
            camera.angularSensibilityX = -camera.angularSensibilityX;
            camera.angularSensibilityY = -camera.angularSensibilityY;
            camera.lowerRadiusLimit = 5;
            camera.upperRadiusLimit = 20;
            //console.log(camera.upperRadiusLimit);
            // This targets the camera to scene origin
            camera.setTarget(new BABYLON.Vector3(0,-135,0));   
        
            // This attaches the camera to the canvas
            camera.attachControl(document.getElementById("mainCanvas"), true);
        
            // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
            var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        
            // Default intensity is 1. Let's dim the light a small amount
            light.intensity = 0.1;
	    
	    // Initialize GizmoManager
	    gizmoManager = new BABYLON.GizmoManager(scene);
            
	    //linkTarget(name,torusPosition, cameraNewPosition, cameraSetTargetPosition, cameraAlpha,cameraBeta,scene,camera)
            //step 1
	    linkTarget("basement",[-20, -148, -46], [110, -135, 0],[110, -135, 0], 0,0, scene,camera);
	    linkLoaded.set("basement","sucess");
	    //step 2
	    linkTarget("stair1",[110, -150, -40], [220, -135, 0],[220, -135, 0],6,0, scene,camera);
            linkLoaded.set("stair1","sucess");
	    //step 3
	    linkTarget("stair2",[265, -146, 15], [340, -135, 0],[340, -135, 0],0,0, scene,camera);
	    linkLoaded.set("stair2","sucess");
	   
	    //step 1
	   /* linkTarget("torus1",[-20, -15.5, -40], [110, 0, 0],[110, 0, 0], 3,0, scene,camera);
	    //step 2
	    linkTarget("torus2",[-15+110, -15.5, -40], [220, 0, 0],[220, 0, 0],6,0, scene,camera);
	    //step 3
	    linkTarget("torus3",[-15+220, -15.5, -40], [340, 0, 0],[340, 0, 0],0,0, scene,camera);
	    //step 4
	    linkTarget("torus4",[-15+340, -15.5, -40], [460, 0, 0],[460, 0, 0],0,0, scene,camera);
	    //step 5
	    linkTarget("torus5",[-15+460, -15.5, -40], [580, 0, 0],[580, 0, 0],0,0, scene,camera);
	    //back step  2
	    linkTarget("torus2-back",[220+15, -15.5, 40], [110, 0, 0],[110, 0, 0],6,0, scene,camera);
	    //back step 1
	    linkTarget("torus1-back",[110-20, -15.5, 40], [0, 0, 0],[0, 0, 0],3,0, scene,camera);
	   */


	    // Skybox 1
            loadSkyBox("skyBox1","textures/102824418_l.jpg",0,-135,0);            
	    // Skybox 2
	    loadSkyBox("skyBox2","textures/102831187_l.jpg",110,-135,0);
	   
	


            /*// Skybox 6
            loadSkyBox("skyBox6","textures/Entry.jpg",0,0,0);            
	    // Skybox 7
	    loadSkyBox("skyBox7","textures/Inspection.jpg",110,0,0);
	    // Skybox 8
	    loadSkyBox("skyBox8","textures/waiting.jpg",220,0,0);
	    // Skybox 9
	    loadSkyBox("skyBox9","textures/119961411_l.jpg",340,0,0);
	    // Skybox 10
	    loadSkyBox("skyBox10","textures/119961407_l.jpg",460,0,0);
	    // Skybox 11
	    loadSkyBox("skyBox11","textures/119961410_l.jpg",580,0,0);
            */
        
            // Reset arrow-key shortcuts && Add support for WASD
            camera.keysLeft=[39]; // moves camera left
            camera.keysUp = [40]; // moves camera up
            camera.keysRight = [37]; // moves camera right
            camera.keysDown = [38]; // moves camera down
        
            // Plus- and minus- key zooming
            var map = {};
            //var zoomLevel = 1;
            scene.actionManager = new BABYLON.ActionManager(scene);
            scene.registerAfterRender(() =>{
                camera.fov = camera.radius * 1/20;
            });
        
            scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function(evt){
                map[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
                var key = evt.sourceEvent.key;
                if(key === "-" || key === "_"){
                    camera.radius += 5;
                }
                if(key === "+" || key === "="){
                    camera.radius -= 5;
                }
            }));
        
            scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) 			{								
                map[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
            }));
        
	     // Modify gizmos based on keypress
    	     document.onkeydown = (e)=>{
		if(e.key == 'e'){
                  gizmoManager.positionGizmoEnabled = true;
		  gizmoManager.usePointerToAttachGizmos =true;
            	}
		if(e.key == 'x'){		  
                  gizmoManager.positionGizmoEnabled = false;
		 // gizmoManager.attachToMesh(null);
		  //console.log("key "+ gizmoManager.);
            	}
	     }
            scene.registerBeforeRender(function() {
                // rotation per click
                if(map["a"] || map["A"]){
                    //left
                    //camera.inertialAlphaOffset = 0.05;
                    camera.alpha -= Math.PI/24;
                    console.log(camera.alpha);
                };
                if(map["d"] || map["D"]){
                    //right
                    //camera.inertialAlphaOffset = -0.05;
                    camera.alpha += Math.PI/24;
                    console.log(camera.alpha);
                }
                if(map["w"] || map["W"]){
                    //up
                    //camera.inertialBetaOffset = 0.05;
                    camera.beta += Math.PI/24;
                    console.log(camera.beta);
                }
                if(map["s"] || map["S"]){
                    //down
                    //camera.inertialBetaOffset = -0.05;
                    camera.beta -= Math.PI/24;
                    console.log(camera.alpha);
                }		
                /*if(map["i"] || map["I"]){
		    //console.log("in I");
		    var cam = scene.activeCamera;
                    cam.setPosition(new BABYLON.Vector3(110, 0, 0));
		    // This targets the camera to scene origin
            	    cam.setTarget(new BABYLON.Vector3(110, 0, 0));
		    cam.radius=camera.upperRadiusLimit;
		    camera.alpha += (Math.PI/24)*3;		    
                }
		if(map["j"] || map["J"]){
		    //console.log("in j");
		    var cam = scene.activeCamera;
                    cam.setPosition(new BABYLON.Vector3(220, 0, 0));
		    // This targets the camera to scene origin
            	    cam.setTarget(new BABYLON.Vector3(220, 0, 0));
		    cam.radius=camera.upperRadiusLimit;
		    camera.alpha += (Math.PI/24)*6;		    
                }
                if(map["p"] || map["P"]){
                    //console.log("in P");
		    var cam = scene.activeCamera;
                    cam.setPosition(new BABYLON.Vector3(0, 0, 0));
		    // This targets the camera to scene origin
            	    cam.setTarget(new BABYLON.Vector3(0, 0, 0));
		    cam.radius=camera.upperRadiusLimit;
                }*/
        
                //map["w"] = map["W"] = map["d"] = map["D"] = map["s"] = map["S"] = map["a"] = map["A"] = undefined;
            });
	    gizmoManager.attachableMeshes = mashes;
	    createToolBox(camera);

           return scene;
        
        };
	
	var loadSkyBox= function(name,texture, x,y,z){		
	    var skybox = BABYLON.Mesh.CreateBox(name, 100.0, scene);
            var skyboxMaterial = new BABYLON.StandardMaterial(name, scene);
            skyboxMaterial.backFaceCulling = false;
            skyboxMaterial.reflectionTexture = new BABYLON.Texture(texture, scene, true);
	    skyboxMaterial.reflectionTexture.isPickable = false;
	    skyboxMaterial.reflectionTexture.infiniteDistance = true;
		
            skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.FIXED_EQUIRECTANGULAR_MODE;
	    skyboxMaterial.disableLighting = true;
            skybox.material = skyboxMaterial;
	    skybox.position = new BABYLON.Vector3(x, y, z);
	}

	var linkTarget =function(name,torusPosition, cameraNewPosition, cameraSetTargetPosition, cameraAlpha,cameraBeta,scene,camera){
	    //console.log("torus : "+torusPosition[0]+","+torusPosition[1]+torusPosition[2]);
	    //console.log("cameraNewPosition : "+cameraNewPosition[0]+","+cameraNewPosition[1]+cameraNewPosition[2]);
	   // console.log("cameraSetTargetPosition : "+cameraSetTargetPosition[0]+","+cameraSetTargetPosition[1]+cameraSetTargetPosition[2]);
	    //console.log("camera.alpha : "+cameraAlpha);
	    var torus = BABYLON.Mesh.CreateTorus(name, 5, 1, 30, scene, false, BABYLON.Mesh.DEFAULTSIDE);
	    torus.position=new BABYLON.Vector3(torusPosition[0],torusPosition[1],torusPosition[2]);
            //rotation in drg
	    //torus.rotation.x=-15;
	    mashes.push(torus);
	   
	   
	    torus.actionManager = new BABYLON.ActionManager(scene);
	    torus.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(evt){
		 if(!gizmoManager.positionGizmoEnabled){
		camera.setPosition(new BABYLON.Vector3(cameraNewPosition[0],cameraNewPosition[1],cameraNewPosition[2]));
		// This targets the camera to scene origin
            	camera.setTarget(new BABYLON.Vector3(cameraSetTargetPosition[0],cameraSetTargetPosition[1],cameraSetTargetPosition[2]));
		camera.radius=camera.upperRadiusLimit;
		camera.alpha += (Math.PI/24)*cameraAlpha;
		camera.beta += (Math.PI/24)*cameraBeta;
		}else{
		   console.log("["+torus.position.x+", "+torus.position.y+", "+torus.position.z+"]");
			}
	   	}));
	    torus.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(evt){
		 if(!gizmoManager.positionGizmoEnabled){		
		console.log(torus.name);
		if(myRoomMap.has(torus.name)){
		   var roomLinks= myRoomMap.get(torus.name);
		   var rooms=roomLinks[0];
		   console.log(rooms);
		   for (i = 0; i < rooms.length; i++) { 
		   	if(!myRoomLoaded.get(rooms[i])){
				var skyboxAttr= myRoomTextureMap.get(rooms[i])
			        loadSkyBox(rooms[i],skyboxAttr[0],skyboxAttr[1],skyboxAttr[2],skyboxAttr[3]);
				myRoomLoaded.set(rooms[i],"sucess");
		      }		   
		   }
		   var linkTag=roomLinks[1];
		   console.log(linkTag);
		   for (i = 0; i < linkTag.length; i++) { 
		   	if(!linkLoaded.get(linkTag[i])){
				var linkAttr= linkTargetMap.get(linkTag[i])
				//linkTarget(name,torusPosition, cameraNewPosition, cameraSetTargetPosition, cameraAlpha,cameraBeta,scene,camera)
				var torusPosition =linkAttr[0]; 
				var cameraNewPosition =linkAttr[1]; 
				var cameraSetTargetPosition =linkAttr[2];
			linkTarget(linkTag[i],torusPosition, cameraNewPosition, cameraSetTargetPosition,linkAttr[3],linkAttr[4],scene,camera);
			linkLoaded.set(linkTag[i],"sucess");
		        }
		     }//for
		 }
		}//gizmoManager
	    }));
	
	   }

	  //Default tool box
	   var createToolBox= function(camera){	
	   var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
	   var setView = function(but) {
	   console.log(but);
		if(but === 0){console.log("360 view");
			camera.lowerBetaLimit = 0;
			camera.upperBetaLimit = 3.14159;
		}
		else{
			camera.lowerBetaLimit = 0.698132; // 40 degrees
    			camera.upperBetaLimit = 1.5777;   // 90 degrees
		}
	   }
	   
	   
	
	//Add View Selection Panel 
	var viewGroup = new BABYLON.GUI.RadioGroup("View");
	viewGroup.addRadio("360 View", setView, true);
    	viewGroup.addRadio("Panorama", setView);

	//var rotateGroup = new BABYLON.GUI.SliderGroup("Zoom", "S");
	//rotateGroup.addSlider("Zoom", orientateY, "degs", camera.lowerRadiusLimit, 2 * Math.PI, 0, displayValue)

	var selectBox = new BABYLON.GUI.SelectionPanel("sp", [viewGroup]);
    	selectBox.width = 0.10;
    	selectBox.height = 0.20;
    	selectBox.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    	selectBox.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
     
    	advancedTexture.addControl(selectBox);
        }
