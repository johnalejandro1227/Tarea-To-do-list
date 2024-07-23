import { db}from "../main";

const newData=document.querySelector('#newData')

export function ediTask(i){
    db[i].task = newData.Value
    localStorage.setItem('db',JSON.stringify(db))
    location.reload()

}