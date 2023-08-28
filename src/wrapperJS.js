const pictureID = localStorage.getItem('paintingGaleyId');
const delBtn = document.getElementById('delBtn');
const fetchID = 'https://64ec5f6ef9b2b70f2bfa2f4a.mockapi.io/paintingGaley/';

const addInfoToScreen = (paintingGaley)=>{
    const author = document.getElementById('author');
    author.innerHTML=('Autorius: ' +paintingGaley.author);
    const pictureName = document.getElementById('pictureName');
    pictureName.innerHTML = ('Pavadinimas: '+paintingGaley.pictureName);
    const price =document.getElementById('price');
    price.innerHTML = ('Kaina: ' +paintingGaley.price+ ' &#x20AC');
    const paintingStyle = document.getElementById('paintingStyle');
    paintingStyle.innerHTML = ('Tapyba: ' +paintingGaley.paintingStyle);
    const dimensions=document.getElementById('dimensions');
    dimensions.innerHTML = ('Matmenys: '+paintingGaley.dimensions+'cm.');
    const aboutAuthor = document.getElementById('aboutAuthor');
    aboutAuthor.innerText = paintingGaley.aboutAuthor;
    const pictureUrl = document.getElementById('pictureUrl')
    pictureUrl.src = paintingGaley.pictureUrl;
}

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
