

    var losses = 0;
    var wins = 0;
    var counter = 0;
    
    
    
    var randomNumber = Math.floor((Math.random() * 101) + 19);
    
    
    $("#random-number").text(randomNumber);
    
    
    for(var i = 0; i < 4; i++) {
    
    var crystalValue = Math.floor(Math.random() * 11) + 1;
    
    var crystal = $("<img>");
    
    crystal.attr("src", "https://images-na.ssl-images-amazon.com/images/I/41AuTi-I4yL._SL500_AC_SS350_.jpg");
    
    
    crystal.attr({
        
        "class": 'crystal',
        "data-random": crystalValue
    });
    
    
    
    $(".crystals").append(crystal);
    
    
    }
    
    
    
    $(".crystal").on('click', function () {
        var crystalData = ($(this).attr('data-random'));
        
        crystalData = parseInt(crystalData);
    
       var totalScore = counter += crystalData;
    
        $("#total-score").text(totalScore);
    
        if(totalScore === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            totalScore = 0;
        
    
        }
    
        else if (totalScore >= randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            totalScore = 0;
            
        }
    
    });
    







