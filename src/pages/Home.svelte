<script>
  import { link } from "svelte-routing";
  import HomeNav from "../components/HomeNav.svelte";
  import Footer from "../components/Footer.svelte";
  const push = () => history.push("/create");
</script>

<HomeNav/>

<section class="landing-intro landing-bg pt-5 pt-lg-6 pb-5 pb-lg-7">
  <div class="landing-intro-content container">
    <div class="row align-items-center">
      <div class="col-lg-5 mx-auto">
        <span class="badge badge-soft-primary p-1">v2.0.0</span>

        <h1 class="my-4">Add multiple links in your Instagram bio</h1>

        <p class="text-lg">
          Are you tried of changing the link in your instagram bio ?? No more !! <br
          />
          Display all your links in one page with a personalized url.
          <br /> This website has personalized dashboard to add, delete and edit
          your links.
        </p>

        <div class="my-4">
          <div class="d-inline-block mr-3">
            <h2 class="text-dark">1k+</h2>
            <span class="text-muted">Users</span>
          </div>
          <div class="d-inline-block mr-3">
            <h2 class="text-dark">3.5k+</h2>
            <span class="text-muted">Links added</span>
          </div>
          <div class="d-inline-block">
            <h2 class="text-dark">45k+</h2>
            <span class="text-muted">Visits</span>
          </div>
        </div>
        <div class="my-4">
          <a
            href="/register"
            use:link
            replace
            class="btn btn-primary btn-lg mr-1">Create</a
          >
          <a
            href="/login"
            use:link
            on:click={push}
            replace
            class="btn btn-outline-primary btn-lg mr-1">Login</a
          >
        </div>
      </div>
      <div class="col-lg-7 d-none d-lg-flex mx-auto text-center">
        <div class="landing-intro-screenshot pb-3">
          <img
            src="img/screenshots/mixed.jpg"
            alt="Dark/Light Bootstrap Admin Template"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<Footer/>