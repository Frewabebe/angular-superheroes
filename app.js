(function () {
    angular.module('superheroesApp', [])
    .controller('SuperheroesController',[SuperheroesController])

  function SuperheroesController () {
    this.superheroes = [
      { name: 'green lantern', phone_numbr: '3033033303', comics_affiliation: 'Green Lanten', image_url: 'http://www.gstatic.com/tv/thumb/movieposters/8176346/p8176346_p_v8_ad.jpg'},
      { name: 'the flash', phone_numbr: '4044044404', comics_affiliation: 'The Flash', image_url: 'http://img5.downloadha.com/hosein/Movie/Series/The%20Flash%202015/The-Flash-Season-2-cover-large.jpg'},
      { name: 'superman', phone_numbr: '5055055505', comics_affiliation: 'superman', image_url: 'https://static.comicvine.com/uploads/original/11111/111113523/3605753-1936874063-31646.png'}
    ]
  }
})()
