$(document).ready(function ()
{
    getrandomNum();
});

function getrandomNum()
{
    var randomNum;

 
    do
    {

        randomNum = Math.floor(Math.random() * 10);

    }
    while (randomNum == 0 || randomNum >= 4)  


    if (randomNum == 1)
    {

        $('#box1').attr('class', 'one');
       
    }

    else if (randomNum == 2)
    {

        $('#box1').attr('class', 'two');
        
    }

    else if (randomNum == 3)
    {

        $('#box1').attr('class', 'three');
       
    }


    

    do
    {

        randomNum = Math.floor(Math.random() * 10);

    }
    while (randomNum == 0 || randomNum >= 4)  
    


    if (randomNum == 1)
    {

        $('#box2').attr('class', 'one');
        
    }

    else if (randomNum == 2)
    {

        $('#box2').attr('class', 'two');
       
    }

    else if (randomNum == 3)
    {

        $('#box2').attr('class', 'three');
        
    }



   

    do
    {

        randomNum = Math.floor(Math.random() * 10);

    }
    while (randomNum == 0 || randomNum >= 4)  
  

    if (randomNum == 1)
    {

        $('#box3').attr('class', 'one');
       
    }

    else if (randomNum == 2)
    {

        $('#box3').attr('class', 'two');
       
    }

    else if (randomNum == 3)
    {

        $('#box3').attr('class', 'three');
       
    }

    var b1Class = $('#box1').attr('class');
   
    var b2Class = $('#box2').attr('class');
    
    var b3Class = $('#box3').attr('class');


    if (b1Class == b2Class && b2Class == b3Class) {
        $('#msg').html("Congratulations...You've Won!!!");

       
    }

    else {
        $('#msg').html("Sorry Please Try Again!");
    }

    

    $("#button").mouseover(function ()
    {
        $("#button").css({ "background-color": "#49796b", "font-size": "20px" }).text("Spin Now!");
    });

    $("#button").mouseout(function ()
    {
        $("#button").css({ "background-color": "#317873", "font-size": "14px" }).text("Spin Again!");
    });

    $("#button").bind("click", function ()
    {
        getrandomNum()
    });


    $("#closeButton").bind("click", function ()
    {
        $("#theGame").fadeOut(1000).delay(1000);
        $("#goodbye").text("GoodBye").fadeIn(1000);
    });






}


