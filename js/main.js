/**
 * Navigate to a specified page.
 * @param {string} url - The URL of the page to navigate to.
 */
function navigateTo(url) {
  window.location.href = url;
}
// function for going back
function goBack() {
  if (document.referrer) {
    // Navigate to the previous page if there is a referrer (a previous page)
    window.location.href = document.referrer;
  } else {
    // Fallback: use window.history.back() if referrer is not available
    window.history.back();
  }
}
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

//for uncheck the radio
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("mousedown", function (event) {
    // Check if the radio is already checked
    if (this.checked) {
      // On mousedown (before the default behavior occurs), uncheck the radio
      this.dataset.wasChecked = "true";
    } else {
      this.dataset.wasChecked = "false";
    }
  });

  radio.addEventListener("click", function (event) {
    // If the radio was previously checked, prevent it from being checked again
    if (this.dataset.wasChecked === "true") {
      this.checked = false; // Uncheck the radio button
      this.dataset.wasChecked = "false"; // Reset the dataset
    }
  });
});

const setValue = (value) => {
  // Check if the current value of the input field is "أدخل رقم البطاقة"
  if (document.getElementById("inq").value === "أدخل رقم البطاقة") {
    // If true, replace the current value with the new 'value'
    document.getElementById("inq").value = value;
  } else {
    // Otherwise, append the new 'value' to the existing input value
    document.getElementById("inq").value += value;
  }
};

const clearInput = () => {
  document.getElementById("inq").value = "أدخل رقم البطاقة";
  document.getElementById("inq").ariaPlaceholder = "أدخل رقم البطاقة";
};

const EnterInquiry = () => {
  const inputElement = document.getElementById("inq");

  // Change text color to gray
  inputElement.style.color = "gray";

  // Store the entered value
  const selectedNumber = inputElement.value;

  // Clear the input field
  inputElement.value = "";

  // Set the placeholder to the previously entered value
  inputElement.placeholder = selectedNumber;
  inputElement.style.color = "black";
};
