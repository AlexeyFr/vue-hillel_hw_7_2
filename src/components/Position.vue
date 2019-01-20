<template>
  <div>
    <router-link class="all_positions" :to="{name: 'positions'}">See all positions</router-link>
    <div class="position">
      <div class="type_location">{{position.type}} / {{position.location}}</div>
      <div class="title">
        <div>{{position.title}}</div>
        <button v-if="isFavorite" @click="removeFromFavorites">Remove from favoritess</button>
        <button v-else @click="addToFavorites">Add to favorites</button>
      </div>
      <div class="description" v-html="position.description"></div>
    </div>
  </div>
</template>

<script>

  import store from '../store';
  import axios from 'axios';

  export default {
    data () {
      return {
        position: [],
      }
    },
    beforeRouteEnter (to, from, next) {
      store.dispatch('preload', true);
      axios.get(`http://localhost:3000/positions/${to.params.id}.json`)
        .then(res => {
          store.dispatch('preload', false);
          next(vm => (vm.position = res.data) )
        })
        .catch(error => {
          store.dispatch('preload', false);
          alert(error)
        });
    },
    methods: {
      addToFavorites () {
        this.$store.dispatch('addToFavorites', this.$route.params.id);
      },
      removeFromFavorites () {
        this.$store.dispatch('removeFromFavorites', this.$route.params.id);
      }
    },
    computed: {
      isFavorite () {
        return this.$store.getters.isFavorite(this.$route.params.id);
      }
    }
  }

</script>

<style lang=stylus scoped>
  .all_positions
    display inline-block
    font-weight bold
    color #1d80be
    font-size 14px
    margin 20px 0
  .position
    width 560px
    padding 15px 24px
    box-shadow 0 0 1px 2px #ebebeb
    margin-bottom 10px
  .type_location
    margin 15px 0
    color #888
  .title
    border-bottom 1px solid #ddd
    padding-bottom 15px
    margin 15px 0 10px 0
    div
      font-weight bold
      font-size 22px
      color #294455
      padding-bottom 10px
    button
      display block
      height 27px
      background #2b7fc3
      border 0
      outline none
      padding 0 20px
      border-radius 3px
      cursor pointer
      font-family 'Avenir', Helvetica, Arial, sans-serif
      font-weight normal
      font-style normal
      text-align center
      line-height 1.2
      color #fff
      text-transform uppercase
</style>