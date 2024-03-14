import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Inventory.css';

function InventoryCard({ itemName, itemURL, itemRarity, itemDurability, itemStatTrack, itemValue, prop, update, index }) {

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

	function onSellClick() {
		prop.userState.balance = (Number(prop.userState.balance) + Number(prop.userState.inventory.at(index).ItemValue));
		prop.userState.inventory.splice(index, 1);
		update({});
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
			<button className='InventorySellButton' onClick={onSellClick}>Sell</button>
		</div>
	  </div>
	);
  }

function Inventory(props) {
	const [, forceUpdate] = useState();

	let userInventoryValue = 0;

	props.userState.inventory.forEach((element) => userInventoryValue += Number(element.ItemValue));

	return (
    	<div>
			<div className='Background2'></div>
      		<Navbar userState = { props.userState } userFunction = { props.userFunction } />
      		<div>
				<div className='InventoryUserMetaDataContainer'>
					<div className='InventoryUserMetaData'>
						Username: {props.userState.name}
					</div>
					<div className='InventoryUserMetaData'>
						Balance: ${props.userState.balance.toFixed(2)}
					</div>
					<div className='InventoryUserMetaData'>
						Inventory Value: ${userInventoryValue.toFixed(2)}
					</div>
				</div>
				<div className='InventoryContainer'>
					{props.userState.inventory.map((item, index) => (
        				<InventoryCard
          					itemName={item.ItemName}
          					itemURL={item.ItemURL}
          					itemRarity={item.ItemRarity}
							itemDurability={item.ItemDurability}
							itemStatTrack={item.ItemStatTrack}
							itemValue={item.ItemValue}
							prop={props}
							update={forceUpdate}
							index={index}
        				/>
      				))}
				</div>
      		</div>
    	</div>
  	);
}

export default Inventory;