const behavior = document.querySelector('.behavior');
const behaviorText = localStorage.getItem('behavior') || "";
const addGifts = document.querySelector('.add-gifts');
const wishList = document.querySelector('.wish-list');
let gifts = JSON.parse(localStorage.getItem('items')) || [];
const buttons = document.querySelectorAll('input[type="button"]');


function populateList( items = [], list) {
  list.innerHTML = items.map( (item, i ) => {
    return `<li>
      <input type="checkbox" data-index=${i} id="gift-${i}" ${item.received ? "checked" : "" } />
      <label for="gift-${i}">${item.name}</label>
    </li>`
  }).join("");
}

function addGift(e) {
  e.preventDefault();

  const giftName = this.querySelector('input[name="gift"]').value;
  const giftItem = { name: giftName,
                     received: false
                   };

  gifts.push( giftItem );
  populateList( gifts, wishList )
  localStorage.setItem( 'items', JSON.stringify(gifts) );

  this.reset();
}


function markReceived(e) {
  if (!e.target.matches('input[type="checkbox"]')) return;

  const i = (e.target.dataset['index']);
  gifts[i].received = !gifts[i].received;
  localStorage.setItem( 'items', JSON.stringify(gifts) );
}


function logBehavior(e) {
  localStorage.setItem( 'behavior', e.target.innerText )
}
function populateBehavior() {
  behavior.innerText = behaviorText;
}


function checkAllItems() {
  gifts.forEach( gift => gift.received = true )
  localStorage.setItem('items', JSON.stringify(gifts));
}
function uncheckAllItems() {
  gifts.forEach( gift => gift.received = false )
  localStorage.setItem('items', JSON.stringify(gifts));
}
function clearAllItems() {
  localStorage.removeItem( 'items' );
  gifts = [];
}

function handleButton( e ) {
  e.preventDefault();
  const btnAction = e.target.dataset['btnaction'];
  if (btnAction == 'check-all') {
    checkAllItems();
  } else if ( btnAction == 'uncheck-all') {
    uncheckAllItems();
  } else if (btnAction == 'clear-all') {
    clearAllItems();
  }
  populateList( gifts, wishList );
}

addGifts.addEventListener( 'submit', addGift );
wishList.addEventListener( 'click', markReceived );
behavior.addEventListener( 'input', logBehavior );
buttons.forEach( button => button.addEventListener('click', handleButton ));
populateList( gifts, wishList );
populateBehavior( behavior );
