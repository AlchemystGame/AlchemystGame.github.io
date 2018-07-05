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

var Essence1 = {
		Alpha: {
			tier: 1,
			amount: 0,
			color: '#08e8de',
			isDiscovered: true,
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
