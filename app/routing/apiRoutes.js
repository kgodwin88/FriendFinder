var friends = require("../data/friends")


module.exports = function (app) {
    app.get("/api/friends", function (request, response) {
        response.json(friends);
    });

    app.post("/api/friends", function (request, response) {
        var compare = [];
        var scores = request.body.score;
        for (var i = 0; i < friends.length; i++) {
            var friendScore = friends[i].score;
            var numbers = [];
            for (var n = 0; n < friendScore.length; n++) {
                var num = Math.abs(parseInt(friendScore[n]) - parseInt(scores[n]));

                numbers.push(num);

            };
            function getSum(total, num) {
                return total + num;
            };
            compare.push(numbers.reduce(getSum));
        };


        var min = Math.min(...compare);
        var a = compare.indexOf(min);
        var match = friends[a];
        console.log(min);
        response.json(match);
        friends.push(request.body);
    });
}

