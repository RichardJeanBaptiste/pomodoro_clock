$( document ).ready(function() {
    
   var count = 25;
   var bcount = 5;
   
   


    $("#sCounter").html(count);
    $("#bCounter").html(bcount);
    $("#clock").html(0);
    

      $("#session_plus").click(function(){
      	$("#sCounter").html(count += 1);
      });

      $("#session_minus").click(function(){
      	$("#sCounter").html(count -= 1);
      	if(count <= 0){
      		$("#sCounter").html(count = 1);
      		alert("Can't go below Zero");
      	  }
      });

      $("#break_plus").click(function(){
      	$("#bCounter").html(bcount += 1);
      });

      $("#break_minus").click(function(){
      	$("#bCounter").html(bcount -= 1);
      	if(bcount <= 0){
      		$("#bCounter").html(bcount = 1);
      		alert("Can't go below Zero");
      	  }
      });

      
      $("#countdown").click(function(){
      	  var x = $("#sCounter").html();
      	  $("#clock").html(x);
      	 });

     function getCount(){
          var test = $("#sCounter").html();
          var test = Number(test);
          return test;
     }

     function getBreak(){
     	  var test1 = $("#bCounter").html();
          var test1 = Number(test1);
          return test1;
     }

    

    
    $("#start").click(function timeEvent(){
        var y = getCount();
        var b = getBreak();

        var id = setInterval(timeDown, 1000);
        //var breakid = setInterval(breakTime, 1000);

       function timeDown(){
       	    
       	    var returnCount = $("#sCounter").html();
            //$("#clock").html(y);

        	if($("#clock").html() == 0){
        		
                $("#clock").html(b);
                alert("break");
                clearInterval(id);
                var breakid = setInterval(breakTime, 1000);
               
                function breakTime(){
                	if($("#clock").html() == 0){
                		alert("breaks over");
                		clearInterval(breakid);
                		$("#clock").html(returnCount);
                        //timeDown();
                        timeEvent();
                		
                	}else{
                		$("#clock").html(b -= 1);
                		console.log("break running");
                	}

                 }
         }else{
              $("#clock").html(y -=1);
              console.log("running");
        	}
       }
        
        
    });

       $("#reset").click(function(){
        	alert("reset");
            location.reload(false);
        });


})
