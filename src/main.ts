import { mount } from 'svelte';
import App from './App.svelte';

const app = mount(App, {
    target: document.body, // Specify the target DOM element
    props: {
       
    }
});

export default app;