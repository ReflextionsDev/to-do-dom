// Init Vars

const newitem_btn = document.querySelector('#newitem-btn')
const newitem_text = document.querySelector('#newitem-text')

const item_list = document.querySelector('.item-list')


updateItems()

function updateItems(){

    let items = document.querySelectorAll('.item')
    
    items.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('complete')
        })
    })

}

// Is text not empty
// Reset text
// Allow enter key

// Add item

newitem_btn.addEventListener('click', () => {

    const item = document.createElement("li")

    item.innerHTML = newitem_text.value
    item.classList.add('item')
    item_list.appendChild(item)

    item.addEventListener('click', () => {
        item.classList.toggle('complete')
    })

    newitem_text.value = ''

})


