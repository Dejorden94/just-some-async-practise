export function creatListItem(doc, bookList) {
    const listItem = document.createElement("li");
    listItem.textContent = doc.title;
    bookList?.appendChild(listItem);
}
