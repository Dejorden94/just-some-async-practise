"use strict";
const dataElement = document.getElementById("--weather-data");
async function bookData() {
    const bookDataUrl = `https://openlibrary.org/search.json?q=the+lord+of+the+rings`;
    console.log(`The book url: ${bookDataUrl}`);
    try {
        const response = await fetch(bookDataUrl, {
            method: "GET",
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }
    catch (error) {
        console.log(`We found the following error: ${error}`);
    }
}
bookData().then((data) => {
    console.log(data);
    if (dataElement) {
        dataElement.innerText = JSON.stringify(data, null, 2);
    }
});
