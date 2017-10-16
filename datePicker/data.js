(function(){
    var datepicker = {};

    datepicker.getMonthData = function(year,month){
        var ret = [];

        if(!year || !month){
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth + 1;
        }

        var firstDay = new Date(year,month-1,1);
        var firstDayWeekDay = firstDay.getDate();
        if(firstDayWeekDay === 0){
            firstDayWeekDay = 7;
        }
        var lastDayOfLastMonth = new Date(year,month-1,0);
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        var preMonthDayCount = firstDayWeekDay - 1;

        var lastDay = new Date(year,month,0);
        var lastDate = lastDay.getDate(); 

        for(var i = 0;i < 7*6;i++){
            var date = i + 1 - preMonthDayCount;
            var showDate = date;
            var thisMonth  = month;
            //上个月
            if(date <= 0){
                thisMonth  = month - 1;
                showDate = lastDateOfLastMonth + date;
            }else if(date > lastDate){
                thisMonth = month + 1;
                 showDate = showDate - lastDate;
            }
            if(month === 0){
                thisMonth = 12;
            }else if(month == 13){
                thisMonth = 1;
            }

            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate
            })
        }
        return ret;
    }
    
    window.datepicker = datepicker;
})();