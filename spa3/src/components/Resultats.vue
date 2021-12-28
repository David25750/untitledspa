<template>
  <div id="resultats">
    <div class="container pt-5">
      <div class="row">
        <h2 class="display-4 text-uppercase text-center m-5">podium de l'édition</h2>
      </div>
    </div>
    <div class="row row-cols-3">
      <div class="col text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="553" height="285" viewBox="0 0 553 285">
          <g id="seconde_place" data-name="seconde place" transform="translate(-85 -808)">
            <g id="Rectangle_25" data-name="Rectangle 25" transform="translate(141 808)" fill="#297319" stroke="rgba(112,112,112,0)" stroke-width="1">
              <rect width="452" height="272" stroke="none"/>
              <rect x="0.5" y="0.5" width="451" height="271" fill="none"/>
            </g>
            <g id="Rectangle_24" data-name="Rectangle 24" transform="translate(141 1002)" fill="#2e2828" stroke="rgba(112,112,112,0)" stroke-width="1">
              <rect width="452" height="78" stroke="none"/>
              <rect x="0.5" y="0.5" width="451" height="77" fill="none"/>
            </g>
            <text id="SECONDE_PLACE-2" data-name="SECONDE PLACE" transform="translate(85 1023)" fill="#eee" font-size="30" font-family="Archivo-BlackItalic, Archivo" font-weight="800" font-style="italic"><tspan class="text-center" x="138.275" y="26">SECONDE PLACE</tspan></text>
            <text id="Nathan_Broglin" data-name="Nathan Broglin" transform="translate(139 888)" fill="#eee" stroke="rgba(255,255,255,0)" stroke-width="1" font-size="30" font-family="Archivo-BlackItalic, Archivo" font-weight="800" font-style="italic"><tspan x="-119.625" y="26">Nathan Broglin</tspan></text>
          </g>
        </svg>

      </div>
      <div class="col">
        <h3 class="text-center bg-success text-white">Alexandre anthoine</h3>
      </div>
      <div class="col">
        <svg xmlns="http://www.w3.org/2000/svg" width="553" height="229" viewBox="0 0 553 229">
          <g id="troisèime_place" data-name="troisèime place" transform="translate(-1277 -864)">
            <g id="Rectangle_27" data-name="Rectangle 27" transform="translate(1328 864)" fill="#297319" stroke="rgba(112,112,112,0)" stroke-width="1">
              <rect width="452" height="219" stroke="none"/>
              <rect x="0.5" y="0.5" width="451" height="218" fill="none"/>
            </g>
            <g id="Rectangle_29" data-name="Rectangle 29" transform="translate(1328 1002)" fill="#2e2828" stroke="rgba(112,112,112,0)" stroke-width="1">
              <rect width="452" height="78" stroke="none"/>
              <rect x="0.5" y="0.5" width="451" height="77" fill="none"/>
            </g>
            <text id="TROISIÈME_PLACE" data-name="TROISIÈME  PLACE" transform="translate(1277 1023)" fill="#eee" font-size="30" font-family="Archivo-BlackItalic, Archivo" font-weight="800" font-style="italic"><tspan x="123.26" y="26" xml:space="preserve">TROISIÈME  PLACE</tspan></text>
            <text id="David_Philippe" data-name="David Philippe" transform="translate(1336 925)" fill="#eee" stroke="rgba(255,255,255,0)" stroke-width="1" font-size="30" font-family="Archivo-BlackItalic, Archivo" font-weight="800" font-style="italic"><tspan x="-113.535" y="26">David Philippe</tspan></text>
          </g>
        </svg>
      </div>
    </div>
    <div class="row row-cols-3">
      <div class="col">
        <h5 class="text-center bg-dark lead text-white text-uppercase">seconde place</h5>
      </div>
      <div class="col">
        <h4 class="text-center bg-dark lead text-uppercase text-warning"><strong>première place</strong></h4>
      </div>
      <div class="col">
        <h5 class="text-center bg-dark lead text-white text-uppercase">troisième place</h5>
      </div>
    </div>
    <div class="row text-center">
      <svg class="position-absolute" xmlns="http://www.w3.org/2000/svg" width="151" height="136" viewBox="0 0 151 136">
        <g id="scroll_fleche" data-name="scroll fleche" transform="translate(-960 -910)">
          <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(960 910)" fill="#297319" stroke="rgba(112,112,112,0)" stroke-width="1">
            <ellipse cx="75.5" cy="68" rx="75.5" ry="68" stroke="none"/>
            <ellipse cx="75.5" cy="68" rx="75" ry="67.5" fill="none"/>
          </g>
          <line id="Ligne_1" data-name="Ligne 1" y2="82" transform="translate(1035.5 932)" fill="none" stroke="#fff" stroke-width="5"/>
          <line id="Ligne_2" data-name="Ligne 2" x2="23" y2="22" transform="translate(1013 990)" fill="none" stroke="#fff" stroke-linecap="square" stroke-width="8"/>
          <line id="Ligne_3" data-name="Ligne 3" x1="21" y2="23.5" transform="translate(1036.5 988.5)" fill="none" stroke="#fff" stroke-linecap="square" stroke-width="8"/>
        </g>
      </svg>

    </div>
    <div class="container-fluid bg-dark p-5 my-5">
      <div class="row">
        <h2 class="text-uppercase text-white text-center display-3 py-3">classement de l'édition 2022</h2>
      </div>
      <div class="row">
        <h3 class="text-uppercase text-white text-center display-5 py-5">la course des as</h3>
      </div>
      <div class="table-responsive text-center mx-5 border border-3 border-dark">
        <table class="table table-striped table-sm bg-white">
          <thead>
          <tr>
            <th scope="col"><p class="lead text-uppercase">Position</p></th>
            <th scope="col"><p class="lead text-uppercase">Dossard</p></th>
            <th scope="col"><p class="lead text-uppercase">Coureur</p></th>
            <th scope="col"><p class="lead text-uppercase">Club</p></th>
            <th scope="col"><p class="lead text-uppercase">Temps</p></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="Coureur in listeCoureur" :key="Coureur.id">
            <td>{{Coureur.acf.position}}</td>
            <td>{{Coureur.acf.nom}} {{Coureur.acf.prenom}}</td>
            <td>{{Coureur.acf.club}}</td>
            <td>{{Coureur.acf.categorie}}</td>
            <td>{{Coureur.acf.temps}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="container-fluid py-5 bg-dark">
        <div class="row">
          <p class="text-center text-white">Voir l'intégralité du classement</p>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center p-3">
          <b-button href="#"
                    type="submit" class="btn btn-warning text-black px-5 gap-3">Classement intégrale</b-button>

        </div>
      </div>
      <div class="container-fluid bg-white">
        <div class="row">
          <h1 class="text-center text-uppercase display-5 my-5">Mentions honorable</h1>
        </div>
        <div class="row row-cols-3 mx-5">
          <div class="col px-5">
            <h2 class="lead text-center bg-success p-5">Claire Oudot</h2>
          </div>
          <div class="col px-5">
            <h2 class="lead text-center bg-success p-5">Charles Dupont</h2>
          </div>
          <div class="col px-5">
            <h2 class="lead text-center bg-success p-5">ASC Kappelen</h2>
          </div>
        </div>
        <div class="row row-cols-3 mx-5 pb-5">
          <div class="col px-5">
            <h2 class="lead text-center bg-dark text-white p-2"><strong>Meilleur femme</strong></h2>
          </div>
          <div class="col px-5">
            <h2 class="lead text-center bg-dark text-white p-2"><strong>Doyen de la course</strong></h2>
          </div>
          <div class="col px-5">
            <h2 class="lead text-center bg-dark text-white p-2"><strong>Meilleur Club</strong></h2>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>


<script>

import param from "./param/param.js";

export default {
  name: "Resultats",
  data () {
    return {
      listeCoureur:[],
    }
  },
  computed: {
    listeOrderByName: function(){
      function compare(a, b) {
        if (a.acf.position < b.acf.position) return -1;
        if (a.acf.position > b.acf.position) return 1;
        return 0;
      }
      return this.listeCoureur.sort(compare);
    }


  },
  created(){
  //Liste des coureurs
    axios.get(param.host+"Coureur")
      .then(response=>{
        console.log("Response", response);
        // Récupération de la liste des participants
        this.listeCoureur = response.data;

      })
      .catch(error => console.log(error))

  }
}
</script>

<style scoped>


</style>
