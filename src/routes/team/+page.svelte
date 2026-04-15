<script lang="ts">
	import MemberCard from '$lib/components/member-card.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import type { ClubMember } from '$lib/team-member';

	interface Props {
		data: {
			currentOfficers: ClubMember[];
			members: ClubMember[];
		};
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Team | TEC</title>
	<meta
		name="description"
		content="Meet the members and officers of The Engineering Club" />
</svelte:head>

<section class="relative isolate overflow-hidden py-20">
	<div
		class="absolute inset-x-0 top-0 -z-10 h-screen bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_62%)]">
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
		{#if data.currentOfficers.length > 0}
			<section class="mb-12 space-y-6">
				<div>
					<h2 class="font-display text-3xl font-semibold">Officers</h2>
					<p class="mt-2 text-sm text-muted-foreground">
						Leadership and core team members driving the club
					</p>
				</div>

				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each data.currentOfficers as officer (officer.slug)}
						<MemberCard member={officer} />
					{/each}
				</div>
			</section>

			<Separator class="my-12" />
		{/if}

		<!-- Active Members Section -->
		{#if data.members.length > 0}
			<section class="mb-12 space-y-6">
				<div>
					<h2 class="font-display text-2xl font-semibold">Members</h2>
					<p class="mt-2 text-sm text-muted-foreground">
						Current and past members of the club, including alumni and past
						officers
					</p>
				</div>

				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each data.members as member (member.slug)}
						<MemberCard {member} />
					{/each}
				</div>
			</section>
		{/if}
	</div>
</section>
