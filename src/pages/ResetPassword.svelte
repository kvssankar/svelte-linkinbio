<script>
  import { check, reset } from "../actions/User";
  import Alert from "../components/Alert.svelte";
  let display = true;
  let status = -1;
  let mssg = "";
  let email = "";
  let otp = "";
  let password = "";
  const rpass = async (e) => {
    e.preventDefault();
    let yes;
    if (display) yes = await reset(email);
    else yes = await check(email, otp, password);
    mssg = yes.mssg;
    status = yes.status;
    if (yes.status == 0) {
      display = false;
    }
  };
</script>

<div class="main d-flex justify-content-center w-100">
  <main class="content d-flex p-0">
    <div class="container d-flex flex-column">
      <div class="row h-100">
        <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
          <div class="d-table-cell align-middle">
            <div class="text-center mt-4">
              <h1 class="h2">Reset password</h1>
              <p class="lead">Enter your email to reset your password.</p>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="m-sm-4">
                  <form on:submit={rpass}>
                    {#if display}
                      <div class="form-group">
                        <label for="">Email</label>
                        <input
                          class="form-control form-control-lg"
                          type="email"
                          bind:value={email}
                          placeholder="Enter your email"
                        />
                      </div>
                      <div class="text-center mt-3">
                        <button class="btn btn-lg btn-primary"
                          >Send email</button
                        >
                      </div>
                    {:else}
                      <div class="form-group">
                        <label for="">Enter OTP</label>
                        <input
                          class="form-control form-control-lg"
                          type="text"
                          bind:value={otp}
                          placeholder="Enter Otp"
                        />
                      </div>
                      <div class="form-group">
                        <label for="">Enter new password</label>
                        <input
                          class="form-control form-control-lg"
                          type="password"
                          bind:value={password}
                          placeholder=".........."
                        />
                      </div>
                      <div class="text-center mt-3">
                        <button class="btn btn-lg btn-primary"
                          >Change Password</button
                        >
                      </div>
                    {/if}
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

<Alert {status} {mssg} />
