import React from 'react';
import Navbar from '../components/Navbar';
import './Inventory.css';

function InventoryCard({ itemName, itemURL, itemRarity, itemDurability, itemStatTrack, itemValue }) {

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

	let itemDurabilityName = "";
	if (itemDurability <= 0.07) {
		itemDurabilityName = 'FN';
	} else if (itemDurability <= 0.15) {
		itemDurabilityName = 'MW';
	} else if (itemDurability <= 0.37) {
		itemDurabilityName = 'FT';
	} else if (itemDurability <= 0.44) {
		itemDurabilityName = 'WW';
	} else {
		itemDurabilityName = 'BS';
	}

	if (itemStatTrack === "True") {
		itemName = "StatTrak " + itemName;
	}
  
	return (
	  <div className='ItemCard'>
		<div className='ItemCard2'>
			<img 
				src={itemURL} 
				alt={itemName} 
		  	/>
			<div className='InventoryCardMetaData' style={{
				color: itemColor
			}}>
				{itemName + ' ' + itemDurabilityName}
			</div>
			<div className='InventoryCardMetaData' style={{
				color: itemColor
			}}>
				${itemValue}
			</div>
			<button className='InventorySellButton'>Sell</button>
		</div>
	  </div>
	);
  }
  
  let UserInventory = [
	{
	  'ItemName'  		: "AK-47 | Elite Build",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_217.jpg",
	  'ItemRarity'		: 'Mil-Spec',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'True',
	  'ItemValue'		: '123.45'
	},
	{
	  'ItemName'  		: "MP7 | Armor Core",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_223.jpg",
	  'ItemRarity'		: 'Mil-Spec',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '245.67'
	},
	{
	  'ItemName'  		: "Desert Eagle | Bronze Deco",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_219.jpg",
	  'ItemRarity'		: 'Mil-Spec',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '50.12'
	},
	{
	  'ItemName'  		: "P250 | Valence",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_221.jpg",
	  'ItemRarity'		: 'Mil-Spec',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '1.03'
	},
	{
	  'ItemName'  		: "Negev | Man-o'-war",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_227.jpg",
	  'ItemRarity'		: 'Mil-Spec',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '1.52'
	},
	{
	  'ItemName'  		: "Sawed-Off | Origami",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_225.jpg",
	  'ItemRarity'		: 'Mil-Spec',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '100.05'
	},
	{
	  'ItemName'  		: "AWP | Worm God",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_209.jpg",
	  'ItemRarity'		: 'Restricted',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '50.45'
	},
	{
	  'ItemName'  		: "MAG-7 | Heat",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_211.jpg",
	  'ItemRarity'		: 'Restricted',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '45.89'
	},
	{
	  'ItemName'  		: "CZ75-Auto | Pole Position",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_213.jpg",
	  'ItemRarity'		: 'Restricted',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '132.58'
	},
	{
	  'ItemName'  		: "UMP-45 | Grand Prix",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_215.jpg",
	  'ItemRarity'		: 'Restricted',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '123.45'
	},
	{
	  'ItemName'  		: "Five-SeveN | Monkey Business",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_205.jpg",
	  'ItemRarity'		: 'Classified',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '96.52'
	},
	{
	  'ItemName'  		: "Galil AR | Eco",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_203.jpg",
	  'ItemRarity'		: 'Classified',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '555.20'
	},
	{
	  'ItemName'  		: "FAMAS | Djinn",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_207.jpg",
	  'ItemRarity'		: 'Classified',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '44.74'
	},
	{
	  'ItemName'  		: "M4A1-S Hyper Beast",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_199.jpg",
	  'ItemRarity'		: 'Covert',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '40.87'
	},
	{
	  'ItemName'  		: "MAC-10 | Neon Rider",
	  'ItemURL'   		: "/assets/Case Item Images/Chroma-2-Case/image_201.jpg",
	  'ItemRarity'		: 'Covert',
	  'ItemDurability' 	: '1.00',
	  'ItemStatTrack'	: 'False',
	  'ItemValue'		: '60.59'
	},
  ]

function Inventory() {
	let userInventoryValue = 0;
	
	UserInventory.forEach((element) => userInventoryValue += Number(element.ItemValue));

	return (
    	<div>
      		<Navbar />
      	<div>
			<div className='InventoryUserMetaDataContainer'>
				<div className='InventoryUserMetaData'>
					Username: CoolerGuyRy
				</div>
				<div className='InventoryUserMetaData'>
					Balance: $134.72
				</div>
				<div className='InventoryUserMetaData'>
					Inventory Value: ${userInventoryValue.toFixed(2)}
				</div>
			</div>
		<div className='InventoryContainer'>
			{UserInventory.map(item => (
        		<InventoryCard
          			itemName={item.ItemName}
          			itemURL={item.ItemURL}
          			itemRarity={item.ItemRarity}
					itemDurability={item.ItemDurability}
					itemStatTrack={item.ItemStatTrack}
					itemValue={item.ItemValue}
        		/>
      		))}
		</div>
      </div>
    </div>
  );
}

export default Inventory;