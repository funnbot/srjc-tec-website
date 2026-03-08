<!-- eslint-disable svelte/no-navigation-without-resolve  -->
<script lang="ts">
	// Shadcn Svelte UI Button Component
	import Button from '$lib/components/ui/button/button.svelte';

	// You can store Hero Header Component in seperate file
	// I have used snippet for better readability

	// Hero Header Component
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import ShieldAlertIcon from '@lucide/svelte/icons/shield-alert';
	import { resolve } from '$app/paths';
	import { placeholderImage } from './utils';
	import HeroBackground from './hero-background.svelte';
	import * as Item from '$lib/components/ui/item/index';

	const bgUrl = placeholderImage('TEC', [2700, 1440], true);
</script>

<!--
@component

@example
```svelte
<Hero />
```
 -->
<!-- match the size of the background image, center on that background -->
<div class="flex flex-col justify-between items-center h-auto min-h-screen overflow-hidden">
	<div class="h-20 grow-2"></div>
	<div class="max-w-7xl">
		<div class="text-center">
			<h1
				class="font-display text-6xl text-balance md:text-7xl">
				The Engineering Club
			</h1>
			<p class="mx-auto mt-10 max-w-2xl text-lg text-balance">
				A student-led club working together to build hands-on projects,
				connect with industry professionals, and gain real-world exposure
				beyond the classroom.
			</p>
			<!-- <div
				class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
				<div
					class="border bg-foreground/10 p-0.5"
					style="border-radius: calc(0.5rem + 0.125rem + 4px);">
					<Button href="#link" size="lg" class="rounded-xl px-5 text-base">
						<span class="text-nowrap">Join Us</span>
					</Button>
				</div>
			</div> -->
		</div>
	</div>
	<div class="mx-auto flex flex-col max-w-6xl">
		<div class="flex justify-between">
			<Item.Root variant="default" class="self-start">
				<Item.Header class="font-display text-4xl">Hello World</Item.Header>
				<Item.Content>
					<Item.Title>Item</Item.Title>
					<Item.Description>Item</Item.Description>
				</Item.Content>
				<Item.Footer>Item Footer</Item.Footer>
			</Item.Root>

			<Item.Root variant="outline" class="self-end">
				<Item.Media variant="icon">
					<ShieldAlertIcon />
				</Item.Media>
				<Item.Content>
					<Item.Title>Security Alert</Item.Title>
					<Item.Description>
						New login detected from unknown device.
					</Item.Description>
				</Item.Content>
			</Item.Root>
		</div>
	</div>
	<div class="max-h-20"></div>
</div>

<!-- absolute positioned behind -->
<HeroBackground></HeroBackground>