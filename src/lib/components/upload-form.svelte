<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
	import { Circle, CloudUpload } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';
	import { m } from '$lib/paraglide/messages';

	let loading = $state(false);
	let selectedType: 'drawer' | 'writer' | 'video' | 'music' | 'other' | undefined =
		$state(undefined);
</script>

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
				toast.success('Successfully submitted! We will review your application soon.');
			} else {
				// Show error toast (fallback if type is not 'success')
				toast.error('Submission failed. Please try again.');
			}
		};
	}}
>
	<Label class="mt-4 mb-2">{m.form_name()}</Label>
	<Input
		placeholder={m.form_name()}
		disabled={loading}
		name="name"
		type="text"
		autocomplete="off"
		required
	/>
	<Label class="mt-4 mb-2">{m.form_email()}</Label>
	<Input
		placeholder={m.form_email()}
		disabled={loading}
		name="email"
		type="email"
		autocomplete="off"
		required
	/>
	<Label class="mt-4 mb-2">{m.form_art_type()}</Label>
	<Select bind:value={selectedType} type="single" name="type" required disabled={loading}>
		<SelectTrigger disabled={loading}>
			{selectedType
				? selectedType.charAt(0).toUpperCase() + selectedType.slice(1)
				: m.form_art_type_placeholder()}
		</SelectTrigger>
		<SelectContent>
			<SelectItem value="drawer">{m.form_art_type_option_1()}</SelectItem>
			<SelectItem value="writer">{m.form_art_type_option_2()}</SelectItem>
			<SelectItem value="video">{m.form_art_type_option_3()}</SelectItem>
			<SelectItem value="music">{m.form_art_type_option_4()}</SelectItem>
			<SelectItem value="other">{m.form_art_type_option_5()}</SelectItem>
		</SelectContent>
	</Select>
	<Label class="mt-4 mb-2">{m.form_textarea()}</Label>
	<Textarea class="resize-none" name="bio" placeholder={m.form_textarea()} rows={5} />
	<Button disabled={loading} class="mt-4" type="submit">
		{#if loading}
			<Circle class="mr-2 animate-spin" /> {m.send_btn_loading()}
		{:else}
			<CloudUpload /> {m.send_btn()}
		{/if}
	</Button>
</form>
