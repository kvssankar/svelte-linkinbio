<div class="load-1">
  <div class="line" />
  <div class="line" />
  <div class="line" />
</div>

<h1 style="text-align:center">Wait for it...</h1>

<style>




.line {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #4b9cdb;
}

.load-1{
  margin-top: 20px;
}

/* =Animate the stuff
------------------------ */
.load-1 .line:nth-last-child(1) {
  animation: loadingA 1.5s 1s infinite;
}
.load-1 .line:nth-last-child(2) {
  animation: loadingA 1.5s 0.5s infinite;
}
.load-1 .line:nth-last-child(3) {
  animation: loadingA 1.5s 0s infinite;
}

@keyframes loadingA {
  0% {
    height: 15px;
  }
  50% {
    height: 35px;
  }
  100% {
    height: 15px;
  }
}
</style>
