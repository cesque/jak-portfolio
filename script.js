const colors = [
    `#079992`,
    `#b71540`,
    `#e58e26`,
    `#78e08f`,
    `#38ada9`,
    `#eb2f06`,
    `#fa983a`,
    `#2ecc71`,
    `#9b59b6`,
]

let colorIndex = 0

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    document.querySelector('.header__hero .name').addEventListener('click', changeTheme)

    let isDesktop = window.matchMedia('(min-width: 600px)').matches

    let projects = document.querySelectorAll('.project')

    for(let i = 0; i < projects.length; i++) {
        let project = projects[i]
        let video = project.querySelector('video')


        if(video) {
            if(isDesktop) {
                project.addEventListener('mouseover', event => {
                    video.play()
                })
    
                project.addEventListener('mouseleave', event => {
                    video.pause()
                })
            } else {
                video.play()
            }
        } 
    }
})

// function getRandomColour() {
//     // let r = Math.floor(Math.random() * 255);
//     // let g = Math.floor(Math.random() * 255);
//     // let b = Math.floor(Math.random() * 255);
//     // return `rgb(${r}, ${g}, ${b})`;

//     let color = colors[Math.floor(Math.random() * colors.length)]

//     return color
// }

function changeTheme(event) {
    colorIndex = (colorIndex + 1) % colors.length
    document.documentElement.style.setProperty('--textTheme', colors[colorIndex])

    event.preventDefault()
}