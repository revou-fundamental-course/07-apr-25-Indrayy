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
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Display the data in the formResult div
    const formResult = document.getElementById('formResult');
    formResult.innerHTML = `
        <h2>Submitted Information</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthDate}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${gender}</p>
    `;

    // Prevent default form submission
    return false;
}