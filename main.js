
console.log('loaded');

//CHANGES BACKGROUND 
const body = document.querySelector('body')


//declares an array containing img links
const imgSrc = ['https://i.kym-cdn.com/photos/images/newsfeed/001/431/201/40f.png', 'https://images.gamebanana.com/img/ico/sprays/5de275cbb3314.png', 'https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg', 'https://pbs.twimg.com/media/EUTJiL5UYAAPM0S?format=png&name=small'];

//creates function that randomly generates image
const ranImgGen = () => {
    const randomNum = () => {
        return Math.floor(Math.random() * 4);
    }
    return `url(${imgSrc[randomNum()]})`;
}

//assign background image to randomly generated image
body.style.backgroundImage = ranImgGen(); 


//select all text elements
const textArr = document.querySelectorAll('*');

body.style.fontFamily = "Comic Sans MS, Comic Sans, cursive"; //changes all the fonts to comic sans

//creates a function that randomly generates a color
const rgbGen = () => {
    const randomNum = () => {
        return Math.floor(Math.random() * 255);
    }
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}

//create counter for while loop to iterate through elements
let i = 0;

//loops through the text elements
while (textArr[i]){
    let thisNode = textArr[i];
    thisNode.style.color = rgbGen(); //assigns each element a random color from function
    i++ //increments counter
}


let tracker = 4;
const links = document.querySelectorAll('a');
const linkStorage = [];

links.forEach((link) => {
    linkStorage.push(link.getAttribute('href'));
    link.setAttribute('href', '#');
    link.addEventListener('click', () => {
        if (tracker !== 0){
            link.style.position = 'absolute'            
            link.style.top = `${Math.random() * 100}px`
            link.style.left = `${Math.random() * 100}px`
            link.preventDefault();
            // link.style.pointerEvents = 'none';
            tracker--;
        } else if (tracker === 0){
            link.setAttribute('href', linkStorage.pop());
        }
    });
});

// links.forEach((link) => {
//     link.addEventListener('click', () => {
//         if (tracker === 0){
//             link.style.href
//             // link.style.pointerEvents = 'none';
//         }
//         // } else if (tracker === 0){
//         //     // link.style.pointerEvents = 'auto'; 
//         // }
//     });
// });



// rick roll
//play rick in the background

// const rr = new Audio('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
// // rr.setAttribute('loop', true);
// rr.setAttribute('id', "rickrolling");
// body.appendChild(rr);
// rr.autoplay = true;
// rr.loop = true;


//{/* <iframe src=”https://olafwempe.com/mp3/silence/silence.mp3″ type=”audio/mp3″ allow=”autoplay” id=”audio” style=”display:none”></iframe>
//<audio autoplay>
//<source src=”https://olafwempe.com/mp3/Septium.mp3″ type=”audio/mp3″>
//</audio> */}//
     
//var myAudio = new Audio(chrome.runtime.getURL("path/to/file.mp3"));
//myAudio.play();

    // const rrmusic = document.createElement('script');
    // const rmusicBlock = document.createElement('audio');
    // rmusicBlock.setAttribute('id', 'rickRoll');
    // rmusicBlock.setAttribute('src', 'assets/rr.mp3');

    //<script>



// links move 
    // cache number of clicks
    // after a click move link 
    // after  # of clicks is > cache stop moving
// garish colors/ ugly background (DONE)
// scrolling wrong
// buttons don't work
// images flashing at just slow enough not to cause a seizure