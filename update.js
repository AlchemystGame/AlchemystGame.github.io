var white = 66;

function update() {
	$(".Philo").css({
	"background": "-webkit-radial-gradient(white "+white+"%, red)",
	"background": "-o-radial-gradient(white "+white+"%, red)",
	"background": "-moz-radial-gradient(white "+white+"%, red)",
	"background": "radial-gradient(white "+white+"%, red)"
	});
	white = white-1;

	Resources.Essence.amount+=Click*deltaTime/1000;
	updateIsDiscovered();
	updateResources();
	updateResourceTable();
	updateAgeList();
	updateAges();
};


function updateIsDiscovered() {
	for (var property in Resources) {
		if (Resources.hasOwnProperty(property)) {
			if(Resources[property].hasOwnProperty("isDiscovered")) {
				if(Resources[Resources[property]["required"]["resource"]]["amount"]>Resources[property]["required"]["amnt"]) {
					Resources[property]["isDiscovered"]=true;
					var prop = "'"+property+"'"
					if((($("#GatherButtons").has("."+property+"C")).length==0)) {
						console.log(property)
						$("#GatherButtons").append('<div><button onClick="resourceClick('+prop+')" class="'+property+'C resourceButton">Mine Gold <div>Gold: <span class="'+property+'">0</span></div></button></div>');
					};
				};
			};
		};
	};
};

function updateResources() {
	for(var resource in Resources) {
		if(Resources.hasOwnProperty(resource)) {
			if(Resources[resource]["amount"]!=0) {
				if(Resources[resource]["isScientific"]==false) {
					$("."+ resource).text(suffixfy(Resources[resource]["amount"],3));
					if(getSuffix(Resources[resource]["amount"],4)>19) {
						Resources[resource]["isScientific"]=true;
					};
				}
				else {
					$("."+ resource).text((Resources[resource]["amount"].toExponential(5)));
				};
			}
			else {
				$("."+ resource).text((Resources[resource]["amount"]));
			};
		};
	};
};
