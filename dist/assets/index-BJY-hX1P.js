(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const l=[{name:"Pizza",ingredients:["pepperoni","mushroom","mozarella"],id:0,price:14,emoji:"🍕"},{name:"Hamburger",ingredients:["beef","cheese","lettuce"],price:12,emoji:"🍔",id:1},{name:"Beer",ingredients:["grain, hops, yeast, water"],price:12,emoji:"🍺",id:2}],m=document.getElementById("menu-section"),d=document.getElementById("checkout-section"),u=document.getElementById("payment-modal"),p=document.getElementById("order-complete-section"),o=[];document.addEventListener("click",function(e){e.target.dataset.add?f(e.target.dataset.add):e.target.dataset.remove?v(e.target.dataset.remove):e.target.id==="purchase-btn"&&h()});document.addEventListener("submit",function(e){e.target.id==="payment-form"&&(e.preventDefault(),console.log("支付提交成功"),g())});function f(e){d.classList.remove("hidden");const i=y(e);o.push(i),console.log(o),a()}function v(e){o.splice(e,1),console.log(o),a()}function h(){u.classList.remove("hidden")}function g(){o.length=0,a(),u.classList.add("hidden"),p.classList.remove("hidden")}function y(e){return l.find(i=>i.id===Number(e))}function a(){o.length===0&&d.classList.add("hidden");const e='<h2 class="checkout-title">Your order</h2>',i=o.map((r,t)=>`<div class="order-row">
          <div class="left">
            <div class="food-name">${r.name}</div>
            <div class="remove" data-remove="${t}">remove</div>
          </div>
          <div class="price">$${r.price}</div>
        </div>`).join(""),s=`<div class="divider"></div>
        <div class="total">
          <div class="total-title">Total price:</div>
          <div class="total-price">$${o.reduce((r,t)=>r+t.price,0)}</div>
        </div>
        <button class="purchase-btn" id="purchase-btn">Complete order</button>`;d.innerHTML=e+i+s}function L(){const e=l.map(i=>` <div class="item">
          <div class="item-graphic">${i.emoji}</div>
          <div class="item-info">
            <h2 class="item-title">${i.name}</h2>
            <p class="item-description">${i.ingredients.join(", ")}</p>
            <p class="item-price">$${i.price}</p>
          </div>
          <button class="add-btn" data-add="${i.id}"></button>
        </div>`).join("");m.innerHTML=e}L();
