const contact = () => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    main.appendChild(h1);
    
    const hours = document.createElement('p');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    
    hours.textContent = 'Hours: Everyday 06:00 - 22:00'
    address.textContent = 'Address: 5678 Imaginary Boulevard'
    phone.textContent = 'Phone: 123 - 456 - 7890'
    
    main.appendChild(hours);
    main.appendChild(address);
    main.appendChild(phone);
    
    const para = document.createElement('p');
    para.textContent = 'Leave us your feedback on our products and services.'
    main.appendChild(para);
    main.appendChild(buildForm());

    return main;
}

const buildForm = () => {
    const form = document.createElement('form');
    
    form.action = '#';
    form.method = 'get';

    form.appendChild(buildName());
    form.appendChild(buildEmail());
    form.appendChild(buildComment());
    form.appendChild(buildSubmit());

    return form;
}

const buildName = () => {
    const nameRow = document.createElement('div');
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');

    nameRow.classList.add('form-row');
    nameLabel.htmlFor = 'full-name';
    nameLabel.textContent = 'Name';

    nameInput.type = 'text';
    nameInput.name = 'full-name';
    nameInput.id = 'full-name';
    nameInput.required = true;

    nameRow.appendChild(nameLabel);
    nameRow.appendChild(nameInput);

    return nameRow;
}

const buildEmail = () => {
    const emailRow = document.createElement('div');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');

    emailRow.classList.add('form-row');
    emailLabel.htmlFor = 'email';
    emailLabel.textContent = 'Email';

    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'email';
    emailInput.required = true;

    emailRow.appendChild(emailLabel);
    emailRow.appendChild(emailInput);

    return emailRow;
}

const buildComment = () => {
    const textRow = document.createElement('div');
    const textLabel = document.createElement('label');
    const textInput = document.createElement('textarea');

    textRow.classList.add('form-row');
    textLabel.htmlFor = 'comment';
    textLabel.textContent = 'Comment';

    textInput.name = 'comment';
    textInput.id = 'comment';
    textInput.required = true;

    textRow.appendChild(textLabel);
    textRow.appendChild(textInput);

    return textRow;
}

const buildSubmit = () => {
    const submitRow = document.createElement('div');
    const submit = document.createElement('button');
    
    submitRow.classList.add('form-row');
    submit.textContent = 'Submit';

    submitRow.appendChild(submit);

    return submitRow;
}

export {contact};