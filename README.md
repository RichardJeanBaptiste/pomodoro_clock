# pomodoro_clock
pomodoro clock built in javascript

clone/download the folder then open main.html in browser
edit the values on line 63,64 and 73 to change the amount it decrease by

        var id = setInterval(timeDown, 1000); <<<<<<<<<
        //var breakid = setInterval(breakTime, 1000);   <<<<<<<

       function timeDown(){
       	    
       	    var returnCount = $("#sCounter").html();
            //$("#clock").html(y);

        	if($("#clock").html() == 0){
        		
                $("#clock").html(b);
                alert("break");
                clearInterval(id);
                var breakid = setInterval(breakTime, 1000); <<<<<<<
                
its in miliseconds so keep that in mind with any conversions
