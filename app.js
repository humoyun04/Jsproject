let photos = {
    1: {
        link: "https://www.mckinsey.com/~/media/mckinsey/business%20functions/sustainability/our%20insights/nature%20in%20the%20balance%20what%20companies%20can%20do%20to%20restore%20natural%20capital/nature-is-now-hero_1536x1536.jpg",
        caption: "Tabiat 1",
    },
    2: {
        link: "https://cdn.shopify.com/s/files/1/0100/6082/files/glacierbg.jpg?v=1613677492",
        caption: "Tabiat 2",
    },
    3: {
        link: "https://i.ytimg.com/vi/6lt2JfJdGSY/maxresdefault.jpg",
        caption: "Tabiat 3",
    },
    4: {
        link: "https://ggsc.s3.amazonaws.com/images/uploads/LAKE-TREE.jpg",
        caption: "Tabiat 4",
    },
    5: {
        link: "https://nature-mentor.com/wp-content/uploads/2018/10/nature-connection.jpg",
        caption: "Tabiat 5",
    }
}
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let img = document.querySelector('img')
let caption = document.querySelector(('.caption'))

let x = 0;
document.addEventListener('DOMContentLoaded', () => {
    img.setAttribute('src', photos[1]['link']);
    caption.innerHTML = photos[1]['caption']
    x = 1
})
next.addEventListener('click', () => {
    if (x >= Object.keys(photos).length) {
        x = 0
    }
    x ++;
    console.log(x)
    img.setAttribute('src',photos[x]['link']);
    caption.innerHTML = photos[x]['caption']

    img.classList.add('img_active');
    setInterval( () => {
        img.classList.remove('img_active');
    },2500)
})

prev.addEventListener('click', () => {
    if (x <= 1) {
        x = Object.keys(photos).length
    }
    img.classList.toggle('img_active')
    x --;
    console.log(x)
    img.setAttribute('src',photos[x]['link']);
    caption.innerHTML = photos[x]['caption']
    img.classList.add('img_active');

    setInterval( () => {
        img.classList.remove('img_active');
    },2500)
})











