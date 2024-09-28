console.log('👽')

let api = fetch('https://pantagruweb.club/tentacules/webhook-test/b469b78f-40ba-437a-937d-48ba00985774')
    .then(response => response.json())

console.log(api)