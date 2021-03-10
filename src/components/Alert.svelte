<script>
  export let status;
  export let mssg;
</script>

{#if status === 0}
  <div class="alert alert-primary alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="alert-message">
      {mssg}
    </div>
  </div>
{/if}
{#if status === 1}
  <div class="alert alert-danger alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="alert-message">
      {mssg}
    </div>
  </div>
{/if}

<style>
  .alert {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
