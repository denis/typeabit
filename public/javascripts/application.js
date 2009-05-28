$(
    function () {
        function updateSuggestions(data) {
            var jqSuggestions = $("#suggestions");
            $("#results").html("");

            if (!data[1][0]) {
                return;
            }

            $.get(
                "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&hl=en&rsz=large&q=" + encodeURIComponent(data[1][0][0]),
                {},
                function (data) { updateResults(data) },
                "jsonp"
            );

            for (i = 0; i < 5; i++) {
                if (data[1][i]) {
                    jqSuggestions.append("<li>" + data[1][i][0] + "</li>");
                }
            }
        }

        function updateResults(data) {
            var jqResults = $("#results");

            for (i = 0; i < 3; i++) {
                if (data["responseData"]["results"][i]) {
                    jqResults.append('<li style="float: left; padding: 10px; list-style-type: none; margin: 0;"><img width="280" height="202" src="http://images.pageglimpse.com/v1/thumbnails?url=' + encodeURIComponent(data["responseData"]["results"][i]["url"]) + '&size=medium&devkey=8e97fc866d361db0b1d4e5a427a69136"><br>' + data["responseData"]["results"][i]["title"] + ' <a href="' + data["responseData"]["results"][i]["url"] + '">' + data["responseData"]["results"][i]["visibleUrl"] + "</a></li>");
                }
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
