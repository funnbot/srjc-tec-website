<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	import { Badge, type BadgeVariant } from '$lib/components/ui/badge/index.js';
	import { cn } from '$lib/utils.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import ArrowDown from '@lucide/svelte/icons/arrow-down';
	import { type ClubMemberCard } from '$lib/team-member';

	interface MemberCardProps {
		member: ClubMemberCard;
	}

	let { member }: MemberCardProps = $props();

	let expanded = $state(false);

	const statusBadges = $derived.by(() => {
		let status: {
			name: string;
			variant: BadgeVariant;
		}[] = [];
		if (member.officialRole !== undefined) {
			status.push({ name: member.officialRole, variant: 'secondary' });
		}
		if (member.pastOfficialRoles !== undefined) {
			for (const role of member.pastOfficialRoles) {
				status.push({ name: role, variant: 'outline' });
			}
		}
		if (!member.isCurrent) {
			status.push({ name: 'Alumni', variant: 'ghost' });
		}
		return status;
	});
</script>

<Card.Root
	class="group cursor-pointer"
	onclick={() => (expanded = !expanded)}
	onkeydown={(e: KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			expanded = !expanded;
			e.preventDefault();
		}
	}}
	role="button"
	tabindex={0}>
	<!-- Headshot -->
	<div class="relative h-48 overflow-hidden rounded-t-3xl bg-muted/20">
		<img
			src={member.headShot}
			alt={member.name}
			loading="lazy"
			class={cn(
				'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105',
			)} />
		{#if !member.isCurrent}
			<div
				class="absolute inset-0 flex items-start justify-end bg-black/10 p-2 backdrop-blur-[0.5px]">
				<Badge variant="outline" class="bg-background/80">Alumni</Badge>
			</div>
		{/if}
	</div>

	<Card.Header>
		<div class="flex items-start justify-between gap-3">
			<div class="min-w-0 flex-1">
				<Card.Title class="truncate text-lg leading-tight">
					{member.name}
				</Card.Title>
				<Badge variant="secondary" class="mt-2 w-fit">
					{member.major}
				</Badge>
			</div>
			{#each statusBadges as statusBadge, i (i)}
				<Badge variant={statusBadge.variant}>{statusBadge.name}</Badge>
			{/each}
		</div>
	</Card.Header>

	<Card.Content
		class={cn(
			'transition-all duration-300',
			expanded ? 'max-h-200' : 'max-h-95',
		)}>
		<!-- Years active -->
		<p class="text-xs text-muted-foreground">{member.yearsActive}</p>

		<!-- Officer biography (shown when expanded) -->
		{#if member.biography !== undefined && expanded}
			<div class="mt-4 animate-in duration-300 fade-in slide-in-from-top-2">
				<p class="text-sm leading-relaxed text-foreground">
					{member.biography}
				</p>
			</div>
		{/if}

		<!-- Social links -->
		<div class="mt-4 flex gap-2">
			{#if member.linkedIn}
				<a
					href={member.linkedIn}
					target="_blank"
					rel="noreferrer"
					aria-label="LinkedIn"
					onclick={(e) => e.stopPropagation()}
					class="inline-flex items-center justify-center rounded-lg border bg-background p-2 transition hover:bg-accent">
					<Linkedin class="size-4" />
				</a>
			{/if}
		</div>

		<!-- Projects section (revealed on expand) -->
		{#if expanded && member.projects.length > 0}
			<div
				class="mt-6 animate-in border-t pt-4 duration-300 fade-in slide-in-from-top-2">
				<h4
					class="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
					Projects
				</h4>
				<ul class="mt-3 space-y-2">
					{#each member.projects as project (project.slug)}
						<li
							class="flex items-start justify-between gap-2 rounded-lg border bg-muted/30 px-3 py-2 text-sm">
							<span class="font-medium text-foreground">{project.title}</span>
							<Badge variant="outline" class="shrink-0">
								{project.role}
							</Badge>
						</li>
					{/each}
				</ul>
			</div>
		{/if}

		<!-- Collapse indicator -->
		{#if member.projects.length > 0 || member.biography !== undefined}
			<ArrowDown
				class={cn(
					'mt-4 flex items-center transition-transform duration-300',
					expanded && 'rotate-180',
				)} />
		{/if}
	</Card.Content>
</Card.Root>

<style lang="postcss">
	@reference "tailwindcss";
</style>
