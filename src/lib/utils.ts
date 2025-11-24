import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function placehold(
	label: string,
	size: [number, number] = [600, 400],
	dark = false,
): string {
	const background = '0f161c';
	const foreground = '8aa8b3';
	const color = dark
		? `${foreground}/${background}`
		: `${background}/${foreground}`;
	const sanitizedLabel = label
		.replace(/\s+/g, '+')
		.replace(/[^a-zA-Z0-9+]/g, '');
	const text = sanitizedLabel ? '?text=' + sanitizedLabel : '';
	return `https://placehold.co/${size[0]}x${size[1]}/${color}${text}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any }
	? Omit<T, 'children'>
	: T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
	ref?: U | null;
};
