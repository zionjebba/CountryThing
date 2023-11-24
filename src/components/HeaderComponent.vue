<template>
  <div class="main">
    <div class="title text-red-500">Where in the world?</div>
    <div class="mode">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"
        />
      </svg>

      <p v-if="mode" @click="toggleMode(); changeMode()">Dark Mode</p>

      
      <p v-else @click="toggleMode(); changeMode()"> Light Mode</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const mode = ref(true)

const isDark = ref(false)

function toggleMode() {
  isDark.value = !isDark.value
  document.body.classList.toggle('dark', isDark.value);
}

function changeMode() {
      mode.value = !mode.value

}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

:root{
        --primary-color: #fff;
        --secondary-color: #212121;
        --third-color: #e3e3e3;

    }
  .dark{
        --primary-color: #212121;
        --secondary-color:  #edf2fc;
                --third-color: #e3e3e3;

    }


.main {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100px;
  background: var(--primary-color);
  /* margin-bottom: 170px; */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  box-shadow: 0px 9px 5px -1px rgba(0, 0, 0, 0.5);
}

.shadow{
    box-shadow: 0px 19px 5px -1px rgba(0, 0, 0, 0.5);

}

.title{
  font-size:  29px;
  color: var(--secondary-color)
}

.mode {
  font-size: 19px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  gap: 9px;
  color: var(--secondary-color)
}

.mode:hover{
    cursor: pointer;
    /* font-weight: ; */
}

svg {
  width: 20px;
}
@media only screen and (min-width: 480px) and (max-width: 700px) {

  .main{
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 150px;
  }

  @media only screen and (min-width: 701px) and (max-width: 1000px) {

}

}


</style>
