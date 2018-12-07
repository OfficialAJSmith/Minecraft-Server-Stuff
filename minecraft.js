//Get the Json Data
$.getJSON('https://api.mcsrvstat.us/1/doinks.tplinkdns.com', function (status) {
    //Show the version
    var modvr = status.motd.raw;
    var mcvr = status.version;
    var mcst = status.players.online;
    var players = status.players.list;
    $('.statusvr').append( modvr);
    $('.onlines').append( mcst)
    $('.minevr').append( mcvr);
    $('.players').append( players);


});