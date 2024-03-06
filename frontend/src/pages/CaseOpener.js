import React, { useState } from 'react';
import { motion, useAnimation } from "framer-motion";

import Navbar from '../components/Navbar'
import CaseItemCard from '../components/CaseItemCard';
import CaseCard from '../components/CaseCard';
import './CaseOpener.css';


let Cases = {
	'Kilowatt Case': {
		'CaseName'  : "Kilowatt Case",
		'CaseURL'   : "/assets/Case Images/image_188.jpg",
		'CasePrice'	: '3.41',
		'CaseItems'	: [
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
		],
		'Knives'	: [

		]
	},
	'Chroma Case': {
		'CaseName'  : "Chroma Case",
		'CaseURL'   : "/assets/Case Images/image_217.jpg",
		'CasePrice'	: '2.95',
		'CaseItems'	: [
			  {
				'ItemName'  : "SCAR-20 | Grotto",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_223.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "M249 | System Lock",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_225.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "XM1014 | Quicksilver",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_221.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "Glock-18 | Catacombs",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_219.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "MP9 | Deadly Poison",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_217.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "Sawed-Off | Serenity",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_215.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "MAC-10 | Malachite",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_213.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "Dual Berettas | Urban Shock",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_211.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "Desert Eagle | Naga",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_209.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "P250 | Muertos",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_207.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "M4A4 | 龍王 (Dragon King)",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_205.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "AK-47 | Cartel",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_203.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "AWP | Man-o'-war",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_201.jpg",
				'ItemRarity': 'Covert'
			  },
			  {
				'ItemName'  : "Galil AR | Chatterbox",
				'ItemURL'   : "/assets/Case Item Images/Chroma-Case/image_199.jpg",
				'ItemRarity': 'Covert'
			  },
			  {
				'ItemName'  : "Special Item",
				'ItemURL'   : "/assets/Case Item Images/misc/image_194.jpg",
				'ItemRarity': 'Contraband'
			  }
		],
		'Knives'	: [

		]
	},
	'Chroma 2 Case': {
		'CaseName'  : "Chroma 2 Case",
		'CaseURL'   : "/assets/Case Images/image_216.jpg",
		'CasePrice'	: '2.46',
		'CaseItems' : [
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
				'ItemName'  : "M4A1-S | Hyper Beast",
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
		],
		'Knives'	: [

		]
	},
	'Chroma 3 Case': {
		'CaseName'  : "Chroma 3 Case",
		'CaseURL'   : "/assets/Case Images/image_211.jpg",
		'CasePrice'	: '2.23',
		'CaseItems' : [
			  {
				'ItemName'  : "Sawed-Off | Fubar",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_231.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "M249 | Spectre",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_227.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "SG 553 | Atlas",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_223.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "G3SG1 | Orange Crash",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_229.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "P2000 | Oceanic",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_225.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "Dual Berettas | Ventilators",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_221.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "MP9 | Bioleak",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_219.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "CZ75-Auto | Red Astor",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_217.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "Tec-9 | Re-Entry",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_215.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "Galil AR | Firefight",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_213.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "XM1014 | Black Tie",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_209.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "SSG 08 | Ghost Crusader",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_211.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "UMP-45 | Primal Saber",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_207.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "AUG | Fleet Flock",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_205.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "P250 | Asiimov",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_203.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "PP-Bizon | Judgement of Anubis",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_201.jpg",
				'ItemRarity': 'Covert'
			  },
			  {
				'ItemName'  : "M4A1-S | Chantico's Fire",
				'ItemURL'   : "/assets/Case Item Images/Chroma-3-Case/image_199.jpg",
				'ItemRarity': 'Covert'
			  },
			  {
				'ItemName'  : "Special Item",
				'ItemURL'   : "/assets/Case Item Images/misc/image_194.jpg",
				'ItemRarity': 'Contraband'
			  }
		],
		'Knives'	: [

		]
	},
	'CS:GO Weapon Case': {
		'CaseName'  : "CS:GO Weapon Case",
		'CaseURL'   : "/assets/Case Images/image_229.jpg",
		'CasePrice'	: '83.56',
		'CaseItems' : [
			  {
				'ItemName'  : "MP7 | Skulls",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case/image_215.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "AUG | Wings",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case/image_213.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "SG 553 | Ultraviolet",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case/image_211.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "M4A1-S | Dark Water",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case/image_207.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "USP-S | Dark Water",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case/image_209.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "Glock-18 | Dragon Tattoo",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case/image_205.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "Desert Eagle | Hypnotic",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case/image_203.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "AK-47 | Case Hardened",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case/image_201.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "AWP | Lightning Strike",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case/image_199.jpg",
				'ItemRarity': 'Covert'
			  }
		],
		'Knives'	: [

		]
	},
	'CS:GO Weapon Case 2': {
		'CaseName'  : "CS:GO Weapon Case 2",
		'CaseURL'   : "/assets/Case Images/image_226.jpg",
		'CasePrice'	: '12.50',
		'CaseItems' : [
			  {
				'ItemName'  : "P250 | Hive",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-2/image_219.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "FAMAS | Hexane",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-2/image_221.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "Tec-9 | Blue Titanium",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-2/image_217.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "M4A1-S | Blood Tiger",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-2/image_215.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "SCAR-20 | Crimson Web",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-2/image_213.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "Dual Berettas | Hemoglobin",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-2/image_211.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "Nova | Graphite",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-2/image_209.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "MP9 | Hypnotic",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-2/image_207.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "Five-SeveN | Case Hardened",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-2/image_205.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "USP-S | Serum",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-2/image_203.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "P90 | Cold Blooded",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-2/image_201.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "SSG 08 | Blood in the Water",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-2/image_199.jpg",
				'ItemRarity': 'Covert'
			  },
			  {
				'ItemName'  : "Special Item",
				'ItemURL'   : "/assets/Case Item Images/misc/image_194.jpg",
				'ItemRarity': 'Contraband'
			  }
		],
		'Knives'	: [

		]
	},
	'CS:GO Weapon Case 3': {
		'CaseName'  : "CS:GO Weapon Case 3",
		'CaseURL'   : "/assets/Case Images/image_223.jpg",
		'CasePrice'	: '6.84',
		'CaseItems'	: [
			  {
				'ItemName'  : "P2000 | Red FragCam",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-3/image_221.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "Dual Berettas | Panther",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-3/image_219.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "CZ75-Auto | Crimson Web",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-3/image_217.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "Glock-18 | Blue Fissure",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-3/image_215.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "USP-S | Stainless",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-3/image_213.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "Tec-9 | Titanium Bit",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-3/image_211.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "CZ75-Auto | Tread Plate",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-3/image_209.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "Desert Eagle | Heirloom",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-3/image_205.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "Five-SeveN | Copper Galaxy",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-3/image_207.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "CZ75-Auto | The Fuschia Is Now",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-3/image_203.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "P250 | Undertow",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-3/image_201.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "CZ75-Auto | Victoria",
				'ItemURL'   : "/assets/Case Item Images/CSGO-Weapon-Case-3/image_199.jpg",
				'ItemRarity': 'Covert'
			  },
			  {
				'ItemName'  : "Special Item",
				'ItemURL'   : "/assets/Case Item Images/misc/image_194.jpg",
				'ItemRarity': 'Contraband'
			  }
		],
		'Knives'	: [

		]
	},
	'Operation Bravo Case': {
		'CaseName'  : "Operation Bravo Case",
		'CaseURL'   : "/assets/Case Images/image_227.jpg",
		'CasePrice'	: '44.27',
		'CaseItems' : [
			  {
				'ItemName'  : "G3SG1 | Demeter",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_225.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "SG 553 | Wave Spray",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_227.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "UMP-45 | Bone Pile",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_223.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "Dual Berettas | Black Limba",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_221.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "Nova | Tempest",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_219.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "Galil AR | Shattered",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_217.jpg",
				'ItemRarity': 'Mil-Spec'
			  },
			  {
				'ItemName'  : "M4A1-S | Bright Water",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_215.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "MAC-10 | Graven",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_213.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "M4A4 | Zirka",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_211.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "USP-S | Overgrowth",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_209.jpg",
				'ItemRarity': 'Restricted'
			  },
			  {
				'ItemName'  : "AWP | Graphite",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_205.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "P90 | Emerald Dragon",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_203.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "P2000 | Ocean Foam",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_207.jpg",
				'ItemRarity': 'Classified'
			  },
			  {
				'ItemName'  : "Desert Eagle | Golden Koi",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_201.jpg",
				'ItemRarity': 'Covert'
			  },
			  {
				'ItemName'  : "AK-47 | Fire Serpent",
				'ItemURL'   : "/assets/Case Item Images/Operation-Bravo-Case/image_199.jpg",
				'ItemRarity': 'Covert'
			  },
			  {
				'ItemName'  : "Special Item",
				'ItemURL'   : "/assets/Case Item Images/misc/image_194.jpg",
				'ItemRarity': 'Contraband'
			  }
		],
		'Knives'	: [

		]
	},
}

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

