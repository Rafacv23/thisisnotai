<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	const FEATURES = [
		{
			heading: m.feat_1_heading,
			text: m.feat_1_p,
			animate: true
		},
		{
			heading: m.feat_2_heading,
			text: m.feat_2_p
		},
		{
			heading: m.feat_3_heading,
			text: m.feat_3_p
		},
		{
			heading: m.feat_4_heading,
			text: m.feat_4_p
		},
		{
			heading: m.feat_5_heading,
			text: m.feat_5_p
		}
	];
</script>

<section class="mx-auto mb-16 text-base text-foreground/80">
	<ul>
		{#each FEATURES as feat, i (i)}
			<li>
				<h3>{feat.heading()}</h3>
				<p>{feat.text()}</p>
			</li>
		{/each}
	</ul>
</section>
