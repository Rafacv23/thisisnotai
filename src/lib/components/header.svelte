<script lang="ts">
	const SECTIONS = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'Demo',
			href: '/demo'
		},
		{
			title: 'GitHub',
			href: '/github'
		}
	];
</script>

<header
	class="border-card mb-8 flex items-center justify-between rounded-xl border px-8 py-4 shadow-sm"
>
	<span>This is not AI</span>
	<nav class="space-x-4">
		{#each SECTIONS as SECTION}
			<a href={SECTION.href} title={SECTION.title}>{SECTION.title}</a>
		{/each}
	</nav>
</header>
