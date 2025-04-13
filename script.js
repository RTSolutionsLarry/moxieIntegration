const body = document.body;
const list = document.getElementById("listOfClientsDivUL")
const apiKey = '67f34d651e017b0ef702ebad.238c9faee6adaca783bd89ecee63fbf098b7d68b161068edcb1b61ac1a1d9f36';
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


