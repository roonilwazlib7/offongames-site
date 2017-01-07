$(document).ready( function(){


    var games = [
        {
            name: "OpenSpace",
            version: "alpha1",
            devStatus: "alpha"
        },
        {
            name: "Knackered",
            version: "alpha1",
            devStatus: "closed"
        },
        {
            name: "Bounce",
            version: "alpha1",
            devStatus: "released"
        },
        {
            name: "Fantactics",
            version: "alpha1",
            devStatus: "closed"
        },
        {
            name: "Smiley",
            version: "alpha1",
            devStatus: "released"
        },
        {
            name: "Asteroids",
            version: "alpha1",
            devStatus: "released"
        }
    ];


    var template = $("#game-template");

    for (var i = 0; i < games.length; i++)
    {
        var game = games[i];
        var html = template.clone();
        var devStatus = html.find(".dev-status");

        switch (game.devStatus)
        {
            case "alpha":
                devStatus.css({
                    "border-color": "orange",
                    "color": "orange"
                });
                devStatus.html("Alpha");
                break;

            case "beta":
                devStatus.css({
                    "border-color": "blue",
                    "color": "blue"
                });
                devStatus.html("Beta");
                break;

            case "released":
                devStatus.css({
                    "border-color": "green",
                    "color": "green"
                });
                devStatus.html("Released");
                break;

            case "closed":
                devStatus.css({
                    "border-color": "red",
                    "color": "red"
                });
                devStatus.html("Closed");
                break;

        }

        html.find("h2").html( game.name );
        html.find("img").attr("src", "images/" + game.name + ".png");
        html.show();
        html.click(function(){

            window.location = "https://github.com/roonilwazlib7/offongames/raw/master/GameBuilds/" + game.name + "/" + game.version + ".zip";

        });

        $("#games").append( html );
    }

});
