<script lang="ts">
	import { resolve } from '$app/paths';
	import type { ResolvedPathname } from '$app/types';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { cn } from '$lib/utils.js';

	interface Member {
		slug: string;
		name: string;
		role: string;
		href?: string;
	}

	type DevlogMedia =
		| {
				type: 'image';
				src: string;
				alt: string;
				caption?: string;
		  }
		| {
				type: 'video';
				src: string;
				title?: string;
				poster?: string;
				embed?: boolean;
				caption?: string;
		  };

	interface DevlogFile {
		label: string;
		href: string;
		description?: string;
	}

	interface DevlogEntry {
		id: string;
		title?: string;
		date: string;
		bodyHtml: string;
		media?: DevlogMedia[];
		files?: DevlogFile[];
		openByDefault?: boolean;
	}

	interface Project {
		guid: string;
		slug: string;
		title: string;
		shortDescription: string;
		detailedDescription: string;
		coverImage: string;
		coverImageAlt: string;
		status: string;
		leads?: Member[];
		contributors?: Member[];
		devlogs: DevlogEntry[];
	}

	interface Props {
		data: {
			project: Project;
		};
	}

	let { data }: Props = $props();

	const project = $derived(data.project);
	const leads = $derived(project.leads ?? []);
	const contributors = $derived(project.contributors ?? []);
	const dateFormatter = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});

	const devlogs = $derived.by(() => {
		return [...(project.devlogs ?? [])]
			.sort((left, right) => {
				return new Date(right.date).getTime() - new Date(left.date).getTime();
			})
			.map((entry, index) => {
				return {
					...entry,
					formattedDate: dateFormatter.format(new Date(entry.date)),
					open: index === 0 || entry.openByDefault,
				};
			});
	});

	function teamHref(member: Member): ResolvedPathname {
		return resolve(`/team#${member.slug}`);
	}
</script>

<svelte:head>
	<title>{project.title} | Projects</title>
	<meta name="description" content={project.shortDescription} />
</svelte:head>

