<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import {
		DropdownMenu,
		DropdownMenuTrigger,
		DropdownMenuLabel,
		DropdownMenuItem,
		DropdownMenuContent,
		DropdownMenuGroup
	} from '$lib/components/ui/dropdown-menu';
	import { m } from '$lib/paraglide/messages';
	import { Languages } from '@lucide/svelte';
	import { buttonVariants } from './ui/button';
</script>

<DropdownMenu>
	<DropdownMenuTrigger class={buttonVariants({ variant: 'secondary' })}
		><Languages />{m.footer_lang_btn()}</DropdownMenuTrigger
	>
	<DropdownMenuContent>
		<DropdownMenuGroup>
			<DropdownMenuLabel>Select Language</DropdownMenuLabel>
			<DropdownMenuItem onclick={() => setLocale('en')}>English</DropdownMenuItem>
			<DropdownMenuItem onclick={() => setLocale('es')}>Spanish</DropdownMenuItem>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
