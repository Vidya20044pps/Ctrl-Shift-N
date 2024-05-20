document.getElementById('client-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form values
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var dateOfBirth = document.getElementById('date-of-birth').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var legalRep = document.getElementById('legal-representative').value;

    // Create an object with the form data
    var formData = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        address: address,
        phone: phone,
        email: email,
        legalRep: legalRep
    };

    // You can send the formData to your backend (e.g., using AJAX) to save it to the database
    console.log(formData);

    // Clear the form after submission
    document.getElementById('client-form').reset();
});