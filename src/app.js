/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  //Array

  const dogs = [
    {
      "id": 1,
      "name": "Bobby",
      "age": 6,
      "race": "Doberman",
      "imageUrl": "https://media.graphassets.com/resize=height:404,width:1280/output=format:webp/C8ufP7HdRFmsLGpSAV1W?width=1280",
      "location": {
        "city": "Gwenborough",
        "zipcode": "46014",
        }
    },

    {
        "id": 2,
        "name": "Ari",
        "age": 13,
        "race": "Pomerania",
        "imageUrl": "https://images4.alphacoders.com/119/1192904.jpg",
        "location": {
          "city": "Valencia",
          "zipcode": "46200",
          }
      },
      
      {
        "id": 3,
        "name": "Hoppy",
        "age": 10,
        "race": "Golden-Retriever",
        "imageUrl": "https://images.photowall.com/products/57209/golden-retriever-puppy-in-meadow.jpg?h=699&q=85",
        "location": {
          "city": "Mar del Plata",
          "zipcode": "125689",
          }
      },

      {
        "id": 4,
        "name": "Bono",
        "age": 3,
        "race": "PitBull",
        "imageUrl": "https://t2.uc.ltmcdn.com/es/posts/4/9/4/chamuco_o_pitbull_mexicano_45494_10_600.jpg",
        "location": {
          "city": "Cadiz",
          "zipcode": "28005",
          }
      }
    ]
    
    //Cards
let cardHTML = " "

dogs.map((item)=>{
  
  cardHTML += `
  
  <div class="card mx-auto mb-5" style="width: 18rem;">
  <img src= ${item.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text"> Age: ${item.age}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Race: ${item.race}</li>
    <li class="list-group-item">City: ${item.location.city}</li>
    <li class="list-group-item">C.P: ${item.location.zipcode}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href= ${item} class="card-link">Website</a>
  </div>
    
  </div>
    ` 
  })
  
  

const cardPeople = document.querySelector('#card')
  cardPeople.innerHTML = cardHTML //Mapeo Card

};
