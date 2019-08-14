<template>
    <div id="calendar">
        <h1>CALENDAR</h1>
        <!-- <h2>{{currentData}}</h2> -->
        <div class="nav-calendar">        
            <font-awesome-icon  class="prev" :icon="['fas', 'chevron-left']"></font-awesome-icon>
            <p class= "month">{{getCurrentMonth}} {{getCurrentYear}}</p> 
            <font-awesome-icon  class="prev" :icon="['fas', 'chevron-right']"></font-awesome-icon> 
        </div>
        
        <ul>
          <li class="day"
                v-bind:key="d.number"
                :class= "d.number == getCurrentDay ? 'today' : ''"
                v-for="d in getActualMonthDays">
                <span>{{ d.day }}</span> 
                <span class="number"> {{ d.number }}</span>
                <!-- <span v-bind:key="day" v-for="day in allDays" :value="day">{{ day }}</span> -->
          </li>

        </ul>
        

    </div>
</template>
<script>
export default {
  name: 'Calendar',
   computed : {
    getCurrentDay () {
        const myDate = new Date(),
              dayNumber = myDate.getDate();
        return dayNumber;
    },
    getCurrentMonth () {
        const myDate = new Date(),
        currentMonth = myDate.getMonth(),
        monthNames = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"],
        months = monthNames[myDate.getMonth()];
        return months;
    },
    getCurrentYear() {
      const myDate = new Date(),  
            currentYear = myDate.getFullYear();    
        return currentYear;
    },

    next() {
     const currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear,
           currentMonth = (currentMonth + 1) % 12;
           console.log(currentYear)
    },
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
    },

    rightDay(today, day) {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            day = new Date(today.getFullYear(), today.getMonth(), day).getDay();
        return days[day % 7];
    },

    getActualMonthDays() {
        var today = new Date(),
            numOfDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(),
            days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            array = [];
        for(var i = 1; i <= numOfDays; i++) {
            var day = new Date(today.getFullYear(), today.getMonth(), i).getDay();
            array.push({
                day: days[day % 7],
                number: i
            });
        }
        return array;
    }

  }
}
</script>


<style lang="scss">
  @import "../../style/calendar.scss";
</style>