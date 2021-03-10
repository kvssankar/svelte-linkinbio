<script>
  export let link;
</script>

<div class="card">
  {#if link.image !== null || link.image !== ""}
    <img class="card-img-top" src={link.image} alt="Not available" />
  {/if}
  <div class="card-header">
    <h5 class="card-title mb-0">{link.title}</h5>
  </div>
  <div class="card-body">
    <p class="card-text">
      {link.description}
    </p>
    <a href={link.url} class="btn btn-primary">Click Here</a>
  </div>
</div>