<section class="relative isolate overflow-hidden py-30">
	<div
		class="absolute inset-x-0 top-0 -z-10 h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_62%)]">
	</div>
	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
			<aside class="order-1 lg:sticky lg:top-24 lg:order-2">
				<div
					class="rounded-3xl border bg-background/85 p-4 shadow-sm backdrop-blur">
					<div class="mb-4 flex items-center justify-between gap-3">
						<h2 class="font-display text-lg font-semibold">Contributors</h2>
						<Badge variant="secondary">{project.status}</Badge>
					</div>

					{#if leads.length}
						<div class="space-y-3">
							<p
								class="text-xs tracking-[0.2em] text-muted-foreground uppercase">
								Leads
							</p>
							<div class="space-y-3">
								{#each leads as member (member.slug)}
									<a
										href={teamHref(member)}
										class="group block rounded-2xl border border-border/70 bg-card/80 p-3 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/10">
										<div class="flex items-start justify-between gap-3">
											<div class="min-w-0">
												<div
													class="truncate text-sm leading-none font-semibold">
													{member.name}
												</div>
												<div class="mt-1 text-xs text-muted-foreground">
													{member.role}
												</div>
											</div>
											<Badge
												variant="outline"
												class="shrink-0 opacity-90 transition group-hover:opacity-100">
												Lead
											</Badge>
										</div>
									</a>
								{/each}
							</div>
						</div>
					{/if}

					{#if contributors.length}
						{#if leads.length}
							<Separator class="my-5" />
						{/if}
						<div class="space-y-3">
							<p
								class="text-xs tracking-[0.2em] text-muted-foreground uppercase">
								Team
							</p>
							<div class="space-y-3">
								{#each contributors as member (member.slug)}
									<a
										href={teamHref(member)}
										class="group block rounded-2xl border border-border/70 bg-card/80 p-3 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/10">
										<div class="flex items-start justify-between gap-3">
											<div class="min-w-0">
												<div
													class="truncate text-sm leading-none font-semibold">
													{member.name}
												</div>
												<div class="mt-1 text-xs text-muted-foreground">
													{member.role}
												</div>
											</div>
											<Badge
												variant="outline"
												class="shrink-0 opacity-80 transition group-hover:opacity-100">
												Member
											</Badge>
										</div>
									</a>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</aside>

			<main class="order-2 space-y-8 lg:order-1">
				<header class="overflow-hidden rounded-3xl border bg-card shadow-sm">
					<div
						class="grid gap-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
						<div class="p-6 sm:p-8">
							<div class="flex flex-wrap items-center gap-3">
								<Badge>{project.status}</Badge>
								<p class="text-sm text-muted-foreground">
									{project.shortDescription}
								</p>
							</div>

							<h1
								class="mt-4 font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
								{project.title}
							</h1>

							<p
								class="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
								{project.detailedDescription}
							</p>
						</div>

						<div class="relative min-h-[18rem] bg-muted/30">
							<img
								src={project.coverImage}
								alt={project.coverImageAlt || project.title}
								loading="eager"
								class="h-full w-full object-cover" />
						</div>
					</div>
				</header>

				<section class="space-y-6">
					<div>
						<h2 class="font-display text-2xl font-semibold">
							Development logs
						</h2>
						<p class="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
							Newest updates are expanded by default. Older entries stay
							collapsed until opened.
						</p>
					</div>

					<div class="space-y-4">
						{#each devlogs as log, index (log.id)}
							<details
								class="group overflow-hidden rounded-3xl border bg-card shadow-sm"
								open={log.open}>
								<summary
									class="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6">
									<div class="min-w-0">
										<div class="flex flex-wrap items-center gap-3">
											<h3 class="text-base leading-tight font-semibold">
												{log.title ?? log.formattedDate}
											</h3>
											<Badge variant="outline">{log.formattedDate}</Badge>
										</div>
										{#if log.title && log.title !== log.formattedDate}
											<p class="mt-1 text-sm text-muted-foreground">
												{log.formattedDate}
											</p>
										{/if}
									</div>

									<span
										class="devlog-caret text-sm text-muted-foreground transition-transform duration-200">
										⌄
									</span>
								</summary>

								<div class="border-t px-5 py-6 sm:px-6">
									{#if log.media?.length}
										<div class="grid gap-4 sm:grid-cols-2">
											{#each log.media as item, mediaIndex (item.type + '-' + mediaIndex)}
												{#if item.type === 'image'}
													<figure
														class="overflow-hidden rounded-2xl border bg-muted/20">
														<img
															src={item.src}
															alt={item.alt}
															loading="lazy"
															class="h-full w-full object-cover" />
														{#if item.caption}
															<figcaption
																class="border-t px-4 py-3 text-xs text-muted-foreground">
																{item.caption}
															</figcaption>
														{/if}
													</figure>
												{:else if item.type === 'video'}
													<figure
														class="overflow-hidden rounded-2xl border bg-black/5">
														{#if item.embed}
															<iframe
																src={item.src}
																title={item.title || log.title || project.title}
																loading="lazy"
																allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
																allowfullscreen
																class="aspect-video w-full"></iframe>
														{:else}
															<video
																controls
																playsinline
																poster={item.poster}
																class="aspect-video w-full bg-black">
																<source src={item.src} />
															</video>
														{/if}
														{#if item.caption}
															<figcaption
																class="border-t px-4 py-3 text-xs text-muted-foreground">
																{item.caption}
															</figcaption>
														{/if}
													</figure>
												{/if}
											{/each}
										</div>
									{/if}

									<div
										class={cn(
											'prose prose-slate dark:prose-invert mt-6 max-w-none',
										)}>
										{@html log.bodyHtml}
									</div>

									{#if log.files?.length}
										<div class="mt-8 rounded-2xl border bg-muted/20 p-4">
											<h4
												class="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
												Files
											</h4>
											<ul class="mt-4 space-y-3">
												{#each log.files as file, fileIndex (file.href + '-' + fileIndex)}
													<li>
														<a
															href={file.href}
															download
															class="flex items-center justify-between gap-4 rounded-xl border bg-background px-4 py-3 text-sm transition hover:border-primary/40 hover:bg-accent/10">
															<span class="min-w-0">
																<span class="block truncate font-medium"
																	>{file.label}</span>
																{#if file.description}
																	<span
																		class="mt-1 block text-xs text-muted-foreground">
																		{file.description}
																	</span>
																{/if}
															</span>
															<span
																class="shrink-0 text-xs text-muted-foreground"
																>Download</span>
														</a>
													</li>
												{/each}
											</ul>
										</div>
									{/if}
								</div>
							</details>
						{/each}
					</div>
				</section>
			</main>
		</div>
	</div>
</section>

<style lang="postcss">
	@reference "tailwindcss";

	details[open] .devlog-caret {
		transform: rotate(180deg);
	}
</style>
