<template>
<div id="photos">
  <div class="container-fluid pt-5 p-5 bg-dark">
    <div class="row mt-5">
      <h1 class="display-4 text-center text-uppercase m-5 text-white">photo de notre dernière édition</h1>
    </div>
    <b-carousel
      id="carousel-1"
      class="m-5"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="780"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
  <div class="container">
    <div class="row">
      <h4 class="display-6 text-uppercase text-center my-5">Albums des éditions précédentes</h4>
    </div>
    <div class="row">
      <p class="lead text-uppercase text-center my-5">Dans ces albums, vous retrouverez les photos des éditions précédentes. Grâce à ses archives photos uniques, retournez dans le passé de notre évènement  la Ronde du Bosmont.</p>
    </div>
  </div>
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top " width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title><rect width="100%" height="100%" fill="#297319"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">
            Thumbnail</text></svg>
        </div>
      </div>
      </div>
    </div>





</div>
</template>

<script>

import param from "./param/param.js";

export default {
  name: "Photos",
  data() {
    return {
      slide: 0,
      sliding: null,
      listeAlbum: [],
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  },
  created() {
    axios.get(param.host+"photo").then(response=>{
      console.log("response", response);

      this.listeAlbum = response.data;
    })
    .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>
