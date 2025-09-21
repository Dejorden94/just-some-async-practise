import {DocData} from "../types/docs-type";

export function creatListItem(doc: DocData, bookList: HTMLElement | null){
    const listItem = document.createElement("li");
    listItem.textContent = doc.title;
    bookList?.appendChild(listItem);

}