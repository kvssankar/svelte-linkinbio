<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
  import Register from "./pages/Register.svelte";
  import ResetPassword from "./pages/ResetPassword.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import AddLink from "./pages/AddLink.svelte";
  import EditLink from "./pages/EditLink.svelte";
  import Display from "./pages/Display.svelte";
  import Page404 from "./pages/Page404.svelte";
  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/resetpassword" component={ResetPassword} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/addlink" component={AddLink} />
    <Route path="/editlink" component={EditLink} />
    <Route path="/notfound" component={Page404} />
    <Route path="/:name" let:params>
      <Display name={params.name} />
    </Route>
    <Route path="*" component={Page404} />
  </div>
</Router>
