const wrapper = document.getElementById('wrapper');

const paintCard=(paintingGaley)=>{
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

    const dimensionsWrapper = document.createElement('h5')
    dimensionsWrapper.innerHTML=('Matmenys: '+paintingGaley.dimensions +'cm.')
    rightDiv.append(priceWrapper, dimensionsWrapper)
    contentDiv.append(leftDiv,rightDiv)

    const pictureUrlWrapper = document.createElement('img')
    pictureUrlWrapper.setAttribute('class', 'pictureUrl')
    pictureUrlWrapper.src=paintingGaley.pictureUrl;

    wrapperLink.append (pictureUrlWrapper,contentDiv)
    return wrapperLink
}


const getPicture = async()=>{
    const response = await fetch('https://64ec5f6ef9b2b70f2bfa2f4a.mockapi.io/paintingGaley')
    const paints = await response.json();

    paints.forEach((paintingGaley)=>{
        const  card = paintCard(paintingGaley);
        wrapper.append(card)
    })

}
getPicture()
console.log(getPicture)