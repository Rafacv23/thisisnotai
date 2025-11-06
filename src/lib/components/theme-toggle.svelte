<script lang="ts">
	import { SunMoon } from '@lucide/svelte';
	import { setMode } from 'mode-watcher';
	import {
		DropdownMenu,
		DropdownMenuTrigger,
		DropdownMenuLabel,
		DropdownMenuItem,
		DropdownMenuContent,
		DropdownMenuGroup
	} from '$lib/components/ui/dropdown-menu';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { m } from '$lib/paraglide/messages';
</script>

<DropdownMenu>
	<DropdownMenuTrigger class={buttonVariants({ variant: 'secondary' })}
		><SunMoon />{m.footer_theme_toggle_btn()}</DropdownMenuTrigger
	>
	<DropdownMenuContent>
		<DropdownMenuGroup>
			<DropdownMenuLabel>Select Theme</DropdownMenuLabel>
			<DropdownMenuItem onclick={() => setMode('light')}>Light</DropdownMenuItem>
			<DropdownMenuItem onclick={() => setMode('dark')}>Dark</DropdownMenuItem>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
