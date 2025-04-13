const body = document.body;
const list = document.getElementById("listOfClientsDivUL")
// const apiKey = 'Put_key_here';
const apiUrl = 'https://pod01.withmoxie.com/api/public/action/clients/list';
const getApiUrl = 'https://pod01.withmoxie.com/api/public/action/tasks/create';
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

  //Create task in Moxie. Running this code will automatically create a task in Moxie.

//   fetch(getApiUrl, {
//     method: "POST",
//     body: JSON.stringify({
//       "name": "Test Name",
//       "clientName": "Test Client",
//       "projectName": "Test Project",     
//       "startDate": "2023-07-20",
//       "description": "Test Description"
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       'X-API-Key': apiKey
//     }
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));


