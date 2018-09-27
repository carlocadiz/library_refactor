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

