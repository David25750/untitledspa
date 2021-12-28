<template>
  <div id="photosclic">
    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
    </div>
  </div>
</template>

<script>
import param from "./param/param.js";

export default {
  name: "PhotosClic",
  data () {
    return {
      listePhotos: [],

    }
  },
  created() {
      axios.get(param.host+"2019").then(response=>{
        this.listePhotos = response.data;
      })
  }
}
</script>

<style scoped>

</style>
