<script lang="ts">
	import { buttonVariants } from './ui/button';

	const SECTIONS = [
		{
			title: 'Works',
			href: '/works'
		},
		{
			title: 'Tools',
			href: '/tools'
		},
		{
			title: 'About',
			href: '/about'
		}
	];

	const SOCIALS = [
		{
			title: 'GitHub',
			href: '/github'
		},
		{
			title: 'Contribute',
			href: '/contribute'
		}
	];
</script>

<header
	class="mb-8 flex items-center justify-between rounded-xl border border-card py-4 shadow-sm md:px-8"
>
	<a href="/" title="Home" class={buttonVariants({ variant: 'ghost' })}>This is not AI</a>
	<nav class="space-x-4">
		{#each SECTIONS as SECTION}
			<a href={SECTION.href} title={SECTION.title} class={buttonVariants({ variant: 'ghost' })}
				>{SECTION.title}</a
			>
		{/each}
	</nav>
	<nav class="space-x-4">
		{#each SOCIALS as SOCIAL}
			<a href={SOCIAL.href} title={SOCIAL.title} class={buttonVariants({ variant: 'default' })}
				>{SOCIAL.title}</a
			>
		{/each}
	</nav>
</header>
