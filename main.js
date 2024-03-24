const cards = document.querySelector(".wrapper")

const json = () => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "./converter.json")
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send()
    xhr.onload = () => {
        const reqest = JSON.parse(xhr.response)
        reqest.forEach(person => {
            const card = document.createElement("div")
            card.classList.add("center")
            card.innerHTML=  `
            <h1>${person.name}</h1>
            <span>${person.age}</span>
            <img src="${person.person_photo}" alt="img">
            `
            cards.append(card)
        })

    }
}
json()

const respons = new XMLHttpRequest()
respons.open("GET", "./char.json")
respons.setRequestHeader("Content-type", "application/json")
respons.send()
respons.onload = () => {
    const jsonPars = JSON.parse(respons.response)
    console.log(jsonPars)
}