var white = 66;
var totalTime = 0;
//loadSave();
function update() {
	$(".Philo").css({
	"background": "-webkit-radial-gradient(white "+white+"%, rgba(8,232,222))",
	"background": "-o-radial-gradient(white "+white+"%, rgba(8,232,222))",
	"background": "-moz-radial-gradient(white "+white+"%, rgba(8,232,222))",
	"background": "radial-gradient(white "+white+"%, rgba(8,232,222))"
	});
	white = white-1;

	Resources.Essence.amount+=Click*deltaTime/1000;
	let AgeIncome = totalAgeIncome();

	updateIsDiscovered();
	updateResources();
	updateResourceTable();
	updateAgeList();
	updateAges();

	totalTime+=deltaTime;
	if(totalTime>=60000*5) {
		totalTime = 0;
		save();
		addMessage("Auto-saving...");
	}

};

//Save Functionality

function save() {
	var saveResources = JSON.stringify(Resources);
	console.log(saveResources);
	localStorage.setItem("saveResources", saveResources);

	var saveAges = JSON.stringify(ages);
	localStorage.setItem("saveAges", saveAges);
};

function loadSave() {
	var saveResources = localStorage.getItem("saveResources");
	Resources = JSON.parse(saveResources);

	//var saveAges = localStorage.getItem("saveAges");
	//ages = JSON.parse(saveAges);
};

window.onbeforeunload = function(){save();};

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

function updateAgeList() {
	if($("#Ages").has("#ActiveAgeList").length==1) {
		for(age in ages) {
			if(ages[age].isActive) {
				if($("#ActiveAgeList").has("#"+ages[age].id).length==0) {
					$("#ActiveAgeList").append("<li class=ageButton onClick = resourceClick('Essence'),loadSelectedAge("+ ages[age].id +"); id="+ages[age].id+">"+ages[age].name+": <span class="+ages[age].id+">"+ages[age].totalEssence+"</span></li>").animate({scrollTop: $('#messageLog').prop("scrollHeight")}, 500);
				}
			}
		}
	}

	if($("#Ages").has("#PassiveAgeList").length==1) {
    	$("#PassiveAgeList").each(function(v,f) {
			for (age in ages) {
            	var currentAge = ages[age];
    			if (currentAge.hasOwnProperty("id")) {
					if(($(f).has("#"+currentAge.id).length==0)&&($("#ActiveAgeList").has("#"+currentAge.id).length==0)) {
		    			$(f).append("<li class=ageButton onClick = resourceClick('Essence'),loadSelectedAge("+ currentAge.id +"); id="+currentAge.id+">"+currentAge.name+": <span class="+currentAge.id+">"+currentAge.totalEssence+"</span></li>").animate({scrollTop: $('#messageLog').prop("scrollHeight")}, 500);
    				}
				}
    		}
		})
	}

};

function updateAges() {
    for(age in ages) {
        $("#PassiveAgeList li").each(function(v,f){
            if(ages[age].id==f.id) {
                $("."+ages[age].id).text(suffixfy(ages[age].totalEssence,3));
            }
        })

		$("#ActiveAgeList li").each(function(v,f){
            if(ages[age].id==f.id) {
                $("."+ages[age].id).text(suffixfy(ages[age].totalEssence,3));
            }
        })
    }
}
