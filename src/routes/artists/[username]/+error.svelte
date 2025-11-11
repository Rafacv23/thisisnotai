<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<main class="mx-4 mt-16 flex max-w-3xl flex-col space-y-6 lg:mx-auto">
	<h1>Sorry this artist not exist</h1>
	<p>You can browse for other artists, or submit your work.</p>
	<nav class="flex items-center justify-center">
		<a href="/artists" title="Artists" class={buttonVariants({ variant: 'link' })}>More Artists</a>
		<a href="/contribute" title="Contribute" class={buttonVariants({ variant: 'link' })}
			>Submit your work</a
		>
	</nav>
</main>
