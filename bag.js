/*async function GetData(){
    let a = await fetch('https://660c1c283a0766e85dbd6f9c.mockapi.io/v1/us')
    let b = await a.json()
    return b
}
let data = await GetData()


let cardArrayS = []

let bagHtml = document.querySelector('.your_bag')

let sum = 0
let summary = document.querySelector('.summary_')
let quan = 0
let quantity = document.querySelector('.quantity')
let total = 0
let total1 = document.querySelector('.total1')


function bag(number){
    let card = document.createElement('div')
    card.classList.add('card')
    

    card.innerHTML=`<img src="/img/${data[number].icon}" alt="">
    <div class="card_text">
        <div class="prize">
            <p>${data[number].name}</p>
            <p class="purp">${data[number].price} $</p>
        </div>
        <p class="grey">Men’s Road Running Shoes</p>
        <p class="grey">Enamel Blue/ University White</p>
        <div class="size_quan">
            <p class="grey">Size 10</p>
            <button><img src="/img/chevron_down.png" alt=""></button>
            <p class="grey">Quantity 1</p>
            <button><img src="/img/chevron_down.png" alt=""></button>
        </div>
        <div class="like">
            <button><img src="/img/heart.png" alt=""></button>
            <button class='deleteCard'><img src="/img/Bin.png" alt=""></button>
        </div>
    </div>`

    

    cardArrayS.push(card.innerHTML)
    localStorage.setItem('test', JSON.stringify(cardArrayS))

    bagHtml.append(card)

    sum = sum + Number(data[number].price)
    localStorage.setItem('summa', JSON.stringify(sum))
    summary.innerHTML = `${Number(sum)}$`

    quan = quan + 1
    localStorage.setItem('quant', JSON.stringify(quan))
    quantity.innerHTML = `${Number(quan)} ITEM`

    total = 6.99 + sum
    localStorage.setItem('total', JSON.stringify(total))
    total1.innerHTML = `${total}$`

}

function renderCard(){
    cardArrayS.map((el)=>{
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = el
        bagHtml.append(card)
    })
}

function loadData(){
    cardArrayS = JSON.parse(localStorage.getItem('test'))
    sum = JSON.parse(localStorage.getItem('summa'))
    quan = JSON.parse(localStorage.getItem('quant'))
    total = JSON.parse(localStorage.getItem('total'))
}

function add(){
    data.map((element)=>{
        if(element.id < 4){
        let card = document.createElement('li')
        let list = document.querySelector('.train_list')
            card.innerHTML = `  <img src="/img/${element.icon}" alt="">
                            <div>${element.name}</div>
                            <button ><img src="/img/Button (2).png" alt=""></button>`
                            card.addEventListener("click", ()=>{bag(element.id)});
            list.append(card)
        }
    })
}
add()

if(localStorage.length>=1){
    loadData()
    renderCard()
}

summary.innerHTML = `${Number(sum)}$`
quantity.innerHTML = `${Number(quan)} ITEM`
total1.innerHTML = `${Number(total)}$`

function createElement(){
    let card = document.createElement('div')
    card.classList.add('card')
    

    card.innerHTML=`<img src="/img/${data[number].icon}" alt="">
    <div class="card_text">
        <div class="prize">
            <p>${data[number].name}</p>
            <p class="purp">${data[number].price} $</p>
        </div>
        <p class="grey">Men’s Road Running Shoes</p>
        <p class="grey">Enamel Blue/ University White</p>
        <div class="size_quan">
            <p class="grey">Size 10</p>
            <button><img src="/img/chevron_down.png" alt=""></button>
            <p class="grey">Quantity 1</p>
            <button><img src="/img/chevron_down.png" alt=""></button>
        </div>
        <div class="like">
            <button><img src="/img/heart.png" alt=""></button>
            <button class='deleteCard'><img src="/img/Bin.png" alt=""></button>
        </div>
    </div>`

    

    cardArrayS.push(card.innerHTML)
    localStorage.setItem('test', JSON.stringify(cardArrayS))

    bagHtml.append(card)
}*/

let sum = 0
let summary = document.querySelector('.summary_')

let total = 0
let total1 = document.querySelector('.total1')

let tax = 0
let tax_text = document.querySelector('.tax')

function deleteCartElement(e){
    
    const deleteIcon = e.target.parentElement;
    const nextElement1 = deleteIcon.parentElement;
    const nextElement2 = nextElement1.parentElement;
    let a = nextElement2
    
    const elementId = a.querySelector('.cart_element_id').innerText;

    console.log(a.querySelector('.cart_element_id').innerText)

    console.log(elementId)

    if(localStorage.getItem('cart')){

        let cartArray = JSON.parse(localStorage.getItem('cart'))

        // code to delete element of array

        // Работает неправильно 1
        // получили массив, убрали элемент, пересохранили в cart (localstorage)
        // массив cartArray больше не трогаем здесь, он зарефрешится renderCart

        console.log(cartArray)
        let arr = []
        for(let i=0; i<cartArray.length; i++){
            
            if(cartArray[i].id === elementId){
                //cartArray = cartArray.splice(i, 1)
                //вырезать без elementID
                continue
            }    
            arr.push(cartArray[i])
        }

        cartArray = arr
        //cartArray = cartArray.filter((name) => name !==  elementId);

        console.log(cartArray)

        // когда заработает убрать комментарий
        localStorage.setItem('cart', JSON.stringify(cartArray))
        const cartList = document.querySelector('.cart_list') // new div
        cartList.innerHTML = ""


        // refresh grid
        sum = 0
        total = 0
        tax = 0
        
        if(cartArray.length === 0){
            location.reload()
        }
        renderCart(cartArray)
        
    }
}


function renderCart(cartArray){
    let listHtml = document.querySelector('.cart_list')
    cartArray.map((el)=>{
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML=`<img src="/img/${el.icon}" alt="">
    <div class="card_text">
        <div class="prize">
            <span style="display:none" class="cart_element_id">${el.id}</span>      
            <p>${el.name}</p>
            <p class="purp">${el.price}$ </p>
        </div>
        <p class="grey">Men’s Road Running Shoes</p>
        <p class="grey">Enamel Blue/ University White</p>
        <div class="size_quan">
            <p class="grey">Size: ${el.size}</p>
        </div>
       
            <button class='deleteCard'><img src="/img/Bin.png" alt=""></button>
        
    </div>`
        sum = sum + Number(el.price)
        tax = sum * 0.05
        total = tax + sum + 6.99

       

        listHtml.append(card)
        summary.innerHTML = `${Number(sum)}$`
        tax_text.innerHTML = `${tax}$`
        total1.innerHTML = `${total}$`

        
        
    })

    const deleteCart = document.querySelectorAll('.deleteCard')
    deleteCart.forEach((el) => el.addEventListener('click', deleteCartElement))


}

function main(){
    let cartArray = []
    if(localStorage.getItem('cart')){
        cartArray = JSON.parse(localStorage.getItem('cart'))
        renderCart(cartArray)

    }
}

document.addEventListener('DOMContentLoaded', main)

