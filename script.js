$("button").click(function() {
    var name = $("#name").val();
    console.log(name);
    
    var sneakers = $("#sneakers").val();
    console.log(sneakers);
    
    var place = $("#place").val();
    console.log(place);
     
    var number =sneakers*26;
    
    var message = "in one year " + name + " you would purchase " + number + " pairs of sneakers from " + place ;
    $("p").text(message);
    console.log(message);
});

