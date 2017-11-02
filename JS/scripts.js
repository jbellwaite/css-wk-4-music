//Business Logic
function Album(bandName, albumTitle, releaseYear, imageUrl) {
  this.bandName = bandName;
//   this.albumTitle = albumTitle;
//   this.releaseYear = releaseYear;
//   this.imageUrl = imageUrl;
}

// Album.prototype.totalAlbumInfo = function(){
//   return this.bandName + " " + this.albumTitle + " " + this.releaseYear + " " + " " + this.imageUrl;
// }



//User Interface
$(document).ready(function(){
  $("form#album-info").submit(function(event){

    var bandName = $("input#band-name").val();
    var albumTitle = $("input#album-title").val();
    var releaseYear = $("input#release-year").val();
    var imageUrl = $("input#image-url").val();
    var newAlbum = new Album(bandName, albumTitle, releaseYear, imageUrl);

    event.preventDefault();

    // $(".output").text(newAlbum + " " + "<img src=" + imageUrl + ">");

  $(".output").text(bandName + " " + albumTitle + " " + releaseYear);
    $(".output").append("<img src=" + imageUrl + ">");
     });
});
