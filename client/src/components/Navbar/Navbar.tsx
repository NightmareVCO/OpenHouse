'use client';

import type { NavbarProps } from '@heroui/react';

import CICCIcon from '@components/Svg/CICCIcon';
import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	cn,
} from '@heroui/react';
import React from 'react';
import OpenHouseIcon from '../Svg/OpenHouse2025';

interface OpenHouseNavbarProps extends NavbarProps { }

export default function OpenHouseNavbar({ ...props }: OpenHouseNavbarProps) {
	return (
		<Navbar
			{...props}
			isBordered
			classNames={{
				base: cn('border-default-100'),
				wrapper: 'w-full justify-center bg-transparent',
				item: 'hidden md:flex',
			}}
			height="70px"
			isBlurred
		>
			<NavbarBrand>
				<CICCIcon />
			</NavbarBrand>
			<NavbarContent
				className="hidden gap-4 px-4 rounded-full h-11 border-small border-default-200/20 bg-background/60 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50 md:flex"
				justify="center"
			>
				<NavbarItem
					isActive
					as={Link}
					href="https://delicate-dieffenbachia-bd6e4e.netlify.app/"
					isExternal
				>
					<div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[20px] p-2">
						<div className="text-primary bg-hero-section-title bg-clip-text">
							Comité de Estudiantes de Ingeniería en Ciencias de la Computación
						</div>
					</div>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="ml-2 !flex gap-2">
					<OpenHouseIcon className="size-16" />
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
