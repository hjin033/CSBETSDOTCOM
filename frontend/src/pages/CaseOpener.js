import React, { useState } from 'react';
import { motion, useAnimation } from "framer-motion";

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

function GetRollerList(generativeCase) {
	let returningCase = [];
	let winningItem = generativeCase.at(Math.random() * generativeCase.length);
	for (let i = 0; i < 156; i++) {
		returningCase.push(generativeCase.at(Math.random() * 7));
	}
	returningCase.push(winningItem);
	for (let i = 0; i < 4; i++) {
		returningCase.push(generativeCase.at(Math.random() * 7));
	}
	return { returningCase, winningItem };
}

function GenerateItem(winningItem) {
	let returningItem = {
		'ItemName'  		: winningItem.ItemName,
		'ItemURL'   		: winningItem.ItemURL,
		'ItemRarity'		: winningItem.ItemRarity,
		'ItemDurability' 	: String(Math.random() * 0.75),
		'ItemStatTrack'		: String(Math.random()),
		'ItemValue'			: String((Math.random() * 1000).toFixed(2))
	}

	return returningItem;
}

let gUserCase = KilowattCase;
let gRollerItems = GetRollerList(gUserCase);

function CaseOpener(props) {
    const [playingGame, setPlayingGame] = useState(false);
    const controls = useAnimation();

    function handleCaseClick() {
		gRollerItems = GetRollerList(gUserCase);
        setPlayingGame(true);
        
        controls.set({ x: 0 });

        controls.start({ x: -38500, transition: { ease: "easeOut", duration: 5 } })
            .then(() => {
                setPlayingGame(false);
				alert('You won a ' + gRollerItems.winningItem.ItemName);
				props.userState.inventory.push(GenerateItem(gRollerItems.winningItem));
            }
		);
    }

    return (
        <>
            <div className='Background2'></div>
            <Navbar/>
            <div className='ButtonContainer'>
                <button className='OpenCaseButton' onClick={handleCaseClick} disabled={playingGame}>Open Case!</button>
            </div>
            <div className='Container'>
                <div className='ScrollerBackgroundContainer'>
                    <motion.div className='ScrollerContainer'
                        initial={{ x: 0 }} // Start from position 0
                        animate={controls} // Use the animation controls here
                    >
                        {
                            gRollerItems.returningCase.map((item, index) => (
                                <CaseItemCard
                                    key={index}
                                    itemName={item.ItemName}
                                    itemURL={item.ItemURL}
                                    itemRarity={item.ItemRarity}
                                />
                            ))
                        }
                    </motion.div>
                    <div className='Indicator'></div>
                </div>
            </div>
        </>
    );
}

export default CaseOpener;