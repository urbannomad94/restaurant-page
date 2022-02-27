function renderContact() {
    const content = document.querySelector('#content');
    const contact = document.createElement('section');
    contact.classList.add('page-tab', 'contact-tab');

    const left = document.createElement('div');
    left.classList.add('left');
    const right = document.createElement('div');
    right.classList.add('right');

    const phoneTitle = document.createElement('h3');
    phoneTitle.innerText = 'Phone Number';
    const phoneNum = document.createElement('h3');
    phoneNum.innerText = "(123)456-7890"
    const addressTitle = document.createElement('h3')
    addressTitle.innerText = 'Address';
    const address = document.createElement('h3');
    address.innerText = "123 Main St, New York, NY, 12345";

    left.append(phoneTitle, phoneNum, addressTitle, address);
    right.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24195.10207631814!2d-74.0248049622402!3d40.70947964570727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18049ba121%3A0xebaf26c536e06652!2s123%20William%20St%2C%20New%20York%2C%20NY%2010038!5e0!3m2!1sen!2sus!4v1645995727232!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

    
    contact.append(left, right);
    content.appendChild(contact);
}

function showContact() {
    const contact = document.querySelector('.contact-tab');
    contact.classList.remove('hidden');
    const contactLink = document.querySelector('.contact-link');
    contactLink.classList.add('selected');
}

function hideContact() {
    const contact = document.querySelector('.contact-tab');
    contact.classList.add('hidden');
    const contactLink = document.querySelector('.contact-link');
    contactLink.classList.remove('selected');
}

export { renderContact, showContact, hideContact }