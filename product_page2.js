async function GetData(){
    let a = await fetch('https://660c1c283a0766e85dbd6f9c.mockapi.io/v1/us')
    let b = await a.json()
    return b
}
let data = await GetData()

let page = document.querySelector('.train_list')

data.map((element)=>{
    if(element.id <=3){
    let card = document.createElement('li')
        card.innerHTML = `  <img src="/img/${element.icon}" alt="">
                            <div>${element.name}</div>
                            <a href="${element.page}"><button class="but_pr"><img src="/img/Button (2).png" alt=""><p class="rect">${element.price}</p></button></a>`
        page.append(card)
    }
})

let but_arr = document.querySelectorAll('#but')
let a = document.querySelector('.first_line')
let b = document.querySelector('.red_text')
let size0 = 0

console.log(size0)
function add(){
    if(size0!==0){
    const uuidv4 = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
    const product = {id: uuidv4, name: data[2].name, price: data[2].price, icon: data[2].icon, size: size0}
    let cardArrayS = []
    if(localStorage.getItem('cart')){
        cardArrayS = JSON.parse(localStorage.getItem('cart'))
    }
    
    cardArrayS.push(product)
    localStorage.setItem('cart', JSON.stringify(cardArrayS))
}else{
    b.classList.remove('none')
    a.classList.add('red')
}

}
const button = document.querySelector('.add_to_cart2')
button.addEventListener('click', add)

let but1 = document.querySelector('.bg1')
but1.addEventListener("click", ()=>{  
    a.classList.remove('red')   
    b.classList.add('none') 
        size0 = 38
        for(let i=0; i<but_arr.length; i++){
            but_arr[i].classList.remove('black')
        }
        but1.classList.add('black')
});
let but2 = document.querySelector('.bg2')
but2.addEventListener("click", ()=>{ 
    a.classList.remove('red') 
    b.classList.add('none')
        size0 = 39
        for(let i=0; i<but_arr.length; i++){
            but_arr[i].classList.remove('black')
        }
        but2.classList.add('black')
    });    

let but3 = document.querySelector('.bg3')
but3.addEventListener("click", ()=>{    
    a.classList.remove('red') 
    b.classList.add('none')
        size0 = 40
        for(let i=0; i<but_arr.length; i++){
            but_arr[i].classList.remove('black')
        }
        but3.classList.add('black')
    });
    
let but4 = document.querySelector('.bg4')
but4.addEventListener("click", ()=>{   
    a.classList.remove('red') 
    b.classList.add('none') 
        size0 = 41
        for(let i=0; i<but_arr.length; i++){
            but_arr[i].classList.remove('black')
        }
        but4.classList.add('black')
    });       
let but6 = document.querySelector('.bg6')
but6.addEventListener("click", ()=>{ 
    a.classList.remove('red') 
    b.classList.add('none')   
        size0 = 43
        for(let i=0; i<but_arr.length; i++){
            but_arr[i].classList.remove('black')
        }
        but6.classList.add('black')
    });
        
let but7 = document.querySelector('.bg7')
but7.addEventListener("click", ()=>{  
    a.classList.remove('red') 
    b.classList.add('none')  
        size0 = 44
        for(let i=0; i<but_arr.length; i++){
            but_arr[i].classList.remove('black')
        }
        but7.classList.add('black')
    });   
let but8 = document.querySelector('.bg8')
but8.addEventListener("click", ()=>{    
    a.classList.remove('red') 
    b.classList.add('none')
    size0 = 45
        for(let i=0; i<but_arr.length; i++){
            but_arr[i].classList.remove('black')
        }
        but8.classList.add('black')
    });
        
let but9 = document.querySelector('.bg9')
but9.addEventListener("click", ()=>{    
    a.classList.remove('red') 
    b.classList.add('none')
        size0 = 46
        for(let i=0; i<but_arr.length; i++){
            but_arr[i].classList.remove('black')
        }
        but9.classList.add('black')
    });   
let but10 = document.querySelector('.bg10')
but10.addEventListener("click", ()=>{ 
    a.classList.remove('red') 
    b.classList.add('none')   
        size0 = 47
        for(let i=0; i<but_arr.length; i++){
            but_arr[i].classList.remove('black')
        }
        but10.classList.add('black')
    });  




