const wrapper = document.getElementById('wrapper');
const fetchID = 'https://64ec5f6ef9b2b70f2bfa2f4a.mockapi.io/paintingGaley/';

import {paintCard} from './src/helpers.js'

const getPicture = async()=>{
    const response = await fetch(fetchID)
    const paints = await response.json();
    paints.sort((a, b)=>{
        return a.id< b.id ? 1 : -1;
     })
    .slice(0,4)
    .forEach((paintingGaley)=>{
        const  card = paintCard(paintingGaley);
        wrapper.append(card)
    })

}
getPicture()