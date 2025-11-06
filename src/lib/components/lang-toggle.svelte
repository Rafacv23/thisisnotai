<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
</script>

<div>
	<button onclick={() => setLocale('en')}>en</button>
	<button onclick={() => setLocale('es')}>es</button>
</div>
