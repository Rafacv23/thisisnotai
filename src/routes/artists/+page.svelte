<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs/index';
	import WorkCard from '$lib/components/work-card.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	console.log(data);

	const TABS = [
		{ value: 'all', label: 'All' },
		{ value: 'art', label: 'Art' },
		{ value: 'music', label: 'Music' },
		{ value: 'writing', label: 'Writing' },
		{ value: 'video', label: 'Video' },
		{ value: 'studies', label: 'Studies' }
	];

	//Test data for the WorkCard component
	const works = [
		{
			title: 'Work Artist',
			category: 'Digital Illustration',
			description: 'A vibrant digital artwork showcasing modern techniques and bold colors.',
			links: [
				{
					label: 'View Portfolio',
					url: 'https://portfolio.example.com'
				},
				{
					label: 'Download',
					url: 'https://portfolio.example.com/download/artwork'
				}
			]
		}
	];
</script>

<main class="mx-auto mt-16 max-w-3xl">
	<h1>Different type of arts, made by humans</h1>
	<h2>Where the spirit does not work with the hand, there is no art. - Leonardo Da Vinci</h2>
	<Tabs value="all">
		<nav class="mt-8 mb-4 flex flex-col items-center gap-2 md:flex-row">
			<TabsList class="w-full">
				{#each TABS as tab (tab.label)}
					<TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
				{/each}
			</TabsList>
			<Input placeholder="Search works..." class="" />
		</nav>
		<TabsContent value="all">
			<div>
				<ul class="lg:grid-cols:3 grid grid-cols-1 gap-4 sm:grid-cols-2">
					{#each works as work (work.title)}
						<li>
							<WorkCard {work} />
						</li>
					{/each}
				</ul>
			</div>
		</TabsContent>
		<TabsContent value="ai-generated">ai</TabsContent>
		<TabsContent value="human-created">human</TabsContent>
	</Tabs>
</main>
