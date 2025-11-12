<script>
	import { Mouse, PersonStanding, Hand, CloudUploadIcon, Brush } from '@lucide/svelte';
	import Badge from './ui/badge/badge.svelte';
	import { buttonVariants } from './ui/button';
	import { m } from '$lib/paraglide/messages.js';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<hero
	class="mb-16 flex h-dvh flex-col items-center justify-center gap-4 rounded-xl
		bg-foreground text-center text-background shadow-lg"
>
	{#if animate}
		<div transition:fly={{ duration: 1000 }} class="flex flex-col items-center gap-4">
			<Badge><PersonStanding /> {m.hero_badge()}</Badge>
			<h1>{m.h1()}</h1>
			<h2 class="mb-4 px-8">
				{m.h2()}
			</h2>
			<nav class="mb-8 flex flex-row items-center space-x-4">
				<a href="/contribute" class={buttonVariants({ variant: 'default' })}
					><CloudUploadIcon /> {m.hero_join_btn()}</a
				>
				<a href="/artists" class={buttonVariants({ variant: 'secondary' })}>
					<Brush />
					{m.hero_github_btn()}
				</a>
			</nav>
			<Mouse class="hidden animate-bounce lg:block" />
			<Hand class="block animate-bounce lg:hidden" />
		</div>
	{/if}
</hero>
