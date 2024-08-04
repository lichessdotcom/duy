document.getElementById('registrationForm').addEventListener('submit', function() {


    let valid = true;

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('ageError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('genderError').textContent = '';

    // Validate Full Name
    const fullName = document.getElementById('fullName').value;
    if (fullName === '') {
        document.getElementById('nameError').textContent = 'Họ và tên không được để trống.';
        valid = false;
    }

    // Validate Age
    const age = document.getElementById('age').value;
    if (age === '') {
        document.getElementById('ageError').textContent = 'Tuổi không được để trống.';
        valid = false;
    } else if (isNaN(age) || age <= 0) {
        document.getElementById('ageError').textContent = 'Tuổi phải là số dương.';
        valid = false;
    }

    // Validate Phone
    const phone = document.getElementById('phone').value;
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Số điện thoại không được để trống.';
        valid = false;
    } else if (!/^\d+$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Số điện thoại phải là số.';
        valid = false;
    }

    // Validate Gender
    const gender = document.getElementById('gender').value;
    if (gender === '') {
        document.getElementById('genderError').textContent = 'Giới tính không được để trống.';
        valid = false;
    }

    if (valid) {
        alert('Đăng ký thành công!');
    }
});