function getWearName(durability) {
	if (durability >= 0.00 && durability < 0.07) return 'Factory New';
	if (durability >= 0.07 && durability < 0.15) return 'Minimal Wear';
    if (durability >= 0.15 && durability < 0.38) return 'Field-Tested';
    if (durability >= 0.38 && durability < 0.45) return 'Well-Worn';
    if (durability >= 0.45 && durability <= 1.00) return 'Battle-Scarred';
	throw new Error('Invalid durability value');
}

function GenerateFakeItem(winningItem) {
	let durabilityValue = Math.random() * 0.75;
	let wearName = getWearName(durabilityValue);

	let returningItem = {
		'ItemName'  		: winningItem.ItemName,
		'ItemURL'   		: winningItem.ItemURL,
		'ItemRarity'		: winningItem.ItemRarity,
		'ItemDurability' 	: durabilityValue,
		'ItemWearName'		: wearName,
		'ItemStatTrack'		: String(Math.random()),
		'ItemValue'			: '-'
	};

	let fakeItemValue = Math.random();

	if (winningItem.ItemRarity === 'Mil-Spec')
		fakeItemValue = fakeItemValue * 2.5;
	if (winningItem.ItemRarity === 'Restricted')
		fakeItemValue = fakeItemValue * 10 + 2.5;
	if (winningItem.ItemRarity === 'Classified')
		fakeItemValue = fakeItemValue * 30 + 20;
	if (winningItem.ItemRarity === 'Covert')
		fakeItemValue = fakeItemValue * 190 + 60;
	if (winningItem.ItemRarity === 'Contraband')
		fakeItemValue = fakeItemValue * 900 + 250;
	
	if (wearName === 'Factory New')
		fakeItemValue = fakeItemValue * 2.0;
	if (wearName === 'Minimal Wear')
		fakeItemValue = fakeItemValue * 1.5;
    if (wearName === 'Field-Tested')
		fakeItemValue = fakeItemValue * 1.0;
    if (wearName === 'Well-Worn')
		fakeItemValue = fakeItemValue * 0.75;
    if (wearName === 'Battle-Scarred')
		fakeItemValue = fakeItemValue * 0.50;


	returningItem['ItemValue'] = fakeItemValue.toFixed(2);
	return returningItem;
}

