function addMessage(message) {
    $("#messageLog").append("<li>"+message+"</li>").animate({scrollTop: $('#messageLog').prop("scrollHeight")}, 500);
    console.log(message)
};
