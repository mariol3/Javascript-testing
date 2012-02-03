var YouTube = AddictionObject.subClass({
	init: function() {
		var self = this;
		
		self._loadApiURL = "http://www.youtube.com/player_api";
		self._player = {};
		self._data;
	},
	
	loadApi: function() {
		var self = this;
		var tag = document.createElement('script');
		tag.src = self._loadApiURL;
		
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	},
	
	// TODO Inserire controlli sui parametri
	showVideo: function(targetId, vId, w, h, e) {
		var self = this;
		
		self._player = new YT.Player(targetId, {
			width: w,
			height: h,
			videoId: vId,
			events: e
		});
	},
	
	getPlaylists: function(username, start, maxR) {
		var self = this;
		
		if(typeof username == "undefined") {
		   console.log("Error: The username parameter MUST BE specified.");
		   return;
	   }
		var v = "v=2";             // Hardcoded to version 2. Allow specification?
		var alt = "&alt=jsonc";    // Hardcoded to jsonc. Allow specification?
		var q  = "&q="+username;
		var startIndex = self.parseStartIndex(start);
		var maxResults = self.parseMaxResults(maxR);
		
		
		var url = "http://gdata.youtube.com/feeds/api/playlists/snippets?"+ v + alt + q + startIndex + maxResults;
	   console.log(url);
		var data;
		
		/* TODO Find some way to get data back!!!
		jQuery.getJSON(playlistUrl, function(response) {
		   data = response;
		});*/
		
		return data;
	},
	
	getPlaylistVideos: function(playlistId, start, maxR, order) {
	   var self = this;
	   
	   if(typeof playlistId == "undefined") {
	      console.log("Error: The playlist id parameter MUST BE specified.");
	      return;
      }
      var v = "v=2";
      var alt = "&alt=jsonc";
		var startIndex = self.parseStartIndex(start);
		var maxResults = self.parseMaxResults(maxR);
		var orderBy = typeof order == "undefined" ? "" : "&orderby="+order;
	   
	   var url = "http://gdata.youtube.com/feeds/api/playlists/" + playlistId + "?" + v + alt + startIndex + maxResults + orderBy;
	   console.log(url);
	   var data;
	   
	   // TODO Find some way to get data back!!!
	   
	   return data;
   }, 
   
   parseMaxResults: function(maxR) {
      if(typeof maxR == "undefined")
         return "";
      maxR = maxR < 1 ? 1 : maxR;
      maxR = maxR > 50 ? 50 : maxR;
      
      return "&max-results="+maxR;
   },
   
   parseStartIndex: function(start) {
      if(typeof start == "undefined")
         return "";
      start = start < 1 ? 1 : start;
      start = start > 50 ? 50 : start;
      
      return "&start-index="+start;
   }
});
