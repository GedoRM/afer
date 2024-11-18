const data = [
    {
      title: "Mejora Drenaje Pluvial",
      text: "MEJORAMIENTO DE DRENAJE PLUVIAL 4 CAMINOS 1ª. ETAPA TRAMO KM 0+348 AL KM 0+789 EN LA COLONIA 4 CAMINOS DE SAN FCO. DE CAMPECHE",
      imgSrc: "../img/ourProject1.jpg",
      class: "op1"
    },
    {
      title: "Construcci&oacute;n Drenaje Pluvial",
      text: "CONSTRUCCI&oacute;N DE DRENAJE PLUVIAL CENTRO, TRAMO CENTRO HISTÓRICO, EN LA LOCALIDAD DE SAN FRANCISCO DE CAMPECHE, MUNICIPIO DE CAMPECHE.",
      imgSrc: "../img/ourProject2.jpg",
      class: "op2"
    },
    {
      title: "Construcci&oacute;n Drenaje Pluvial",
      text: "CONSTRUCCION DE DRENAJE PLUVIAL PATRICIO TRUEBA, TRAMO AV. CASA DE JUSTICIA-AV. COLOSIO, DEL KM 2-700 AL 3+640 DE LA CIUDAD DE SAN FRANCISCO DE CAMPECHE, MPIO. DE CAMPECHE. CON SECCIÓN DE 2.0 X 2.0 MT Y 2.5 X 2.0 MT.",
      imgSrc: "../img/ourProject3.jpg",
      class: "op3"
    },
    {
      title: "Construcci&oacute;n Distribuidor Vial",
      text: "CONSTRUCCIÓN DEL DISTRIBUIDOR VIAL DEL ENTRONQUE DE LAS AVENIDAS HÉROE DE NACOZARI, AV. EJÉRCITO MEXICANO Y LUIS DONALDO COLOSIO Y RECONSTRUCCIÓN DE LA AVENIDA REVOLUCIÓN, ENTRE AV. GOBERNADORES Y AV. COLOSIO, SAN FRANCISCO DE CAMPECHE.",
      imgSrc: "../img/ourProject4.jpg",
      class: "op4"
    },
    {
      title: "Construcci&oacute;n Drenaje Pluvial",
      text: "CONSTRUCCION DE DRENAJE PLUVIAL EN CALLE S/N ENTRE FRANCISCO ALVAREZ SUAREZ Y AZUFRE, COLONIA AMPLIACION JOSEFA ORTIZ DE DOMINGUEZ DE SAN FRANCISCO DE CAMPECHE",
      imgSrc: "../img/ourProject5.jpg",
      class: "op5"
    },
    {
      title: "Construcci&oacute;n Puente Vehicular",
      text: "PUENTE VEHICULAR DE LA AV. FRANCISCO I. MADERO (RIA) SAN FRANCISCO, CAMPECHE, CAMPECHE.",
      imgSrc: "../img/ourProject6.jpg",
      class: "op6"
    },
    {
      title: "Construcci&oacute;n Drenaje Pluvial",
      text: "CONSTRUCCION DE DRENAJE PLUVIAL DE LA AV. SOLIDARIDAD NACIONAL SAN FRANCISCO DE CAMPECHE, CAMPECHE.",
      imgSrc: "../img/ourProject7.jpg",
      class: "op7"
    },
    {
      title: "Construcci&oacute;n de Edificio",
      text: "TRABAJOS DE CONSTRUCCION DEL EDIFICIO DE AUTOTRANSPORTE FEDERAL, EN EL CENTRO SCT CAMPECHE.",
      imgSrc: "../img/ourProject8.jpg",
      class: "op8"
    },
    {
      title: "Reconstrucci&oacute;n de Calles",
      text: "RECONSTRUCCION DE CALLES Y BANQUETAS DEL CENTRO HISTORICO. LOCALIDAD: SAN FRANCISCO DE CAMPECHE, MUNICIPIO: CAMPECHE.",
      imgSrc: "../img/ourProject9.jpg",
      class: "op9"
    },
    {
      title: "Construcci&oacute;n de Zapatas",
      text: "CONSTRUCCION DE ZAPATAS PARA NUCLEO DE CIMENTACION DEL EDIFICIO  4 DE LA CIUDAD ADMINISTRATIVA EN LA LOCALIDAD DE SAN FRANCISCO DE CAMPECHE,CAMPECHE PARTIDA 2 APOYO III.",
      imgSrc: "../img/ourProject10.jpg",
      class: "op10"
    },
    {
      title: "Colocaci&oacute;n de Dovelas",
      text: "COLOCACION DE DOVELAS DE CONCRETO ARMADO PARA FORMAR 4 DUQUES DE ALBA EN EL P.A.C. SEYBAPLAYA, CAMPECHE.",
      imgSrc: "../img/ourProject11.jpg",
      class: "op11"
    },
    {
      title: "Obra Civil para Fuente Urbana Espectacular",
      text: "PARQUE MOCH COHUO (FUENTE URBANA ESPECTACULAR, TRABAJOS COMPLEMENTARIOS, OBRA CIVIL DE ESTRUCTURA DE ALBERCA) EN LA LOCALIDAD DE SAN FRANCISCO DE CAMPECHE. LOCALIDAD SAN FRANCISCO DE CAMPECHE, MUNICIPIO: CAMPECHE.",
      imgSrc: "../img/ourProject12.jpg",
      class: "op12"
    },
    {
      title: "Construcci&oacute;n de Fuente Urbana Espectacular",
      text: "PARQUE MOCH COHUO (FUENTE URBANA ESPECTACULAR, CONSTRUCCION DE CANALES CENTRALES, ACABADOS Y PINTURA), EN LA LOCALIDAD DE SAN FRANCISCO DE CAMPECHE. LOCALIDAD SAN FRANCISCO DE CAMPECHE, MUNICIPIO: CAMPECHE.",
      imgSrc: "../img/ourProject13.jpg",
      class: "op13"
    },
    {
      title: "Construcci&oacute;n de Bodegas",
      text: "CONSTRUCCIÓN DE 15 BODEGAS, SOBRE LA AV, HEROE DE NACOZARI. PARQUE LOGISTICO DON CHUCHO.",
      imgSrc: "../img/ourProject14.jpg",
      class: "op14"
    },
    {
      title: "Reconstrucci&oacute;n de Calle",
      text: "RECONSTRUCCION DE CALLE 21 ENTRE CALLE VILLACABRA Y CALLE 116, CALLE 114 ENTRE CALLE 12 Y CALLE 14, CALLE 116 ENTRE CALLE 15 Y CALLE 14, CALLE 14 ENTRE CALLE 112 Y CALLE 114; COLONIA SAN JOAQUIN DE SAN FCO. DE CAMPECHE.",
      imgSrc: "../img/ourProject15.jpg",
      class: "op15"
    }
  ];

  const itemsPerPage = 4; // 4 elementos por página
  let currentPage = 1;

  // Función para renderizar las tarjetas
  function renderCards(page) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Limpiar las tarjetas existentes
    
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = data.slice(start, end);
    var cont =1;
    currentItems.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("col-xl-3", "col-md-6", "col-lg-4", "mb-4");
      card.innerHTML = `
        <div class="card h-100">
          <a class="${item.class}" href="${item.imgSrc}" title="">
            <div class="view overlay zoom">
              <img src="${item.imgSrc}" class="card-img-top custom-img">
            </div>
            <div class="card-body">
              <h4 class="card-title text-center fw-bold">${item.title}</h4>
              <p class="card-text text-center">${item.text}</p>
            </div>
          </a>
        </div>
      `;
      cardContainer.appendChild(card);
      cont++;
    });
  }

  // Función para renderizar la paginación
  function renderPagination() {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = ""; // Limpiar la paginación existente

    const pageCount = Math.ceil(data.length / itemsPerPage); // Total de páginas

    for (let i = 1; i <= pageCount; i++) {
      const li = document.createElement("li");
      li.classList.add("page-item");
      if (i === currentPage) li.classList.add("active");

      li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      li.addEventListener("click", function(e) {
        e.preventDefault();
        currentPage = i;
        renderCards(currentPage); // Actualiza las tarjetas
        renderPagination(); // Actualiza la paginación
      });

      paginationContainer.appendChild(li);
    }
  }

  // Inicializar la página
  renderCards(currentPage); // Muestra las primeras 4 tarjetas
  renderPagination(); // Muestra los botones de paginación