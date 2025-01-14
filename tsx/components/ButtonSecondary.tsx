import React from 'react';
import IconStar from './IconStar';
import '../../css/buttonStyles.css';

export default function ButtonSecondary() {
	return (
		<button className="button-secondary">
			Button CTA <IconStar />
		</button>
	);
}
