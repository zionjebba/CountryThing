<template>
  <div class="kkk mb-4">
    <div class="card-wrapper">
  
  <div class="card" style="background: var(--primary-color);        
">
    <div class="img"><img class="card-img-top" :src="`${image}`"  alt="Card image cap"></div>
    <div class="card-body">
      <h5 class="card-text mb-4"> {{ countryName.official }}</h5>
      <p class="card-text">Population: {{ population }}</p>
      <p class="card-text">Region: {{ region }}</p>
      <p class="card-text">Capital: {{ capital }}</p>
      <p class="card-text">Language(s): {{ language }}</p>
    </div>
  </div>
  
    </div>
  </div>

  </template>
  
  <script setup>
  import { defineProps } from 'vue';


  defineProps({
    countryName: Object,
    population: Number,
    region: String,
    capital: String,
    image: String,
    language: Object
  })


  </script>
  
  <style>

:root{
        --primary-color: #fff;
        --secondary-color: #212121;

    }
  .dark{
        --primary-color: #212121;
        --secondary-color:  #edf2fc;
    }

    .card-wrapper{
        background: var(--primary-color);     
           
    }

.card{
    padding: 15px;
    box-shadow: 2px 3px 4px -1px rgba(0, 0, 0, 0.5);
    background-color: black;
}

.card-body{
  height: 15em;
  background: var(--primary-color);
}

.card-text{
  color: var(--secondary-color);

}

.card img{
  height: 100px; 
  width: 220px; 
 
}

.img {
  display: flex;
  justify-content: center;
}

p{
  line-height: 1em;
}

.kkk{
}


.kkk:hover{
  cursor: pointer;
  transform: scale(1.05);
  background: var(--primary-color);

}

a:visited{
  text-decoration: none;
}

  </style>
  