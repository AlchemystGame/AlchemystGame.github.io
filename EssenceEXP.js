var EssenceEXP = {
    T1: {
        amount:10,
        totalRequired:0,
        prestegeLevel: 0,
        prestegeReq: 100000
    },
    T2: {
        amount:980,
        totalRequired:1000,
        prestegeLevel: 0,
        prestegeReq: 10000000
    }
};

var totalEXP = 0;
var totalTiers = 2;
var currentTier = 1;

function checkEXP() {
    totalEXP = 0;
    for(tier in EssenceEXP) {
        if(EssenceEXP.hasOwnProperty(tier)) {
            totalEXP+=EssenceEXP[tier]["amount"]
        }
    }
    var ct = 0;
    for(tier in EssenceEXP) {
        if(EssenceEXP.hasOwnProperty(tier)) {
            if(totalEXP>=EssenceEXP[tier]["totalRequired"]) {
                ct++;
            }
        }
    }
    currentTier = ct;


    if(currentTier==totalTiers) {
        var nextTier = "T" + (currentTier+1).toString();
        var nextRequired = Math.pow(10,(currentTier+2));
        var nextPrestege = Math.pow(10,(((currentTier-1)*2)+5));
        EssenceEXP[nextTier] = {
            amount:0,
            totalRequired: nextRequired,
            prestegeLevel: 0,
            prestegeReq: nextPrestege

        }
        totalTiers++;
    }

    var currentMax = EssenceEXP["T"+(currentTier+1).toString()]["totalRequired"];
    var currentPercent = ((totalEXP/currentMax)*100).toFixed(2).toString()+"%";
    if(((totalEXP/currentMax)*100)>=100) {
        currentPercent = "0%"
    }
    if(getSuffix(totalEXP,4)>19) {
        $("#expPercent").text(totalEXP.toExponential(5) + "/" + currentMax.toExponential(5));
    }
    else {
        $("#expPercent").text(suffixfy(totalEXP,3) + "/" + suffixfy(currentMax,3));
    };
    $("#myBar").text(currentPercent);
    $("#myBar").css({"width": currentPercent});

};
