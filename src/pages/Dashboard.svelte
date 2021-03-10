<script>
  import { onDestroy } from "svelte";
  import { userStore } from "../store/User.js";
  const unsubscribe = userStore.subscribe((data) => {
    console.log(data);
  });
  onDestroy(unsubscribe);
</script>

<div class="main">
  <nav class="navbar navbar-expand navbar-light navbar-bg">
    <a class="sidebar-toggle" href="/">
      <i class="hamburger align-self-center" />
    </a>

    <form class="d-none d-sm-inline-block">
      <div class="input-group input-group-navbar">
        <input
          type="text"
          class="form-control"
          placeholder="Search projects…"
          aria-label="Search"
        />
        <div class="input-group-append">
          <button class="btn" type="button">
            <i class="align-middle" data-feather="search" />
          </button>
        </div>
      </div>
    </form>

    <ul class="navbar-nav">
      <li class="nav-item px-2 dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="/dashboard"
          id="servicesDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Mega menu
        </a>
        <div
          class="dropdown-menu dropdown-menu-left dropdown-mega"
          aria-labelledby="servicesDropdown"
        >
          <div class="d-md-flex align-items-start justify-content-start">
            <div class="dropdown-mega-list">
              <div class="dropdown-header">UI Elements</div>
              <a class="dropdown-item" href="/">Alerts</a>
              <a class="dropdown-item" href="/">Buttons</a>
              <a class="dropdown-item" href="/">Cards</a>
              <a class="dropdown-item" href="/">Carousel</a>
              <a class="dropdown-item" href="/">General</a>
              <a class="dropdown-item" href="/">Grid</a>
              <a class="dropdown-item" href="/">Modals</a>
              <a class="dropdown-item" href="/">Tabs</a>
              <a class="dropdown-item" href="/">Typography</a>
            </div>
            <div class="dropdown-mega-list">
              <div class="dropdown-header">Forms</div>
              <a class="dropdown-item" href="/">Layouts</a>
              <a class="dropdown-item" href="/">Basic Inputs</a>
              <a class="dropdown-item" href="/">Input Groups</a>
              <a class="dropdown-item" href="/">Advanced Inputs</a>
              <a class="dropdown-item" href="/">Editors</a>
              <a class="dropdown-item" href="/">Validation</a>
              <a class="dropdown-item" href="/">Wizard</a>
            </div>
            <div class="dropdown-mega-list">
              <div class="dropdown-header">Tables</div>
              <a class="dropdown-item" href="/">Basic Tables</a>
              <a class="dropdown-item" href="/">Responsive Table</a>
              <a class="dropdown-item" href="/">Table with Buttons</a>
              <a class="dropdown-item" href="/">Column Search</a>
              <a class="dropdown-item" href="/">Muulti Selection</a>
              <a class="dropdown-item" href="/">Ajax Sourced Data</a>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div class="navbar-collapse collapse">
      <ul class="navbar-nav navbar-align">
        <li class="nav-item dropdown">
          <a
            class="nav-icon dropdown-toggle"
            href="/"
            id="messagesDropdown"
            data-toggle="dropdown"
          >
            <div class="position-relative">
              <i class="align-middle" data-feather="message-circle" />
              <span class="indicator">4</span>
            </div>
          </a>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
            aria-labelledby="messagesDropdown"
          >
            <div class="dropdown-menu-header">
              <div class="position-relative">4 New Messages</div>
            </div>
            <div class="list-group">
              <a href="/" class="list-group-item">
                <div class="row no-gutters align-items-center">
                  <div class="col-2">
                    <img
                      src="img/avatars/avatar-5.jpg"
                      class="avatar img-fluid rounded-circle"
                      alt="Ashley Briggs"
                    />
                  </div>
                  <div class="col-10 pl-2">
                    <div class="text-dark">Ashley Briggs</div>
                    <div class="text-muted small mt-1">
                      Nam pretium turpis et arcu. Duis arcu tortor.
                    </div>
                    <div class="text-muted small mt-1">15m ago</div>
                  </div>
                </div>
              </a>
              <a href="/" class="list-group-item">
                <div class="row no-gutters align-items-center">
                  <div class="col-2">
                    <img
                      src="img/avatars/avatar-2.jpg"
                      class="avatar img-fluid rounded-circle"
                      alt="Carl Jenkins"
                    />
                  </div>
                  <div class="col-10 pl-2">
                    <div class="text-dark">Carl Jenkins</div>
                    <div class="text-muted small mt-1">
                      Curabitur ligula sapien euismod vitae.
                    </div>
                    <div class="text-muted small mt-1">2h ago</div>
                  </div>
                </div>
              </a>
              <a href="/" class="list-group-item">
                <div class="row no-gutters align-items-center">
                  <div class="col-2">
                    <img
                      src="img/avatars/avatar-4.jpg"
                      class="avatar img-fluid rounded-circle"
                      alt="Stacie Hall"
                    />
                  </div>
                  <div class="col-10 pl-2">
                    <div class="text-dark">Stacie Hall</div>
                    <div class="text-muted small mt-1">
                      Pellentesque auctor neque nec urna.
                    </div>
                    <div class="text-muted small mt-1">4h ago</div>
                  </div>
                </div>
              </a>
              <a href="/" class="list-group-item">
                <div class="row no-gutters align-items-center">
                  <div class="col-2">
                    <img
                      src="img/avatars/avatar-3.jpg"
                      class="avatar img-fluid rounded-circle"
                      alt="Bertha Martin"
                    />
                  </div>
                  <div class="col-10 pl-2">
                    <div class="text-dark">Bertha Martin</div>
                    <div class="text-muted small mt-1">
                      Aenean tellus metus, bibendum sed, posuere ac, mattis non.
                    </div>
                    <div class="text-muted small mt-1">5h ago</div>
                  </div>
                </div>
              </a>
            </div>
            <div class="dropdown-menu-footer">
              <a href="/" class="text-muted">Show all messages</a>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-icon dropdown-toggle"
            href="/"
            id="alertsDropdown"
            data-toggle="dropdown"
          >
            <div class="position-relative">
              <i class="align-middle" data-feather="bell-off" />
            </div>
          </a>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
            aria-labelledby="alertsDropdown"
          >
            <div class="dropdown-menu-header">4 New Notifications</div>
            <div class="list-group">
              <a href="/" class="list-group-item">
                <div class="row no-gutters align-items-center">
                  <div class="col-2">
                    <i class="text-danger" data-feather="alert-circle" />
                  </div>
                  <div class="col-10">
                    <div class="text-dark">Update completed</div>
                    <div class="text-muted small mt-1">
                      Restart server 12 to complete the update.
                    </div>
                    <div class="text-muted small mt-1">2h ago</div>
                  </div>
                </div>
              </a>
              <a href="/" class="list-group-item">
                <div class="row no-gutters align-items-center">
                  <div class="col-2">
                    <i class="text-warning" data-feather="bell" />
                  </div>
                  <div class="col-10">
                    <div class="text-dark">Lorem ipsum</div>
                    <div class="text-muted small mt-1">
                      Aliquam ex eros, imperdiet vulputate hendrerit et.
                    </div>
                    <div class="text-muted small mt-1">6h ago</div>
                  </div>
                </div>
              </a>
              <a href="/" class="list-group-item">
                <div class="row no-gutters align-items-center">
                  <div class="col-2">
                    <i class="text-primary" data-feather="home" />
                  </div>
                  <div class="col-10">
                    <div class="text-dark">Login from 192.186.1.1</div>
                    <div class="text-muted small mt-1">8h ago</div>
                  </div>
                </div>
              </a>
              <a href="/" class="list-group-item">
                <div class="row no-gutters align-items-center">
                  <div class="col-2">
                    <i class="text-success" data-feather="user-plus" />
                  </div>
                  <div class="col-10">
                    <div class="text-dark">New connection</div>
                    <div class="text-muted small mt-1">
                      Anna accepted your request.
                    </div>
                    <div class="text-muted small mt-1">12h ago</div>
                  </div>
                </div>
              </a>
            </div>
            <div class="dropdown-menu-footer">
              <a href="/" class="text-muted">Show all notifications</a>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-flag dropdown-toggle"
            href="/"
            id="languageDropdown"
            data-toggle="dropdown"
          >
            <img src="img/flags/us.png" alt="English" />
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="languageDropdown"
          >
            <a class="dropdown-item" href="/">
              <img
                src="img/flags/us.png"
                alt="English"
                width="20"
                class="align-middle mr-1"
              />
              <span class="align-middle">English</span>
            </a>
            <a class="dropdown-item" href="/">
              <img
                src="img/flags/es.png"
                alt="Spanish"
                width="20"
                class="align-middle mr-1"
              />
              <span class="align-middle">Spanish</span>
            </a>
            <a class="dropdown-item" href="/">
              <img
                src="img/flags/de.png"
                alt="German"
                width="20"
                class="align-middle mr-1"
              />
              <span class="align-middle">German</span>
            </a>
            <a class="dropdown-item" href="/">
              <img
                src="img/flags/nl.png"
                alt="Dutch"
                width="20"
                class="align-middle mr-1"
              />
              <span class="align-middle">Dutch</span>
            </a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-icon dropdown-toggle d-inline-block d-sm-none"
            href="/"
            data-toggle="dropdown"
          >
            <i class="align-middle" data-feather="settings" />
          </a>

          <a
            class="nav-link dropdown-toggle d-none d-sm-inline-block"
            href="/"
            data-toggle="dropdown"
          >
            <img
              src="img/avatars/avatar.jpg"
              class="avatar img-fluid rounded-circle mr-1"
              alt="Chris Wood"
            /> <span class="text-dark">Chris Wood</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="pages-profile.html"
              ><i class="align-middle mr-1" data-feather="user" /> Profile</a
            >
            <a class="dropdown-item" href="/"
              ><i class="align-middle mr-1" data-feather="pie-chart" /> Analytics</a
            >
            <div class="dropdown-divider" />
            <a class="dropdown-item" href="pages-settings.html"
              >Settings & Privacy</a
            >
            <a class="dropdown-item" href="/">Help</a>
            <a class="dropdown-item" href="/">Sign out</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>

  <main class="content">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="card">
            <div class="card-body h-100">
              <div class="media">
                <img
                  src="img/avatars/avatar-5.jpg"
                  width="56"
                  height="56"
                  class="rounded-circle mr-3"
                  alt="Ashley Briggs"
                />
                <div class="media-body">
                  <small class="float-right text-navy">5m ago</small>
                  <p class="mb-2"><strong>Ashley Briggs</strong></p>
                  <p>
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                    tincidunt tempus. Donec vitae sapien ut libero venenatis
                    faucibus.
                  </p>

                  <div class="row no-gutters mt-1">
                    <div class="col-6">
                      <img
                        src="img/photos/unsplash-2.jpg"
                        class="img-fluid pr-1"
                        alt="Unsplash"
                      />
                    </div>
                    <div class="col-6">
                      <img
                        src="img/photos/unsplash-3.jpg"
                        class="img-fluid pl-1"
                        alt="Unsplash"
                      />
                    </div>
                  </div>

                  <small class="text-muted">Today 7:51 pm</small><br />
                  <a href="/" class="btn btn-sm btn-danger mt-1"
                    ><i class="feather-sm" data-feather="heart" /> Like</a
                  >

                  <div class="media mt-3">
                    <a class="pr-2" href="/">
                      <img
                        src="img/avatars/avatar-4.jpg"
                        width="36"
                        height="36"
                        class="rounded-circle mr-2"
                        alt="Stacie Hall"
                      />
                    </a>
                    <div class="media-body">
                      <p class="text-muted">
                        <strong>Stacie Hall</strong>: Nam pretium turpis et
                        arcu. Duis arcu tortor, suscipit eget, imperdiet nec,
                        imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.
                        Integer ante arcu, accumsan a, consectetuer eget,
                        posuere ut, mauris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div class="media">
                <img
                  src="img/avatars/avatar.jpg"
                  width="56"
                  height="56"
                  class="rounded-circle mr-3"
                  alt="Chris Wood"
                />
                <div class="media-body">
                  <small class="float-right text-navy">30m ago</small>
                  <p class="mb-2"><strong>Chris Wood</strong></p>
                  <p>
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                    tincidunt tempus. Donec vitae sapien ut libero venenatis
                    faucibus. Nullam quis ante.
                  </p>
                  <small class="text-muted">Today 7:21 pm</small><br />
                  <a href="/" class="btn btn-sm btn-danger mt-1"
                    ><i class="feather-sm" data-feather="heart" /> Like</a
                  >
                </div>
              </div>

              <hr />
              <div class="media">
                <img
                  src="img/avatars/avatar-2.jpg"
                  width="56"
                  height="56"
                  class="rounded-circle mr-3"
                  alt="Carl Jenkins"
                />
                <div class="media-body">
                  <small class="float-right text-navy">3h ago</small>
                  <p class="mb-2"><strong>Carl Jenkins</strong></p>

                  <img
                    src="img/photos/unsplash-1.jpg"
                    class="img-fluid"
                    alt="Unsplash"
                  />

                  <small class="text-muted">Today 5:12 pm</small><br />
                  <a href="/" class="btn btn-sm btn-danger mt-1"
                    ><i class="feather-sm" data-feather="heart" /> Like</a
                  >

                  <div class="media mt-3">
                    <a class="pr-2" href="/">
                      <img
                        src="img/avatars/avatar-4.jpg"
                        width="36"
                        height="36"
                        class="rounded-circle mr-2"
                        alt="Stacie Hall"
                      />
                    </a>
                    <div class="media-body">
                      <p class="text-muted">
                        <strong>Stacie Hall</strong>: Nam pretium turpis et
                        arcu. Duis arcu tortor, suscipit eget, imperdiet nec,
                        imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.
                        Integer ante arcu, accumsan a, consectetuer eget,
                        posuere ut, mauris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div class="media">
                <img
                  src="img/avatars/avatar-5.jpg"
                  width="56"
                  height="56"
                  class="rounded-circle mr-3"
                  alt="Ashley Briggs"
                />
                <div class="media-body">
                  <small class="float-right text-navy">4h ago</small>
                  <p class="mb-2"><strong>Ashley Briggs</strong></p>
                  <p>
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                    tincidunt tempus. Donec vitae sapien ut libero venenatis
                    faucibus. Nullam quis ante.
                  </p>
                  <small class="text-muted">Today 4:21 pm</small><br />
                  <a href="/" class="btn btn-sm btn-danger mt-1"
                    ><i class="feather-sm" data-feather="heart" /> Like</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div class="card mb-3">
            <div class="card-body text-center">
              <img
                src="img/avatars/avatar.jpg"
                alt="Chris Wood"
                class="img-fluid rounded-circle mb-2"
                width="128"
                height="128"
              />
              <h4 class="card-title mb-0">Chris Wood</h4>
              <div class="text-muted mb-2">UX Engineer</div>

              <div>
                <a class="btn btn-primary btn-sm" href="/">Follow</a>
                <a class="btn btn-primary btn-sm" href="/"
                  ><span data-feather="message-square" /> Message</a
                >
              </div>
            </div>
          </div>

          <div class="card mb-3">
            <div class="card-header">
              <div class="card-actions float-right">
                <div class="dropdown show">
                  <a href="/" data-toggle="dropdown" data-display="static">
                    <i class="align-middle" data-feather="more-horizontal" />
                  </a>

                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="/">Action</a>
                    <a class="dropdown-item" href="/">Another action</a>
                    <a class="dropdown-item" href="/">Something else here</a>
                  </div>
                </div>
              </div>
              <h5 class="card-title mb-0">Following</h5>
            </div>
            <div class="card-body">
              <div class="media">
                <img
                  src="img/avatars/avatar-5.jpg"
                  width="56"
                  height="56"
                  class="rounded-circle mr-2"
                  alt="Chris Wood"
                />
                <div class="media-body">
                  <p class="my-1"><strong>Ashley Briggs</strong></p>
                  <a class="btn btn-sm btn-outline-primary" href="/">Unfollow</a
                  >
                </div>
              </div>

              <hr class="my-2" />

              <div class="media">
                <img
                  src="img/avatars/avatar-2.jpg"
                  width="56"
                  height="56"
                  class="rounded-circle mr-2"
                  alt="Carl Jenkins"
                />
                <div class="media-body">
                  <p class="my-1"><strong>Carl Jenkins</strong></p>
                  <a class="btn btn-sm btn-outline-primary" href="/">Unfollow</a
                  >
                </div>
              </div>

              <hr class="my-2" />

              <div class="media">
                <img
                  src="img/avatars/avatar-4.jpg"
                  width="56"
                  height="56"
                  class="rounded-circle mr-2"
                  alt="Stacie Hall"
                />
                <div class="media-body">
                  <p class="my-1"><strong>Stacie Hall</strong></p>
                  <a class="btn btn-sm btn-outline-primary" href="/">Unfollow</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <div class="card-actions float-right">
                <div class="dropdown show">
                  <a href="/" data-toggle="dropdown" data-display="static">
                    <i class="align-middle" data-feather="more-horizontal" />
                  </a>

                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="/">Action</a>
                    <a class="dropdown-item" href="/">Another action</a>
                    <a class="dropdown-item" href="/">Something else here</a>
                  </div>
                </div>
              </div>
              <h5 class="card-title mb-0">Activities</h5>
            </div>
            <div class="card-body h-100">
              <div class="media">
                <img
                  src="img/avatars/avatar-5.jpg"
                  width="36"
                  height="36"
                  class="rounded-circle mr-2"
                  alt="Ashley Briggs"
                />
                <div class="media-body">
                  <small class="float-right text-navy">5m ago</small>
                  <strong>Ashley Briggs</strong> started following
                  <strong>Stacie Hall</strong><br />
                  <small class="text-muted">Today 7:51 pm</small><br />
                </div>
              </div>

              <hr />
              <div class="media">
                <img
                  src="img/avatars/avatar.jpg"
                  width="36"
                  height="36"
                  class="rounded-circle mr-2"
                  alt="Chris Wood"
                />
                <div class="media-body">
                  <small class="float-right text-navy">30m ago</small>
                  <strong>Chris Wood</strong> posted something on
                  <strong>Stacie Hall</strong>'s timeline<br />
                  <small class="text-muted">Today 7:21 pm</small>

                  <div class="border text-sm text-muted p-2 mt-1">
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam..
                  </div>
                </div>
              </div>

              <hr />
              <div class="media">
                <img
                  src="img/avatars/avatar-4.jpg"
                  width="36"
                  height="36"
                  class="rounded-circle mr-2"
                  alt="Stacie Hall"
                />
                <div class="media-body">
                  <small class="float-right text-navy">1h ago</small>
                  <strong>Stacie Hall</strong> posted a new blog<br />

                  <small class="text-muted">Today 6:35 pm</small>
                </div>
              </div>

              <hr />
              <div class="media">
                <img
                  src="img/avatars/avatar-2.jpg"
                  width="36"
                  height="36"
                  class="rounded-circle mr-2"
                  alt="Carl Jenkins"
                />
                <div class="media-body">
                  <small class="float-right text-navy">3h ago</small>
                  <strong>Carl Jenkins</strong> posted two photos on
                  <strong>Stacie Hall</strong>'s timeline<br />
                  <small class="text-muted">Today 5:12 pm</small>

                  <div class="row no-gutters mt-1">
                    <div class="col-6 col-md-4 col-lg-4 col-xl-3">
                      <img
                        src="img/photos/unsplash-1.jpg"
                        class="img-fluid pr-2"
                        alt="Unsplash"
                      />
                    </div>
                    <div class="col-6 col-md-4 col-lg-4 col-xl-3">
                      <img
                        src="img/photos/unsplash-2.jpg"
                        class="img-fluid pr-2"
                        alt="Unsplash"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div class="media">
                <img
                  src="img/avatars/avatar-4.jpg"
                  width="36"
                  height="36"
                  class="rounded-circle mr-2"
                  alt="Stacie Hall"
                />
                <div class="media-body">
                  <small class="float-right text-navy">1d ago</small>
                  <strong>Stacie Hall</strong> posted a new blog<br />
                  <small class="text-muted">Yesterday 2:43 pm</small>
                </div>
              </div>

              <hr />
              <div class="media">
                <img
                  src="img/avatars/avatar.jpg"
                  width="36"
                  height="36"
                  class="rounded-circle mr-2"
                  alt="Chris Wood"
                />
                <div class="media-body">
                  <small class="float-right text-navy">1d ago</small>
                  <strong>Chris Wood</strong> started following
                  <strong>Stacie Hall</strong><br />
                  <small class="text-muted">Yesterdag 1:51 pm</small>
                </div>
              </div>

              <hr />
              <a href="/" class="btn btn-primary btn-block">Load more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="container-fluid">
      <div class="row text-muted">
        <div class="col-6 text-left">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a class="text-muted" href="/">Support</a>
            </li>
            <li class="list-inline-item">
              <a class="text-muted" href="/">Help Center</a>
            </li>
            <li class="list-inline-item">
              <a class="text-muted" href="/">Privacy</a>
            </li>
            <li class="list-inline-item">
              <a class="text-muted" href="/">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div class="col-6 text-right">
          <p class="mb-0">
            &copy; 2020 - <a href="index.html" class="text-muted">AppStack</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</div>
