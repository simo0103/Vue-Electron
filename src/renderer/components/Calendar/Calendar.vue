<template>
    <div id="calendar" v-bind:class="{ openModal: showModal }">
        <div class="nav-title">
            <h2>CALENDAR</h2>
            <button>+ Create New Event</button>
        </div>

        <!-- <h2>{{currentData}}</h2> -->
        <div class="nav-calendar">
            
            <div class="changeMonth">
                <span class="prev" v-on:click="getPrevMonth">
                    <font-awesome-icon :icon="['fas', 'chevron-left']"></font-awesome-icon>
                </span>
                
                <div class="wrapper">
                    <img alt="selectedData" src="../../../svg/calendar.svg">
                    <span class="month">{{getCurrentMonthAbbr}}</span>
                    <span class="year">{{currentYear}}</span>
                </div>
               <span class="next" v-on:click="getNextMonth">
                    <font-awesome-icon :icon="['fas', 'chevron-right']"></font-awesome-icon>
               </span>
            </div>
          
            <!-- <span>{{currentMonth}}</span> -->
            <div class="monthYear">
                <span class="month">{{getCurrentMonth}} </span> 
                <span class="year">{{currentYear}}</span>
            
            </div>
            
           
           
        </div>
        
        <table>
            <tr class="dayName">
                <td v-bind:key="day" v-for="day in shortDays" :value="day">{{ day }}</td>
            </tr>
            <tr class="dayNumber">
                <td v-bind:key="d.key" :class="d.class" @click="showModalFunction(d)" v-for="d in getActualMonthDays">
                    <span>{{ d.number }}</span>
                    <span class="holidayName">{{ d.holidayName }}</span>

                </td>
            </tr>

        </table>
        <popup 
            v-bind:class="{ open: showModal }" 
            :dayNumber="dayNumberForModal" 
            :month="monthForModal"
            :year = "currentYear"
            v-if="showModal" 
            @close="showModal = false">
        </popup>

    </div>
</template>

<script>
    import Modal from '../Utils/Modal.vue';
    export default {
        name: 'Calendar',
        components: {
            'popup' : Modal
        },
        data: function () {
            return {
                myDate: new Date(),
                months: require('months'),
                arrayOfDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                monthNames: ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ],
                currentMonth: new Date().getMonth() + 1,
                currentDay: new Date().getDate(),
                currentYear: new Date().getFullYear(),
                numOfDays : "",
                showModal: false,
                dayNameForModal: "",
                monthForModal: "",
            };
        },
        computed: {
            //nome mese
            getCurrentMonth() {
                const months = this.monthNames[this.currentMonth - 1];
                return months;
            },

            getCurrentMonthAbbr() {
                const monthsAbbr = this.months.abbr[this.currentMonth - 1];
                return monthsAbbr;
            },

            numberOFdaysInMonth() {
                let numberOfDays = new Date(this.currentYear, this.currentMonth, 0).getDate(),
                    num = [];
                for (var i = 1; i <= numberOfDays; i++) {
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

                var today = this.myDate,
                    Holidays = require('date-holidays'),
                    hd = new Holidays('IT'),
                    currentYearHolidays = hd.getHolidays(this.currentYear),
                    numOfDays = new Date(this.currentYear, this.currentMonth, 0).getDate(),
                    array = [];

                var firstDay = new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
                for (var i = 1; i <= numOfDays + firstDay; i++) {
                    var gg = i - firstDay,
                        dayClass = "",
                        day = new Date(this.currentYear, this.currentMonth - 1, gg),
                        isTodayClass = gg == this.currentDay && today.getMonth() == this.currentMonth - 1 ? dayClass +=
                        "today" : "",
                        isOtherMonthClass = day.getMonth() !== this.currentMonth - 1 ? dayClass += " otherMonth" : "",
                        isHolidayClass = hd.isHoliday(new Date('"' + day + '"')) !== false ? dayClass += " isHoliday" :
                        "",
                        isWeekend = day.getDay() == 6 || day.getDay() == 0 ? dayClass += " weekend" : "",
                        isSunday = day.getDay() == 0 ? dayClass += " sunday" : "";

                    array.push({
                        key: i,
                        day: this.arrayOfDays[day.getDay() % 7],
                        number: day.getDate(),
                        month: this.months.abbr[day.getMonth()],
                        holidayName: hd.isHoliday(new Date('"' + day + '"')).name,
                        class: dayClass,
                        numOfDays: numOfDays
                    });

                }
                return array;
                console.log(array)
            }

        },
        methods: {

            getPrevMonth: function (event) {
                this.currentMonth--;
                if (this.currentMonth % 12 == 0) {
                    this.currentYear--;
                }
                if (this.currentMonth == 0) {
                    this.currentMonth = 12;
                }
            },

            getNextMonth: function (event) {
                this.currentMonth++;
                if (this.currentMonth % 13 == 0) {
                    this.currentYear++;
                }
                if (this.currentMonth == 13) {
                    this.currentMonth = 1;
                }
            },
            showModalFunction: function (d) {
                let holiday = d.holidayName != undefined ? d.holidayName : null;
                this.showModal = true;
                this.numOfDays = d.numOfDays;
                this.dayNumberForModal = d.number;
               // this.dayNameForModal = d.day;
                this.monthForModal = d.month;
                
            }

        }
    }
</script>


<style lang="scss">
    @import "../../style/calendar.scss";
</style>