<template>
  <div id="app">

    <header class="header">
      <div class="container">
        <router-link :to="{name: 'home'}" class="logo"><span>GitHub</span> Jobs</router-link>
        <div>
          <router-link :to="{name: 'faforites'}" class="link">Faforites</router-link>
          <router-link :to="{name: 'faq'}" class="link">How it works</router-link>
        </div>
      </div>
    </header>

    <div class="container">
      <router-view/>
    </div>

    <div :class="['preload', this.$store.state.preload ? 'show' : '']">
      <img alt="preload" src="./assets/preload.gif">
    </div>

  </div>
</template>

<style lang=stylus>
  /*Reset*/
  html,body,div,span,applet,object,iframe,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,p,h1,h2,h3,h4,h5,h6,dl,dt,dd,ol,ul,li,fieldset,form,legend,table,tbody,tfoot,thead,tr,th
    margin 0
    padding 0
    border 0
    outline 0
    font-size 100%
    vertical-align baseline
    background transparent
  body
    line-height 1
  ol,ul
    list-style none
  blockquote,q
    quotes none
  :focus
    outline 0
  ins
    text-decoration none
  del
    text-decoration line-through
  table
    border-collapse collapse
    border-spacing 0
  /*Reset*/
  body
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    font-family 'Avenir', Helvetica, Arial, sans-serif
    font-weight normal
    font-style normal
    line-height 1.2
    font-size 12px
    background #fafafa
    color #444
  html
  body
  #app
    min-height 100%
  #app
    position relative
  .container
    background #fff
    min-height 100%
    width 100%
    max-width 980px
    margin 0 auto
    position relative
    z-index 2
  a
    text-decoration none
  .header
    height 50px
    padding 0 24px
    color #c9e2f1
    background #2B7FC3
    border-top 4px solid #1D5C8F
    border-bottom 2px solid #D7D5D4
    position relative
    z-index 2
    .container
      height 100%
      display flex
      background transparent
      justify-content space-between
      align-items center
  .logo
    color #fff
    font-size 24px
    span
      font-weight bold
      font-size 26px
  .link
    font-weight bold
    color #fff
    margin-left 10px
  .caption
    padding 20px 0
    font-size 22px
    color #294455
    font-weight bold
  .preload
    display flex
    justify-content center
    align-items center
    width 100%
    height 100%
    position fixed
    top 0
    left 0
    background rgba(255,255,255,.6)
    opacity 0
    z-index 1
    &.show
      opacity 1
      z-index 3
</style>