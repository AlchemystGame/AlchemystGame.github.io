var Resources = {
	// MATERIALS
	Stone:{
		name: 'Stone',
		desc: 'Only a stones throw away from being completely useless.',
		amount: new BigNumber(1),
		color: '#8B8D7A',
		isScientific: false
	},
		
	Gold:{
		name: 'Gold',
		desc: 'Cha Ching.',
		amount: new BigNumber(0),
		color: '#D4AF37',
		isDiscovered: false,
		isScientific: false,
		required: {
			resource: "Stone",
			amnt: 40
			}
	},
		
	Essence:{
		name: 'Essence',
		desc: 'Basic component of literally everything, even you!',
		amount: new BigNumber(0),
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


//if Resources.Stone.amount>Resources.Gold.required.amnt)