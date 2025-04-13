const body = document.body;
const list = document.getElementById("listOfClientsDivUL")
const apiKey = '';
const apiUrl = 'https://pod01.withmoxie.com/api/public/action/clients/list';
let clientData;
let clientList = [];

fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey // Replace 'X-API-Key' with the appropriate header name
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); //data is the list of clients
    clientData = data;
    console.log(clientData);
    for (let x of clientData) {
        list.innerHTML += `<li>${x.name}</li>`;
    }
  })


