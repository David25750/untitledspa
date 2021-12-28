<template>
  <div id="accueil">
    <div class="container-fluid pt-5">
      <div class="row mt-5">
        <b-img :src="require('src/assets/images/image_accueil.jpg')"  ></b-img>
        <b-img src="src/assets/images/image_accueil.jpg" fluid alt="Responsive image"></b-img>
        <img src="src/assets/images/image_accueil.jpg" class="img-fluid" alt="responsive">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1375" height="347" viewBox="0 0 1375 347">
          <defs>
            <filter id="Tracé_3" x="100" y="0" width="1154.293" height="347" filterUnits="userSpaceOnUse">
              <feOffset dy="3" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feFlood flood-opacity="0.161"/>
              <feComposite operator="in" in2="blur"/>
              <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="BOSMONT" x="609" y="122.5" width="766" height="164" filterUnits="userSpaceOnUse">
              <feOffset dy="15" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="3" result="blur-2"/>
              <feFlood/>
              <feComposite operator="in" in2="blur-2"/>
              <feComposite in="SourceGraphic"/>
            </filter>
          </defs>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_3)">
            <g id="Tracé_3-2" data-name="Tracé 3" transform="translate(9 6)" fill="#2e2828">
              <path d="M0,0H1136.293l-91.288,329H0Z" stroke="none"/>
              <path d="M 1 1 L 1 328 L 1044.244873046875 328 L 1134.977905273438 1 L 1 1 M 0 0 L 1136.293212890625 0 L 1045.005126953125 329 L 0 329 L 0 0 Z" stroke="none" fill="rgba(112,112,112,0)"/>
            </g>
          </g>
          <text id="LA_RONDE_DU" data-name="LA RONDE DU" transform="translate(532 49.5)" fill="#fefefe" font-size="70" font-family="Archivo-BlackItalic, Archivo" font-weight="800" font-style="italic"><tspan x="0" y="61">LA RONDE DU</tspan></text>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#BOSMONT)">
            <text id="BOSMONT-2" data-name="BOSMONT" transform="translate(618 122.5)" fill="#c1e120" font-size="125" font-family="Archivo-BlackItalic, Archivo" font-weight="800" font-style="italic"><tspan x="0" y="110">BOSMONT</tspan></text>
          </g>
          <ellipse id="Ellipse_46" data-name="Ellipse 46" cx="137.544" cy="136.212" rx="137.544" ry="136.212" transform="translate(164.456 22.858)" fill="none" stroke="#eee" stroke-miterlimit="10" stroke-width="4"/>
          <path id="Tracé_113" data-name="Tracé 113" d="M170.523,131.046s-11.135,136,128.632,154.178l53.468,3.333c-7.771,2.052-167.258-22.083-156.759-174.232Z" transform="translate(113.687 29.47)" fill="#c1e120"/>
          <path id="Tracé_114" data-name="Tracé 114" d="M385.475,221.052s44.835-15.18,37.338-53.642-55.24-48.579-79.109-37.447,0,132.175-54.7,145.335-138.248-84.61-138.248-84.61l-38.79-49.593S254.813,254.45,273.713,240.28,272.236,135.715,331.768,99.6c51.719-31.374,120.345,2.479,115.372,61.966S385.475,221.052,385.475,221.052Z" transform="translate(-64.961 -23.017)" fill="#c1e120"/>
        </svg>
      </div>
    </div>
    <div class="container-fluid bg-success">
      <div class="row">
        <h3 class="text-center text-uppercase text-white display-5 p-5">Prochaine édition <abbr class="text-warning text-uppercase display-3 mx-4 text-decoration-none" title="C'est le Lundi de Pâques !">18 avril 2022</abbr></h3>
      </div>
      <div class="row row-cols-4">
        <div class="pt-5">
          <p class="text-center display-3">date</p>
        </div>
      </div>
      <div class="row row-cols-4">
        <div class="col pb-5">
          <p class="text-center text-uppercase">Jours</p>
        </div>
        <div class="col pb-5">
          <p class="text-center text-uppercase">Heures</p>
        </div>
        <div class="col pb-5">
          <p class="text-center text-uppercase">Minutes</p>
        </div>
        <div class="col pb-5">
          <p class="text-center text-uppercase">Secondes</p>
        </div>
      </div>
    </div>
    <div class="container  justify-content-center my-5">
      <div class="row mt-5">
        <h2 class="text-center text-uppercase display-3">course running</h2>
      </div>
      <div class="row mb-5">
        <h2 class="text-success text-center text-lowercase">en pleine nature</h2>
      </div>
      <div class="row px-5 mx-5">
        <p class=" lead text-center m-5 p-5">La Ronde du Bosmont est une course de running annuelle en pleine nature de 10 kilomètres organisée par les bénévoles d’Andelnans et  de Danjoutin au sein de l’association la Ronde du Bosmont. Cette course est ouverte à toutes et à tous et se déroule entre les villages d’Andelnans et de Danjoutin chaque Lundi de Pâques. Les coureurs peuvent profiter de routes, de chemins et de sentiers sur l’ensemble de la course.
          Durant cet événement, il est de tradition que les jeunes ouvrent la course.
          La course est un excellent tremplin pour les coureurs de running et pour ceux qui pratiquent le footing régulièrement. Elle permet de participer au challenge départemental des courses hors stade.
        </p>
      </div>

    </div>
    <div class="container justify-content-center">
      <div class="row row-cols-3">
          <div class="col px-5 text-center">
            <svg class="bg-success p-3" xmlns="http://www.w3.org/2000/svg" width="286.883" height="278.268" viewBox="0 0 286.883 278.268">
              <g id="graphisme_carte_parcous" data-name="graphisme carte parcous" transform="translate(-254.838 -4368.563)">
                <path id="Tracé_45" data-name="Tracé 45" d="M267.694,4059.74l57.4,24.351,49.816-24.351,47.651,21.229,14.079,59.316,88.262-4.371L369.493,4296.379l-4.332-89.286-78.515,8.117Z" transform="matrix(0.996, 0.087, -0.087, 0.996, 366.123, 314.652)" fill="none" stroke="#000" stroke-width="5"/>
                <g id="Ellipse_8" data-name="Ellipse 8" transform="matrix(0.996, 0.087, -0.087, 0.996, 268.43, 4368.563)" fill="#297319" stroke="#000" stroke-width="5">
                  <circle cx="16" cy="16" r="16" stroke="none"/>
                  <circle cx="16" cy="16" r="13.5" fill="none"/>
                </g>
                <g id="Ellipse_9" data-name="Ellipse 9" transform="matrix(0.996, 0.087, -0.087, 0.996, 277.433, 4380.394)" fill="#2e2828" stroke="#000" stroke-width="1">
                  <ellipse cx="6" cy="5.5" rx="6" ry="5.5" stroke="none"/>
                  <ellipse cx="6" cy="5.5" rx="5.5" ry="5" fill="none"/>
                </g>
                <g id="Ellipse_10" data-name="Ellipse 10" transform="matrix(0.996, 0.087, -0.087, 0.996, 428.378, 4441.28)" fill="#297319" stroke="#000" stroke-width="4">
                  <ellipse cx="7" cy="6.5" rx="7" ry="6.5" stroke="none"/>
                  <ellipse cx="7" cy="6.5" rx="5" ry="4.5" fill="none"/>
                </g>
                <g id="Ellipse_11" data-name="Ellipse 11" transform="matrix(0.996, 0.087, -0.087, 0.996, 379.314, 4384.288)" fill="#297319" stroke="#000" stroke-width="4">
                  <ellipse cx="7" cy="6.5" rx="7" ry="6.5" stroke="none"/>
                  <ellipse cx="7" cy="6.5" rx="5" ry="4.5" fill="none"/>
                </g>
                <g id="Ellipse_12" data-name="Ellipse 12" transform="matrix(0.996, 0.087, -0.087, 0.996, 480.045, 4470.967)" fill="#297319" stroke="#000" stroke-width="4">
                  <ellipse cx="7" cy="6.5" rx="7" ry="6.5" stroke="none"/>
                  <ellipse cx="7" cy="6.5" rx="5" ry="4.5" fill="none"/>
                </g>
                <g id="Ellipse_13" data-name="Ellipse 13" transform="translate(493.991 4498.353)" fill="#297319" stroke="#000" stroke-width="4">
                  <ellipse cx="7" cy="6.5" rx="7" ry="6.5" stroke="none"/>
                  <ellipse cx="7" cy="6.5" rx="5" ry="4.5" fill="none"/>
                </g>
                <g id="Ellipse_14" data-name="Ellipse 14" transform="matrix(0.996, 0.087, -0.087, 0.996, 425.402, 4558.466)" fill="#297319" stroke="#000" stroke-width="4">
                  <ellipse cx="7" cy="6.5" rx="7" ry="6.5" stroke="none"/>
                  <ellipse cx="7" cy="6.5" rx="5" ry="4.5" fill="none"/>
                </g>
                <g id="Ellipse_15" data-name="Ellipse 15" transform="matrix(0.996, 0.087, -0.087, 0.996, 353.098, 4622.157)" fill="#297319" stroke="#000" stroke-width="4">
                  <ellipse cx="7" cy="6.5" rx="7" ry="6.5" stroke="none"/>
                  <ellipse cx="7" cy="6.5" rx="5" ry="4.5" fill="none"/>
                </g>
                <g id="Ellipse_16" data-name="Ellipse 16" transform="matrix(0.996, 0.087, -0.087, 0.996, 356.098, 4530.831)" fill="#297319" stroke="#000" stroke-width="4">
                  <ellipse cx="7" cy="6.5" rx="7" ry="6.5" stroke="none"/>
                  <ellipse cx="7" cy="6.5" rx="5" ry="4.5" fill="none"/>
                </g>
                <g id="Ellipse_17" data-name="Ellipse 17" transform="matrix(0.996, 0.087, -0.087, 0.996, 279.184, 4532.49)" fill="#297319" stroke="#000" stroke-width="4">
                  <ellipse cx="7" cy="6.5" rx="7" ry="6.5" stroke="none"/>
                  <ellipse cx="7" cy="6.5" rx="5" ry="4.5" fill="none"/>
                </g>
                <g id="Ellipse_18" data-name="Ellipse 18" transform="matrix(0.996, 0.087, -0.087, 0.996, 273.725, 4445.727)" fill="#297319" stroke="#000" stroke-width="4">
                  <ellipse cx="7" cy="6.5" rx="7" ry="6.5" stroke="none"/>
                  <ellipse cx="7" cy="6.5" rx="5" ry="4.5" fill="none"/>
                </g>
              </g>
            </svg>
          </div>
          <div class="col px-5 text-center">
            <svg class="bg-success p-3" xmlns="http://www.w3.org/2000/svg" width="286.883" height="214.844" viewBox="0 0 295.169 214.844">
              <g id="graphisme_carte_dénivelé" data-name="graphisme carte dénivelé" transform="translate(-816.915 -4430.658)">
                <g id="Ellipse_19" data-name="Ellipse 19" transform="matrix(0.996, 0.087, -0.087, 0.996, 819.704, 4475.416)" fill="#297319" stroke="#2e2828" stroke-width="5">
                  <circle cx="16" cy="16" r="16" stroke="none"/>
                  <circle cx="16" cy="16" r="13.5" fill="none"/>
                </g>
                <g id="Ellipse_20" data-name="Ellipse 20" transform="matrix(0.996, 0.087, -0.087, 0.996, 828.751, 4486.747)" fill="#2e2828" stroke="#2e2828" stroke-width="1">
                  <ellipse cx="6" cy="5.5" rx="6" ry="5.5" stroke="none"/>
                  <ellipse cx="6" cy="5.5" rx="5.5" ry="5" fill="none"/>
                </g>
                <path id="Tracé_47" data-name="Tracé 47" d="M836.975,4170.833l87.5-26.717,25.215,10.733,37.552,15.984,66.3-55.006,54.81,49.505" transform="translate(-2.726 321.916)" fill="none" stroke="#2e2828" stroke-width="4"/>
                <g id="Ellipse_21" data-name="Ellipse 21" transform="matrix(0.996, 0.087, -0.087, 0.996, 914.676, 4458.161)" fill="#297319" stroke="#2e2828" stroke-width="4">
                  <ellipse cx="7" cy="6.5" rx="7" ry="6.5" stroke="none"/>
                  <ellipse cx="7" cy="6.5" rx="5" ry="4.5" fill="none"/>
                </g>
                <g id="Ellipse_22" data-name="Ellipse 22" transform="matrix(0.996, 0.087, -0.087, 0.996, 1044.402, 4430.658)" fill="#297319" stroke="#2e2828" stroke-width="4">
                  <ellipse cx="7" cy="6.5" rx="7" ry="6.5" stroke="none"/>
                  <ellipse cx="7" cy="6.5" rx="5" ry="4.5" fill="none"/>
                </g>
                <g id="Ellipse_23" data-name="Ellipse 23" transform="matrix(0.996, 0.087, -0.087, 0.996, 1100.13, 4480.745)" fill="#2e2828" stroke="#2e2828" stroke-width="1">
                  <ellipse cx="6" cy="5.5" rx="6" ry="5.5" stroke="none"/>
                  <ellipse cx="6" cy="5.5" rx="5.5" ry="5" fill="none"/>
                </g>
                <path id="Tracé_49" data-name="Tracé 49" d="M0,0H107.514" transform="translate(845.623 4574.5)" fill="none" stroke="#2e2828" stroke-width="6"/>
                <path id="Tracé_48" data-name="Tracé 48" d="M0,0H107.419" transform="translate(845.719 4603.5)" fill="none" stroke="#2e2828" stroke-width="6"/>
                <line id="Ligne_8" data-name="Ligne 8" x2="68.231" transform="translate(846.269 4632.5)" fill="none" stroke="#2e2828" stroke-width="6"/>
                <g id="Ellipse_24" data-name="Ellipse 24" transform="matrix(0.996, 0.087, -0.087, 0.996, 947.639, 4568.498)" fill="#2e2828" stroke="#2e2828" stroke-width="1">
                  <ellipse cx="6" cy="5.5" rx="6" ry="5.5" stroke="none"/>
                  <ellipse cx="6" cy="5.5" rx="5.5" ry="5" fill="none"/>
                </g>
                <g id="Ellipse_25" data-name="Ellipse 25" transform="matrix(0.996, 0.087, -0.087, 0.996, 947.639, 4597.498)" fill="#2e2828" stroke="#2e2828" stroke-width="1">
                  <ellipse cx="6" cy="5.5" rx="6" ry="5.5" stroke="none"/>
                  <ellipse cx="6" cy="5.5" rx="5.5" ry="5" fill="none"/>
                </g>
                <g id="Ellipse_26" data-name="Ellipse 26" transform="matrix(0.996, 0.087, -0.087, 0.996, 909.129, 4626.498)" fill="#2e2828" stroke="#2e2828" stroke-width="1">
                  <ellipse cx="6" cy="5.5" rx="6" ry="5.5" stroke="none"/>
                  <ellipse cx="6" cy="5.5" rx="5.5" ry="5" fill="none"/>
                </g>
                <path id="Tracé_50" data-name="Tracé 50" d="M0,0V-61.647" transform="translate(1030.905 4645.502)" fill="none" stroke="#2e2828" stroke-width="10"/>
                <path id="Tracé_51" data-name="Tracé 51" d="M0,39.641V-61.647" transform="translate(1051.502 4605.861)" fill="none" stroke="#2e2828" stroke-width="10"/>
                <path id="Tracé_52" data-name="Tracé 52" d="M0-19.646v-42" transform="translate(1072.1 4665.147)" fill="none" stroke="#2e2828" stroke-width="10"/>
              </g>
            </svg>
          </div>
          <div class="col px-5 text-center">
            <svg class="bg-success p-3" xmlns="http://www.w3.org/2000/svg" width="286.883" height="198.271" viewBox="0 0 236.846 198.271">
              <g id="graphisme_tracé_gps" data-name="graphisme tracé gps" transform="translate(-1424.02 -4399.358)">
                <path id="Tracé_53" data-name="Tracé 53" d="M1439.02,4235.636s173.9,7.956,170.367-19.449-198.024-26.521-160.01-67.187,175.039-7.073,175.923-36.246-74.259-11.492-66.3-37.129,50.39-17.681,50.39-17.681" transform="translate(1 351)" fill="none" stroke="#2e2828" stroke-width="5"/>
                <g id="Ellipse_27" data-name="Ellipse 27" transform="translate(1424.02 4577.789)" fill="#297319" stroke="#2e2828" stroke-width="5">
                  <ellipse cx="16" cy="9.92" rx="16" ry="9.92" stroke="none"/>
                  <ellipse cx="16" cy="9.92" rx="13.5" ry="7.42" fill="none"/>
                </g>
                <g id="Ellipse_28" data-name="Ellipse 28" transform="translate(1598.307 4399.358)" fill="#2e2828" stroke="#2e2828" stroke-width="5">
                  <ellipse cx="11.5" cy="8.42" rx="11.5" ry="8.42" stroke="none"/>
                  <ellipse cx="11.5" cy="8.42" rx="9" ry="5.92" fill="none"/>
                </g>
                <path id="Tracé_54" data-name="Tracé 54" d="M1597.307,4187.97l32.409-46.325,28.445,46.325" transform="translate(1 351)" fill="none" stroke="#2e2828" stroke-width="4"/>
                <path id="Tracé_55" data-name="Tracé 55" d="M1597.307,4187.97l32.409-46.325,28.445,46.325" transform="translate(-140.734 274.553)" fill="none" stroke="#2e2828" stroke-width="4"/>
                <path id="Tracé_56" data-name="Tracé 56" d="M1597.307,4160.287l16.2-18.642,14.223,18.642" transform="translate(-79.88 302.237)" fill="none" stroke="#2e2828" stroke-width="4"/>
                <path id="Tracé_57" data-name="Tracé 57" d="M1597.307,4160.287l16.2-18.642,14.223,18.642" transform="translate(-29.521 378.683)" fill="none" stroke="#2e2828" stroke-width="4"/>
                <path id="Tracé_58" data-name="Tracé 58" d="M1603.96,4187.97l25.756-46.325,28.445,46.325" transform="translate(-134.161 364.841)" fill="#297319" stroke="#2e2828" stroke-width="4"/>
              </g>
            </svg>
          </div>
      </div>
      <div class="row row-cols-3">
          <div class="col p-5">
            <h4 class="text-center text-uppercase bg-dark text-white py-2">Carte du parcours</h4>
          </div>
          <div class="col p-5">
            <h4 class="text-center text-uppercase bg-dark text-white py-2">Carte du dénivelé</h4>
          </div>
          <div class="col p-5">
            <h4 class="text-center text-uppercase bg-dark text-white py-2">Tracé GPS</h4>
          </div>
      </div>

    </div>
    <div class="container-fluid justify-content-center py-5 bg-dark">
      <div class="row p-5">
        <h1 class="text-center text-white display-4 text-uppercase">inscrivez - vous !</h1>
      </div>
      <div class="row">
        <p class="text-center text-white">N'hésitez pas à consulter les informations de la course avant de vous inscrire</p>
      </div>
      <div class="row text-center">
        <router-link class="nav-item text-decoration-none text-white" to="Information" >C'est juste ici</router-link>
      </div>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center p-5">
        <b-button href="https://www.le-sportif.com/CalendarDetail/CalendarDetail.aspx?EventID=174735&SHAD="
                type="submit" class="btn btn-warning text-black px-4 gap-3">Je m'inscris</b-button>

      </div>
    </div>
    <div class="container-fluid bg-success">
      <div class="row p-5">
        <h2 class="text-white text-center text-uppercase my-5">nos partenaires</h2>
        <div class="row row-cols-3 ">
          <div class="col text-center my-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="147.894" height="157.762" viewBox="0 0 147.894 157.762">
              <g id="Logo_andelnans" data-name="Logo andelnans" transform="translate(6 6)">
                <path id="Tracé_65" data-name="Tracé 65" d="M337.078,5611.661v90.526s27.3,52.546,64.307,55.146,71.587-55.146,71.587-55.146v-90.526Z" transform="translate(-337.078 -5611.661)" fill="none" stroke="#2e2828" stroke-width="12"/>
                <path id="Tracé_66" data-name="Tracé 66" d="M406.352,5737.27a53.779,53.779,0,0,0,12.239-34.575V5674.08s-21.419-.6-25.244,2.981a48.243,48.243,0,0,1-9.944,6.557v-16.691h79.556v16.691s-9.945-9.538-18.359-9.538H428.535v28.615s1.547,32.168,14.081,34.575" transform="translate(-356.226 -5634.119)" fill="#2e2828" stroke="rgba(112,112,112,0)" stroke-width="1"/>
              </g>
            </svg>
          </div>
          <div class="col text-center my-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="244.961" height="167.07" viewBox="0 0 244.961 167.07">
              <g id="Logo_icone" data-name="Logo icone" transform="translate(0 2)" style="mix-blend-mode: darken;isolation: isolate">
                <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="80.354" cy="79.535" rx="80.354" ry="79.535" transform="translate(68.292)" fill="none" stroke="#2e2828" stroke-miterlimit="10" stroke-width="4"/>
                <path id="Tracé_1" data-name="Tracé 1" d="M170.436,124.093s-6.505,79.45,75.147,90.071l31.236,1.947c-4.54,1.2-97.712-12.9-91.579-101.786Z" transform="translate(-31.857 -51.108)" fill="#2e2828"/>
                <path id="Tracé_2" data-name="Tracé 2" d="M271.748,165.587s26.192-8.868,21.813-31.337-32.271-28.38-46.216-21.877,0,77.217-31.958,84.9-80.764-49.429-80.764-49.429l-22.661-28.972s83.454,66.223,94.5,57.944-.863-61.087,33.916-82.186c30.214-18.329,70.306,1.448,67.4,36.2S271.748,165.587,271.748,165.587Z" transform="translate(-111.961 -70.683)" fill="#2e2828"/>
              </g>
            </svg>
          </div>
          <div class="col text-center my-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="125.057" height="167.136" viewBox="0 0 125.057 167.136">
              <g id="Logo_danjoutins" data-name="Logo danjoutins" transform="translate(0.5 0.5)">
                <path id="Tracé_70" data-name="Tracé 70" d="M337.078,5611.66v103.179s24.922,59.891,58.706,62.855,65.351-62.855,65.351-62.855V5611.66Z" transform="translate(-337.078 -5611.66)" fill="#2e2828" stroke="rgba(238,238,238,0)" stroke-width="1"/>
                <path id="Tracé_69" data-name="Tracé 69" d="M1455.1,5655.257l-1.182-.747s-1.719,2.7-2.31,2.641-1.074-2.554,0-3.33,5.8-4.393,5.8-4.393-5.291,2.268-5.8,1.952-.375-1.206-.375-1.206-1.665,1.407-2.229.747.672-2.182,1.612-2.526a10.505,10.505,0,0,0,2.283-1.464s.828-4.732,1.021-5.143-.574-2.3-.574-3.361v-3.772s2.684,1.476,2.991,2.214.733,1.947.733,1.947h1.577s.426-3.989,1.124-4.361,1.781,3.973,1.781,3.973l2.549,2.446,3.877-1.032-1.841,2.214h3.835l-.537.9,3.3-.9-.921,1.968,5.14-1.558-1.381,1.558,3.682-1.065-1.687,2.788,3.835-2.788-.92,2.788a44.629,44.629,0,0,1,7.236-.906c2.194.107,21.24-2.784,21.24-2.784s7.953,3.4,9.848,3.4,6.781-1.492,6.781-1.492l-2.493,1.492,6.681.533-2.992.96h6.083l-1.795,1.812h4.986l-1.795.958,6.681.854s-3.789,2.557-5.983,2.877-18.349-3.731-18.349-3.731,3.092,4.37,4.388,3.731-2.194.746-2.194.746h5.385l-2.593,1.172h5.185l-1.2,1.066h2.992l-1.3,1.065h3.789s3.889,7.035,5.684,7.141a22.275,22.275,0,0,0,2.991,0l-1.1,1.173h2.293l-1.2.746,1.2,1.066s-3.291,1.066-4.188.746a12.488,12.488,0,0,1-4.886-3.731,30.157,30.157,0,0,1-2.094-3.837s-8.8,1.831-12.109.506a38.688,38.688,0,0,1-6.786-3.811l1.3,3.811.708,2.081-10.429,8.154-4.071-.82-1.475.379v-2.145l3.658-.694,6.727-6.37-3.068-2.585v2s-2.242-2.884-3.3-3.136-3.128-.757-3.482-1.577-7.131,2.239-8.527,3.305-6.681,1.993-6.681,1.993l4.388,6.37h1.6l.7,1.452h3.291v2.657l-4.489-.828s-4.087-2.377-5.483-3.28a26.139,26.139,0,0,1-3.789-3.779l-11.113,4.584s-.779,1.009-1.428.631-1.062-.631-1.062-.631l-6.314,2.082-.354,1.766h-1.711l-1.362,1.64-1.182-1.64-1.021.82v-1.64l-1.289.82v-1.766l13.233-5.8,9.323-5.991-4.189,1.324,1.062-2.018-3.246,2.018,1.3-2.585-3.186,1.261,1.428-3.091-2.49,1.83v-2.838l-2.006,1.45v-2.523l-.826,1.073v-3.532l-1.593,2.459s.118-1.7-.885-1.387A39.535,39.535,0,0,0,1455.1,5655.257Z" transform="translate(-1430.627 -5563.199)" fill="#297319" stroke="rgba(112,112,112,0)" stroke-width="1"/>
                <path id="Tracé_71" data-name="Tracé 71" d="M1455.1,5655.257l-1.182-.747s-1.719,2.7-2.31,2.641-1.074-2.554,0-3.33,5.8-4.393,5.8-4.393-5.291,2.268-5.8,1.952-.375-1.206-.375-1.206-1.665,1.407-2.229.747.672-2.182,1.612-2.526a10.505,10.505,0,0,0,2.283-1.464s.828-4.732,1.021-5.143-.574-2.3-.574-3.361v-3.772s2.684,1.476,2.991,2.214.733,1.947.733,1.947h1.577s.426-3.989,1.124-4.361,1.781,3.973,1.781,3.973l2.549,2.446,3.877-1.032-1.841,2.214h3.835l-.537.9,3.3-.9-.921,1.968,5.14-1.558-1.381,1.558,3.682-1.065-1.687,2.788,3.835-2.788-.92,2.788a44.629,44.629,0,0,1,7.236-.906c2.194.107,21.24-2.784,21.24-2.784s7.953,3.4,9.848,3.4,6.781-1.492,6.781-1.492l-2.493,1.492,6.681.533-2.992.96h6.083l-1.795,1.812h4.986l-1.795.958,6.681.854s-3.789,2.557-5.983,2.877-18.349-3.731-18.349-3.731,3.092,4.37,4.388,3.731-2.194.746-2.194.746h5.385l-2.593,1.172h5.185l-1.2,1.066h2.992l-1.3,1.065h3.789s3.889,7.035,5.684,7.141a22.275,22.275,0,0,0,2.991,0l-1.1,1.173h2.293l-1.2.746,1.2,1.066s-3.291,1.066-4.188.746a12.488,12.488,0,0,1-4.886-3.731,30.157,30.157,0,0,1-2.094-3.837s-8.8,1.831-12.109.506a38.688,38.688,0,0,1-6.786-3.811l1.3,3.811.708,2.081-10.429,8.154-4.071-.82-1.475.379v-2.145l3.658-.694,6.727-6.37-3.068-2.585v2s-2.242-2.884-3.3-3.136-3.128-.757-3.482-1.577-7.131,2.239-8.527,3.305-6.681,1.993-6.681,1.993l4.388,6.37h1.6l.7,1.452h3.291v2.657l-4.489-.828s-4.087-2.377-5.483-3.28a26.139,26.139,0,0,1-3.789-3.779l-11.113,4.584s-.779,1.009-1.428.631-1.062-.631-1.062-.631l-6.314,2.082-.354,1.766h-1.711l-1.362,1.64-1.182-1.64-1.021.82v-1.64l-1.289.82v-1.766l13.233-5.8,9.323-5.991-4.189,1.324,1.062-2.018-3.246,2.018,1.3-2.585-3.186,1.261,1.428-3.091-2.49,1.83v-2.838l-2.006,1.45v-2.523l-.826,1.073v-3.532l-1.593,2.459s.118-1.7-.885-1.387A39.535,39.535,0,0,0,1455.1,5655.257Z" transform="translate(-1430.627 -5612.565)" fill="#297319" stroke="rgba(112,112,112,0)" stroke-width="1"/>
              </g>
            </svg>
          </div>
        </div>
        <div class="row row-cols-3 py-5">
          <div class="col">
            <p class="text-center text-uppercase text-white">Commune d'Andelnans</p>
          </div>
          <div class="col">
            <p class="text-center text-uppercase text-white">L'association la ronde du Bosmont</p>
          </div>
          <div class="col">
            <p class="text-center text-uppercase text-white">Commune de Danjoutin</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import param from "./param/param.js";

export default {
  name: 'Accueil',
  data () {
    return {
      listeDate:[],
    }
  },
  created(){
    axios.get(param.host+"Course").then(response=>{
      console.log("Response", response);
      this.listeDate = response.data;
    })
    .catch(error => console.log(error))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
