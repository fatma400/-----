let currentIndex=0
let row=document.getElementById('row')
var header=document.getElementById('header')
async function getApi() {
    let response=await fetch('js/news.json')
    let data=await response.json()
    let count=data.length 
    addNews(data[currentIndex],count)
   setInterval(function(){
    if(currentIndex<4){
        currentIndex++
        addNews(data[currentIndex],count)
    }else{
        currentIndex=0
        addNews(data[currentIndex],count)
    }
   },3000)
}
getApi()
function addNews(alldata,count){
    if(currentIndex<count){
        var carton=''
        carton+=`
        <a href="${alldata.links}"target="_blank">
           <div class="news">
              <div class="news-img">
                  <img src="${alldata.img}" alt="">
               </div>
              <div class="news-text">
                <h2>${alldata.title}</h2>
              </div>    

            </div>   
        </a> 
   `
        row.innerHTML=carton
    }
}
window.onscroll=function(){
    if(window.scrollY>250){
        header.classList.add('header-fixed')
    }
    else{
        header.classList.remove('header-fixed')
    }
}
