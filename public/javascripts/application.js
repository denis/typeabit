$(
    function () {
        function updateSuggestions(data) {
            var jqSuggestions = $("#suggestions");

            for (i in data[1]) {
                jqSuggestions.append("<li>" + data[1][i][0] + "</li>");
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
