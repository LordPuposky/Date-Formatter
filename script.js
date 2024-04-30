// Get the reference to the paragraph element where the current date will be displayed
const currentDateParagraph = document.getElementById("current-date");

// Get the reference to the date options selection element
const dateOptionsSelectElement = document.getElementById("date-options");

// Get the current date
const date = new Date();

// Get the current day
const day = date.getDate();

// Get the current month (adding 1 since months in JavaScript are zero-based)
const month = date.getMonth() + 1;

// Get the current year
const year = date.getFullYear();

// Get the current hour
const hours = date.getHours();

// Get the current minutes
const minutes = date.getMinutes();

// Format the current date in "day-month-year" format
const formattedDate = `${day}-${month}-${year}`;

// Display the formatted date in the paragraph
currentDateParagraph.textContent = formattedDate;

// Add an event listener for change in the date options selection element
dateOptionsSelectElement.addEventListener("change", () => {
    // Use a switch to determine the selected option and update the displayed date accordingly
    switch (dateOptionsSelectElement.value) {
        // If "yyyy-mm-dd" is selected
        case "yyyy-mm-dd":
            // Reverse the order of date elements and display it again
            currentDateParagraph.textContent = formattedDate
                .split("-")
                .reverse()
                .join("-");
            break;
        // If "mm-dd-yyyy-h-mm" is selected
        case "mm-dd-yyyy-h-mm":
            // Display the date in "month-day-year hours Hours minutes Minutes" format
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;
        // If no option is selected, display the original date
        default:
            currentDateParagraph.textContent = formattedDate;
            break;
    }
});
