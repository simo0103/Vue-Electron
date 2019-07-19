<template>
    <div class="calendar">
        <h1>CALENDAR</h1>
        <h2>{{currentData}}</h2>
  
        <ul>
          <li>
              <span class="day" 
                v-bind:key="dayN" 
                v-for="dayN in numberOFdaysInMonth" 
                :value="dayN">{{ dayN }}</span>
                <span v-bind:key="day" v-for="day in allDays" :value="day">{{ day }}</span>
          </li>

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
     allDays() { 
      const arrayOfDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
      const allDays = arrayOfDays;
      return allDays;
     },
    
    currentData() {
      const myDate = new Date(),
            dayNumber = myDate.getDate(),
            dayOfTheWeek = myDate.getDay(),
            currentMonth = myDate.getMonth(),
            days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
            monthNames = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"],
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
    },
    numberOFdaysInMonth() {
      const myDate = new Date(),
            currentMonth = myDate.getMonth(),
            currentYear = myDate.getFullYear();
      let numberOfDays = new Date(currentYear, currentMonth + 1, 0).getDate(),
          num = [],
          days = [ 'Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          
          for(var i = 1; i <= numberOfDays ; i++) {
              console.log(i);             
              num.push(i);
              
          };
        
      const numberOFdaysInMonth = num;
      return numberOFdaysInMonth;
    }

  }
}
</script>
<style>
</style>