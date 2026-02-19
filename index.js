import { menuArray } from '/data'

const menuSection = document.getElementById('menu-section')
const checkoutSection = document.getElementById('checkout-section')
const orderArray = []

document.addEventListener('click', function (e) {
  if (e.target.dataset.add) {
    handleAddClick(e.target.dataset.add)
  } else if (e.target.dataset.remove) {
    handleRemoveClick(e.target.dataset.remove)
  }
})

function handleAddClick(itemID) {
  checkoutSection.classList.remove('hidden')
  const item = getItemByID(itemID)
  orderArray.push(item)
  console.log(orderArray)
  renderOrderHTML()
}

function handleRemoveClick(itemIndex) {
  orderArray.splice(itemIndex, 1)
  if (orderArray.length === 0) {
    checkoutSection.classList.add('hidden')
  }
  console.log(orderArray)
  renderOrderHTML()
}

function getItemByID(id) {
  return menuArray.find(item => item.id === Number(id))
}

function renderOrderHTML() {

  const titleHTML = `<h2 class="checkout-title">Your order</h2>`

  const orderHTML = orderArray.map((item, index) => `<div class="order-row">
          <div class="left">
            <div class="food-name">${item.name}</div>
            <div class="remove" data-remove="${index}">remove</div>
          </div>
          <div class="price">$${item.price}</div>
        </div>`).join('')

  const totalHTML = `<div class="divider"></div>
        <div class="total">
          <div class="total-title">Total price:</div>
          <div class="total-price">$${orderArray.reduce((sum, item) => sum + item.price, 0)}</div>
        </div>
        <button class="purchase-btn">Complete order</button>`
  checkoutSection.innerHTML = titleHTML + orderHTML + totalHTML
}

function renderMenuHTML() {
  const menuHTML = menuArray.map((item) => ` <div class="item">
          <div class="item-graphic">${item.emoji}</div>
          <div class="item-info">
            <h2 class="item-title">${item.name}</h2>
            <p class="item-description">${item.ingredients.join(', ')}</p>
            <p class="item-price">$${item.price}</p>
          </div>
          <button class="add-btn" data-add="${item.id}"></button>
        </div>`).join('')
  menuSection.innerHTML = menuHTML
}

renderMenuHTML()

