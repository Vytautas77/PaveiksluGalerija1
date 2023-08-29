const pictureID = localStorage.getItem('paintingGaleyId');
const delBtn = document.getElementById('delBtn');
const fetchID = 'https://64ec5f6ef9b2b70f2bfa2f4a.mockapi.io/paintingGaley/';

import{addInfoToScreen} from './helpers.js'

const getinfo = async()=>{
    const response = await fetch(fetchID+pictureID);
    const paintingGaley = await response.json();

    addInfoToScreen(paintingGaley)
}
getinfo()

delBtn.addEventListener('click', async()=>{
    try{
        const responce=await fetch(fetchID+pictureID,
            {
                method: 'DELETE'
            })
        const data = await responce.json()
        if(data){
            alert('Informacija ištrinta sėkmingai')
            setTimeout(()=>{
                window.location.replace('../index.html')
            },2000)
        }
    }catch(err){
        alert('Informacija neištrinta!')
    }
            })
