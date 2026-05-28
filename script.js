document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('roomType').value;

    let errors = [];

    if (name.length < 3) errors.push('Full Name must be at least 3 characters.');
    if (!email.includes('@') || !email.includes('.')) errors.push('Enter a valid email address.');
    if (!/^[0-9]{10,15}$/.test(phone)) errors.push('Phone Number must be 10-15 digits.');
    if (!checkin) errors.push('Please select a Check-in Date.');
    if (!checkout) errors.push('Please select a Check-out Date.');
    if (checkin && checkout && new Date(checkout) <= new Date(checkin))
        errors.push('Check-out date must be after Check-in date.');
    if (!roomType) errors.push('Please select a Room Type.');

    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }

    alert(`Booking confirmed!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nRoom: ${roomType.replace('-', ' ')}`);
});
