import {key} from "./secret"
const dataElement = document.getElementById("--weather-data");

async function bookData() {
    const bookDataUrl = `https://www.googleapis.com/auth/books`;
    try {
        const response = await fetch(bookDataUrl,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}



const dataToUse = bookData();
if(dataElement !== null) {
    dataElement.innerText = JSON.stringify(dataToUse);
}
console.log(dataToUse);