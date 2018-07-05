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
	let AgeIncome = totalAgeIncome();



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
    $("#AgeList").each(function(v,f) {
		for (age in Ages) {
            var currentAge = Ages[age];
    		if (currentAge.hasOwnProperty("id")) {
				if(($(f).has("#"+currentAge.id).length==0)) {
		    		$(f).append("<li id="+currentAge.id+">"+currentAge.name+": <span class="+currentAge.id+">"+currentAge.totalEssence+"</span></li>");
    			}
			}
    	}
	})
};

function updateAges() {
    for(age in Ages) {
        $("#AgeList li").each(function(v,f){
            if(Ages[age].id==f.id) {
                $("."+Ages[age].id).text(suffixfy(Ages[age].totalEssence,3));
            }
        })
    }
}
