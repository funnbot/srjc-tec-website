<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import type { Pathname } from '$app/types';
	import { cn } from './utils';

	const components: { title: string; href: Pathname }[] = [
		{ title: 'About', href: '/' },
		{ title: 'Events', href: '/' },
		{ title: 'Team', href: '/' },
		{ title: 'Sponsors', href: '/' },
		{ title: 'Projects', href: '/' },
	];

	let { column }: { column?: boolean } = $props();
</script>

<NavigationMenu.List class={cn(column && 'flex-col items-start')}>
	{#each components as { title, href }, i (i)}
		<NavigationMenu.Item>
			<NavigationMenu.Link {href}>
				{title}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
	{/each}
</NavigationMenu.List>
