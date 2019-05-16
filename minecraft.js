//Get the Json Data
$.getJSON('https://api.mcsrvstat.us/1/doinks.tplinkdns.com', function (status) {
    //insert data into dom
    var modvr = status.motd.raw;
    var mcvr = status.version;
    var mcst = status.players.online;
    var players = status.players.list;
    $('.statusvr').append( modvr);
    $('.onlines').append( mcst)
    $('.minevr').append( mcvr);
    $('.players').append( players);


});

(function() {

	var hamburger = {
		navToggle: document.querySelector('#hamburg'),
        nav: document.querySelector('#ull'),

		doToggle: function(e) {
			e.preventDefault();
			
			this.nav.classList.toggle('active');
		}
	};
    hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());
