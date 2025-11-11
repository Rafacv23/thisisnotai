<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
	import { CloudUpload } from '@lucide/svelte';

	let loading = $state(false);
	let selectedType: 'drawer' | 'writer' | 'video' | 'music' | 'other' | undefined =
		$state(undefined);
</script>

<form class="flex flex-col">
	<Label class="mt-4 mb-2">Your Name*</Label>
	<Input placeholder="Your name" type="text" autocomplete="off" required />
	<Label class="mt-4 mb-2">Your Email*</Label>
	<Input placeholder="Your email" type="email" autocomplete="off" required />
	<Label class="mt-4 mb-2">What do you do?*</Label>
	<Select bind:value={selectedType} type="single" name="type" required disabled={loading}>
		<SelectTrigger>
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
	<Textarea class="resize-none" placeholder="Your Art Description" rows={5} />
	<Button class="mt-4"><CloudUpload /> Send</Button>
</form>
