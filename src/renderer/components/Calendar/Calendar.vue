<template>
    <div class="calendar">
        <h1>CALENDAR</h1>
        <h2>{{currentData}}</h2>
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
    currentData() {
      const myDate = new Date(),
            dayNumber = myDate.getDate(),
            dayOfTheWeek = myDate.getDay(),
            currentMonth = myDate.getMonth(),
            days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            monthNames = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"
                        ],
            months = monthNames[myDate.getMonth()],
            currentYear = myDate.getFullYear();
            let numberOfDays = new Date(currentYear, currentMonth + 1, 0).getDate(),
                day = "";
            switch(dayOfTheWeek) {
                case 0:
                    day = "Sunday";                   
                    break;
                case 1:
                    day = "Monday";
                    break;
                case 2:
                    day = "Tuesday";
                    break;
                case 3:
                    day = "Wednesday";
                    break;
                case 4:
                    day = "Thursday";
                    break;
                case 5:
                    day = "Friday";
                    break;
                case 6:
                    day = "Saturday";
                    break;
                default: 
                    day = "";
            }  
          
          const formattedDate = day + '/' + months + '/' + currentYear + '/' + numberOfDays;
      return formattedDate;
    }

  }
}
</script>
<style>
</style>