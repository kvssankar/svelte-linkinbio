<script>
  import Alert from "../components/Alert.svelte";
  import axios from "axios";
  import HomeNav from "../components/HomeNav.svelte";
  import Footer from "../components/Footer.svelte";
  import { userStore } from "../store/User.js";
  import { AvatarGenerator } from "random-avatar-generator";
  const generator = new AvatarGenerator();
  let dp =
    "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg";
  let user = {
    password: "",
    instagram: "",
    facebook: "",
    twitter: "",
    email: "",
    dp: "",
  };
  let loading = false;
  function getPhoto(a) {
    loading = true;
    dp = generator.generateRandomAvatar();
    loading = false;
  }
  let status = -1;
  let mssg = "";
  const register = (e) => {
    console.log(JSON.stringify(user));
    e.preventDefault();
    fetch("/api/user/register", {
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
        mssg = "Sussessfully registered";
        status = 0;
        userStore.update((currUser) => {
          return { token: data.token, user: data.user };
        });
        document.location.href = "/dashboard";
      })
      .catch((error) => {
        console.error("Error:", error);
        status = 1;
        mssg = "Something went wrong, please try again";
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
              <h1 class="h2">Get started</h1>
              <p class="lead">
                Start creating the best possible user experience for you
                followers.
              </p>
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
                  <form on:submit={register}>
                    <div class="form-group">
                      <label for="">Instagram Username</label>
                      <input
                        on:change={() => {
                          getPhoto(user.instagram);
                        }}
                        class="form-control form-control-lg"
                        type="text"
                        bind:value={user.instagram}
                        required
                        placeholder="kvssankar"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Email for recovery</label>
                      <input
                        class="form-control form-control-lg"
                        type="text"
                        bind:value={user.email}
                        required
                        placeholder="kvs.sankar001@gmail.com"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Facebook</label>
                      <input
                        class="form-control form-control-lg"
                        type="text"
                        bind:value={user.facebook}
                        placeholder="KvsSankarKumar"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Twitter</label>
                      <input
                        class="form-control form-control-lg"
                        type="text"
                        bind:value={user.twitter}
                        placeholder="KvsSankar1"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Password</label>
                      <input
                        class="form-control form-control-lg"
                        type="password"
                        bind:value={user.password}
                        required
                        placeholder="Enter password"
                      />
                    </div>
                    <div class="text-center mt-3">
                      <button type="submit" class="btn btn-lg btn-primary"
                        >Sign up</button
                      >
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
