<template>
  <div>
  <div class="search-wrapper">
    <div class="search">
      <input
        type="text"
        class="search"
        placeholder="Search "
        @input="$emit('search', $event.target.value)"
        v-model="searchInput"
      />
    </div>

    <div class="dropdown">
      <select
        name="dropdown"
        id=""
        @change="$emit('filter', $event.target.value)"
      >
        <option value="">All</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="americas">Americas</option>
      </select>

      <div class="text">
       </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchInput = ref("");
</script>

<style scoped>
svg {
  width: 30px;
}

.search-wrapper {
  padding-top: 100px;
}
.search {
  width: 250px;
  height: 40px;
  border-radius: 5px;
  background: var(--primary-color);
  border: 1px solid #e3e3e3;
  color: var(--secondary-color);
}

.search:focus {
  border: 1px solid red;
}

.dropdown {
  display: flex;
  align-items: center;
  gap: 20px;
}
.dropdown select {
  width: 200px;
  background: var(--primary-color);
  border: 1px solid #e3e3e3;
  height: 30px;
  color: var(--secondary-color)
}

.search-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  margin-bottom: 50px;
}

.filter-section {
  font-size: 22px;
  font-style: bold;
}

P {
  color: var(--secondary-color);
}

@media only screen and (min-width: 480px) and (max-width: 1000px) {
  .search-wrapper {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>
