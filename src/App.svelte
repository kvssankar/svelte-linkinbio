<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
  import ResetPassword from "./pages/ResetPassword.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/login" component={Login} />
    <Route path="/resetpassword" component={ResetPassword} />
  </div>
</Router>
