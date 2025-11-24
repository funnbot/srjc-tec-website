<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import Button from './Button.svelte';
	import NavBar from './nav-bar.svelte';

	interface Tab {
		/** Display string for this tab. */
		label: string;
		/** Route to local page, used with `resolve()`. */
		route: Pathname;
		/** Should this button be disabled. */
		disabled?: boolean;
	}

	const tabs: Tab[] = [
		{ label: 'About', route: '/', disabled: true },
		{ label: 'Events', route: '/', disabled: true },
		{ label: 'Team', route: '/', disabled: true },
		{ label: 'Sponsors', route: '/', disabled: true },
		{ label: 'Projects', route: '/', disabled: true },
	];
</script>

<header class="bg-header">
	<div
		class="
    mx-auto max-w-7xl px-4
    sm:px-6
    lg:px-8
  ">
		<div class="flex h-16 items-center justify-between">
			<div
				class="
      flex flex-1 items-center gap-4
      md:gap-12
    ">
				<a class="text-brand block" href="#">
					<span class="sr-only">Home</span>
					Logo
					<span class="text-header-content text-lg font-semibold">TEC</span>
				</a>
			</div>

			<NavBar />
		</div>
	</div>
</header>
