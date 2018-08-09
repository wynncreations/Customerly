$(document).ready(function () {
    //make sure password and confirm password on the register page are the same before allowing submission
    $("[type=password]").on("change",function () {
        if ($("#password").val() !== $("#conpw").val() || ($("#password").val().length < 8)) {
            $("[type=submit]").prop("disabled", true);
        } else {
            $("[type=submit]").prop("disabled",false);
        }
    });

});


