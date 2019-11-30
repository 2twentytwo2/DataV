<template>
  <div style="justify-content: center;align-items: center;display: flex;">
  <div class="loading" >
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "dot"
    }
</script>

<style lang="scss">
  $colors: #d1f0ee, #d1f0ee, #d1f0ee, #d1f0ee, #d1f0ee;
  .loading {
    display: flex;
    animation-delay: 1s;

    .dot {
      position: relative;
      width: 0.8em;
      height: 0.8em;
      margin: 0.8em;
      border-radius: 50%;

      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: inherit;
        animation: wave 2s ease-out infinite;
      }

      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          background: nth($colors, $i);

          &::before {
            animation-delay: $i * 0.2s;
          }
        }
      }
    }
  }

  @keyframes wave {
    50%, 75% {
      transform: scale(1.8);
    }

    80%, 100% {
      opacity: 0;
    }
  }
</style>
