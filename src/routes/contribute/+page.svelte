<script lang="ts">
	import UploadForm from '$lib/components/upload-form.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<main class="mx-4 mt-8 max-w-3xl md:mt-12 lg:mx-auto lg:mt-16">
	<section class="mb-8">
		<h1>{m.contribute_h1()}</h1>
		<p class="mt-4 text-lg text-muted-foreground">
			{m.contribute_p_1()}
		</p>
		<ul class="mt-4 list-inside list-disc space-y-2">
			<li>{m.contribute_li_1()}</li>
			<li>{m.contribute_li_2()}</li>
			<li>{m.contribute_li_3()}</li>
			<li>{m.contribute_li_4()}</li>
			<li>{m.contribute_li_5()}</li>
		</ul>
	</section>
	<h2 class="mb-4 text-xl">{m.contribute_h2()}</h2>
	<p class="mt-4 text-lg text-muted-foreground">
		{m.contribute_p_2()}
	</p>
	<UploadForm />
</main>
