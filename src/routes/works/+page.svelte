<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs/index';
	import WorkCard from '$lib/components/work-card.svelte';

	const TABS = [
		{ value: 'all', label: 'All' },
		{ value: 'art', label: 'Art' },
		{ value: 'music', label: 'Music' },
		{ value: 'writing', label: 'Writing' },
		{ value: 'video', label: 'Video' },
		{ value: 'studies', label: 'Studies' }
	];
</script>

<h1>Different type of arts, made by humans</h1>
<h2>Where the spirit does not work with the hand, there is no art. - Leonardo Da Vinci</h2>
<Tabs value="all">
	<nav class="mt-8 mb-4 flex flex-col items-center gap-2 md:flex-row">
		<TabsList class="w-full">
			{#each TABS as tab}
				<TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
			{/each}
		</TabsList>
		<Input placeholder="Search works..." class="" />
	</nav>
	<TabsContent value="all">
		<div>
			<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<li>
					<WorkCard />
				</li>
			</ul>
		</div>
	</TabsContent>
	<TabsContent value="ai-generated">ai</TabsContent>
	<TabsContent value="human-created">human</TabsContent>
</Tabs>
