console.log('👽')

let api = fetch('https://pantagruweb.club/tentacules/webhook-test/b469b78f-40ba-437a-937d-48ba00985774')
     .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

console.log(api)