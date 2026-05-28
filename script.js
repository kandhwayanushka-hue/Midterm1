function validateForm() {
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    var room = document.getElementById("roomType").value;

    var message = "";

    if (name == "") {
        message = message + "Please enter your full name.\n";
    }

    if (email == "") {
        message = message + "Please enter your email.\n";
    }

    if (phone == "") {
        message = message + "Please enter your phone number.\n";
    }

    if (checkin == "") {
        message = message + "Please select check-in date.\n";
    }

    if (checkout == "") {
        message = message + "Please select check-out date.\n";
    }

    if (room == "") {
        message = message + "Please select a room type.\n";
    }

    if (message != "") {
        alert(message);
        return false;
    }

    alert("Booking Confirmed!\n\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nCheck-in: " + checkin + "\nCheck-out: " + checkout + "\nRoom: " + room);
    return true;
}
