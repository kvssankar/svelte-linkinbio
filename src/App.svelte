<script>
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
  import ResetPassword from "./pages/ResetPassword.svelte";

  const routes = {
    "/": Home,

    "/login": Login,

    // '*': NotFound,
  };
</script>

<Router {routes} />
