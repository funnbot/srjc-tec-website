<!-- eslint-disable svelte/no-navigation-without-resolve  -->
<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn, placehold } from '$lib/utils';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import { scrollY } from 'svelte/reactivity/window';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import NavBar from './nav-bar.svelte';
	import * as NavigationMenu from './components/ui/navigation-menu/index.js';

	let menuState = $state(false);
	let isScrolled = $derived.by(() => {
		if (scrollY.current !== undefined && scrollY.current > 50) {
			return true;
		}
		return false;
	});
</script>

<header class="fixed z-20 w-full px-2">
	<NavigationMenu.Root>
		{#snippet child()}
			<div
				class={[
					'mx-auto mt-2 max-w-6xl px-6 transition-normal duration-150 lg:border-b lg:px-12 lg:transition-all',
					menuState || 'border-b',
					isScrolled &&
						'max-w-4xl rounded-2xl border bg-background/50 backdrop-blur-lg lg:px-5',
				]}>
				<div
					class="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
					<div class="flex w-full justify-between lg:w-auto">
						<a
							href={resolve('/')}
							aria-label="home"
							class="flex items-center space-x-2">
							<img alt="logo" src={placehold('Logo', [40, 40])} />
						</a>

						<!-- Mobile Navigation -->
						<button
							onclick={() => (menuState = !menuState)}
							aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
							class="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
							<Menu
								class={[
									'm-auto size-6 duration-200',
									menuState && 'scale-0 rotate-180 opacity-0',
								]} />
							<X
								class={[
									'absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200',
									menuState && 'scale-100 rotate-0 opacity-100',
								]} />
						</button>
					</div>

					<div class="absolute inset-0 m-auto hidden size-fit lg:block">
						<NavBar />
					</div>
					<div
						class={[
							'mb-6 w-full  flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent',
							menuState ? 'block lg:flex' : 'hidden lg:flex',
						]}>
						<div class="lg:hidden">
							<NavBar column></NavBar>
						</div>
						<div
							class="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
							<Button href="#" size="sm" class={cn(isScrolled && 'lg:hidden')}>
								Join Us
							</Button>
						</div>
					</div>
				</div>
			</div>
		{/snippet}
	</NavigationMenu.Root>
</header>
