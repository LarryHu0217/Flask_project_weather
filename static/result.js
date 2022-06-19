$(document).ready(function () {
    if (n_items == 0) {
        $("#content").html("No results found.")
    } else {
        $("#content").html("Results found:"+n_items)
        display_results_marked(results)
    }
})