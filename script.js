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

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener('DOMContentLoaded', () => {

    colorIndex = randomNumber(0, colors.length);
    changeTheme()
    
    document.querySelector('.header__hero .name').addEventListener('click', changeTheme)
    document.querySelector('.header__profile').addEventListener('click', changeTheme)

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

function changeTheme(event) {
    colorIndex = (colorIndex + 1) % colors.length
    document.documentElement.style.setProperty('--textTheme', colors[colorIndex])
    if (event) {
        event.preventDefault()
    }
}