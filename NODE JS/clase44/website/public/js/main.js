const form = document.querySelector('form')

console.log(form)
const url = 'http://localhost:3001/product'


form.addEventListener('submit', (info)=>{
    info.preventDefault()
    console.log('Estoy funcionando')

    const formData = new FormData(form)
    const formDataJSON = Object.fromEntries(formData)
    console.log(formDataJSON)

    fetch(url,{
        method: 'POST',
        body: JSON.stringify(formDataJSON),
        headers: {
            'Content-Type': 'application/json'
        }
        
    })
    .then((res) => console.log(res) )
    .catch((err) => console.log(err) )
})