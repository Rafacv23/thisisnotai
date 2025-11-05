<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from './ui/button/button.svelte';
	import Input from './ui/input/input.svelte';
	import Label from './ui/label/label.svelte';
	import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';
	import { toast } from 'svelte-sonner';

	let selectedType: 'artist' | 'developer' | 'sponsor' | undefined = $state(undefined);
	let loading = $state(false);
</script>

<form
	method="POST"
	action="?/register"
	use:enhance={() => {
		loading = true;

		return async ({ result, update }) => {
			await update();
			loading = false;

			// Handle feedback from server
			if (result.type === 'success') {
				// Show success toast
				toast.success('Successfully registered!');
			} else {
				// Show error toast (fallback if type is not 'success')
				toast.error('Registration failed. Please try again.');
			}
		};
	}}
>
	<Label for="email">Email address</Label>
	<Input
		type="email"
		required
		id="email"
		name="email"
		placeholder="you@example"
		autocomplete="off"
		disabled={loading}
	/>
	<Select bind:value={selectedType} type="single" name="type" required disabled={loading}>
		<SelectTrigger>
			{selectedType ? selectedType.charAt(0).toUpperCase() + selectedType.slice(1) : 'Select type'}
		</SelectTrigger>
		<SelectContent>
			<SelectItem value="artist">Artist</SelectItem>
			<SelectItem value="developer">Developer</SelectItem>
			<SelectItem value="sponsor">Sponsor</SelectItem>
		</SelectContent>
	</Select>
	<small>When the app is available whe are going to send you and email.</small>
	<Button disabled={loading} type="submit">
		{#if loading}Registering...{:else}Register{/if}
	</Button>
</form>
