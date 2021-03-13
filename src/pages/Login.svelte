<script>
  import { link } from "svelte-routing";
  import axios from "axios";
  import HomeNav from "../components/HomeNav.svelte";
  import Footer from "../components/Footer.svelte";
  import Alert from "../components/Alert.svelte";
  import { userStore } from "../store/User.js";
  import { AvatarGenerator } from "random-avatar-generator";
  const generator = new AvatarGenerator();

  let user = {
    password: "",
    instagram: "",
  };
  let dp = "img/avatars/avatar.jpg";
  let loading = false;
  function getPhoto(a) {
    loading = true;
    dp = generator.generateRandomAvatar();
    loading = false;
  }
  let status = -1;
  let mssg = "";
  const login = (e) => {
    e.preventDefault();
    fetch("/api/user/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(user),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        userStore.update((currUser) => {
          return { token: data.token, user: data.user };
        });
        document.location.href = "/dashboard";
      })
      .catch((error) => {
        status = 1;
        mssg = error.mssg;
      });
  };
</script>

<HomeNav />
<div class="main d-flex justify-content-center w-100">
  <main class="content d-flex p-0">
    <div class="container d-flex flex-column">
      <div class="row h-100">
        <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
          <div class="align-middle">
            <div class="text-center mt-4">
              <h1 class="h2">Welcome back</h1>
              <p class="lead">Sign in to your account to continue</p>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="m-sm-4">
                  <div class="text-center">
                    {#if loading}
                      <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    {:else}
                      <img
                        src={dp}
                        alt="Not found user"
                        class="img-fluid rounded-circle"
                        width="132"
                        height="132"
                      />
                    {/if}
                  </div>
                  <form on:submit={login}>
                    <div class="form-group">
                      <label for="">Instagram</label>
                      <input
                        on:change={() => {
                          getPhoto(user.instagram);
                        }}
                        class="form-control form-control-lg"
                        type="text"
                        bind:value={user.instagram}
                        placeholder="kvssankar"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Password</label>
                      <input
                        class="form-control form-control-lg"
                        type="password"
                        bind:value={user.password}
                        placeholder="Enter your password"
                      />
                      <small>
                        <a use:link replace href="/resetpassword"
                          >Forgot password?</a
                        >
                      </small>
                    </div>
                    <div>
                      <div
                        class="custom-control custom-checkbox align-items-center"
                      >
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          value="remember-me"
                          name="remember-me"
                          checked
                        />
                        <label for="" class="custom-control-label text-small"
                          >Remember me next time</label
                        >
                      </div>
                    </div>
                    <div class="text-center mt-3">
                      <button class="btn btn-lg btn-primary">Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
<Alert {mssg} {status} />
<Footer />
