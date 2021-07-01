<script>
  import { link } from "svelte-routing";
  import moment from "moment";
  import { userStore } from "../store/User.js";
  import NavBar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import { deletelink, getinfo } from "../actions/User.js";
  import { onDestroy, onMount } from "svelte";
  let user = {};
  let clicks = 0;
  onMount(() => {
    getinfo();
  });
  const unsubscribe = userStore.subscribe(async (data) => {
    console.log(user);
    user = data.user;
    if (user.links)
      for (var i = 0; i < user.links.length; i++) {
        clicks = clicks + user.links[i].clicks;
      }
  });
  onDestroy(unsubscribe);
  let status = -1;
  let mssg = "";
  const deleteLink = async (a) => {
    if (!confirm("Are you sure you want to delete this ?")) {
      return;
    }
    let res = await deletelink(a);
    status = res.status;
    mssg = res.mssg;
  };
  const editlink = async (a) => {
    await userStore.update((currUser) => {
      console.log("updated");
      return { token: currUser.token, user: currUser.user, link: a };
    });
    document.location.href = "/editlink";
  };
  function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
</script>

<div class="main">
  <NavBar {user} />

  <main class="content">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="card">
            <div class="card-body h-100">
              {#each user.links as link}
                {#if link.image != null && link.image != ""}
                  <div class="media">
                    <div class="media-body">
                      <small class="float-right text-navy"
                        >{moment(link.created_date)
                          .startOf("hour")
                          .fromNow()}</small
                      >
                      <p class="mb-2"><strong>{link.title}</strong></p>
                      <p>
                        {link.description}
                      </p>

                      <div
                        class="row no-gutters mt-1"
                        style="display:flex;flex-wrap:wrap"
                      >
                        <img
                          src={link.image}
                          style="margin:10px"
                          height="200px"
                          alt={link.title}
                        />
                      </div>

                      <small class="text-muted"
                        >{moment(link.created_date).calendar()}</small
                      ><br />
                      <a href={link.url} class="btn btn-sm btn-success mt-1"
                        >Go to link</a
                      >
                      <button
                        on:click={() => {
                          editlink(link);
                        }}
                        class="btn btn-sm btn-primary mt-1">Edit</button
                      >
                      <button
                        on:click={() => {
                          deleteLink(link._id);
                        }}
                        class="btn btn-sm btn-danger mt-1">Delete</button
                      >
                    </div>
                  </div>
                {:else}
                  <div class="media">
                    <div class="media-body">
                      <small class="float-right text-navy"
                        >{moment(link.created_date)
                          .startOf("hour")
                          .fromNow()}</small
                      >
                      <p class="mb-2"><strong>{link.title}</strong></p>
                      <p>
                        {link.description}
                      </p>
                      <small class="text-muted"
                        >{moment(link.created_date).calendar()}</small
                      ><br />
                      <a href={link.url} class="btn btn-sm btn-success mt-1"
                        >Go to link</a
                      >
                      <a href={link.url} class="btn btn-sm btn-primary mt-1"
                        >Edit</a
                      >
                      <button
                        on:click={() => {
                          deleteLink(link._id);
                        }}
                        class="btn btn-sm btn-danger mt-1">Delete</button
                      >
                    </div>
                  </div>
                {/if}
                <hr />
              {:else}
                <div
                  style="display:flex;flex-direction:column;justify-content:center;align-items:center"
                >
                  <img alt="" src="img/upload.png" width="300px" />
                  <h1>Upload your first link</h1>
                  <a href="/addlink" class="btn btn-primary">Add Link</a>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div class="card mb-3">
            <div class="card-body text-center">
              <img
                src={user.dp}
                alt={user.instagram}
                class="img-fluid rounded-circle mb-2"
                width="128"
                height="128"
              />
              <h4 class="card-title mb-0">{user.instagram}</h4>

              <input
                type="text"
                value={`https://lnkinbio.herokuapp.com/${user.instagram}`}
                id="myInput"
                style="border:none;width:100%;text-align:center;margin:5px;pointer-events:none;"
              />
              <div class="tooltip">
                <button
                  class="btn btn-sm btn-success"
                  on:click={myFunction}
                  on:mouseout={outFunc}
                >
                  <span class="tooltiptext" id="myTooltip"
                    >Copy to clipboard</span
                  >
                  Copy text
                </button>
              </div>
              <div class="text-muted mb-2">
                Links Uploaded : {user.total_links || 0}
              </div>

              <div>
                <a
                  class="btn btn-primary btn-sm"
                  use:link
                  replace
                  href="/addlink">Add link</a
                >
                <a
                  class="btn btn-danger btn-sm"
                  target="_blank"
                  href={"https://www.instagram.com/" + user.instagram + "/"}
                  ><span data-feather="instagram" /> Instagram</a
                >
              </div>
            </div>
          </div>

          <div class="card mb-3">
            <div class="card-header">
              <div class="card-actions float-right">
                <div class="dropdown show">
                  <a
                    href="/dashboard"
                    data-toggle="dropdown"
                    data-display="static"
                  >
                    <i class="align-middle" data-feather="more-horizontal" />
                  </a>

                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="/dashboard">View all</a>
                  </div>
                </div>
              </div>
              <h5 class="card-title mb-0">Analytics</h5>
            </div>
            <div class="card-body">
              <div class="media">
                <div class="media-body">
                  <p class="my-1"><strong>Total number of visits</strong></p>
                  <p class="text-info">{user.views}</p>
                </div>
              </div>

              <hr class="my-2" />

              <div class="media">
                <div class="media-body">
                  <p class="my-1"><strong>Total number of clicks</strong></p>
                  <p class="text-warning">{clicks}</p>
                </div>
              </div>

              <hr class="my-2" />

              <!-- <div class="media">
                <div class="media-body">
                  <p class="my-1"><strong>Total number of likes</strong></p>
                  <p class="text-danger">456</p>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</div>

<style>
  .tooltip {
    position: relative;
    display: inline-block;
    opacity: 1;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 140px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -75px;
    transition: opacity 0.3s;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
</style>
