'use client';

import OpenHouseCard from '@components/Card/Card';
import OpenHouseIcon from '@components/Svg/OpenHouse2025';

import degrees from '@lib/data/degrees.data';
import React from 'react';
const BUTTON_TEXT = 'Registrarse';
import confetti from 'canvas-confetti';

export default function HomePage() {
	const [shouldConffeti, setShouldConffeti] = React.useState(false);

	React.useEffect(() => {
		if (shouldConffeti) {
			confetti();
		}
	}, [shouldConffeti]);

	return (
		<div className="flex flex-col items-center justify-center mx-auto max-w-7xl">
			<header className="flex items-center justify-center">
				<OpenHouseIcon className="size-80 lg:size-96 hover:scale-[1.02] transition-transform" />
			</header>
			<main className="grid grid-cols-3 gap-6 p-4 place-items-center">
				{degrees.map((degree) => (
					<OpenHouseCard
						key={degree.id}
						title={degree.name}
						description={degree.description}
						image={degree.image}
						buttonText={BUTTON_TEXT}
						setShouldConffeti={setShouldConffeti}
					/>
				))}
			</main>
		</div>
	);
}
