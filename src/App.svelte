<script lang="ts">
  import { fade } from 'svelte/transition';

  let show = false;
  $: style = `width: 100px; height: 100px; display: block; margin: 0 auto;`;

  // Show the logo and text after a short delay, then hide it after 3 seconds
  setTimeout(() => {
    show = true; // Trigger fade-in
    setTimeout(() => {
      show = false; // Trigger fade-out
    }, 3000); // Show for 3 seconds
  }, 500); // Initial delay for fade-in
</script>

<main>
  {#if show}
    <div class="logo-container" in:fade={{ duration: 1000 }} out:fade={{ duration: 1000 }}>
      <img src="/pngegg.png" alt="Restaurant Logo" style={style} />
      <h1 class="text">Welcome to Restaurant</h1>
      
    </div>
  {/if}
</main>

<style>
   main {
    display: flex;
    justify-content: center; /* Centers horizontally */
    align-items: center; /* Centers vertically */
    height: 100vh; /* Full viewport height */
    background-color: #8b1c1c;
    margin: 0;
  }

  .logo-container {
    text-align: center;
    margin-bottom: 1em;
  }

  .text {
    font-size: 1.8em;
    color: #ff3e00;
  }
</style>

