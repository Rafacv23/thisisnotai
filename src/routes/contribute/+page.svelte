<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
</script>

<h1>Contribute</h1>
<p>
	Are you and artist? Do you know someone that can be here? Text us and our team is going to check
	it.
</p>

<form action="" class="mt-8 flex flex-col gap-4">
	<Label for="name">Name</Label>
	<Input type="text" name="name" placeholder="Your name" />
	<Label for="email">Email</Label>
	<Input type="email" name="email" placeholder="Your email" />
	<Label for="category">Category</Label>
	<Select name="category">
		<SelectTrigger>Select a category</SelectTrigger>
		<SelectContent>
			<SelectItem value="artist">Artist</SelectItem>
			<SelectItem value="musician">Musician</SelectItem>
			<SelectItem value="writer">Writer</SelectItem>
			<SelectItem value="journalist">Journalist</SelectItem>
			<SelectItem value="photographer">Photographer</SelectItem>
			<SelectItem value="other">Other</SelectItem>
		</SelectContent>
	</Select>
	<Label for="message">Message</Label>
	<Textarea placeholder="Your message" />
	<Button type="submit">Send</Button>
</form>
