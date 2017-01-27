$(document).ready( function(){


    var games = [
        {
            name: "TankyTank",
            version: "none",
            devStatus: "prototype"
        },
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
            version: "alpha2",
            devStatus: "prototype"
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

            case "prototype":
                devStatus.css({
                    "border-color": "purple",
                    "color": "purple"
                });
                devStatus.html("Prototype");
            break;
        }

        html.find("h2").html( game.name );
        html.find("img").attr("src", "images/" + game.name + ".png");
        html.show();
        html.data("game-name",game.name);
        html.data("game-version",game.version);

        if (game.devStatus == "prototype")
        {
            html.find(".download-button").attr("disabled", "disabled");
        }

        html.click(function(){
            var name = $(this).data("game-name");
            var version = $(this).data("game-version");
            window.location = "https://github.com/roonilwazlib7/offongames/raw/master/GameBuilds/" + name + "/" + version + ".zip";

        });

        $("#games").append( html );
    }

});
