<template>
  <div class="container">
    <div class="back-button">
      <router-link to="/"><button>Home</button></router-link>
    </div>

    <div class="Sadiq">
      <div class="row">
        <div class="col-md-7 text-center infoinfo">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Country
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Information
              </button>
            </li>
          </ul>

          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div class="wrapper border rounded-lg text-center">
                <div class="row">
                  <div class="col-sm-4">
                    <p>
                      <img class="cloud" src="../assets/letter-n.png" alt="" />
                      Country Name
                    </p>
                    <p style="line-height: 25px">
                      {{ countryDetails?.name?.official }}
                    </p>
                  </div>
                  <div class="col-sm-4">
                    <p>
                      <img
                        class="cloud"
                        src="../assets/letter-n.png"
                        alt=""
                      />languages
                    </p>
                    <p>
                      {{
                        Object.values(countryDetails.languages ?? {})?.join(
                          ", "
                        )
                      }}
                    </p>
                  </div>

                  <div class="col-sm-4">
                    <p>
                      <img
                        class="cloud"
                        src="../assets/earth-grid.png"
                        alt=""
                      />Sub-Continent
                    </p>
                    <p>{{ countryDetails.subregion }}</p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-4">
                    <p>
                      <img
                        class="cloud"
                        src="../assets/city.png"
                        alt=""
                      />Capital City
                    </p>
                    <p>{{ formatCapital(countryDetails.capital) }}</p>
                  </div>
                  <div class="col-sm-4">
                    <p>
                      <img
                        class="cloud"
                        src="../assets/earth-grid.png"
                        alt=""
                      />Region
                    </p>
                    <p>{{ countryDetails.region }}</p>
                  </div>
                  <div class="col-sm-4">
                    <p>
                      <img
                        class="cloud"
                        src="../assets/map-point.png"
                        alt=""
                      />Sub-region
                    </p>
                    <p>{{ countryDetails.subregion }}</p>
                  </div>
                  ` `
                </div>

                <div class="row">
                  <div class="col-sm-4">
                    <p>
                      <img
                        class="cloud"
                        src="../assets/user.png"
                        alt=""
                      />Population
                    </p>
                    <p>{{ countryDetails.population }}</p>
                  </div>
                   
                  <div class="col-sm-4">
                    <p>
                      <img class="cloud" src="../assets/clock.png" alt="" />Time
                      Zone
                    </p>
                    <p>{{ countryDetails.timezones?.join(',') }}</p>
                  </div>
                  
                  <div class="col-sm-4">
                    <p>
                      <img
                        class="cloud" 
                        src="../assets/currencies.png"
                        alt=""
                      />Currency
                    </p>
                    <!-- first error -->
                    <p
                      v-for="currency in 
                        countryDetails.currencies
                      "
                      :key="currency.name"
                    >
                      {{ currency.name }}
                    </p>
                  </div>
                </div> 
              </div>
            </div>
             <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div class="wrapper">
                <div class="container mt-5">
                  <div class="row">
                    <div class="col-md-7">
                      <div class="row">
                        <div class="col-md-7 date">
                          <p class="timezone">
                             Start of Week:
                            {{ countryDetails.startOfWeek }}
                          </p>
                            
                          <p class="timezone">
                            Independent: {{ countryDetails.independent }}
                          </p>
                          <p class="timezone">
                            Offset: {{ countryDetails.timezones?.join(',') }}
                          </p>
                          <p class="timezone">
                            Landlocked: {{ countryDetails.landlocked }}
                          </p>
                        </div>
                        <div class="col-md-5">
                          <div class="clock-container">
                            <div class="animatedClock" id="animated-svg-clock">
                              <img
                                src="../assets/kisspng-svg-animation-clock-5af1b91059f383.9553009315257909923685.png"
                                alt=""
                              />
                            </div>
                            <div class="analog-clock-wrapper">
                              <div class="date">
                                {{ date }}
                              </div>

                              <div class="time">
                                <li>{{ formattedHours }} :</li>
                                <li>{{ formattedMinutes }} :</li>
                                <li>{{ formattedSeconds }}</li>
                                <li>{{ ampm }}</li> 
                              </div> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="country-image col-md-5">
        <img :src="countryDetails.flags?.png" />
      </div> 
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useCountryStore } from "../store/countryStore";
import { formatCapital } from "../helper/helper.js";
import { useRoute } from 'vue-router'

const countryStore = useCountryStore();
const route = useRoute();

const countryCode = route.params.name;

const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const ampm = ref("");
// const country = ref();

