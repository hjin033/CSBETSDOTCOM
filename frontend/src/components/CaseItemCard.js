import React from 'react';
import './CaseItemCard.css';

const CaseItemCard = ({itemName, itemURL, itemRarity}) => {
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

	let gradientString = "linear-gradient(0deg, " + itemColor + " 0%, #1a1a1a 30%)"

  	return (
		<div className='CaseItemCard' style={{
			backgroundImage: gradientString
		}}>
			<img className='CaseItemImage'
				src={itemURL}
				alt={itemName}
			/>
		</div>
  	);
}

export default CaseItemCard;