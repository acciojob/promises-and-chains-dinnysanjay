//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  // Check if inputs are empty
  if (name === '' || age === '') {
    alert("Please enter valid details");
    return;
  }

  // Create promise to handle asynchronous processing
  const submissionPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) >= 18) {
        alert(`Welcome, ${name}. You can vote.`);
        resolve();
      } else {
        alert(`Oh sorry ${name}. You aren't old enough.`);
        reject();
      }
    }, 4000); // 4 seconds delay
  });

  // Reset form after submission
  this.reset();

  // Handle promise resolution or rejection
  submissionPromise
    .then(() => console.log("Form submitted successfully."))
    .catch(() => console.log("Form submission failed."));
});
