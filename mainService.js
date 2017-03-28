angular.module('userProfiles').service('mainService', function(){

this.testing='whaddup';

this.getUsers=function(){
  return data;
}

//this makes it go back and forth
this.toggleFavorite=function(index){
data[index].isFavorite = !data[index].isFavorite;
}

var data = [{
    "id": 0,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
},
{
    "id": 1,
    "first_name": "lucille",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
},
{
    "id": 2,
    "first_name": "oscar",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
}];

})
