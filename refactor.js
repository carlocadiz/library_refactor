var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists : function () {
    var textPlaylist = "";
    for (var key in this.playlists){
      textPlaylist += this.playlists[key].id + ': ' + this.playlists[key].name + ' - ' + this.playlists[key].tracks.length + ' tracks' + '\n';
    }
    return textPlaylist;
    },

  printTracks :function () {
    var textTrackList = "";
    for (var key in this.tracks){
      textTrackList += this.tracks[key].id + ': ' + this.tracks[key].name + ' by ' + this.tracks[key].artist  + ' (' + this.tracks[key].album + ') ' + '\n';
    }
    return textTrackList;
    },

  printPlaylist : function (playlistId) {
    var tracksArray =[];
    var textPlaylist = "";
    textPlaylist += this.playlists[playlistId].id + ': ' + this.playlists[playlistId].name + ' - ' + this.playlists[playlistId].tracks.length + ' tracks' + '\n';
    tracksArray = this.playlists[playlistId].tracks;
    for (var key of tracksArray){
      if(key === this.tracks[key].id){
      textPlaylist += this.tracks[key].id + ': ' + this.tracks[key].name + ' by ' + this.tracks[key].artist  + ' (' + this.tracks[key].album + ') ' + '\n';
      }
    }

    return textPlaylist;
  },

  addTrackToPlaylist : function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },

  addTrack : function (name, artist, album) {
    var id = this.uid();
    this.tracks[id] = {'id' : id,
                         'name' : name,
                         'artist' : artist,
                         'album' : album};
  },

  uid : function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addPlaylist : function (name) {
    var id = this.uid();
    this.playlists[id] = {'id' : id,
                          'name ': name,
                          'tracks' : []};
  }

}
//console.log(library.printPlaylist('p02'));
//library.addPlaylist('Week1Day3');


//library.addTrack('Carlo Cadiz','Day 3','Lighthouse');

//library.addTrackToPlaylist('t03','p01');
//console.log(library.printPlaylists());
//console.log(library.printTracks());

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var textPlaylist = "";
  var innerLibrary = library['playlists'];
    for (var key in innerLibrary){
      textPlaylist += innerLibrary[key].id + ': ' + innerLibrary[key].name + ' - ' + innerLibrary[key].tracks.length + ' tracks' + '\n';
    }
return textPlaylist;
}

//console.log(printPlaylists());

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var textTrackList = "";
  var innerLibrary = library['tracks'];
  for (var key in innerLibrary){
    textTrackList += innerLibrary[key].id + ': ' + innerLibrary[key].name + ' by ' + innerLibrary[key].artist  + ' (' + innerLibrary[key].album + ') ' + '\n';

  }
  return textTrackList;
}

//console.log(printTracks());


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var tracksArray =[];
  var textPlaylist = "";
  textPlaylist += library.playlists[playlistId].id + ': ' + library.playlists[playlistId].name + ' - ' + library.playlists[playlistId].tracks.length + ' tracks' + '\n';
  tracksArray = library.playlists[playlistId].tracks;
  for (var key of tracksArray){
    if(key === library.tracks[key].id){
      textPlaylist += library.tracks[key].id + ': ' + library.tracks[key].name + ' by ' + library.tracks[key].artist  + ' (' + library.tracks[key].album + ') ' + '\n';
    }
  }

  return textPlaylist;
}

//console.log(printPlaylist('p02'));

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
}

//addTrackToPlaylist('t03','p01');
//console.log(printPlaylist('p01'));

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var id = uid();
  library.tracks[id] = {'id' : id,
                         'name' : name,
                         'artist' : artist,
                         'album' : album};

};

//addTrack('Carlo Cadiz','Day 3','Lighthouse');
//console.log(printTracks());


var addPlaylist = function (name) {
  var id = uid();
  library.playlists[id] = {'id' : id,
                           'name ': name};
}

//addPlaylist('Week1Day3');
//console.log (printPlaylists());


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}