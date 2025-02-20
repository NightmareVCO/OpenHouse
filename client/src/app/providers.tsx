'use client';

import { HeroUIProvider } from '@heroui/react';
import { ToastProvider } from '@heroui/toast';
import { useRouter } from 'next/navigation';

declare module '@react-types/shared' {
	interface RouterConfig {
		routerOptions: NonNullable<
			Parameters<ReturnType<typeof useRouter>['push']>[1]
		>;
	}
}

interface ProvidersProps {
	readonly children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
	const router = useRouter();

	return (
		<HeroUIProvider navigate={router.push}>
			<ToastProvider placement="bottom-center" toastOffset={60} />
			{children}
		</HeroUIProvider>
	);
}
