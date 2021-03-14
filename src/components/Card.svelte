<script>
  export let link;
  export let name;
  import axios from "axios";
  const redirect = async () => {
    await axios
      .post("/api/user/clickadd", { instagram: name, _id: link._id })
      .then((res) => console.log("done"));
  };
</script>

<div class="col-12 col-md-6 col-lg-4" style="margin-bottom:10px">
  <div class="card sankarcard">
    {#if link.image !== null && link.image !== ""}
      <img class="card-img-top" src={link.image} alt="Not available" />
    {/if}
    <div class="card-header">
      <h5 class="card-title mb-0">{link.title}</h5>
    </div>
    <hr class="mb-0" />
    <div class="card-body">
      <p class="card-text">
        {link.description}
      </p>
      <a
        on:click={redirect}
        href={link.url}
        target="_blank"
        class="btn btn-primary">Visit</a
      >
    </div>
  </div>
</div>
