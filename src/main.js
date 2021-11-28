import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		greeting: 'gm'
	}
});

export default app;