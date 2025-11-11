<script lang="ts">
	import CardContent from './ui/card/card-content.svelte';
	import CardDescription from './ui/card/card-description.svelte';
	import CardFooter from './ui/card/card-footer.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import CardTitle from './ui/card/card-title.svelte';
	import Card from './ui/card/card.svelte';
	import type { Artist } from '$lib/server/db/artists';
	import { ArrowUpRight } from '@lucide/svelte';
	import { buttonVariants } from './ui/button';

	export let artist: Partial<Artist>;
</script>

<Card class="h-full">
	<CardHeader>
		<CardTitle>{artist.display_name}</CardTitle>
		<CardDescription>{artist.category}</CardDescription>
	</CardHeader>
	<CardContent>{artist.bio}</CardContent>
	<CardFooter class="justify-end">
		<a href={`/artists/${artist.username}`} class={buttonVariants({ variant: 'link' })}>
			Contact <ArrowUpRight />
		</a>
	</CardFooter>
</Card>
