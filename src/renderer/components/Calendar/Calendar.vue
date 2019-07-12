<template>
    <div class="calendar">
        <h1>CALENDAR</h1>
        <h2>{{ new Date().getFullYear() }}</h2>
        <ul>
          <!-- <li v-bind:key="year" v-for="year in years" :value="year">{{ year }}</li> -->
        </ul>
    </div>
</template>
<script>
export default {
  name: 'Calendar',
   computed : {
    // years () {
    //   const year = new Date().getFullYear()
    //   return Array.from({length: year - 1900}, (value, index) => 1901 + index)
    // }
  }
}
</script>
<style>
</style>