<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from './ui/button/button.svelte';
	import Input from './ui/input/input.svelte';
	import Label from './ui/label/label.svelte';
	import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';
	import { toast } from 'svelte-sonner';
	import { m } from '$lib/paraglide/messages.js';

	let selectedType: 'artist' | 'developer' | 'sponsor' | 'other' | undefined = $state(undefined);
	let loading = $state(false);
</script>

<h3 class="mt-4 mb-2 text-xl font-semibold">
	{m.register_form_heading()}
</h3>
<form
	class="flex flex-col"
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
	<Label for="email" class="mt-4 mb-2">{m.register_form_label_1()}</Label>
	<Input
		type="email"
		required
		id="email"
		name="email"
		placeholder={m.register_form_input_1()}
		autocomplete="off"
		disabled={loading}
	/>
	<Label for="type" class="mt-4 mb-2">{m.register_form_label_2()}</Label>
	<Select bind:value={selectedType} type="single" name="type" required disabled={loading}>
		<SelectTrigger>
			{selectedType
				? selectedType.charAt(0).toUpperCase() + selectedType.slice(1)
				: m.register_form_select()}
		</SelectTrigger>
		<SelectContent>
			<SelectItem value="artist">{m.register_form_select_option_1()}</SelectItem>
			<SelectItem value="developer">{m.register_form_select_option_2()}</SelectItem>
			<SelectItem value="sponsor">{m.register_form_select_option_3()}</SelectItem>
			<SelectItem value="other">{m.register_form_select_option_4()}</SelectItem>
		</SelectContent>
	</Select>
	<Button class="mt-4" disabled={loading} type="submit">
		{#if loading}{m.register_form_btn_loading()}{:else}{m.register_form_btn()}{/if}
	</Button>
</form>
