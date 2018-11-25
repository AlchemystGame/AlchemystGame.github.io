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

var nm1 = ["amber","angel","spirit","basin","lagoon","basin","arrow","autumn","bare","bay","beach","bear","bell","black","bleak","blind","bone","boulder","bridge","brine","brittle","bronze","castle","cave","chill","clay","clear","cliff","cloud","cold","crag","crow","crystal","curse","dark","dawn","dead","deep","deer","demon","dew","dim","dire","dirt","dog","dragon","dry","dusk","dust","eagle","earth","east","ebon","edge","elder","ember","ever","fair","fall","false","far","fay","fear","flame","flat","frey","frost","ghost","glimmer","gloom","gold","grass","gray","green","grim","grime","hazel","heart","high","hollow","honey","hound","ice","iron","kil","knight","lake","last","light","lime","little","lost","mad","mage","maple","mid","might","mill","mist","moon","moss","mud","mute","myth","never","new","night","north","oaken","ocean","old","ox","pearl","pine","pond","pure","quick","rage","raven","red","rime","river","rock","rogue","rose","rust","salt","sand","scorch","shade","shadow","shimmer","shroud","silent","silk","silver","sleek","sleet","sly","small","smooth","snake","snow","south","spring","stag","star","steam","steel","steep","still","stone","storm","summer","sun","swamp","swan","swift","thorn","timber","trade","west","whale","whit","white","wild","wilde","wind","winter","wolf"];
var nm2 = ["acre","band","barrow","bay","bell","born","borough","bourne","breach","break","brook","burgh","burn","bury","cairn","call","chill","cliff","coast","crest","cross","dale","denn","drift","fair","fall","falls","fell","field","ford","forest","fort","front","frost","garde","gate","glen","grasp","grave","grove","guard","gulch","gulf","hall","hallow","ham","hand","harbor","haven","helm","hill","hold","holde","hollow","horn","host","keep","land","light","maw","meadow","mere","mire","mond","moor","more","mount","mouth","pass","peak","point","pond","port","post","reach","rest","rock","run","scar","shade","shear","shell","shield","shore","shire","side","spell","spire","stall","wich","minster","star","storm","strand","summit","tide","town","vale","valley","vault","vein","view","ville","wall","wallow","ward","watch","water","well","wharf","wick","wind","wood","yard"];

function generateName() {
    rnd = Math.floor(Math.random() * nm1.length);
	rnd2 = Math.floor(Math.random() * nm2.length);
	while(nm1[rnd] === nm2[rnd2]){
	       rnd2 = Math.floor(Math.random() * nm2.length);
    }
    names = nm1[rnd] + nm2[rnd2];
    names = names.charAt(0).toUpperCase() + names.slice(1);
    console.log(names);
    return names;
}