function GenerateItem(winningItem, callback) {
	let durabilityValue = Math.random() * 0.75;
	let wearName = getWearName(durabilityValue);

	let returningItem = {
		'ItemName'  		: winningItem.ItemName,
		'ItemURL'   		: winningItem.ItemURL,
		'ItemRarity'		: winningItem.ItemRarity,
		'ItemDurability' 	: durabilityValue,
		'ItemWearName'		: wearName,
		'ItemStatTrack'		: String(Math.random()),
		// 'ItemValue'			: String((Math.random() * 1000).toFixed(2))
	};

	fetch(`http://localhost:4000/api/itemPrice?skin=${encodeURIComponent(returningItem.ItemName)}&wear=${encodeURIComponent(wearName)}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP status ${response.status}`);
			}

			return response.json();
		})

		.then(data => {
			returningItem.ItemValue = data.price;
			callback(returningItem);
		})

		.catch(error => {
			console.error('Error fetching item price:', error);
			callback(GenerateFakeItem(winningItem));
		});

	//return returningItem;
}

let gRollerItems = GetRollerList(Cases['Kilowatt Case'].CaseItems);

function CaseOpener(props) {
    const [playingGame, setPlayingGame] = useState(false);
	const [chosenCase, setChosenCase] = useState('Kilowatt Case');
    const controls = useAnimation();

    function handleCaseClick() {
		props.userState.balance -= (2.49 + Number(Cases[chosenCase].CasePrice));
		gRollerItems = GetRollerList(Cases[chosenCase].CaseItems);
        setPlayingGame(true);
        
        controls.set({ x: 0 });

        controls.start({ x: -38500, transition: { ease: "easeOut", duration: 5 } })
            .then(() => {
				GenerateItem(gRollerItems.winningItem, (generatedItem) => {
					if (generatedItem) {
						alert('You won a ' + getWearName(generatedItem.ItemDurability) + ' ' + generatedItem.ItemName + ' worth ' + generatedItem.ItemValue);
						props.userState.inventory.push(generatedItem);
					}

					else {
						alert('There was an error fetching the item price.');
					}

					setPlayingGame(false);
				});
                //setPlayingGame(false);
				//alert('You won a ' + gRollerItems.winningItem.ItemName);
				//props.userState.inventory.push(GenerateItem(gRollerItems.winningItem));
            });
    }

    return (
        <>
            <div className='Background2'></div>
            <Navbar userState = { props.userState } userFunction = { props.userFunction }/>
            <div className='ButtonContainer'>
                <button className='OpenCaseButton' onClick={handleCaseClick} disabled={playingGame}>Spin! ${(Number(Cases[chosenCase].CasePrice)).toFixed(2)} + $2.49 key</button>
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
				<div className='CaseContainer'>
					{
						Object.entries(Cases).map(([caseName, caseDetail]) => {
							return (<div className='CaseSelections'>
								<div className='CaseSelections2' style={{
								borderColor: 'yellow',
								borderWidth: caseName === chosenCase ? '1px' : '0px'
							}} onClick={playingGame ? undefined : () => {
									setChosenCase(caseName);
									gRollerItems = GetRollerList(caseDetail.CaseItems); 
									// alert("Updating to " + caseName);
									}}>
									<CaseCard
										caseName={caseName}
										caseURL={caseDetail.CaseURL}
										casePrice={caseDetail.CasePrice}
									/>
								</div>
							</div>)
						})
					}
					
				</div>
            </div>
        </>
    );
}

export default CaseOpener;