<template>
  <div class="container">
    <SearchComponent
      @search="(val) => countryStore.setSearchFilter(val)"
      @filter="(val) => fetchCountries(val)"
    />
    <h1>{{ countryStore.countryName }}</h1>
    <div class="row">
      <CardComponent
        v-for="(country, index) in countryStore.filteredData"
        :key="index"
        :image="country.flags.png"
        :countryName="country.name"
        :population="country.population"
        :language="Object.values(country.languages ?? '').join(', ')"
        :region="country.region"
        :capital="formatCapital(country.capital)"
        class="col-lg-3 col-md-4 col-sm-6 mb-4"
        @click="[navigateToCountryData(country.cca2), countryStore.updateCountry(country.name?.official)]"
      />
    </div>
  </div>
</template>

<script setup>
import CardComponent from "./CardComponent.vue";
import SearchComponent from "./SearchComponent.vue";

import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useCountryStore } from "../store/countryStore";
// import debounce from 'lodash/debounce'

const countryStore = useCountryStore();
const countries = ref([]);

const formatCapital = (capitals) => {
  if (!capitals) {
    return "";
  }
  if (capitals.length > 0) {
    return capitals.join(" , ");
  }
};

const router = useRouter();

onMounted(() => {
  fetchCountries();
});

async function fetchCountries(region) {
  const api = region
    ? `https://restcountries.com/v3.1/region/${region}`
    : `https://restcountries.com/v3.1/all`;
  const response = await fetch(api);
  countries.value = await response.json();
  countryStore.updateCountries(countries.value);
  // console.log(countries.value, "countries");
}

watch(() => (countries) => {
  console.log(countries);
  if (countries) {
    countryStore.updateCountries(countries);
    // console.log(newVal)
  }
});

// Function to navigate to the 'CountryData' page
const navigateToCountryData = (name) => {
  router.push({ path: `/countries/${name}`, params: { id: `${countryStore.country.name}` }});

  //   window.location.href = "/country-data"
};

//search
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
  z-index: 0;
}
</style>
