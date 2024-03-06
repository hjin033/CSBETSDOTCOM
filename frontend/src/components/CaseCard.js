import React from 'react';
import './CaseCard.css';

const CaseCard = ({caseName, caseURL, casePrice}, callback) => {
  	return (
		<div className='CaseCard'>
			<div>{caseName}</div>
			<img className='CaseImage'
				src={caseURL}
				alt={caseName}
			/>
			<div>${casePrice}</div>
		</div>
  	);
}

export default CaseCard;