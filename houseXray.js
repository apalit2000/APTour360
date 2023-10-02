	var createXrayScene = function () {
        
            // This creates a basic Babylon Scene object (non-mesh)
            var scene = new BABYLON.Scene(xrayEngine);
        
            // This creates and positions a free camera (non-mesh)
            //var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -15), scene);
            var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 4, Math.PI / 2.5, 20, BABYLON.Vector3.Zero(), scene);
            // This targets the camera to scene origin
            camera.setTarget(new BABYLON.Vector3(0, 2, 0));
        
            // This attaches the camera to the canvas
            camera.attachControl(xrayCanvas, true);
        
            // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
            //var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        
            // Default intensity is 1. Let's dim the light a small amount
            //light.intensity = 0.7;
        
        
        	// xray material
        	var xray_mat = new BABYLON.StandardMaterial("xray", scene);
            xray_mat.emissiveColor = new BABYLON.Color3(1, 1, 1);
        	xray_mat.alpha = 0.1;
        	var fresnel_params = new BABYLON.FresnelParameters();
        	fresnel_params.isEnabled = true;
        	fresnel_params.leftColor = new BABYLON.Color3(0.5, 0.6, 1);
        	fresnel_params.rightColor = new BABYLON.Color3(0, 0, 0);
        	fresnel_params.power = 2;
        	fresnel_params.bias = 0.1;
        	var fresnel_params2 = new BABYLON.FresnelParameters();
        	fresnel_params2.isEnabled = true;
        	fresnel_params2.leftColor = new BABYLON.Color3(1, 1, 1);
        	fresnel_params2.rightColor = new BABYLON.Color3(0.2, 0.2, 0.2);
        	fresnel_params2.power = 2;
        	fresnel_params2.bias = 0.5;
        	xray_mat.emissiveFresnelParameters = fresnel_params;
        	xray_mat.opacityFresnelParameters = fresnel_params2;
        
        	BABYLON.SceneLoader.ImportMesh("", "model/", "building_04.obj", scene, function (newMeshes) {
        	console.log(newMeshes.length);
		
			var j;
			for( j=0; j< newMeshes.length;j++){
				var mesh = newMeshes[j];
		
				mesh.material = xray_mat;
				mesh.position = new BABYLON.Vector3(0, 1, 0);
				//mesh.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
				
				// reset mesh color
				var colors = [];
				var count = mesh.getTotalVertices() * 4;
				var i;
				for(i=0; i<count; i+=4) {
					colors[i] = 1;
					colors[i+1] = 1;
					colors[i+2] = 1;
					colors[i+3] = 1;
				}
				mesh.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
			}
        
        	    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
        	    var ground = BABYLON.Mesh.CreateBox("ground", 1, scene);
        		ground.scaling.x = 10;
        		ground.scaling.z = 10;
        		ground.material = xray_mat;
        	});
 		
       	    return scene;
        
        };
