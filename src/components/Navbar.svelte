<script>
  export let user;
</script>

<nav class="navbar navbar-expand navbar-light navbar-bg">
  <a class="sidebar-toggle" href="/">
    <i class="hamburger align-self-center" />
  </a>

  <form class="d-none d-sm-inline-block">
    <div class="input-group input-group-navbar">
      <input
        type="text"
        class="form-control"
        placeholder="Search your links…"
        aria-label="Search"
      />
      <div class="input-group-append">
        <button class="btn" type="button">
          <i class="align-middle" data-feather="search" />
        </button>
      </div>
    </div>
  </form>

  <div class="navbar-collapse collapse">
    <ul class="navbar-nav navbar-align">
      <!-- <li class="nav-item dropdown">
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
      </li> -->

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
            src={user.dp}
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
