<template>
    <div id="calendar">
        <div class="nav-title">
            <h2>CALENDAR</h2>
            <button>+ Create New Event</button>
        </div>
        
        <!-- <h2>{{currentData}}</h2> -->
        <div class="nav-calendar">        
            <font-awesome-icon  class="prev" v-on:click="getPrevMonth" :icon="['fas', 'chevron-left']"></font-awesome-icon>
            <!-- <span>{{currentMonth}}</span> -->
            <p class= "month">{{getCurrentMonth}} {{currentYear}}</p> 
            <font-awesome-icon  class="prev" v-on:click="getNextMonth" :icon="['fas', 'chevron-right']"></font-awesome-icon> 
        </div>
        <span v-bind:key="day" v-for="day in arrayOfDays" :value="day">{{ day }}</span>
        <ul>
            <li class="day"
                v-bind:key="d.key"
                :class= "d.number == currentDay ? 'today' : ''"
                v-for="d in getActualMonthDays">
                
                <span class="number"> {{ d.number }}</span>                  
            </li>

        </ul>
        <!-- <table>
            <tr class="day"
                    v-bind:key="d.number"
                    :class= "d.number == currentDay ? 'today' : ''"
                    v-for="d in getActualMonthDays">
                    <td>{{ d.day }}</td> 
                    <td class="number"> {{ d.number }}</td>
                    

            </tr>

        </table>
         -->

    </div>
</template>
<script>
export default {
  name: 'Calendar',
    data: function() {
        return {
            myDate : new Date(),
            arrayOfDays : ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            monthNames : ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"],
            currentMonth : new Date().getMonth() +1,     
            currentDay : new Date().getDate(),
            currentYear : new Date().getFullYear()
        };
    },
    computed : {
        //nome mese
        getCurrentMonth () {
            const months = this.monthNames[this.currentMonth-1];
            return months;
        },

        currentData() {
        const dayNumber = this.currentDay,
                dayOfTheWeek = this.myDate.getDay(),
                
                months = this.monthNames[this.myDate.getMonth()];
            
                let numberOfDays = new Date(this.currentYear, this.currentMonth, 0).getDate(),
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
        let numberOfDays = new Date(this.currentYear, this.currentMonth, 0).getDate(),
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
                day = new Date(this.currentYear, this.currentMonth, day).getDay();
            return days[day % 7];
        },

        getActualMonthDays() {
            //1 recupero 1 gg del mese
            //if primo gg è monday ????

            var today = this.myDate,
                numOfDays = new Date(this.currentYear, this.currentMonth, 0).getDate(),
                array = [];

            var firstDay = new Date(this.currentYear, this.currentMonth -1, 1).getDay();
            for(var i = 1; i <= numOfDays + 7 - firstDay; i++) {
                var gg = i - firstDay,
                    day = new Date(this.currentYear, this.currentMonth -1, gg);
                    array.push({
                    key: i,
                    day: this.arrayOfDays[day.getDay() % 7],
                    number:day.getDate(),
                    month: this.currentMonth -1
                });
            
            }
            // for(var i = 1; i <= numOfDays; i++) {
            //     var day = new Date(this.currentYear, this.currentMonth -1, i).getDay();

            //     array.push({
            //         day: this.arrayOfDays[day % 7],
            //         number: i
            //     });
            // }
            return array;
        }

    },
    methods : {
        getPrevMonth : function(event) {
            this.currentMonth--;
            if(this.currentMonth % 12 == 0) {
                this.currentYear--;
            }
            if (this.currentMonth == 0) {
                this.currentMonth = 12;
            }
        },
        getNextMonth : function(event) {
            this.currentMonth++;
            if(this.currentMonth % 13 == 0 ) {
                this.currentYear++;
            }
            if (this.currentMonth == 13) {
                this.currentMonth = 1;
            }
        },
    }
}
</script>


<style lang="scss">
  @import "../../style/calendar.scss";
</style>