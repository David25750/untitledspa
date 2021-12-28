<template>
  <div id="contact">
    <div class="container pt-5 text-center">
      <div class="row row-cols-2 my-5">
        <div class="col">
          <h2 class="display-6 text-uppercase">infos pratique</h2>
        </div>
        <div class="col">
          <h2 class="display-6 text-uppercase">nous contacter</h2>
        </div>
      </div>
      <div class="row row-cols-2">
        <div class="col m-0 p-0">
          <p class="lead">Lundi 18 avril 2022, 10h00</p>
        </div>
        <div class="col">
          <p class="lead">03 84 56 12 05</p>
        </div>
      </div>
      <div class="row row-cols-2">
        <div class="col">
          <p class="lead">Pont Rolland Vetter , 90400 Audincourt</p>
        </div>
        <div class="col">
          <p class="lead">contact@rondedubosmont.fr</p>
        </div>
      </div>
      <div class="row">
        <h4 class="display-6 my-3">Suivez - nous</h4>
      </div>
    </div>
    <div class="container-fluid bg-dark px-5">
      <div class="p-5 m-5"><!--col-md-7 col-lg-8-->
        <h6 class="m-5 text-white lead text-center">Pour toutes suggestions ou questions supplémentaires,<br> veuillez nous contacter via le formulaire disponible ci-dessous</h6>
        <form class="needs-validation justify-content-center px-5 mx-5" novalidate="">
          <div class="row g-3">

            <div class="col-sm-6">
              <label for="lastName" class="form-label text-white">Nom</label>
              <input type="text" class="form-control" id="firstName" placeholder="Nom" value="" required="">
              <div class="invalid-feedback">
                Le nom  est obligatoire
              </div>
            </div>

            <div class="col-sm-6">
              <label for="firstName" class="form-label text-white">Prénom</label>
              <input type="text" class="form-control" id="lastName" placeholder="Prénom" value="" required="">
              <div class="invalid-feedback">
                Le nom est obligatoire
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label text-white">E - mail</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="email" class="form-control" id="email" placeholder="you@example.com" required="">
                <div class="invalid-feedback">
                  Votre e-mail est obligatoire
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="object" class="form-label text-white">Objet<span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="object" placeholder="Objet">
              <div class="invalid-feedback text-white">
                Veuillez renseigner l'objet de votre demande
              </div>
            </div>

            <hr class="my-4">
            <div class="col-12">
              <label for="message" class="form-label text-white">Votre message</label>
              <input type="text" class="form-control" id="message" placeholder="Écrivez ici...">
              <div class="invalid-feedback text-white">
                Veuillez renseigner votre demande
              </div>
            </div>
          </div>
          <hr class="my-4">
            <button class="btn btn-success text-white btn-lg w-50" href="#" type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import param from "./param/param.js";

export default {
  name: "Contact",
  data () {
    return {

    }
  }
}
</script>

<style scoped>


</style>
