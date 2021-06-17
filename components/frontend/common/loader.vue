<template>
  <div class="loader_">
    <div id="spinner" class="active">
      <span id="first" class="ball"></span>
      <span id="second" class="ball"></span>
      <span id="third" class="ball"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .loader_ {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.452);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
  }

  #spinner {
  position: relative;
  height: 60px;
  width: 60px;
  z-index: 1;
}
.ball {
  position: absolute;
  display: block;
  background-color: #0A8AE9;
  left: 24px;
  width: 12px;
  height: 12px;
  border-radius: 6px;
}
#first {
  animation-timing-function: cubic-bezier(0.5, 0.3, 0.9, 0.9);
  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 6px 30px;
  animation-timing-function: cubic-bezier(0.5, 0.3, 0.9, 0.9);
  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 6px 30px;
}
#second {
  animation-timing-function: cubic-bezier(0.5, 0.5, 0.9, 0.9);
  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 6px 30px;
  animation-timing-function: cubic-bezier(0.5, 0.5, 0.9, 0.9);
  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 6px 30px;
}
#third {
  animation-timing-function: cubic-bezier(0.5, 0.7, 0.9, 0.9);
  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 6px 30px;
  animation-timing-function: cubic-bezier(0.5, 0.7, 0.9, 0.9);
  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 6px 30px;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(1440deg) scale(1);
  }
}


</style>
