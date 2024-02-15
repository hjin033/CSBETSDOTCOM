import React from 'react';
import './CaseOpener.css';

function ItemCard({ itemName, itemURL, itemWear, itemPrice }) {
  return (
    <div className='ItemCard'>
      <div className='ItemCard2'>
        <h1 style={{
          color: 'white',
          textAlign: 'center'
        }}>
          {itemName}
        </h1>
        <h2 style={{
          color: 'white',
          textAlign: 'center'
        }}>
          {itemWear}
        </h2>
        <img 
          src={itemURL} 
          alt={itemName} 
        />
        <h3 style={{
          color: 'white',
          textAlign: 'center'
        }}>
          {itemPrice}
        </h3>
      </div>
    </div>
  );
}

let userItems = [
  {
    'ItemName'  : "M4A1-S Hyper Beast",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_199.jpg",
    'ItemWear'  : 'Factory New',
    'ItemPrice' : '$146.00'
  },
  {
    'ItemName'  : "MAC-10 Neon Rider",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_201.jpg",
    'ItemWear'  : 'Minimal Wear',
    'ItemPrice' : '$7.10'
  },
  {
    'ItemName'  : "Galil AR Eco",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_203.jpg",
    'ItemWear'  : 'Field Tested',
    'ItemPrice' : '$4.71'
  },
  {
    'ItemName'  : "FAMAS Djinn",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_207.jpg",
    'ItemWear'  : 'Factory New',
    'ItemPrice' : '$11.06'
  },
  {
    'ItemName'  : "Five-SeveN Monkey Business",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_205.jpg",
    'ItemWear'  : 'Minimal Wear',
    'ItemPrice' : '$11.40'
  },
  {
    'ItemName'  : "AWP Worm God",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_209.jpg",
    'ItemWear'  : 'Factory New',
    'ItemPrice' : '$7.91'
  },
  {
    'ItemName'  : "MAG-7 Heat",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_211.jpg",
    'ItemWear'  : 'Battle Scarred',
    'ItemPrice' : '$0.26'
  },
  {
    'ItemName'  : "AK-47 Elite Build",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_217.jpg",
    'ItemWear'  : 'Minimal Wear',
    'ItemPrice' : '$1.89'
  }
];

function CaseOpener() {
  return (
    <div>
      {userItems.map(item => (
        <ItemCard
          key={item.ItemName} // Using the item name as a key; ensure it's unique
          itemName={item.ItemName}
          itemURL={item.ItemURL}
          itemWear={item.ItemWear}
          itemPrice={item.ItemPrice}
        />
      ))}
    </div>
  );
}

export default CaseOpener;
