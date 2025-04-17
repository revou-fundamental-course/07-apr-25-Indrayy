let indexProfile = 0; // Current slide index

function nextProfile() {
    indexProfile += 1;
    showProfile(); // Update and display the next profile image
}

function showProfile() {
    console.log('Profile function started');
    const profileList = document.getElementsByClassName('slide'); // Select all profile slides
    console.log('Profile List:', profileList);

    // Reset index if it exceeds the total number of slides
    if (indexProfile > profileList.length - 1) {
        indexProfile = 0;
    }

    // Hide all slides with a loop
    for (let i = 0; i < profileList.length; i++) {
        profileList[i].style.display = 'none'; // Set display to none
    }

    // Show the current slide
    profileList[indexProfile].style.display = 'block'; // Set display to block for the active slide
}

// Initialize the slider
setInterval(() => {
    nextProfile(); // Change slides every 3 seconds
}, 3000);

// Show the first slide on page load
document.addEventListener('DOMContentLoaded', () => {
    showProfile();
});


// Message Us Area Here
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const birthDate = document.getElementById('birth-date').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message').value.trim();

    // Validate Name
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert('Nama hanya boleh berisi huruf dan spasi.');
        return false;
    }

    // Validate Birth Date
    if (!birthDate) {
        alert('Silakan pilih tanggal lahir.');
        return false;
    }

    // Validate Email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Masukkan email yang valid.');
        return false;
    }

    // Validate Gender
    if (!gender) {
        alert('Silakan pilih jenis kelamin.');
        return false;
    }

    // Validate message
    if (!message) {
        alert('Silakan isi pesan anda.');
        return false;
    }

    alert('Form berhasil dikirim!');
    return true;
}

function displayFormData() {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const birthDate = document.getElementById('birth-date').value.trim();
    const email = document.getElementById('email').value.trim();
    const genderElement = document.querySelector('input[name="gender-option"]:checked');
    const gender = genderElement ? genderElement.value : null;
    const message = document.getElementById('message').value.trim();

    // Debugging: Log the collected values
    console.log("Collected values: ",{name, birthDate, email, gender,message})

    // Check if all fields are field
    if(!name || !birthDate || !email || !gender || !message){
        alert("Please fill out all fields before submitting.");
        return false;     // Prevent form submission
    }

    // Display the data in the formResult div
    const formResult = document.getElementById('formResult');
    if(formResult){
        formResult.innerHTML = `
    <ul>
        <h2>Your Personal Information</h2>
        <li><strong>Nama:</strong> ${name}</li>
        <li><strong>Tanggal Lahir:</strong> ${birthDate}</li>
        <li><strong>Email:</strong> ${email}</li>
        <p><strong>Gender:</strong> ${gender}</p>
        <li><Strong>Pesan Anda:</strong>${message}</li>
    </ul>
    `;
     console.log("Hasil kontainer telah diperbarui!");   
    }else{
        console.error("Hasil kontainer dari (#formResult) tidak ditemukan!")
    }

    // Prevent default form submission
    return false;
}