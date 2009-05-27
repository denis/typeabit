$(
    function () {
        function updateSuggestions(data) {
            var jqSuggestions = $("#suggestions");
            $("#results").html("");

            $.get(
                "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&hl=en&rsz=large&q=" + encodeURIComponent(data[1][0][0]),
                {},
                function (data) { updateResults(data) },
                "jsonp"
            );

            for (i in data[1]) {
                jqSuggestions.append("<li>" + data[1][i][0] + "</li>");
            }
        }

        function updateResults(data) {
            var jqResults = $("#results");

            for (i in data["responseData"]["results"]) {
                jqResults.append("<li>" + data["responseData"]["results"][i]["title"] + ' <a href="' + data["responseData"]["results"][i]["visibleUrl"] + '">' + data["responseData"]["results"][i]["url"] + "</a></li>");
            }
        }

        $("#q").keyup(
            function () {
                $("#suggestions").html("");

                if (this.value) {
                    $.get(
                        "http://google.com/complete/search?q=" + encodeURIComponent(this.value),
                        {},
                        function (data) { updateSuggestions(data) },
                        "jsonp"
                    );
                }
            }
        );
    }
);
