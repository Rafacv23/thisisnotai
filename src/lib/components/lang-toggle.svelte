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
</script>

<DropdownMenu>
	<DropdownMenuTrigger>{m.footer_lang_btn()}</DropdownMenuTrigger>
	<DropdownMenuContent>
		<DropdownMenuGroup>
			<DropdownMenuLabel>Select Language</DropdownMenuLabel>
			<DropdownMenuItem onclick={() => setLocale('en')}>English</DropdownMenuItem>
			<DropdownMenuItem onclick={() => setLocale('es')}>Spanish</DropdownMenuItem>
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
