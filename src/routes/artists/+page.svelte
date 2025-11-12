<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs/index';
	import ArtistCard from '$lib/components/artist-card.svelte';
	import type { PageProps } from './$types';
	import { m } from '$lib/paraglide/messages';

	let { data }: PageProps = $props();

	const TABS = [
		{ value: 'all', label: m.artists_label_1() },
		{ value: 'drawing', label: m.artists_label_2() },
		{ value: 'music', label: m.artists_label_3() },
		{ value: 'writing', label: m.artists_label_4() },
		{ value: 'video', label: m.artists_label_5() }
	];
</script>

<main class="mx-4 mt-8 max-w-3xl md:mt-12 lg:mx-auto lg:mt-16">
	<h1>{m.artists_h1()}</h1>
	<h2>{m.artists_h2()}</h2>
	<Tabs value="all">
		<nav class="mt-8 mb-4 flex flex-col items-center gap-2 md:flex-row">
			<TabsList>
				{#each TABS as tab (tab.label)}
					<TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
				{/each}
			</TabsList>
		</nav>
		<TabsContent value="all">
			<div>
				<ul class="lg:grid-cols:3 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
					{#each data.artists as artist (artist.username)}
						<li>
							<ArtistCard {artist} />
						</li>
					{/each}
				</ul>
			</div>
		</TabsContent>
		{#each TABS.slice(1) as tab (tab.label)}
			<TabsContent value={tab.value}>
				<div>
					<ul class="lg:grid-cols:3 grid grid-cols-1 gap-4 sm:grid-cols-2">
						{#each data.artists.filter((artist) => artist.category?.toLowerCase() === tab.label.toLowerCase()) as artist (artist.username)}
							<li>
								<ArtistCard {artist} />
							</li>
						{/each}
					</ul>
				</div>
			</TabsContent>
		{/each}
	</Tabs>
</main>
