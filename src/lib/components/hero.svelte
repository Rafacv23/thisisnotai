<script>
	import Badge from './ui/badge/badge.svelte';
	import { buttonVariants } from './ui/button';
</script>

<hero class="mb-12 flex flex-col items-center justify-center gap-4 text-center">
	<Badge>Not AI Allowed</Badge>
	<h1>Celebrating 100% Human Creativity</h1>
	<h2>Search for and interesting quote</h2>
	<div class="flex space-x-4">
		<a href="/works" title="Works" class={buttonVariants({ variant: 'default' })}> Explore </a>
		<a href="/contribute" title="Contribute" class={buttonVariants({ variant: 'outline' })}>
			Contribute
		</a>
	</div>
</hero>
