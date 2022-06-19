

$(document).ready(function () {
    $("#search-form").submit(function (event) {
        event.preventDefault()

        var input = $("#searchbox").val()
        window.location.href = "/search/" + input

    });
    $("#search-form1").submit(function (event) {
        event.preventDefault()

        var input1 = $("#searchbox1").val()
        var input2 = $("#searchbox2").val()
        window.location.href = "/history/download/"+input1+"/"+ input2
    });
    $("#search-form2").submit(function (event) {
        event.preventDefault()

        var input1 = $("#searchbox1").val()
        var input2 = $("#searchbox2").val()
        window.location.href = "/historyraw/"+input1+"/"+ input2
    })
    })
$("#searchbox").keyup(function (event){
        if(event.which==13){
                    event.preventDefault()

        var input = $("#searchbox").val()
        window.location.href = "/search/" + input
        }
    });
// $("#searchbox").keyup(function (event){
//         if(event.which==13){
//                     event.preventDefault()
//
//         var input = $("#searchbox").val()
//         window.location.href = "/search/" + input
//         }
//     });