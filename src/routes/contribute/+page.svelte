<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
</script>

<h1>Contribute</h1>
<p>
	Are you and artist? Do you know someone that can be here? Text us and our team is going to check
	it.
</p>

<form action="" class="mt-8 flex flex-col gap-4">
	<Label for="name">Name</Label>
	<Input type="text" placeholder="Your name" />
	<Label for="email">Email</Label>
	<Input type="email" placeholder="Your email" />
	<Label for="message">Message</Label>
	<Textarea placeholder="Your message" />
	<Button type="submit">Send</Button>
</form>
