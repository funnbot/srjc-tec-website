<!-- eslint-disable svelte/no-navigation-without-resolve  -->
<script lang="ts">
	// Shadcn Svelte UI Button Component
	import Button from '$lib/components/ui/button/button.svelte';

	// You can store Hero Header Component in seperate file
	// I have used snippet for better readability

	// Hero Header Component
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import { resolve } from '$app/paths';
	import { placeholderImage } from './utils';

	const bgUrl = placeholderImage('Background', [2700, 1440], true);
</script>

<div class="absolute inset-0">
	<div
		class="absolute inset-0 bg-center bg-no-repeat"
		style="background-image: url('{bgUrl}');">
	</div>
	<div
		class="absolute inset-0 bg-radial from-transparent from-0% to-background">
	</div>
	<div
		class="absolute inset-0 bg-linear-to-t from-background/50 from-0% to-background/50 to-100%">
	</div>
</div>

<!-- <div
	class="relative mt-8 -mr-56 overflow-hidden px-2 sm:mt-12 sm:mr-0 md:mt-20">
	<div
		class="absolute inset-0 z-10 bg-linear-to-b from-transparent from-35% to-background">
	</div>
	<div class="relative mx-auto max-w-6xl overflow-hidden rounded-2xl">
		<img
			class="relative hidden aspect-15/8 rounded-2xl bg-background dark:block"
			src={placehold('App Screen', [2700, 1440], true)}
			alt="app screen"
			width="2700"
			height="1440" />
		<img
			class="relative z-2 aspect-15/8 rounded-2xl border border-border/25 dark:hidden"
			src={placehold('App Screen', [2700, 1440])}
			alt="app screen"
			width="2700"
			height="1440" />
	</div>
</div> -->
