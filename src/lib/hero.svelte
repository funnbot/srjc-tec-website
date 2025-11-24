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
	import { placehold } from './utils';
</script>

<!--
@component

- Hero component with a navigation header, main hero content with call-to-action buttons, and a customer showcase section. The component includes smooth scroll-based animations and a responsive mobile menu.

@example
```svelte
<HeroOne />
```
 -->
<main class="overflow-hidden">
	<div
		class="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
		<div
			class="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]">
		</div>
		<div
			class="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]">
		</div>
		<div
			class="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]">
		</div>
	</div>
	<section>
		<div class="relative pt-24 md:pt-36">
			<div
				class="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]">
			</div>
			<div class="mx-auto max-w-7xl px-6">
				<div class="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
					<h1
						class="mt-8 font-display text-6xl text-balance md:text-7xl lg:mt-16 xl:text-[5.25rem]">
						The Engineering Club
					</h1>
					<p class="mx-auto mt-8 max-w-2xl text-lg text-balance">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
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

			<div
				class="relative mt-8 -mr-56 overflow-hidden px-2 sm:mt-12 sm:mr-0 md:mt-20">
				<div
					class="absolute inset-0 z-10 bg-linear-to-b from-transparent from-35% to-background">
				</div>
				<div
					class="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg inset-shadow-2xs shadow-zinc-950/15 ring-background dark:inset-shadow-white/20">
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
			</div>
		</div>
	</section>
	<section class="bg-background pt-16 pb-16 md:pb-32">
		<div class="group relative m-auto max-w-5xl px-6">
			<div
				class="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
				<a
					href={resolve('/')}
					class="block text-sm duration-150 hover:opacity-75">
					<span> Meet Our Customers</span>

					<ChevronRight class="ml-1 inline-block size-3" />
				</a>
			</div>
		</div>
	</section>
</main>
