<script>
  import Alert from "../components/Alert.svelte";
  import { addlink } from "../actions/User";
  let loading = false;
  let status = -1;
  let mssg = "";
  let image =
    "https://www.lifewire.com/thmb/P856-0hi4lmA2xinYWyaEpRIckw=/1920x1326/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg";
  let link = {
    url: "",
    title: "",
    image: "",
    description: "",
    clicks: 0,
    likes: 0,
  };
  const drop = async (e) => {
    loading = true;
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "kvssankar");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/sankarkvs/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    loading = false;
    const file = await res.json();
    link.image = file.secure_url;
    image = file.secure_url;
  };
  const dispatch = async (e) => {
    e.preventDefault();
    let res = await addlink(link);
    status = res.status;
    mssg = res.mssg;
    console.log(res);
    document.location.href = "/dashboard";
  };
</script>

<div class="main d-flex justify-content-center w-100">
  <main class="content d-flex p-0">
    <div class="container d-flex flex-column">
      <div class="row h-100">
        <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
          <div class="d-table-cell align-middle">
            <div class="text-center mt-4">
              <h1 class="h2">Add your link in bio</h1>
              <p class="lead">Fill the following details</p>
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
                        src={image}
                        alt="Chris Wood"
                        class="img-fluid"
                        width="132"
                        height="132"
                      />
                    {/if}
                  </div>
                  <form on:submit={dispatch}>
                    <div class="form-group">
                      <label for="">Url</label>
                      <input
                        class="form-control form-control-lg"
                        type="text"
                        bind:value={link.url}
                        required
                        placeholder="https://itesmesankar.herokuapp.com/"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Title</label>
                      <input
                        class="form-control form-control-lg"
                        type="text"
                        bind:value={link.title}
                        required
                        placeholder="Portfolio of mine"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Upload any image (if required)</label>
                      <input
                        id="file"
                        name="file"
                        type="file"
                        on:change={drop}
                      />
                    </div>
                    <div class="form-group">
                      <label for="">Description</label>
                      <input
                        class="form-control form-control-lg"
                        type="text"
                        bind:value={link.description}
                        placeholder="Its takes you to the protfoliuo of mine"
                      />
                    </div>
                    <div class="text-center mt-3">
                      <button type="submit" class="btn btn-lg btn-primary"
                        >Add Link</button
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
