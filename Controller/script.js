function validateCNIC(cnic) {
    var regex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;
    return regex.test(cnic);
}

function validatePhoneNumber(phoneNumber) {
    var regex = /^\d{11}$/;
    return regex.test(phoneNumber);
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function checkGenderFromCNIC(cnic) {
    const lastDigit = parseInt(cnic.slice(-1));
    if (lastDigit % 2 === 1) {
        return true;  // male
    } else {
        return false; // female
    }
}


function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form input values
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var cnic = document.querySelector('input[name="identityCardNo"]').value;
    var phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
    var licenseNo = document.querySelector('input[name="licenseNo"]').value;
    var licensePic = document.querySelector('input[name="licensePic"]').files[0]; 
 
    if (!validateCNIC(cnic)) {
        alert("Please enter a valid CNIC number in the format: 12345-1234567-1");
        return;
    }

    if (checkGenderFromCNIC(cnic)) {
        alert("This is for Women only your cnic is not validated to be in the category of Women");
        return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        alert("Please enter a valid phone number with 11 digits");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

    // Prepare form data to send to server
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('cnic', cnic);
    formData.append('phoneNumber', phoneNumber);
    formData.append('licenseNo', licenseNo);
    formData.append('licensePic', licensePic);

    // Send license picture and form data to server for verification and registration
    verifyLicenseAndRegister(formData);
}

// Function to send data to server for verification and registration
function verifyLicenseAndRegister(formData) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/Model/register.php', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Registration successful, display message to the user
                alert(xhr.responseText); // Assuming the server sends a success message
            } else {
                // Registration failed, display error message to the user
                alert('Registration failed. Please try again later.');
            }
        }
    };
    xhr.send(formData);
}


document.querySelector('form').addEventListener('submit', handleSubmit);
