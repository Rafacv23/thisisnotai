<script lang="ts">
	import UploadForm from '$lib/components/upload-form.svelte';
</script>

<main class="mx-4 mt-8 max-w-3xl md:mt-12 lg:mx-auto lg:mt-16">
	<section class="mb-8">
		<h1>Contribute with your Art</h1>
		<p class="mt-4 text-lg text-muted-foreground">
			thisisnotai.xyz it´s a free and open source project. Maintained by the community. How you can
			help us to grow and improve?
		</p>
		<ul class="mt-4 list-inside list-disc space-y-2">
			<li>Give us a Star on GitHub</li>
			<li>Open an issue or PR on GitHub</li>
			<li>Sponsor us</li>
			<li>Share the page to other artists</li>
			<li>Upload your art to the page</li>
		</ul>
	</section>
	<h2 class="mb-4 text-xl">Submit your Art (it's completely free)</h2>
	<p class="mt-4 text-lg text-muted-foreground">
		The thisisnotai.xyz team will review your submission and if it meets our guidelines, it will be
		added to the site, and you will appear on the artists page.
	</p>
	<UploadForm />
</main>
