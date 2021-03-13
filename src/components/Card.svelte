<script>
  export let link;
</script>

<div class="col-12 col-md-6 col-lg-4" style="margin-bottom:10px">
  <div class="card sankarcard">
    {#if link.image !== null && link.image !== ""}
      <img class="card-img-top" src={link.image} alt="Not available" />
    {/if}
    <div class="card-header">
      <h5 class="card-title mb-0">{link.title}</h5>
    </div>
    <hr class="mb-0">
    <div class="card-body">
      <p class="card-text">
        {link.description}
      </p>
      <a href={link.url} class="btn btn-primary">Click Here</a>
    </div>
  </div>
</div>
