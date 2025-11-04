<script>
	import CardContent from './ui/card/card-content.svelte';
	import CardDescription from './ui/card/card-description.svelte';
	import CardFooter from './ui/card/card-footer.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import CardTitle from './ui/card/card-title.svelte';
	import Card from './ui/card/card.svelte';
</script>

<Card>
	<CardHeader>
		<CardTitle>Work Artist</CardTitle>
		<CardDescription>Category</CardDescription>
	</CardHeader>
	<CardContent>Work description or preview goes here.</CardContent>
	<CardFooter>Links</CardFooter>
</Card>
