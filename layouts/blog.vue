<template>
  <div class="blog-container">
    <header>
      <div class="header-area header-transparrent d-flex">
        <div class="main-header header-sticky w-100">
          <div class="container position-relative">
            <div class="row align-items-center">
              <!-- Logo -->
              <div class="col-xl-2 col-lg-2 col-md-2">
                <div
                  class="logo"
                  :style="
                    $store.getters.isDark
                      ? 'background-image: url(/assets/img/logo.white.png)'
                      : 'background-image: url(/assets/img/logo.png)'
                  "
                >
                  <a href="/" @click="$ga.event('Header', 'logo')"
                    ><div
                      class="logo"
                      style="height: 55px; width: 170px"
                      :style="
                        $store.getters.isDark
                          ? 'background-image: url(/assets/img/logo.white.png)'
                          : 'background-image: url(/assets/img/logo.png)'
                      "
                    ></div
                  ></a>
                </div>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10">
                <!-- Main-menu -->
                <div class="main-menu float-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li class="nav-item">
                        <nuxt-link
                          to="/blog"
                          class="nav-link transition"
                          :class="{
                            active: $route.path.includes('courses'),
                          }"
                          @click="$ga.event('Header', 'Courses')"
                        >
                          Courses</nuxt-link
                        >
                      </li>
                      <li class="nav-item">
                        <nuxt-link
                          to="/blog/coding-test"
                          class="nav-link transition"
                          :class="{
                            active: $route.path.includes('coding-test'),
                          }"
                          @click="$ga.event('Header', 'Coding-test')"
                          >Coding-test</nuxt-link
                        >
                      </li>
                      <li class="nav-item d-none d-lg-inline">
                        <img
                          v-if="$store.getters.isDark"
                          src="/assets/img/sun.png"
                          width="24"
                          height="24"
                          alt="sun_img"
                          @click="setColorMode('light')"
                        />
                        <img
                          v-else
                          src="/assets/img/moon.png"
                          width="24"
                          height="24"
                          alt="sun_img"
                          @click="setColorMode('dark')"
                        />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!-- Mobile Menu -->
              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
            <div
              class="d-flex d-inline d-lg-none justify-content-center align-items-center position-absolute h-100"
              style="cursor: pointer; top: 0; right: 15px"
            >
              <img
                v-if="$store.getters.isDark"
                src="/assets/img/sun.png"
                width="24"
                height="24"
                alt="sun_img"
                @click="setColorMode('light')"
              />
              <img
                v-else
                src="/assets/img/moon.png"
                width="24"
                height="24"
                alt="sun_img"
                @click="setColorMode('dark')"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
    <main style="flex: 1">
      <nuxt />
    </main>
    <Footer class="blog-footer" />
  </div>
</template>
<script>
import Footer from "~/components/Footer";
export default {
  components: {
    Footer,
  },
  middleware: "init",
  head() {
    return {
      title: "yapoey Blog",
      bodyAttrs: {
        class: this.$store.getters.isDark ? "dark-theme" : "",
      },
    };
  },
  mounted() {
    /** ------- Pre Loader **/
    $(window).on("load", function () {
      $(".preloader-area").delay(200).fadeOut(500);
    });

    $("body").scrollspy({ target: "#navigation", spy: "scroll", offset: 300 });

    /* ================================================= */
    /*	slick Nav
     /* ================================================= */

    /* mobile_menu */

    var menu = $("ul#navigation");
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        openedSymbol: "-",
        closeOnClick: true,
      });
    }

    /* Smooth Scrolling Using Navigation Menu */

    $('.nav-link[href*="#"]').on("click", function (e) {
      $("html,body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 70,
        },
        500
      );
      e.preventDefault();
    });

    /*  Custom Sticky Menu  */

    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-sticky").removeClass("sticky-bar");
      } else {
        $(".header-sticky").addClass("sticky-bar");
      }
    });

    /* ================================================= */
    /*    sildeBar scroll
     /* ================================================= */
    $.scrollUp({
      scrollName: "scrollUp",
      topDistance: "300",
      topSpeed: 300,
      animation: "fade",
      animationInSpeed: 200,
      animationOutSpeed: 200,
      scrollText: '<i class="icon-arrow-up"></i>',
      activeOverlay: false,
    });

    /**
     * =======================================
     * typed.js customize
     * =======================================
     */

    $("#typed").typed({
      stringsElement: $("#typed-strings"),
      typeSpeed: 100,
      backDelay: 1000,
      loop: true,
      contentType: "html", // or text
      // defaults to false for infinite loop
      loopCount: false,
      callback: function () {
        //call back after one loop
        foo();
      },
      resetCallback: function () {
        newTyped();
      },
    });

    $(".reset").click(function () {
      "use strict";
      $("#typed").typed("reset");
    });

    function newTyped() {
      "use strict" /* A new typed object */;
    }

    function foo() {
      "use strict";
    }

    // Resume Navigation

    (function () {
      //variable that will hold the href attr of the links in the menu
      var sections = [];
      //variable that stores the id of the section
      var id = false;
      //variable for the selection of the anchors in the navbar
      var $navbara = $("#navi a");

      $navbara.on("click", function (e) {
        //prevent the page from refreshing
        e.preventDefault();
        //set the top offset animation and speed
        $("html, body").animate(
          {
            scrollTop: $($(this).attr("href")).offset().top - 180,
          },
          500
        );
        //hash($(this).attr("href"));
      });

      //select all the anchors in the navbar one after another
      $navbara.each(function () {
        // and adds them in the sections variable
        sections.push($($(this).attr("href")));
      });
      $(window).on("scroll", function (e) {
        // scrollTop retains the value of the scroll top with the reference at the middle of the page
        var scrollTop = $(this).scrollTop() + $(window).height() / 2;
        //cycle through the values in sections array
        for (var i in sections) {
          var section = sections[i];
          //if scrollTop variable is bigger than the top offset of a section in the sections array then
          if (scrollTop > section.offset().top) {
            var scrolled_id = section.attr("id");
          }
        }
        if (scrolled_id !== id) {
          id = scrolled_id;
          $($navbara).removeClass("current");
          $('#navi a[href="#' + id + '"]').addClass("current");
        }
      });
    })();
  },
  methods: {
    setColorMode(v) {
      this.$store.dispatch("setColorMode", v);
    },
  },
};
</script>
<style lang="scss" scoped>
main {
  padding-top: 75px;
}
.blog-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
