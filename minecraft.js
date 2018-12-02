//Get the Json Data
$.getJSON('https://api.mcsrvstat.us/1/doinks.tplinkdns.com', function (status) {
    //Show the version
    var modvr = status.motd.raw;
    var mcvr = status.version;
    $('.statusvr').append( modvr);
    $('.minevr').append( mcvr);

});