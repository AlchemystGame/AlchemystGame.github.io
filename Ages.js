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

test = new Age("Aberdeen", 1, 1000, 1, ["Increased Click",1], [1,2,3], "12345");
test2 = new Age("The Crucible of Ages", 1, 100000, .5, ["Increased Click",1], [1,2,3], "12346");

Ages = [test,test2];
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
