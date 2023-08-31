'use strict';
const invalidURL = 'https://reqres.in/api/unknown/23';

const data = {
  body: JSON.stringify({
    name: 'Jhon',
    job: 'Myyja',
  }),
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
};

const getData = async () => {
  try {
    const res = await fetch(invalidURL);
    if (!res.ok) {
      throw new Error(`Request failed, Status: ${res.status}`);
    }
    const dataJSON = await res.json();
    console.log(dataJSON);
  } catch (error) {
    console.log('Error:', error.message);
  }
};
const postData = async newData => {
  newData.method = 'POST';
  try {
    const res = await fetch('invalidURL', newData);
    if (!res.ok) throw new Error(`Post Error: ${res.status}`);
    const dataJSON = await res.json();
    console.log(dataJSON);
  } catch (error) {
    console.log(error.message);
  }
};
const updateData = async newData => {
  newData.method = 'PUT';
  try {
    const res = await fetch('invalidURL', newData);
    if (!res.ok) throw new Error(`Update Error: ${res.status}`);
    const dataJSON = await res.json();
    console.log(dataJSON);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteData = async newData => {
  newData.method = 'DELETE';
  try {
    const res = await fetch('invalidURL', newData);
    if (!res.ok) throw new Error(`DELETE Error: ${res.status}`);
    const dataJSON = await res.json();
    console.log(dataJSON);
  } catch (error) {
    console.log(error.message);
  }
};

getData(data);
postData(data);
updateData(data);
deleteData(data);
