<script lang="ts">
	import Button from './ui/button/button.svelte';
	import Input from './ui/input/input.svelte';
	import Label from './ui/label/label.svelte';
</script>

<form action="">
	<Label for="email">Email address</Label>
	<Input type="email" id="email" name="email" placeholder="you@example" />
	<small>When the app is available whe are going to send you and email.</small>
	<Button type="submit">Register</Button>
</form>
