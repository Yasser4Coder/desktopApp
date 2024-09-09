/**
 * Navigate to a specified page.
 * @param {string} url - The URL of the page to navigate to.
 */
function navigateTo(url) {
  window.location.href = url;
}
// function for going back
function goBack() {
  window.history.back();
  window.addEventListener("popstate", function () {
    window.location.reload();
  });
}

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
  if (document.getElementById("inq").value === "أدخل رقم البطاقة") {
    document.getElementById("inq").value = value;
  } else {
    document.getElementById("inq").value += value;
  }
};

const clearInput = () => {
  document.getElementById("inq").value = "أدخل رقم البطاقة";
  document.getElementById("inq").ariaPlaceholder = "أدخل رقم البطاقة";
};

const EnterInquiry = () => {
  document.getElementById("inq").style.color = "gray";
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};
