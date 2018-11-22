function Age(name , tier, totalEssence, essenceCollectionSpeed, activeAttribute, passiveAttributes, id, isActive) {

        this.name = name;
        this.tier = tier;
        this.totalEssence = totalEssence;
        this.essenceCollectionSpeed = essenceCollectionSpeed;
            this.activeAttributeDesc = activeAttribute[0];
            this.activeAttributeModifier =  activeAttribute[1];
        this.passiveAttributes = passiveAttributes;
        this.id = id;
        this.isActive = isActive;
}

numActiveAges = 1;
totalActiveAges = 3;
ageNames = ["Aberdeen",
            "The Crucible of Ages"];

test = new Age("Aberdeen", 1, 999, 1, ["Increased Click",1], [1,2,3,4], "12345", false);
test2 = new Age("The Crucible of Ages", 1, 100000, .5, ["Increased Click",1], [1,2,3,4], "12346", false);
test3 = new Age("The Crucible of Ages", 3, 100000, .5, ["Increased Click",1], [1,2,3,4], "12347", false);
test4 = new Age("The Crucible of Ages", 2, 100000, .5, ["Increased Click",1], [1,2,3,4], "12348", false);
test5 = new Age("The Crucible of Ages", 5, 100000, .5, ["Increased Click",1], [1,2,3,4], "12349", false);
test6 = new Age("The Lions Den", 5, 100000, .5, ["Increased Click",1], [1,2,3,4], "12350", false);
activeAge = new Age("Sol", 1, 1000, 1, ["None", 0], ["None", 0], "1", true);
ages = [activeAge,test,test2,test3,test4,test5,test6];


console.log(test.name)
console.log(ages[0].activeAttributeDesc)
console.log(ages[0].passiveAttributes)

function totalAgeIncome() {
    let income = [0,0,0,0,0,0,0,0];
    for(age in ages) {
        income[ages[age].tier-1]+=ages[age].essenceCollectionSpeed;
    }
    return income;
}



function selectAsActive(id) {
    if(numActiveAges+1>totalActiveAges) {
        addMessage("Too many active Ages...")
        return;
    }
    for (age in ages) {
        if(ages[age].id==id) {
            ages[age].isActive = true;
            numActiveAges++;
            addMessage("Adding " + ages[age].name + " as an Active Age...");
        }
    }
    loadAgeList();
}

function deselectAsActive(id) {
    for(age in ages) {
        if(ages[age].id==id) {
            console.log(ages[age])
            ages[age].isActive = false;
            numActiveAges--;
            addMessage("Removing " + ages[age].name + " as an Active Age...");
        }
    }
    loadAgeList();
}

function loadAgeList() {
    $("#Ages").empty();
    $("#Ages").append("<div id = ActiveAges> Active Age <ul id = ActiveAgeList> </ul> </div>");
    $("#Ages").append("<div id = PassiveAges> Passive Ages <ul id=PassiveAgeList> </ul> </div>");
}

function loadSelectedAge(id) {
    $("#Ages").empty();
    var ageNum;
    for(age in ages) {
        if(ages[age].id == id) {
            ageNum = age;
        }
    }
    $("#Ages").append("<div id = selectedAge> " + ages[ageNum].name + " : " + ages[ageNum].tier + " </div>");
    $("#Ages").append("<ul id=currentAge> </ul>");
        $("#currentAge").append("<li>Total Essence Left In Age: "+ ages[ageNum].totalEssence +" </li>");
        $("#currentAge").append("<li>Essence Collected Per Second: "+ ages[ageNum].essenceCollectionSpeed +" </li>");
        if(ages[ageNum].activeAttributeModifier != 0) {
            $("#currentAge").append("<li>Active Attribute: "+ ages[ageNum].activeAttributeDesc + ": "+ ages[ageNum].activeAttributeModifier*100 +"% </li>");
        }
        for(var attr = 0;attr<ages[ageNum].passiveAttributes.length;attr+=2) {
            var passiveAttributeDesc = ages[ageNum].passiveAttributes[attr];
            var passiveAttributeModifier = ages[ageNum].passiveAttributes[attr+1];
            console.log(passiveAttributeModifier)
            if(passiveAttributeModifier != 0) {
                $("#currentAge").append("<li>Passive Attribute: "+ ages[ageNum].passiveAttributes[attr] + ": "+ ages[ageNum].passiveAttributes[attr+1]*100 +"% </li>");
            }
        }
    $("#Ages").append("<div class = utilButton id = AgeExit onClick = loadAgeList()>Exit to Age List</div>")
    if(ages[ageNum].isActive) {
        $("#Ages").append("<div class = utilButton id = AgeActiveSelect onClick = deselectAsActive("+ ages[ageNum].id +")>Deselect As Active</div>")
    }
    else {
        $("#Ages").append("<div class = utilButton id = AgeActiveSelect onClick = selectAsActive("+ ages[ageNum].id +")>Select As Active</div>")
    }
}
