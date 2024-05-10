document.getElementById('Student_Registration').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the actual form submission

    const userData = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        gender: document.getElementById('gender').value,
        date: document.getElementById('date').value,
        Email: document.getElementById('Email').value,
        Branch: document.getElementById('Branch').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        pin_code: document.getElementById('pin_code').value
    };
    // Check if data already exists in local storage
    let students = JSON.parse(localStorage.getItem('students')) || [];  //JSON.parse used to convert string to array object
    students.push(userData); // Add the new user data to the array

    localStorage.setItem('students', JSON.stringify(students)); // Save back to local storage

    window.location.href = 'display.html'; // Redirect to the display page
});