function updateTime() {
  const now = new Date();
  hours.value = now.getHours() % 12 || 12;
  minutes.value = now.getMinutes();
  seconds.value = now.getSeconds();
  ampm.value = now.getHours() <= 12 ? "AM" : "PM";
}

const countryDetails = ref({})
async function fetchCountryByName() {
  const api = `https://restcountries.com/v3.1/alpha/${countryCode}`

  const response = await fetch(api);
  const jsonResponse = await response.json();
  console.log(jsonResponse, 'red');

  countryDetails.value = jsonResponse[0] || [] 
  // countryStore.updateACountry(country.value);
  // console.log(countries.value, "countries");
}

const formattedHours = computed(() => hours.value.toString().padStart(2, 0));
const formattedMinutes = computed(() =>
  minutes.value.toString().padStart(2, 0)
);
const formattedSeconds = computed(() =>
  seconds.value.toString().padStart(2, 0)
);

onMounted(() => {
  setInterval(updateTime, 1000);
  updateTime();
  fetchCountryByName();
  // addToLocalStorage();
});

console.log(countryStore.country, "c");

// Assuming countryStore.country is an object
var countryObject = countryStore.country;

// Convert the object to a JSON string
var countryString = JSON.stringify(countryObject);

// Store the JSON string in local storage
localStorage.setItem('countryData', countryString);

// Retrieve the JSON string from local storage
var storedCountryString = localStorage.getItem('countryData');

// Convert the JSON string back to an object
var storedCountryObject = JSON.parse(storedCountryString);

// Now, storedCountryObject contains your original object
console.log(storedCountryObject);


// const addToLocalStorage = () => {
//     localStorage.setItem("countryData", JSON.stringify(countryStore.country));
// };

// const countryDetails = JSON.parse(localStorage.getItem("countryData")) ?? {};
// console.log(countryDetails, "countryDetails");


</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Agbalumo&display=swap");

:root {
  --primary-color: #edf2fc;
  --secondary-color: #212121;
}
.dark {
  --primary-color: #212121;
  --secondary-color: #edf2fc;
}

.container {
  background: var(--primary-color);
  font-size: 20px;
  color: var(--secondary-color);
}

nav {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

img {
  width: 500px;
  height: 350px;
}

.cloud {
  width: 1340px;
  height: 200px;
}
.country-image img {
  margin-left: 100px;
  margin-top: 90px;
  border-radius: 19px;
}

.country-image img:hover {
  transform: scale(1.08);
  cursor: pointer;
}
.container {
  padding-top: 10px;
  height: 100vh;
}
ul {
  margin: 0;
}
li:hover {
  cursor: pointer;
}

.cloud {
  width: 20px;
  height: 20px;
}
li {
  text-decoration: none;
  font-size: 22px;
  list-style: none;
  display: inline;
  font-family: sans-serif;
  font-weight: bold;
  color: var(--secondary-color);
  margin: auto;
}

button[data-v-f3a8c3a6]:not(:disabled),
[type="button"][data-v-f3a8c3a6]:not(:disabled),
[type="reset"][data-v-f3a8c3a6]:not(:disabled),
[type="submit"][data-v-f3a8c3a6]:not(:disabled) {
  color: var(--secondary-color);
}

.nav-pills .nav-link.active[data-v-f3a8c3a6] {
  color: var(--secondary-color);
}

.wrapper {
  height: 500px;
  width: 800px;
  gap: 200px;
  box-shadow: -5px 5px 15px #888888;
}

.row {
  margin-top: 40px;
  line-height: 15px;
  --bs-gutter-x: 10px;
}

.wrapper {
  margin-top: 0;
}
.timezone {
  font-size: 19px;
  font-weight: bold;
  font-family: sans-serif;
  line-height: 70px;
}

.custom-bg-color {
  background: red;
  color: white;
}
.button {
  background: grey;
}

.custom-bg-color {
  background: grey;
  color: var(--secondary-color);
}

.nav-pills .nav-link.active {
  background: none;
  color: black;
  text-decoration: underline;
}

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  color: grey;
}

.time li {
  display: inline;
  color: white;
}

.time {
  position: relative;
  top: 50px;
  left: 100px;
  background: black;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: 300px;
}

#animated-svg-clock img {
  width: 400px;
  height: 350px;
  padding-left: 50px;
  /* margin-top: -150px; */
}

.clock-container{

}
.back-button button {
  width: 100px;
  background: var(--primary-color);
  color: var(--secondary-color);
  border: 1px solid #e3e3e3;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.5);
  position: static;
}

.Sadiq{
  display: flex;
  align-items: center;
}

.infoinfo{
margin-top: ;}

@media only screen and (min-width: 1001px) and (max-width: 1400px) {
  .container {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
