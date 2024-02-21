import React from 'react';

import Navbar from '../components/Navbar'
import './CaseOpener.css';

function ItemCard({ itemName, itemURL, itemRarity }) {

  let itemColor = '';
  switch (itemRarity) {
    case 'Consumer':
      itemColor = '#afafaf';
      break;
    case 'Industrial':
      itemColor = '#6496e1';
      break;
    case 'Mil-Spec':
      itemColor = '#4b69cd';
      break;
    case 'Restricted':
      itemColor = '#8847ff';
      break;
    case 'Classified':
      itemColor = '#d32ce6';
      break;
    case 'Covert':
      itemColor = '#eb4b4b';
      break;
    case 'Contraband':
      itemColor = '#886a08';
      break;
    default:
      itemColor = '#ffffff';
      break;
  }

  return (
    <div className='ItemCard'>
      <div className='ItemCard2'>
        <h1 style={{
          color: itemColor,
          textAlign: 'center',
          padding: '15px'
        }}>
          {itemName}
        </h1>
        <img 
          src={itemURL} 
          alt={itemName} 
        />
      </div>
    </div>
  );
}

let Chroma2Case = [
  {
    'ItemName'  : "AK-47 | Elite Build",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_217.jpg",
    'ItemRarity': 'Mil-Spec'
  },
  {
    'ItemName'  : "MP7 | Armor Core",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_223.jpg",
    'ItemRarity': 'Mil-Spec'
  },
  {
    'ItemName'  : "Desert Eagle | Bronze Deco",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_219.jpg",
    'ItemRarity': 'Mil-Spec'
  },
  {
    'ItemName'  : "P250 | Valence",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_221.jpg",
    'ItemRarity': 'Mil-Spec'
  },
  {
    'ItemName'  : "Negev | Man-o'-war",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_227.jpg",
    'ItemRarity': 'Mil-Spec'
  },
  {
    'ItemName'  : "Sawed-Off | Origami",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_225.jpg",
    'ItemRarity': 'Mil-Spec'
  },
  {
    'ItemName'  : "AWP | Worm God",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_209.jpg",
    'ItemRarity': 'Restricted'
  },
  {
    'ItemName'  : "MAG-7 | Heat",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_211.jpg",
    'ItemRarity': 'Restricted'
  },
  {
    'ItemName'  : "CZ75-Auto | Pole Position",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_213.jpg",
    'ItemRarity': 'Restricted'
  },
  {
    'ItemName'  : "UMP-45 | Grand Prix",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_215.jpg",
    'ItemRarity': 'Restricted'
  },
  {
    'ItemName'  : "Five-SeveN | Monkey Business",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_205.jpg",
    'ItemRarity': 'Classified'
  },
  {
    'ItemName'  : "Galil AR | Eco",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_203.jpg",
    'ItemRarity': 'Classified'
  },
  {
    'ItemName'  : "FAMAS | Djinn",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_207.jpg",
    'ItemRarity': 'Classified'
  },
  {
    'ItemName'  : "M4A1-S Hyper Beast",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_199.jpg",
    'ItemRarity': 'Covert'
  },
  {
    'ItemName'  : "MAC-10 | Neon Rider",
    'ItemURL'   : "/assets/Case Item Images/Chroma-2-Case/image_201.jpg",
    'ItemRarity': 'Covert'
  },
]

function CaseOpener() {
  return (
    <div>
      <Navbar />
      {Chroma2Case.map(item => (
        <ItemCard
          itemName={item.ItemName}
          itemURL={item.ItemURL}
          itemRarity={item.ItemRarity}
        />
      ))}
    </div>
  );
}

export default CaseOpener;
