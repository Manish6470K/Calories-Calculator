
$("#dataShow").css("display","none");

$('#get').click(function(){
    
    $("#dataShow").css("display","none");
    $("#processShow").css("height","50vh");
    $('#processShow').html(`<div class="loader"></div>`);
    
   var query = $('input').val();
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
        headers: { 'X-Api-Key': 'Zua2RIFZ5XpQb2dQuPuAUw==1fE7xrvpBfViO5r5'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            var strJSON = JSON.stringify(result);
            var data = JSON.parse(strJSON);
            // console.log(data[0]["name"]);
            if(data[0]["calories"]){
                $("#calories").html(data[0]["calories"]);
                $("#carbohydrates_total_g").html(data[0]["carbohydrates_total_g"]);
                $("#cholesterol_mg").html(data[0]["cholesterol_mg"]);
                $("#fat_saturated_g").html(data[0]["fat_saturated_g"]);
                $("#fat_total_g").html(data[0]["fat_total_g"]);
                $("#fiber_g").html(data[0]["fiber_g"]);
                $("#potassium_mg").html(data[0]["potassium_mg"]);
                $("#protein_g").html(data[0]["protein_g"]);
                $("#serving_size_g").html(data[0]["serving_size_g"]);
                $("#sodium_mg").html(data[0]["sodium_mg"]);
                $("#sugar_g").html(data[0]["sugar_g"]);
                $("#get").val("");
                $("#title").html(data[0]["name"]);
                
                $('#processShow').html("");
                $("#processShow").css("height","0vh");
                $("#dataShow").css("display","block");
            }
            else{
                $('#processShow').html("");
                $('#processShow').html("<h1>No Data Found</h1>");
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    }); 
});



// calories : 89.4
// carbohydrates_total_g : 23.2
// cholesterol_mg : 0
// fat_saturated_g : 0.1
// fat_total_g : 0.3
// fiber_g : 2.6
// name  :"banana"
// potassium_mg : 22
// protein_g : 1.1
// serving_size_g : 100
// sodium_mg : 1
// sugar_g : 12.3