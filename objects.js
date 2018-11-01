var playlist = {SOAD: Toxicity};
function updatePlaylist (object,artistname,songtitle) {
  Object.assign(object, artistname, songtitle);
  return playlist;
}
function removeFromPlaylist (object,artistname) {
  delete object[artistname];
  return Playlist;
}