export const addInfoToScreen = (paintingGaley)=>{
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

export const paintCard=(paintingGaley)=>{
    const wrapperLink = document.createElement('a');
    wrapperLink.setAttribute('class', 'wrapperLink');
    wrapperLink.href = './pages/wrapper.html';
    wrapperLink.addEventListener('click', ()=>{
        localStorage.setItem('paintingGaleyId', paintingGaley.id)
    });
    const contentDiv = document.createElement('div')
    contentDiv.setAttribute('class', 'contentDiv')

    const leftDiv = document.createElement('div')
    leftDiv.setAttribute('class', 'leftDiv')
    const authorWrapper = document.createElement('h5')
    authorWrapper.innerHTML=('Paveikslo autorius: ' +paintingGaley.author)

    const pictureNameWrapper = document.createElement('h3')
    pictureNameWrapper.innerHTML=('Pavadinimas: ' +paintingGaley.pictureName)

    leftDiv.append(pictureNameWrapper, authorWrapper)

    const rightDiv = document.createElement('div')
    rightDiv.setAttribute('class', 'rightDiv')
    const priceWrapper = document.createElement('h5')
    priceWrapper.innerHTML=('Kaina: ' +paintingGaley.price +' &#x20AC')

    const dimensionsWrapper = document.createElement('h6')
    dimensionsWrapper.innerHTML=('Matmenys: '+paintingGaley.dimensions +'cm.')
    rightDiv.append(priceWrapper, dimensionsWrapper)
    contentDiv.append(leftDiv,rightDiv)

    const pictureUrlWrapper = document.createElement('img')
    pictureUrlWrapper.setAttribute('class', 'pictureUrl')
    pictureUrlWrapper.src=paintingGaley.pictureUrl;

    wrapperLink.append (pictureUrlWrapper,contentDiv)
    return wrapperLink
}

export const paintCards=(paintingGaley)=>{
    const wrapperLink = document.createElement('a');
    wrapperLink.setAttribute('class', 'galleryLink');
    wrapperLink.href = './wrapper.html';
    wrapperLink.addEventListener('click', ()=>{
        localStorage.setItem('paintingGaleyId', paintingGaley.id)
    });
 
    const pictureUrlWrapper = document.createElement('img')
    pictureUrlWrapper.setAttribute('class', 'picture')
    pictureUrlWrapper.src=paintingGaley.pictureUrl;

    wrapperLink.append (pictureUrlWrapper)
    return wrapperLink
}