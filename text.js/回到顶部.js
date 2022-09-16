var topHeader = document.querySelector('.topHeader')
var backTop = document.querySelector('.backTop')

window.onscroll = function() {
    var height = document.documentElement.scrollTop || document.body.scrollTop
    

    console.log(height)

    if(height>= 120){
        topHeader.style.top = '0'
        backTop.style.display = 'block'
    }else{
        topHeader.style.top = '-100px'
        backTop.style.display = 'none'
    }
    
    backTop.onclick = function(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
            
            
        
    }
}