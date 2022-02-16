const URL = 'https://thatcopy.pw/catapi/rest/';

// create a promise to get random pictures
const getPhotos = async () => {
    try {
        const data = await fetch(URL);
        const json = await data.json();
        return json.webpurl;
    } catch(e) {
        console.log(e.message);
    }
};


const loadImg = async () => {
    const img = document.getElementsByTagName('img')[0];
    img.src = await getPhotos(); // return a promise
};

loadImg();

const button = document.getElementById('change-cat');
button.addEventListener('click', loadImg);