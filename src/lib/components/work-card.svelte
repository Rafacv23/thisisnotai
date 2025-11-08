<script lang="ts">
	import CardContent from './ui/card/card-content.svelte';
	import CardDescription from './ui/card/card-description.svelte';
	import CardFooter from './ui/card/card-footer.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import CardTitle from './ui/card/card-title.svelte';
	import Card from './ui/card/card.svelte';

	interface Work {
		title: string;
		category: string;
		description: string;
		links: {
			label: string;
			url: string;
		}[];
	}

	let { work }: Work = $props();
</script>

<Card>
	<CardHeader>
		<CardTitle>{work.title}</CardTitle>
		<CardDescription>{work.category}</CardDescription>
	</CardHeader>
	<CardContent>{work.description}</CardContent>
	<CardFooter>
		<a
			href={work.links[0].link}
			target="_blank"
			rel="noopener noreferrer"
			class="text-primary hover:underline"
		>
			{work.links[0].label}
		</a>
	</CardFooter>
</Card>
