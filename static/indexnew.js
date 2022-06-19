// function curList(data) {
//         var word= $("<h1 class='word'></h1>")
//         word.html(" Most popular for this week")
//          $("#result-list").append(word)
//     $("#result-list").append(data)
//     $.each(data, function (index, item) {
//         if(index < 3) {
//             var result = $("<div class='row result-item'></div>")
//             var col1 = $("<div class='col-md-2'></div>")
//             col1.html(index + 1)
//             result.append(col1)
//             var col3 = $("<div class='col-md-6'></div>")
//             var name = $("<a href='/view/" + item["id"] + "'>" + item["title"] + "<\a>")
//             col3.append(name)
//             result.append(col3)
//             $("#result-list").append(result)
//         }
//     });
// }
// function display_results(data) {
//     $("#result-list").empty();
//         var word= $("<h1 class='word'></h1>")
//         word.html("Search for "+$("#searchbox").val())
//          $("#result-list").append(word)
//
//      $("#result-list").append(data)
//
//     $.each(data, function (index, item) {
//
//         var result = $("<div class='row result-item'></div>")
//
//         var col1 = $("<div class='col-md-2'></div>")
//         col1.html(index + 1)
//         result.append(col1)
//         var col3 = $("<div class='col-md-6'></div>")
//         var name = $("<a href='/view/" + item["id"] + "'>" + item["title"] + "<\a>")
//         col3.append(name)
//         result.append(col3)
//         $("#result-list").append(result)
//     });
//
//     $(".btn-danger").click(function () {
//         var index = $(this).attr("id")
//         var id = data[index]["id"]
//         var send = {
//             "id": id
//         }
//     });
//
// }




function make_card(index, item) {
  var image_link = $("<a href='/view/" + item["id"] + "'></a>")
    var block = $("<div class='col-md-3 result-item'></div>")

    var card = $("<div class='card-example card bg-light'></div>")
    var card_img = $("<img class='card-img-top' src='" + item["img"] + "' alt='" + item["title"] + "'>")
    image_link.html(card)
    image_link.html(card_img)
    card.append(image_link)
    var card_body = $("<div class='card-body'>")
    var name = $("<a href='/search/" + item["title"] + "'>" + item["title"] + "<\a>")
    card_body.append(name)
    card_body.append(image_link)


    var card_budget= $("<p class='card-text block-with-text'></p>")
    card_budget.html(" latitude: "+item["budget"])
    card_body.append(card_budget)
    card.append(card_body)

    var card_score = $("<p class='card-text block-with-text'></p>")
    card_score.html("longitude: "+item["score"])
    card_body.append(card_score)
    card.append(card_body)

    card.append(card_body)

    block.append(card)
    return block
}

$(document).ready(function () {

    $("#result-list").empty();
    console.log(data)

    $.each(data, function (index, item) {

        var result = make_card(index, item)

        $("#result-list").append(result)
    });

});