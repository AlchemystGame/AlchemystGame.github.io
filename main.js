/*var game = {
	Clicks: 1,

	Resources: {
		Stone: {
			name: "Stone",
			desc: "The starting building block for all of Alchemy",
			amount = 10,
			color: 	"#8B8D7A"
		}
	},

	cursorClick: function(number) {
		Resources.Stone.amount = Resources.Stone.amount + Clicks;
		document.getElementById("stones").innerHTML = Resources.Stone.amount;
			if(stone>40){
				document.getElementById("test").innerHTML = Resources.Stone.amount;
			};
	}
};

var Alchemy = new game();
document.getElementById("test").innerHTML = Alchemy.Resources.Stone.amount;
*/


var panes = ["Main","Transmutation"];
var Click = 10000
function resourceClick(resource){
    Resources[resource]["amount"] = Resources[resource]["amount"].add(Click);
	if(($("#ResourceTable").has("."+resource+"C")).length==0) {
		$("#ResourceTable").append("<li class="+resource+"C>"+resource+": <span class="+resource+"></span></li>");
	};
	if(Resources[resource]["isScientific"]==false) {
		$("."+ resource).text(suffixfy(Resources[resource]["amount"],3));
		if(getSuffix(Resources[resource]["amount"],4)>19) {
			Resources[resource]["isScientific"]=true;
		};
	}
	else {
		$("."+ resource).text((Resources[resource]["amount"].toExponential(5)));
	};
};

function homunculusCost(homunculus) {
	var c = Math.floor((Homunculi[homunculus+"Hom"]["cost"]) * Math.pow(1.07,(Homunculi[homunculus+"Hom"]["amount"]-1)));
	return c;
};

function homunculusClick(homunculus){
	console.log((Resources[homunculus]["amount"] - homunculusCost(homunculus))>=0,homunculusCost(homunculus),(Resources[homunculus]["amount"] - homunculusCost(homunculus)));
	if((Resources[homunculus]["amount"]>=homunculusCost(homunculus))
  &&((Resources[homunculus]["amount"] - homunculusCost(homunculus)>=0))) {
		Resources[homunculus]["amount"] = Resources[homunculus]["amount"] - homunculusCost(homunculus);
		Homunculi[homunculus+"Hom"]["amount"] = Homunculi[homunculus+"Hom"]["amount"] + Click;
		if(($("#HomunculusTable").has("."+homunculus+"C")).length==0) {
			$("#HomunculusTable").append("<li class="+homunculus+"C>"+homunculus+" Homunculus: <span class="+homunculus+"Hom></span></li>");
		};
		$("."+ homunculus).text(Resources[homunculus]["amount"]);
		$("."+ homunculus +"Cost").text(homunculusCost(homunculus));
		$("."+ homunculus+"Hom").text(Homunculi[homunculus+"Hom"]["amount"]);
	};
};

function homBtnCreate() {

};

function suffixfy(num, dec){
    dec = dec || 0; //how many decimal places do we want?
    var suffixes = ['','k','M','B','T','Qa','Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'UnD', 'DuD', 'TrD', 'QaD', 'QiD', 'SeD', 'SpD', 'OcD', 'NoD', 'Vi', 'UnV'];
    var ord = floor(Math.log(Math.abs(num))/Math.log(10)/3); //the abs to make sure our number is always positive when being put through a log operation. divide by 3 at the end because our suffixes goes up by orders of 3
    var suffix = suffixes[ord]
    var rounded = Math.round(num/(Math.pow(10, ord*3-dec)))/Math.pow(10, dec);
	if(rounded == 1000) {
		suffix = suffixes[ord+1];
		rounded = rounded/1000
	};
	console.log(rounded)
    return rounded+suffix;

}

function getSuffix(num,dec) {
	dec = dec || 0; //how many decimal places do we want?
    var ord = floor(Math.log(Math.abs(num))/Math.log(10)/3); //the abs to make sure our number is always positive when being put through a log operation. divide by 3 at the end because our suffixes goes up by orders of 3
    return ord
}

function floor(num){
    //special floor needed to deal with floating point calculations
    if(num - Math.floor(num) >= 0.9999999999999991){
        return Math.ceil(num);
    } else{
        return Math.floor(num);
    }
}


function unhide(id) {
	panes.forEach(function(item) {
		$('#'+item).attr("class","hidden")
	}
		);
	$('#'+id).attr("class","nothidden");
};

function save() {
	var save = JSON.stringify(Resources);
	localStorage.setItem("save", save);
};

function loadSave() {
	var saveResources = localStorage.getItem("save");
	Resources = JSON.parse(saveResources);
};


var white = 66;
window.setInterval(function(){
	update();
	}, 300);
