$(document).ready( function(){


    var games = [
        {
            name: "OpenSpace",
            version: "alpha1"
        }
    ];


    var template = $("#game-template");

    for (var i = 0; i < games.length; i++)
    {
        var game = games[i];
        html = template.clone();

        html.find("h2").html( game.name );
        html.find("img").attr("src", "images/" + game.name + ".png");
        html.show();
        html.click(function(){

            window.location = "https://github.com/roonilwazlib7/offongames/raw/master/GameBuilds/" + game.name + "/" + game.version + ".zip";

        });

        $("#games").append( html );
    }

});
