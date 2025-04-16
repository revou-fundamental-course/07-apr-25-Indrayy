// Our Profile Area

document.addEventListener('DOMContentLoaded', () => {
const slider = document.getElementById('slider-profile');
const Slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`; // Shift slider to show the current slide
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % Slides.length;        //2; // Alternate between 2 slides (0 and 1)
    showSlide(currentSlide);
}

 //Initialize and loop the sliding behavior
setInterval(nextSlide, 3000); // Slides every 3 seconds
});

// Message Us Area Here
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const birthDate = document.getElementById('birth-date').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

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

    // Debugging: Log the collected values
    console.log("Collected values: ",{name, birthDate, email, gender})

    // Check if all fields are field
    if(!name || !birthDate || !email || !gender){
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
    </ul>
    `;
     console.log("Hasil kontainer telah diperbarui!");   
    }else{
        console.error("Hasil kontainer dari (#formResult) tidak ditemukan!")
    }


    

    // Prevent default form submission
    return false;
}