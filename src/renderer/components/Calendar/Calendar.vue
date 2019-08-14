<template>
    <div id="calendar">
        <h1>CALENDAR</h1>
        <h2>{{currentData}}</h2>
        <div class="nav-calendar">        
            <font-awesome-icon  class="prev" :icon="['fas', 'chevron-left']"></font-awesome-icon>
            <p class= "month">{{getCurrentMonth}} {{currentYear}}</p> 
            <font-awesome-icon  class="prev" :icon="['fas', 'chevron-right']"></font-awesome-icon> 
        </div>
        
        <ul>
          <li class="day"
                v-bind:key="d.number"
                :class= "d.number == currentDay ? 'today' : ''"
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
    data: function() {
        return {
            myDate : new Date(),
            arrayOfDays : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
            monthNames : ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"],
            currentMonth : new Date().getMonth(),     
            currentDay : new Date().getDate(),
            currentYear : new Date().getFullYear(),
        };
    },
   computed : {
    //nome mese
    getCurrentMonth () {
        const months = this.monthNames[this.myDate.getMonth()];
        return months;
    },
    
    currentData() {
      const dayNumber = this.currentDay,
            dayOfTheWeek = this.myDate.getDay(),
            
            months = this.monthNames[this.myDate.getMonth()];
           
            let numberOfDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate(),
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
      
          const formattedDate = day + '/' + months + '/' + this.currentYear + '/' + numberOfDays;
      return formattedDate;
    },

    numberOFdaysInMonth() {
      const currentMonth = this.myDate.getMonth(),
            currentYear = this.myDate.getFullYear();
      let numberOfDays = new Date(currentYear, currentMonth + 1, 0).getDate(),
          num = [];          
          for(var i = 1; i <= numberOfDays ; i++) {
              console.log(i);             
              num.push(i);
              
          };
        
       this.numberOFdaysInMonth = num;
      return numberOFdaysInMonth;
    },

    rightDay(today, day) {
        var days = this.arrayOfDays,
            day = new Date(today.getFullYear(), today.getMonth(), day).getDay();
        return days[day % 7];
    },

    getActualMonthDays() {
        var today = this.myDate,
            numOfDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(),
            array = [];
        for(var i = 1; i <= numOfDays; i++) {
            var day = new Date(today.getFullYear(), today.getMonth(), i).getDay();
            array.push({
                day: this.arrayOfDays[day % 7],
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