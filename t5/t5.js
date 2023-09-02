'use strict';
const restaurants = [];

// get restaurant data from api

// your code here
const table = document.querySelector('table');
const dialog = document.querySelector('dialog');

restaurants.sort((a, b) => {
  // Use the `localeCompare` method to compare strings alphabetically
  return a.name.localeCompare(b.name);
});

for (const restaurant of restaurants) {
  // create tr object and add content
  const tr = document.createElement('tr');
  const nameTh = document.createElement('th');
  const addressTh = document.createElement('th');
  nameTh.textContent = restaurant.name;
  addressTh.textContent = restaurant.address;

  tr.appendChild(nameTh);
  tr.appendChild(addressTh);
  table.appendChild(tr);

  tr.addEventListener('click', () => {
    document.querySelectorAll('th').forEach(element => {
      element.classList.remove('highlight');
    });

    nameTh.classList.add('highlight');
    addressTh.classList.add('highlight');

    CreateModal(restaurant);
    dialog.showModal();
  });
}

function CreateModal(restaurant) {
  // remove all old elements from dialog
  Array.from(dialog.children).forEach(child => {
    dialog.removeChild(child);
  });

  const form = document.createElement('form');
  form.method = 'dialog';

  const name = document.createElement('h2');
  name.textContent = restaurant.name;
  name.classList.add('dialog-content');

  const address = document.createElement('p');
  address.textContent = restaurant.address;
  address.classList.add('dialog-content');

  const postalCode = document.createElement('p');
  postalCode.textContent = restaurant.postalCode;
  postalCode.classList.add('dialog-content');

  const city = document.createElement('p');
  city.textContent = restaurant.city;
  city.classList.add('dialog-content');

  const phone = document.createElement('p');
  phone.textContent = 'phone: ' + restaurant.phone;
  phone.classList.add('dialog-content');

  const company = document.createElement('p');
  company.textContent = restaurant.company;
  company.classList.add('dialog-content');

  const okButton = document.createElement('button');
  okButton.textContent = 'ok';
  okButton.classList.add('dialog-content');

  form.appendChild(name);
  form.appendChild(address);
  form.appendChild(postalCode);
  form.appendChild(city);
  form.appendChild(phone);
  form.appendChild(company);
  form.appendChild(okButton);

  dialog.append(form);
}
