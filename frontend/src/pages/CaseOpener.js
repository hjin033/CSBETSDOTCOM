import React, {useState, useRef, useEffect} from 'react';

import Navbar from '../components/Navbar'
import CaseItemCard from '../components/CaseItemCard';
import './CaseOpener.css';

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
	{
	  'ItemName'  : "Special Item",
	  'ItemURL'   : "/assets/Case Item Images/misc/image_194.jpg",
	  'ItemRarity': 'Contraband'
	}
]
let KilowattCase = [
	  {
		  'ItemName'  : "Dual Berettas | Hideout",
		  'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_229.jpg",
		  'ItemRarity': 'Mil-Spec'
	  },
	  {
		  'ItemName'  : "UMP-45 | Motorized",
		  'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_225.jpg",
		  'ItemRarity': 'Mil-Spec'
	  },
	  {
		  'ItemName'  : "Nova | Dark Sigil",
		  'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_231.jpg",
		  'ItemRarity': 'Mil-Spec'
	  },
	  {
		  'ItemName'  : "Tec-9 | Slag",
		  'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_227.jpg",
		  'ItemRarity': 'Mil-Spec'
	  },
	  {
		  'ItemName'  : "XM1014 | Irezumi",
		  'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_223.jpg",
		  'ItemRarity': 'Mil-Spec'
	  },
	  {
		  'ItemName'  : "SSG 08 | Dezastre",
		  'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_221.jpg",
		  'ItemRarity': 'Mil-Spec'
	  },
	  {
		  'ItemName'  : "MAC-10 | Light Box",
		  'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_219.jpg",
		  'ItemRarity': 'Mil-Spec'
	  },
	  {
		'ItemName'  : "Sawed-Off | Analog Input",
		'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_213.jpg",
		'ItemRarity': 'Restricted'
	  },
	  {
		'ItemName'  : "MP7 | Just Smile",
		'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_217.jpg",
		'ItemRarity': 'Restricted'
	  },
	  {
		'ItemName'  : "Five-SeveN | Hybrid",
		'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_215.jpg",
		'ItemRarity': 'Restricted'
	  },
	  {
		'ItemName'  : "M4A4 | Etch Lord",
		'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_209.jpg",
		'ItemRarity': 'Restricted'
	  },
	  {
		'ItemName'  : "Glock-18 | Block-18",
		'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_211.jpg",
		'ItemRarity': 'Restricted'
	  },
	  {
		'ItemName'  : "Zeus x27 | Olympus",
		'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_205.jpg",
		'ItemRarity': 'Classified'
	  },
	  {
		'ItemName'  : "USP-S | Jawbreaker",
		'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_207.jpg",
		'ItemRarity': 'Classified'
	  },
	  {
		'ItemName'  : "M4A1-S | Black Lotus",
		'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_203.jpg",
		'ItemRarity': 'Classified'
	  },
	  {
		'ItemName'  : "AWP | Chrome Cannon",
		'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_199.jpg",
		'ItemRarity': 'Covert'
	  },
	  {
		'ItemName'  : "AK-47 | Inheritance",
		'ItemURL'   : "/assets/Case Item Images/Kilowatt-Case/image_201.jpg",
		'ItemRarity': 'Covert'
	  },
	  {
		  'ItemName'  : "Special Item",
		  'ItemURL'   : "/assets/Case Item Images/misc/image_194.jpg",
		  'ItemRarity': 'Contraband'
	  }
]
let currentCase = [];
let winningItem = KilowattCase.at(Math.random() * KilowattCase.length);
for (let i = 0; i < 156; i++) {
	currentCase.push(KilowattCase.at(Math.random() * 7));
}
currentCase.push(winningItem);
for (let i = 0; i < 4; i++) {
	currentCase.push(KilowattCase.at(Math.random() * 7));
}

function CaseOpener() {
	return (
		<div>
    		<Navbar/>
    		<div className='CaseOpenerPage'>
				<button className='CaseOpenerButton'>Open Case!</button>
				<div className='CaseOpenerGameBackground'>
					<div className="Indicator"/>
					<div className='CaseOpenerGame'>
						<div className='CaseOpenerScroll'>
							{
								currentCase.map(item => (
									<CaseItemCard
										itemName={item.ItemName}
										itemURL={item.ItemURL}
										itemRarity={item.ItemRarity}
									/>
								))
							}
						</div>
					</div>
				</div>
				<div className='CaseDescriptionContainer'>
					<div className='CaseDescriptionName'>Case Items</div>
					<div className='CaseOpenerItemContainer'>
						{KilowattCase.map(item => (
							<CaseItemCard
								itemName={item.ItemName}
								itemURL={item.ItemURL}
								itemRarity={item.ItemRarity}
							/>
      					))}
					</div>
				</div>
      		</div>
    	</div>
	);
}

export default CaseOpener;