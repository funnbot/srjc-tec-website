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
	import BorderCorners from './border-corners.svelte';
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
<section class="relative flex min-h-screen items-center overflow-hidden">
	<HeroBackground />
	<div class="relative mx-auto flex flex-col gap-10 py-20 pb-32">
		<div
			class="relative mx-auto max-w-3xl border-2 border-accent p-5 text-center">
			<BorderCorners />
			<h1 class="text-3xl">
				<p
					class="bg-linear-to-br from-slate-300 via-accent-foreground to-neutral-900 bg-clip-text font-display text-5xl leading-tight text-balance text-transparent md:text-7xl">
					The Engineering Club
				</p>
				at Santa Rosa Junior College
			</h1>
			<p
				class="mx-auto mt-5 max-w-2xl text-lg text-balance text-accent-foreground">
				A student-led club working together to build hands-on projects, connect
				with industry professionals, and gain real-world exposure beyond the
				classroom.
			</p>
		</div>
		<div class="mx-auto flex max-w-6xl flex-col border-2 p-4">
			<h2 class="font-display text-3xl">Why Join Us?</h2>
			<div class="flex flex-wrap text-balance">
				<p class="mt-5 max-w-xl">
					The SRJC engineering club is one of the oldest clubs at the college.
					Composed of a variety of engineering fields including but not limited
					to Aerospace, Biomedical, Civil, Computer, Electrical, Environmental,
					Mechanical, Chemical, Software Engineering.
				</p>
				<div class="flex flex-col gap-3">
					<div class="rounded-lg border border-accent p-4">
						<p class="mb-2 font-bold">Meeting Times</p>
						<p class="text-sm text-accent-foreground">Thursdays 1-2pm</p>
						<p class="text-sm text-accent-foreground">131 Lindley Center</p>
					</div>
					<div class="rounded-lg border border-accent p-4">
						<p class="mb-2 font-bold">Contact</p>
						<p class="text-sm text-accent-foreground">
							Discord:
							<a href="https://discord.gg/HEg6D8Dwsv"
								>https://discord.gg/HEg6D8Dwsv</a> <br />
							Instagram:
							<a href="https://www.instagram.com/tecsrjc/">@tecsrjc</a> <br />
							Canvas:
							<a href="https://canvas.santarosa.edu/enroll/N9EAKA"
								>https://canvas.santarosa.edu/enroll/N9EAKA</a>
						</p>
					</div>
					<div class="rounded-lg border border-accent p-4">
						<p class="mb-2 font-bold">Get Involved</p>
						<p class="text-sm text-accent-foreground">
							Bring your own ideas and turn them into a project
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <div class="h-20"></div>
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
			<div
				class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
				<div
					class="border bg-foreground/10 p-0.5"
					style="border-radius: calc(0.5rem + 0.125rem + 4px);">
					<Button href="#link" size="lg" class="rounded-xl px-5 text-base">
						<span class="text-nowrap">Join Us</span>
					</Button>
				</div>
			</div>
		</div>
	</div>



	<div class="max-w-5xl">

	</div>

	<Item.Root variant="default" class="max-w-5xl">
		<Item.Header class="font-display text-4xl">Why Join Us?</Item.Header>
		<Item.Content>
			<div class="flex">
				<Item.Root>
					<Item.Content>
						<Item.Description class="text-xl text-">
							The SRJC engineering club is one of the oldest clubs at the college. Composed of a variety of engineering fields including but not limited to Aerospace, Biomedical, Civil, Computer, Electrical, Environmental, Mechanical, Chemical, Software Engineering.
						</Item.Description>
					</Item.Content>
				</Item.Root>
				<Item.Group>
					<Item.Root variant="outline">
						<Item.Content>
							<Item.Title>Meetings</Item.Title>
							<Item.Description>
								1-2pm, every Thursday, 131 Lindley Center.
							</Item.Description>
						</Item.Content>
					</Item.Root>
				</Item.Group>
			</div>
		</Item.Content>
	</Item.Root>

	<div class="mx-auto flex flex-col max-w-6xl">
		<div class="flex justify-between">
			<Item.Root variant="default" class="self-start">
				<Item.Header class="font-display text-4xl">Hello World</Item.Header>
				<Item.Content>
					<Item.Title>Why Join Us?</Item.Title>
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
	<div class="max-h-20"></div> -->
</section>
