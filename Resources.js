Resources = {
	// MATERIALS
	Stone:{
		name: 'Stone',
		desc: 'Only a stones throw away from being completely useless.',
		amount: 0,
		color: '#8B8D7A',
		isScientific: false
	},

	Gold:{
		name: 'Gold',
		desc: 'Cha Ching.',
		amount: 0,
		color: '#D4AF37',
		isScientific: false,
		isDiscovered: false,
		required: {
			resource: "Stone",
			amnt: 40
			}
	},

	Essence:{
		name: 'Essence',
		desc: 'Basic component of literally everything, even you!',
		amount: 0,
		color:'#08e8de',
		isScientific: false
	}
};

var Homunculi = {
	StoneHom:{
		name: 'Stone Homunculus',
		desc: 'Has a heart of stone',
		amount: 0,
		color: '#8B8D7A',
		cost: 17,
		isDiscovered: false,
		required: {
			Stone: 20
			}
		}
};

function updateResourceTable() {
	$(".ResourceTable").each(function(v,f) {
		for (var resource in Resources) {
    		if (Resources.hasOwnProperty(resource)) {
				if(($(f).has("."+resource+"C").length==0)) {
		    		$(f).append("<li class="+resource+"C>"+resource+": <span class="+resource+"></span></li>");
    			}
			}
    	}
	})
};
