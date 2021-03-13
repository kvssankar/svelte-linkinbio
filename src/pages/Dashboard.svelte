<script>
  import { link } from "svelte-routing";
  import moment from "moment";
  import { userStore } from "../store/User.js";
  import NavBar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import { deletelink } from "../actions/User.js";
  let user = {};
  const unsubscribe = userStore.subscribe((data) => {
    console.log(data);
    user = data.user;
  });
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
                  <a href="/dashboard" data-toggle="dropdown" data-display="static">
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
                  <p class="text-info">1234</p>
                </div>
              </div>

              <hr class="my-2" />

              <div class="media">
                <div class="media-body">
                  <p class="my-1"><strong>Total number of clicks</strong></p>
                  <p class="text-warning">3445</p>
                </div>
              </div>

              <hr class="my-2" />

              <div class="media">
                <div class="media-body">
                  <p class="my-1"><strong>Total number of likes</strong></p>
                  <p class="text-danger">456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</div>

//TODO : MAKE LINK ADD FORM paGE //TODO : MAKE update link page //TODO : MAKE
UPDATE PROFILE paGE //TODO : MAKE CLICKS LIKES FUNCTIONAL //TODO : MAKE
ANALYTICS PAGE //TODO : MAKE SHOW PAGE //TODO : MAKE /sankar URLS paGE //TODO :
MAKE help and privacy page //TODO: REMOVE LINKS AFTER EVERY WEEK
