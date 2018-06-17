$("#submit").on("click", function(){
    event.preventDefault

    function validateInfo(){
        var valid = true
        $(".input").each(function (){
            if($(this).val().trim() === ""){
                valid = false;
            }
        });

        $(".chosen").each(function(){

            if($(this).val() === null){
                valid = false;
            }
            
        });
        return valid;
        
    };
    if(validateInfo()){
        var userInfo = {
            name: $("#name").val().trim(),
            photo: $("#image").val().trim(),
            score: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
    $.post("/api/friends", userInfo, function(result){
        console.log(result);
        $("#matchName").text(result.name);
        $("#matchImage").attr("src", result.photo);

        $("#matchModal").modal("toggle");
    });
}
else{
    alert("Please Fill out all fields before Submitting")
};
});