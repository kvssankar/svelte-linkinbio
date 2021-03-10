<script>
  import { link } from "svelte-routing";
  const push = () => history.push("/create");
</script>

<body>
  <nav class="navbar navbar-expand-md navbar-light landing-navbar">
    <div class="container">
      <a class="navbar-brand landing-brand" href="/">
        <img src="/img/link.png" alt="LinkInBio" height="34px" />
        LinkInBio
      </a>

      <ul class="navbar-nav ml-auto">
        <!-- <li class="nav-item active d-none d-lg-inline-block">
            <a
              class="nav-link text-lg px-lg-3"
              href="https://appstack-bs5.bootlab.io/"
              target="_blank"
              >Bootstrap 5 <i
                class="mt-n1 ml-1"
                data-feather="external-link"
              /></a
            >
          </li>
          <li class="nav-item active d-none d-md-inline-block">
            <a
              class="nav-link text-lg px-lg-3"
              href="dashboard-default.html"
              target="_blank">Live Preview</a
            >
          </li> -->
        <li class="nav-item active">
          <a
            class="nav-link text-lg px-lg-3"
            href="docs-introduction.html"
            target="_blank"
          >
            <span class="d-inline-block d-md-none">Support</span>
            <span class="d-none d-md-inline-block">Contribute</span>
          </a>
        </li>
        <!-- <li class="nav-item active d-none d-md-inline-block">
            <a
              class="nav-link text-lg px-lg-3"
              href="mailto:support@bootlab.io"
              target="_blank">Support</a
            >
          </li> -->
      </ul>
      <a
        href="https://themes.getbootstrap.com/product/appstack-responsive-admin-template/"
        target="_blank"
        class="btn btn-lg btn-success my-2 my-sm-0 ml-3">GitHub</a
      >
    </div>
  </nav>

  <section class="landing-intro landing-bg pt-5 pt-lg-6 pb-5 pb-lg-7">
    <div class="landing-intro-content container">
      <div class="row align-items-center">
        <div class="col-lg-5 mx-auto">
          <span class="badge badge-soft-primary p-1">v2.0.0</span>

          <h1 class="my-4">Add multiple links in your Instagram bio</h1>

          <p class="text-lg">
            Are you tried of changing the link in your instagram bio ?? No more
            !! <br /> Display all your links in one page with a personalized
            url.
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
</body>
