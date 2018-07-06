function addMessage(message) {
    $("#messageLog").append("<li class=StoneC>"+message+"</li>").animate({scrollTop: $('#messageLog').prop("scrollHeight")}, 500);
    console.log(message)
};
