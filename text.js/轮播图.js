var imgs = document.querySelectorAll('.banner > ul > li')
var banner = document.querySelector('.banner')

var index = 0

function changeOne(type){
    imgs[index].className = ''

    if(type  === true){
        index++
    } else if(type === false) {
        index--
    } else {
        index = type
    }

    if(index >= imgs.length){
        index = 0
    }
    if (index < 0){
        index = imgs.length - 1
    }

    imgs[index].className = 'active'
}

banner.onclick = function(e){
    if(e.target.className === 'bleft'){
        console.log('点击的是左按钮')
        changeOne(false)
    }

    if(e.target.className === 'bright'){
        console.log('点击的是右按钮')
        changeOne(true)
    }
}