<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import type { Artist } from '$lib/server/db/artists';
	import type { PageProps } from './$types';
	import { Badge } from '$lib/components/ui/badge/index';
	import { ArrowLeft, ArrowUpRight, User } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';

	let { data }: PageProps = $props();

	let artist: Partial<Artist> = data.artist;
</script>

<main class="mx-4 mt-16 flex max-w-3xl flex-col space-y-6 lg:mx-auto">
	<!-- Avatar and Name -->
	<nav>
		<a href="/artists" class={buttonVariants({ variant: 'link' })}
			><ArrowLeft /> {m.artist_page_back_btn()}
		</a>
	</nav>
	<div class="flex flex-col items-center space-y-2">
		<img
			src={artist.avatar_url}
			alt={artist.display_name}
			class="rounded-xl shadow-lg"
			width={80}
			height={80}
		/>
		<h1 class="text-3xl font-bold">{artist.display_name}</h1>
		{#if artist.location}
			<h2 class="text-lg text-muted-foreground">{artist.location}</h2>
		{/if}
		<div class="flex gap-2">
			<Badge variant="secondary">{artist.category}</Badge>
			{#if artist.open_for_commissions}
				<Badge variant="secondary">{m.artist_page_commisions()}</Badge>
			{/if}
		</div>
	</div>

	<!-- Bio -->
	<h3 class="inline-flex gap-2"><User /> {m.artist_page_about()}</h3>
	{#if artist.bio}
		<p class="text-lg text-muted-foreground">{artist.bio}</p>
	{/if}

	<!-- Social Links -->
	<h3 class="inline-flex gap-2"><ArrowUpRight /> {m.artists_card_contact()}</h3>
	{#if artist.social_links}
		<ul class="flex flex-wrap gap-3">
			{#each Object.entries(artist.social_links ?? {}) as [key, url] (key)}
				{#if url}
					<li>
						<a
							href={url}
							target="_blank"
							title={key}
							rel="noopener noreferrer"
							class={buttonVariants({ variant: 'default' })}
						>
							{key.charAt(0).toUpperCase() + key.slice(1)}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	{/if}
</main>
