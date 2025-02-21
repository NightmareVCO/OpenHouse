'use client';

import type { CardProps } from '@heroui/react';

import FormModal from '@components/Modal/Modal';
import { Card, CardBody, CardFooter, Image, Spacer } from '@heroui/react';
import type React from 'react';

interface OpenHouseCardProps extends CardProps {
	readonly title: string;
	readonly description: string;
	readonly image: string;
	readonly buttonText: string;
	readonly setShouldConffeti: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OpenHouseCard({
	title,
	description,
	image,
	buttonText,
	setShouldConffeti,
	...props
}: OpenHouseCardProps) {
	return (
		<Card className="transition-transform hover:scale-[1.01] col-span-3 md:col-span-1" {...props}>
			<CardBody className="px-3 pb-1">
				<Image
					alt="Card image"
					className="object-cover object-top w-full aspect-video"
					src={image}
				/>
				<Spacer y={2} />
				<div className="flex flex-col items-center justify-center gap-2 px-2">
					<p className="text-2xl font-medium text-center text-primary">
						{title}
					</p>
					<p className="text-center text-large text-default-400 ">
						{description}
					</p>
				</div>
			</CardBody>
			<CardFooter className="justify-end gap-2 pb-6">
				<FormModal
					buttonText={buttonText}
					degree={title}
					setShouldConffeti={setShouldConffeti}
				/>
			</CardFooter>
		</Card>
	);
}
