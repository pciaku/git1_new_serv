sap.ui.jsview("view.DetailInit", {
	
	getControllerName : function(){
		return "controller.DetailInit";
	},
	
	createContent : function(oController){
		return new sap.m.FlexBox({			
			height : "100%",
			alignItems : sap.m.FlexAlignItems.Center,
			justifyContent : sap.m.FlexJustifyContent.Center,
			items : [
				new sap.m.Image({
					src : "img/Optima2SAP_alpha_s.png"
				})
			]
		})
	}	
})