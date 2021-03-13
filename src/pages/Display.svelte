<script>
  import Card from "../components/Card.svelte";
  import HomeNav from "../components/HomeNav.svelte";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";
  import { displayuser } from "../actions/User";
  import Loading from "../components/Loading.svelte"
  export let name;
  let user;
  let links = [];
  onMount(async () => {
    console.log(name);
    user = await displayuser(name);
    if (user === null) document.location.href = "notfound";
    links = user.links;
    console.log(user);
  });
</script>
{#if user != null}
<div class="main">
<HomeNav/>
<div class="content">
    <div class="row" style="justify-content:center">
      <div class="card mb-2" style="min-width:300px">
        <div class="card-header">
          <h5 class="card-title mb-0">Profile Details</h5>
        </div>
        <div class="card-body text-center">
          <img
            src={user.dp}
            alt={user.instagram}
            class="img-fluid rounded-circle mb-2"
            width="128"
            height="128"
          />
          <h5 class="card-title mb-0">{user.instagram}</h5>
          <div class="text-muted mb-2">Links : {user.total_links}</div>

          <div>
            <a class="btn btn-danger btn-sm" href={"https://www.instagram.com/" + user.instagram + "/"}><span data-feather="instagram" />Instagram</a>
          </div>
        </div>
      </div>
    </div>
  <div class="row">

    {#each links as link}
      <Card {link} />
   
    {/each}
  </div>

</div>
<Footer/>
</div>
{:else}
<div class="row">
  <div style="margin-left:50%;margin-top:50vh;transform:translate(-50%,-50%)">
    <Loading/>
  </div>
</div>
{/if}
