

var sliderimages =Array.from(document.querySelectorAll('.slider-container img'))
var slidescount=sliderimages.length
var currentslide=4
var slidenumerelement = document.getElementById('slide-number')
var nextbottom = document.getElementById('next')
var prevbottom = document.getElementById('prev')


var paginationElement = document.createElement('ul')
paginationElement.setAttribute('id','pagination-ul')
let paganationPolits = Array.from(document.querySelectorAll('#pagination-ul li'));

for(var i = 0 ; i<paganationPolits.length;i++){
    paganationPolits[i].onclick = function(){
        currentslide = parseInt(this.getAttribute('data-index'))
        theChicker()
    }
}

for (var i=1;i<=slidescount;i++ ){
    var paginationItem = document.createElement('li')

    paginationItem.setAttribute('data-index',i)
    paginationItem.appendChild(document.createTextNode(i))
    paginationElement.appendChild(paginationItem)
}
document.getElementById('indicators').appendChild(paginationElement)

var paginationcreatedUI = document.getElementById('pagination-ul')


function nextSlide() {
    if(nextbottom.classList.contains('disabled')){
        return false

    }else{
        currentslide++;
        theChicker()
    }
console.log(currentslide)
}
function prevSlide() {
    if(nextbottom.classList.contains('disabled')){
        return false

    }else{
        currentslide--;
        theChicker()
    }
    console.log(currentslide)
}
function theChicker (){
    slidenumerelement.textContent= 'slide # ' + (currentslide) +" of "+(slidescount)
    removeAllActive()
    sliderimages[currentslide-1].classList.add('active')
    paginationcreatedUI.children[currentslide-1].classList.add('active')
    if(currentslide==1){
        prevbottom.classList.add('disabled')
    }
    
    else{
        prevbottom.classList.remove('disabled')
    }
    
    if(currentslide==slidescount){
        nextbottom.classList.add('disabled')
    }
    else{
        nextbottom.classList.remove('disabled')
    }
    
    
}
function removeAllActive (){
    sliderimages.forEach(function(img){
        img.classList.remove('active')
    }) 
    paganationPolits.forEach(function(bulit){
        bulit.classList.remove('active')
    })
}
theChicker ()
nextbottom.onclick = nextSlide()
prevbottom.onclick = prevSlide()


