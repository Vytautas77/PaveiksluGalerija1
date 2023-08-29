const galleryWrapper = document.getElementById('galleryWrapper');
const fetchID = 'https://64ec5f6ef9b2b70f2bfa2f4a.mockapi.io/paintingGaley/';

import {paintCards} from './/helpers.js'
// const paintCard=(paintingGaley)=>{
//     const wrapperLink = document.createElement('a');
//     wrapperLink.setAttribute('class', 'galleryLink');
//     wrapperLink.href = './wrapper.html';
//     wrapperLink.addEventListener('click', ()=>{
//         localStorage.setItem('paintingGaleyId', paintingGaley.id)
//     });
 
//     const pictureUrlWrapper = document.createElement('img')
//     pictureUrlWrapper.setAttribute('class', 'picture')
//     pictureUrlWrapper.src=paintingGaley.pictureUrl;

//     wrapperLink.append (pictureUrlWrapper)
//     return wrapperLink
// }


const getPicture = async()=>{
    const response = await fetch(fetchID)
    const paints = await response.json();
    paints.sort((a, b)=>{
        return a.author> b.author ? 1 : -1;
     })
    .forEach((paintingGaley)=>{
        const  card = paintCards(paintingGaley);
        galleryWrapper.append(card)
    })

}
getPicture()