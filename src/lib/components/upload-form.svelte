<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
	import { Circle, CloudUpload } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';

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
	<Label class="mt-4 mb-2">Your Name*</Label>
	<Input
		placeholder="Your name"
		disabled={loading}
		name="name"
		type="text"
		autocomplete="off"
		required
	/>
	<Label class="mt-4 mb-2">Your Email*</Label>
	<Input
		placeholder="Your email"
		disabled={loading}
		name="email"
		type="email"
		autocomplete="off"
		required
	/>
	<Label class="mt-4 mb-2">What do you do?*</Label>
	<Select bind:value={selectedType} type="single" name="type" required disabled={loading}>
		<SelectTrigger disabled={loading}>
			{selectedType
				? selectedType.charAt(0).toUpperCase() + selectedType.slice(1)
				: 'Select your role'}
		</SelectTrigger>
		<SelectContent>
			<SelectItem value="drawer">Drawer</SelectItem>
			<SelectItem value="writer">Writer</SelectItem>
			<SelectItem value="video">Video</SelectItem>
			<SelectItem value="music">Music</SelectItem>
			<SelectItem value="other">Other</SelectItem>
		</SelectContent>
	</Select>
	<Label class="mt-4 mb-2">Tell us something about you</Label>
	<Textarea class="resize-none" name="bio" placeholder="Your Art Description" rows={5} />
	<Button disabled={loading} class="mt-4" type="submit">
		{#if loading}
			<Circle class="mr-2 animate-spin" /> Sending...
		{:else}
			<CloudUpload /> Send
		{/if}
	</Button>
</form>
