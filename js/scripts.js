/*!
 * Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

map.on("load", () => {
  // Asrama Putra
  map.addSource("asrama_putra", {
    type: "geojson",
    data: "assets/geojson/asramaputra.geojson",
  });

  map.addLayer({
    id: "asrama_putra",
    type: "fill",
    source: "asrama_putra",
    layout: {},
    paint: {
      "fill-color": "#1e3d59",
      "fill-opacity": 1,
    },
  });

  map.addLayer({
    id: "outline_asramaputra",
    type: "line",
    source: "asrama_putra",
    layout: {},
    paint: {
      "line-color": "black",
      "line-width": 1,
    },
  });

  // Cek apakah GeoJSON dimuat dengan benar
  fetch("assets/geojson/asramaputra.geojson")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to load asramaputra.geojson: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log("GeoJSON data loaded successfully:", data);
    })
    .catch((error) => {
      console.error("Error loading GeoJSON:", error);
    });

  // Asrama Putri
  map.addSource("asrama_putri", {
    type: "geojson",
    data: "assets/geojson/asramaputri.geojson",
  });

  map.addLayer({
    id: "asrama_putri",
    type: "fill",
    source: "asrama_putri",
    layout: {},
    paint: {
      "fill-color": "#ff6e40",
      "fill-opacity": 1,
    },
  });

  map.addLayer({
    id: "outline_asramaputri",
    type: "line",
    source: "asrama_putri",
    layout: {},
    paint: {
      "line-color": "black",
      "line-width": 1,
    },
  });

  // Bangunan Umum
  map.addSource("bangunan_umum", {
    type: "geojson",
    data: "assets/geojson/bangunanumum.geojson",
  });

  map.addLayer({
    id: "bangunan_umum",
    type: "fill",
    source: "bangunan_umum",
    layout: {},
    paint: {
      "fill-color": "#ffc13b",
      "fill-opacity": 1,
    },
  });

  map.addLayer({
    id: "outline_bangunanumum",
    type: "line",
    source: "bangunan_umum",
    layout: {},
    paint: {
      "line-color": "black",
      "line-width": 1,
    },
  });
});
