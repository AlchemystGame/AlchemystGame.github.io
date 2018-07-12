
var panes = ["Main", "Transmutation","Ages"];
var Click = 100000;

//Click to gather various resources, need to update

function resourceClick(resource){
    updateResourceTable(resource);
    addMessage("Adding " + Click + " " + resource);
    Resources[resource]["amount"] = Resources[resource]["amount"]+(Click);
    Ages[0].totalEssence+=Click;
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

//Useless, need to remove

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

// Used to add suffix to all numbers

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

//Swich Between Panes

function unhide(id) {
	panes.forEach(function(item) {
		$('#'+item).attr("class","hidden")
	}
		);
	$('#'+id).attr("class","nothidden");
};

 // Game Tick Loop
var tick = 10;
var lastUpdate = Date.now();
var now;
var deltaTime;
var tickCount = 0;

loadSave();
function gameLoop() {
        now = Date.now();
        deltaTime = now - lastUpdate;
        lastUpdate = now;
        tickCount++;

    update();

    setTimeout(gameLoop, 1000/tick);
}

gameLoop();
