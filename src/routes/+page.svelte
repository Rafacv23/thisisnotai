<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import RegisterForm from '$lib/components/register-form.svelte';
</script>

<Hero />
<div class="mx-4 max-w-3xl lg:mx-auto" id="why">
	<section class="mx-auto mb-16 text-base text-foreground/80">
		<h3 class="mb-2 text-xl font-semibold">Why does this page exist?</h3>
		<p>
			In a world increasingly dominated by artificial intelligence, <strong>thisisnotai.xyz</strong>
			is a celebration of pure human creativity. We believe that authentic, original ideas and works
			deserve a space where they are valued and recognized—free from the influence of AI-generated content.
		</p>
		<h3 class="mt-4 mb-2 text-xl font-semibold">Our Motivation</h3>
		<p>
			Our motivation is simple: to inspire, connect, and showcase the ingenuity of real people.
			Whether you’re an artist, developer, or sponsor, your contributions help build a community
			that honors the irreplaceable spark of human imagination.
		</p>
	</section>
</div>
<div class="mx-4 max-w-3xl lg:mx-auto">
	<RegisterForm />
</div>
