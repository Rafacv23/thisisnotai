<script lang="ts">
	import ToggleTheme from './theme-toggle.svelte';
	import { Github } from '@lucide/svelte';
	import { buttonVariants } from './ui/button';
	import LangToggle from './lang-toggle.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<footer
	class="mt-24 flex flex-col items-center gap-4 rounded-t-xl bg-primary px-8 py-6 text-primary-foreground shadow-lg"
>
	<div class="flex flex-col items-center gap-2">
		<h4 class="text-xl font-semibold tracking-tight">thisisnotai.xyz</h4>
		<p class="inline-flex items-center gap-2 text-sm text-primary-foreground/80">
			{m.footer_p()}
		</p>
		<a
			href="https://github.com/rafacv23/thisisnotai"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="View source on GitHub"
			class={buttonVariants({ variant: 'default' })}
		>
			<Github />
			{m.footer_github_btn()}
		</a>
	</div>
	<div class="mt-4 flex w-full max-w-md items-center justify-between gap-4">
		<ToggleTheme />
		<div class="flex items-center gap-2">
			<!-- Placeholder for language switcher -->
			<LangToggle />
			<span class="text-sm">{m.footer_lang_btn()}</span>
		</div>
	</div>
</footer>
