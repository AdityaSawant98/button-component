import React from 'react';
import Button from './components/Button';
import IconStar from './components/IconStar';
import ButtonPrimary from './components/ButtonPrimary';
import ButtonSecondary from './components/ButtonSecondary';
import ButtonTertiary from './components/ButtonTertiary';

export default function App() {
	return (
		<div>
			<div>
				<Button />
				<ButtonPrimary />
				<ButtonSecondary />
				<ButtonTertiary />
				<IconStar />
			</div>
		</div>
	);
}
