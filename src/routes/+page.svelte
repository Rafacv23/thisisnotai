<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Features from '$lib/components/features.svelte';
	import RegisterForm from '$lib/components/register-form.svelte';
</script>

<Hero />
<div class="mx-4 max-w-3xl lg:mx-auto" id="why">
	<Features />
</div>
<div class="mx-4 max-w-3xl lg:mx-auto">
	<RegisterForm />
</div>
