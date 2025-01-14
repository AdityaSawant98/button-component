import React from 'react';
import IconStar from './IconStar';
import '../../css/buttonStyles.css';

export default function ButtonPrimary() {
	return (
		<button className="button-primary">
			<IconStar />
			Button CTA
		</button>
	);
}
