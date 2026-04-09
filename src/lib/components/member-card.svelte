<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { cn } from '$lib/utils.js';
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import type { ClubMember, ClubOfficer } from '$lib/team-member';
	import { rollupVersion } from 'vite';
	import { captureRejectionSymbol } from 'node:events';

	// interface Officer {
	// 	guid: string;
	// 	name: string;
	// 	headShot: string;
	// 	major: string;
	// 	linkedIn?: string;
	// 	github?: string;
	// 	yearStart: string;
	// 	yearEnd?: string;
	// 	isActive: boolean;
	// 	projects: {
	// 		projectGuid: string;
	// 		projectTitle: string;
	// 		role: string;
	// 	}[];
	// 	officialsRole: string;
	// 	biography: string;
	// 	roleStartYear?: string;
	// 	roleEndYear?: string;
	// }

	// interface Member {
	// 	guid: string;
	// 	name: string;
	// 	headShot: string;
	// 	major: string;
	// 	linkedIn?: string;
	// 	github?: string;
	// 	yearStart: string;
	// 	yearEnd?: string;
	// 	isActive: boolean;
	// 	projects: {
	// 		projectGuid: string;
	// 		projectTitle: string;
	// 		role: string;
	// 	}[];
	// }

	interface MemberCardProps {
		member: ClubMember | ClubOfficer;
	}

	let { member }: MemberCardProps = $props();

	let expanded = $state(false);

	const isOfficerMember = (m: ClubMember | ClubOfficer): m is ClubOfficer => {
		return 'officialsRole' in m;
	};

	const officer = $derived(isOfficerMember(member) ? member : null);

	const yearsActive = $derived.by(() => {
		const years = member.yearsActive;
		if (typeof years.end === 'number') {
			return `'${years.start}-'${years.end}`;
		}
		return `'${years.start}`;
	});

	const currentYear = new Date().getFullYear();

	const statusBadges = $derived.by(() => {
		let status: {
			name: string;
			style: 'currentOfficial' | 'pastOfficial' | '';
		}[] = [];
		if (officer !== null) {
			// descend by start year
			const roles = officer.officialsRoles.toSorted(
				(a, b) => b.startYear - a.startYear,
			);
			for (const r of roles) {
				if (r.startYear == currentYear) {
					status.push({ name: r.role, style: 'currentOfficial' });
				} else {
					status.push({ name: r.role, style: 'pastOfficial' });
				}
			}
			status.push(...roles.map((r) => r.role));
		}
		return status;
	});
</script>

<div
	class="group cursor-pointer"
	onclick={() => (expanded = !expanded)}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			expanded = !expanded;
			e.preventDefault();
		}
	}}
	role="button"
	tabindex="0">
	<div
		class={cn(
			'relative overflow-hidden rounded-3xl border bg-card shadow-sm transition-all duration-300',
			expanded
				? 'ring-2 ring-primary/40'
				: 'hover:border-primary/40 hover:shadow-md',
		)}>
		<!-- Container for both collapsed and expanded states -->
		<div
			class={cn(
				'transition-all duration-300',
				expanded ? 'max-h-200' : 'max-h-95',
			)}>
			<!-- Headshot -->
			<div class="relative h-48 overflow-hidden bg-muted/20">
				<img
					src={member.headShot}
					alt={member.name}
					loading="lazy"
					class={cn(
						'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105',
					)} />
				{#if !member.isActive}
					<div
						class="absolute inset-0 flex items-start justify-end bg-black/10 p-2 backdrop-blur-[0.5px]">
						<Badge variant="outline" class="bg-background/80">Alumni</Badge>
					</div>
				{/if}
			</div>

			<!-- Content -->
			<div class="p-4 sm:p-5">
				<!-- Header with name and role badge -->
				<div class="flex items-start justify-between gap-3">
					<div class="min-w-0 flex-1">
						<h3 class="truncate text-lg leading-tight font-semibold">
							{member.name}
						</h3>
						<Badge variant="secondary" class="mt-2 w-fit">
							{member.major}
						</Badge>
					</div>
					<Badge>{statusBadge}</Badge>
				</div>

				<!-- Years active -->
				<p class="mt-3 text-xs text-muted-foreground">{yearsActive}</p>

				<!-- Officer biography (shown when expanded) -->
				{#if officer && expanded}
					<div class="mt-4 animate-in duration-300 fade-in slide-in-from-top-2">
						<p class="text-sm leading-relaxed text-foreground">
							{officer.biography}
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
					{#if member.github}
						<a
							href={member.github}
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
							onclick={(e) => e.stopPropagation()}
							class="inline-flex items-center justify-center rounded-lg border bg-background p-2 transition hover:bg-accent">
							<Github class="size-4" />
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
							{#each member.projects as project (project.projectGuid)}
								<li
									class="flex items-start justify-between gap-2 rounded-lg border bg-muted/30 px-3 py-2 text-sm">
									<span class="font-medium text-foreground"
										>{project.projectTitle}</span>
									<Badge variant="outline" class="shrink-0">
										{project.role}
									</Badge>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				<!-- Collapse indicator -->
				{#if member.projects.length > 0 || officer}
					<div
						class="mt-4 flex items-center justify-center text-xs text-muted-foreground transition-transform duration-300"
						class:rotate-180={expanded}>
						⌄
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
</style>
