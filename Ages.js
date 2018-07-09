function Age(name , tier, totalEssence, essenceCollectionSpeed, activeAttribute, passiveAttributes, id) {

        this.name = name;
        this.tier = tier;
        this.totalEssence = totalEssence;
        this.essenceCollectionSpeed = essenceCollectionSpeed;
            this.activeAttributeDesc = activeAttribute[0];
            this.activeAttributeModifier =  activeAttribute[1];
        this.passiveAttributes = passiveAttributes;
        this.id = id;
    }

ageNames = ["Aberdeen",
            "The Crucible of Ages"];

test = new Age("Aberdeen", 1, 1000, 1, ["Increased Click",1], [1,2,3,4], "12345");
test2 = new Age("The Crucible of Ages", 1, 100000, .5, ["Increased Click",1], [1,2,3,4], "12346");
test3 = new Age("The Crucible of Ages", 3, 100000, .5, ["Increased Click",1], [1,2,3,4], "12347");
test4 = new Age("The Crucible of Ages", 2, 100000, .5, ["Increased Click",1], [1,2,3,4], "12348");
test5 = new Age("The Crucible of Ages", 5, 100000, .5, ["Increased Click",1], [1,2,3,4], "12349");
Ages = [test,test2,test3,test4,test5];
console.log(test.name)
console.log(Ages[0].activeAttributeDesc)
console.log(Ages[0].passiveAttributes)

function totalAgeIncome() {
    let income = [0,0,0,0,0,0,0,0];
    for(age in Ages) {
        income[Ages[age].tier-1]+=Ages[age].essenceCollectionSpeed;
    }
    return income;
}

function loadAgeList() {
    $("#Ages").empty();
    $("#Ages").append("<div id = ActiveAges> Active Age </div>");
    $("#Ages").append("<div id = PassiveAges> Passive Ages <ul id=AgeList> </ul> </div>");
}

function loadSelectedAge(id) {
    $("#Ages").empty();
    var ageNum;
    for(age in Ages) {
        if(Ages[age].id == id) {
            ageNum = age;
        }
    }
    $("#Ages").append("<div id = selectedAge> " + Ages[ageNum].name + " : " + Ages[ageNum].tier + " </div>");
    $("#Ages").append("<ul id=currentAge> </ul>");
        $("#currentAge").append("<li>Total Essence Left In Age: "+ Ages[ageNum].totalEssence +" </li>");
        $("#currentAge").append("<li>Essence Collected Per Second: "+ Ages[ageNum].essenceCollectionSpeed +" </li>");
        $("#currentAge").append("<li>Active Attribute: "+ Ages[ageNum].activeAttributeDesc + ": "+ Ages[ageNum].activeAttributeModifier*100 +"% </li>");
        for(var attr = 0;attr<Ages[ageNum].passiveAttributes.length;attr+=2) {
            $("#currentAge").append("<li>Passive Attribute: "+ Ages[ageNum].passiveAttributes[attr] + ": "+ Ages[ageNum].passiveAttributes[attr+1]*100 +"% </li>");
        }
    $("#Ages").append("<div class = utilButton onClick = loadAgeList()>Exit to Age List</div>")
}
