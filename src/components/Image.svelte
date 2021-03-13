<script>
  export let src;
  export let alt;
  import { onMount } from "svelte";
  let loaded = false;
  let thisImage;
  onMount(() => {
    thisImage.onload = () => {
      loaded = true;
    };
  });
</script>

<img
  {src}
  {alt}
  class:loaded
  bind:this={thisImage}
  class="img-fluid rounded-circle"
  width="132"
  height="132"
  loading="lazy"
/>
