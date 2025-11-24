<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import type { Pathname } from '$app/types';
	import { cn } from './utils';
	import Button from './components/ui/button/button.svelte';

	const components: { title: string; href: Pathname }[] = [
		{ title: 'About', href: '/' },
		{ title: 'Events', href: '/' },
		{ title: 'Team', href: '/' },
		{ title: 'Sponsors', href: '/' },
		{ title: 'Projects', href: '/' },
	];
</script>

<NavigationMenu.Root viewport={false}>
	<NavigationMenu.List>
		{#each components as { title, href }, i (i)}
			<NavigationMenu.Item>
				<NavigationMenu.Link {href}>
					{title}
				</NavigationMenu.Link>
			</NavigationMenu.Item>
		{/each}
		<NavigationMenu.Item>
			<Button>Join Us!</Button>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
