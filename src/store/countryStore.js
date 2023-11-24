import { defineStore } from "pinia";

export const useCountryStore = defineStore("countriesData", {
  state: () => ({
    country: {},
    countries: [],
    filteredData: [],
    code: ''
  }),
  actions: {
    updateCountries(data) {
      this.countries = data;
      this.filteredData = data;
    },
    updateCountry(name) {
      this.country = this.countries.find(
        (country) => country.name.official === name
      );
      this.code = this.country.cca2
      console.log(this.code);
      console.log(this.country);
    },
    updateACountry(country) {
      this.country = country;

      console.log(this.country);
    },
    setSearchFilter(query) {
      this.filteredData = this.countries.filter((item) => {
        return item.name.official.toLowerCase().includes(query.toLowerCase());
      });
    },
  },
  persist: true,
});
