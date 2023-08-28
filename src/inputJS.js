const btn = document.getElementById('buttonAdd');
const infoMesenger = document.getElementById('infoMesenger')
const linkRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
const fetchID = 'https://64ec5f6ef9b2b70f2bfa2f4a.mockapi.io/paintingGaley/';

const inputData =()=>{
    const AuthorAdd = document.getElementById('AuthorAdd').value
    const PictuteNameAdd = document.getElementById('PictuteNameAdd').value
    const priceAdd = document.getElementById('priceAdd').value
    const paintingStyleAdd = document.getElementById('paintingStyleAdd').value
    const dimensionsAdd = document.getElementById('dimensionsAdd').value
    const aboutAuthorAdd = document.getElementById('aboutAuthorAdd').value
    const pictureUrlAdd = document.getElementById('pictureUrlAdd').value

    const inputWrapper= {
        author : AuthorAdd,
        pictureName : PictuteNameAdd,
        price : priceAdd,
        paintingStyle : paintingStyleAdd,
        dimensions : dimensionsAdd,
        aboutAuthor : aboutAuthorAdd,
        pictureUrl : pictureUrlAdd
    }
    if(!AuthorAdd){
        infoMesenger.innerHTML = 'Laukelis "Įveskite kūrinio autorių" neįvestas!'
        throw new Error('Laukelis "Įvesti kūrinio autorių" neįvestas!');
    }
    if(!PictuteNameAdd){
        infoMesenger.innerHTML = 'Laukelis "Įveskite kūrinio pavadinimą" neįvestas!'
        throw new Error('Laukelis "Įveskite kūrinio pavadinimą" neįvestas!');
    }
    if(!priceAdd){
        infoMesenger.innerHTML = 'Laukelis "Įvesto kūrinio kaina" neįvestas!'
        throw new Error('Laukelis "Įvesto kūrinio kaina" neįvestas!');
    }
    if(!paintingStyleAdd){
        infoMesenger.innerHTML = 'Laukelis "Įvesto kūrinio tapybos stilius" neįvestas!'
        throw new Error('Laukelis "Įvesto kūrinio tapybos stilius" neįvestas!');
    }
    if(!dimensionsAdd){
        infoMesenger.innerHTML = 'Laukelis "Įvesto kūrinio matmenys" neįvestas!'
        throw new Error('Laukelis "Įvesto kūrinio marmenys" neįvestas!');
    }
    if(!aboutAuthorAdd){
        infoMesenger.innerHTML = 'Laukelis "Trumpai apie kūrinio autorių" neįvestas!'
        throw new Error('Laukelis "Trumpai apie kūrinio autorių" neįvestas!');
    }
    if(!pictureUrlAdd){
        infoMesenger.innerHTML = 'Laukelis "Kūrinio nuorodos URL" neįvestas!'
        throw new Error('Laukelis "Kūrinio nuorodos URL" neįvestas!');
    }
    if(!linkRegex.test(pictureUrlAdd)){
        infoMesenger.innerHTML = 'Neteisingas kūrinio nuoroda URL!'
        throw new Error('Neteisingas kūrinio nuoroda URL!');
    }
    return inputWrapper
}
btn.addEventListener('click', async ()=>{
    const inputPicture = inputData();
    try{
        const responce=await fetch(fetchID ,{
            method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputPicture)
    })
    const data = await responce.json();
    if(data){
        infoMesenger.innerHTML = "Duomenys įkelti sėkmingai."
        setTimeout(()=>{
            window.location.replace("../index.html")
        },2000)
    }
}catch(err){
    infoMesenger.innerHTML = "Duomenys įkelti NEsėkmingai."
}
})
