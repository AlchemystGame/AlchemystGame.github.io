function Age(name ,totalEssence, essenceCollectionSpeed, activeAttribute, passiveAttributes, id) {

        this.name = name;
        this.totalEssence = totalEssence;
        this.essenceCollectionSpeed = essenceCollectionSpeed;
            this.activeAttributeDesc = activeAttribute[0];
            this.activeAttributeModifier =  activeAttribute[1];
        this.passiveAttributes = passiveAttributes;
        this.id = id;
    }

ageNames = ["Aberdeen",
            "The Crucible of Ages"];

test = new Age("Aberdeen", 1000, .5, ["Increased Click",1], [1,2,3], "12345");
test2 = new Age("The Crucible of Ages", 100000, .5, ["Increased Click",1], [1,2,3], "12346");

Ages = [test,test2];
console.log(test.name)
console.log(Ages[0].activeAttributeDesc)
console.log(Ages[0].passiveAttributes)

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
