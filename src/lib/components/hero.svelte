<script>
	import { Github, Mouse, Pencil, PersonStanding } from '@lucide/svelte';
	import Badge from './ui/badge/badge.svelte';
	import { buttonVariants } from './ui/button';
</script>

<hero
	class="mb-16 flex h-dvh flex-col items-center justify-center gap-4 rounded-b-xl
		bg-foreground text-center text-background shadow-lg"
>
	<Badge><PersonStanding /> Not AI Allowed</Badge>
	<h1>Celebrating 100% Human Creativity</h1>
	<h2 class="mb-4 px-8">
		Discover, share, and support ideas made by real people—no AI, just authentic human imagination.
	</h2>
	<nav class="mb-8 flex flex-row items-center space-x-4">
		<a href="#why" class={buttonVariants({ variant: 'default' })}><Pencil /> Join us</a>
		<a
			href="https://github.com/rafacv23/thisisnotai"
			target="_blank"
			rel="noreferrer"
			class={buttonVariants({ variant: 'secondary' })}
		>
			<Github />
			Star on Github</a
		>
	</nav>
	<Mouse class="animate-bounce" />
</hero>
