$(document).ready(function () {
    $("#calculateBtn").click(function () {
        // Get input values
        let numLessons = parseInt($("#numLessons").val());
        let lessonDuration = parseInt($("#lessonDuration").val());
        let hourlyRate = 40; // $40 per hour

        // Reset warnings
        $("#lessonWarning").hide();
        $("#durationWarning").hide();

        // Validate number of lessons
        if (isNaN(numLessons) || numLessons <= 0) {
            alert("Please enter a valid number of lessons.");
            return;
        }
        if (numLessons > 4) {
            $("#lessonWarning").show();
            return;
        }

        // Validate lesson duration
        if (isNaN(lessonDuration) || lessonDuration < 30 || lessonDuration > 60) {
            $("#durationWarning").show();
            return;
        }

        // Convert lesson duration from minutes to hours
        let lessonHours = lessonDuration / 60;

        // Calculate total cost
        let totalCost = numLessons * lessonHours * hourlyRate;

        // Display result in the read-only input box
        $("#totalCost").val(`$${totalCost.toFixed(2)}`);
    });
});
