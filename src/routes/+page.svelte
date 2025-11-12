<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Features from '$lib/components/features.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Brush, CloudUpload } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<Hero />
<div class="mx-4 max-w-3xl lg:mx-auto" id="why">
	<Features />
</div>
<div class="mx-4 flex w-full max-w-3xl items-center justify-center gap-4 lg:mx-auto">
	<a href="/contribute" title="Contribute" class={buttonVariants({ variant: 'default' })}
		><CloudUpload /> {m.hero_join_btn()}</a
	>
	<a href="/artists" title="Artists" class={buttonVariants({ variant: 'secondary' })}
		><Brush /> {m.hero_github_btn()}</a
	>
</div>
