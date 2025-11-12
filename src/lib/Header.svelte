<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import Button from './Button.svelte';

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
				<a class="block text-brand" href="#">
					<span class="sr-only">Home</span>
					Logo
					<span class="text-lg font-semibold text-header-content">TEC</span>
				</a>
			</div>

			<div
				class="
      flex items-stretch gap-4 self-stretch
      md:gap-12
    ">
				<nav aria-label="Main" class="block">
					<ul class="flex size-full items-stretch text-sm">
						{#each tabs as { label, route, disabled } (label)}
							<li>
								<!-- Properly disabling anchor elements is unnecessarily complicated, 
								 use svelte to replace with a non interactive para element instead. -->
								{#if !disabled}
									<a
										class="
            flex h-full items-center px-1 text-nav-tab-label transition
            hover:bg-nav-tab-hover
            active:bg-nav-tab-hover
            sm:px-2
            md:px-4
          "
										href={resolve(route)}>
										{label}
									</a>
								{:else}
									<p
										aria-disabled="true"
										class="
            flex h-full items-center px-1 text-on-primary-muted
            sm:px-2
            md:px-4
          ">
										{label}
									</p>
								{/if}
							</li>
						{/each}
					</ul>
				</nav>
				<div
					class="
       hidden self-center
       sm:block
     ">
					<Button href={resolve('/')}>Join Us</Button>
				</div>
			</div>
		</div>
	</div>
</header>
