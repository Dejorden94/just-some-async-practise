async function bookData() {
    const bookDataUrl = `https://www.googleapis.com/auth/books`
    try {
        const response = await fetch(bookDataUrl)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
    } catch (error) {
        console.log(error)
    }
}