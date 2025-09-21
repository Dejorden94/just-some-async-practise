import {creatListItem} from "./utils/create-list-util";
import {DocData} from "./types/docs-type";

async function bookData() {
    const bookDataUrl = `https://openlibrary.org/search.json?q=the+lord+of+the+rings`;
    console.log(`The book url: ${bookDataUrl}`);
    try {
        const response = await fetch(bookDataUrl,
            {
                method: "GET",
                headers: {
                    Accept: 'application/json'
                }
            }
        )
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.json();
    } catch (error) {
        console.log(`We found the following error: ${error}`)
    }
}

const bookList = document.getElementById("--book-list");

bookData().then((data) => {
    if (data) {
        data.docs.forEach((doc:DocData) => {
            creatListItem(doc, bookList);
        })
    }
}).catch((error) => {
    console.log(`Something went wrong ${error}`)
})