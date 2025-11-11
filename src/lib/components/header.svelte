<script lang="ts">
	import { BookOpen, Brush, CloudUpload, Github, Menu } from '@lucide/svelte';
	import { buttonVariants } from './ui/button';
	import {
		DropdownMenu,
		DropdownMenuTrigger,
		DropdownMenuContent,
		DropdownMenuItem
	} from '$lib/components/ui/dropdown-menu/index';

	const SECTIONS = [
		{
			title: 'Artists',
			href: '/artists',
			icon: Brush
		},
		{
			title: 'Contribute',
			href: '/contribute',
			icon: CloudUpload
		},
		{
			title: 'About',
			href: '/about',
			icon: BookOpen
		}
	];
</script>

<header
	class="sticky top-2 mx-auto mt-2 flex w-full max-w-3xl justify-between rounded-xl bg-background/80 px-4 py-4 shadow-sm backdrop-blur-2xl"
>
	<a href="/" title="Home" class={buttonVariants({ variant: 'ghost' })}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-signature-icon lucide-signature"
			><path
				d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"
			/><path d="M3 21h18" /></svg
		>
		thisisnotai.xyz</a
	>

	<DropdownMenu>
		<DropdownMenuTrigger class={buttonVariants({ variant: 'ghost', class: 'md:hidden' })}>
			<Menu />
		</DropdownMenuTrigger>
		<DropdownMenuContent class="mr-4">
			{#each SECTIONS as SECTION (SECTION.href)}
				<DropdownMenuItem>
					<a href={SECTION.href} title={SECTION.title} class="flex items-center space-x-2">
						<SECTION.icon />
						<span>{SECTION.title}</span>
					</a>
				</DropdownMenuItem>
			{/each}
		</DropdownMenuContent>
	</DropdownMenu>

	<nav class="hidden space-x-4 md:flex">
		{#each SECTIONS as SECTION (SECTION.href)}
			<a href={SECTION.href} title={SECTION.title} class={buttonVariants({ variant: 'ghost' })}>
				<SECTION.icon />
				{SECTION.title}</a
			>
		{/each}
	</nav>
	<a
		href="/github"
		title="Give us a star on GitHub"
		class={buttonVariants({ variant: 'default', class: 'hidden md:flex' })}
	>
		<Github />
		GitHub</a
	>
</header>
