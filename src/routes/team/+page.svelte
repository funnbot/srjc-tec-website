<script lang="ts">
	import MemberCard from '$lib/components/member-card.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';

	interface Officer {
		guid: string;
		name: string;
		headshot: string;
		major: string;
		linkedIn?: string;
		github?: string;
		yearStart: string;
		yearEnd?: string;
		isActive: boolean;
		projects: {
			projectGuid: string;
			projectTitle: string;
			role: string;
		}[];
		officialsRole: string;
		biography: string;
		roleStartYear?: string;
		roleEndYear?: string;
	}

	interface Member {
		guid: string;
		name: string;
		headshot: string;
		major: string;
		linkedIn?: string;
		github?: string;
		yearStart: string;
		yearEnd?: string;
		isActive: boolean;
		projects: {
			projectGuid: string;
			projectTitle: string;
			role: string;
		}[];
	}

	interface Props {
		data: {
			officers: Officer[];
			members: Member[];
		};
	}

	let { data }: Props = $props();

	const officers = $derived(data.officers ?? []);
	const members = $derived(data.members ?? []);

	const activeOfficers = $derived(
		officers.filter((o) => o.isActive || !o.roleEndYear),
	);
	const pastOfficers = $derived(
		officers.filter((o) => !o.isActive || o.roleEndYear),
	);

	const activeMembers = $derived(
		members
			.filter((m) => m.isActive)
			.sort((a, b) => a.name.localeCompare(b.name)),
	);
	const pastMembers = $derived(
		members
			.filter((m) => !m.isActive)
			.sort((a, b) => {
				// Sort by end year descending (most recent first), then by name
				if (a.yearEnd !== b.yearEnd) {
					return (b.yearEnd ?? '').localeCompare(a.yearEnd ?? '');
				}
				return a.name.localeCompare(b.name);
			}),
	);

	const allPastMembers = $derived([...pastOfficers, ...pastMembers]);
	const allActiveMembers = $derived([...activeOfficers, ...activeMembers]);
</script>

<svelte:head>
	<title>Team | TEC</title>
	<meta
		name="description"
		content="Meet the members and officers of The Engineering Club" />
</svelte:head>

<section class="relative isolate overflow-hidden py-20">
	<div
		class="absolute inset-x-0 top-0 -z-10 h-128 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_62%)]">
	</div>

	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		<!-- Header -->
		<header class="mb-12 space-y-4">
			<h1 class="font-display text-5xl font-semibold tracking-tight">Team</h1>
			<p class="max-w-2xl text-lg text-muted-foreground">
				Meet the officers and members of The Engineering Club.
			</p>
		</header>

		<!-- Officers Section -->
		{#if activeOfficers.length > 0}
			<section class="mb-12 space-y-6">
				<div>
					<h2 class="font-display text-3xl font-semibold">Officers</h2>
					<p class="mt-2 text-sm text-muted-foreground">
						Leadership and core team members driving the club
					</p>
				</div>

				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each activeOfficers as officer (officer.guid)}
						<MemberCard member={officer} />
					{/each}
				</div>
			</section>

			<Separator class="my-12" />
		{/if}

		<!-- Active Members Section -->
		{#if allActiveMembers.length > 0}
			<section class="mb-12 space-y-6">
				<div>
					<h2 class="font-display text-2xl font-semibold">Active Members</h2>
					<p class="mt-2 text-sm text-muted-foreground">
						Currently contributing to the club
					</p>
				</div>

				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each allActiveMembers as member (member.guid)}
						<MemberCard {member} />
					{/each}
				</div>
			</section>

			{#if allPastMembers.length > 0}
				<Separator class="my-12" />
			{/if}
		{/if}

		<!-- Past Members Section -->
		{#if allPastMembers.length > 0}
			<section class="space-y-6">
				<div>
					<h2 class="font-display text-2xl font-semibold">Alumni</h2>
					<p class="mt-2 text-sm text-muted-foreground">
						Former members who contributed to the club
					</p>
				</div>

				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each allPastMembers as member (member.guid)}
						<MemberCard {member} />
					{/each}
				</div>
			</section>
		{/if}
	</div>
</section>

<style lang="postcss">
	@reference "tailwindcss";
</style>
