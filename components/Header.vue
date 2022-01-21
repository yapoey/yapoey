<template>
  <!-- Header Start -->
  <header>
    <div class="header-area header-transparrent d-flex">
      <div class="main-header header-sticky w-100">
        <div class="container position-relative">
          <div class="row align-items-center flex-grow-1">
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
                      <a
                        class="nav-link transition active"
                        @click="$ga.event('Header', 'Home')"
                        href="#body"
                      >
                        {{ $t("Header.home") }}</a
                      >
                    </li>
                    <!-- <li class="nav-item">
                      <a
                        class="nav-link transition"
                        @click="$ga.event('Header', 'services')"
                        href="#services"
                        >{{ $t("Header.services") }}</a
                      >
                    </li> -->
                    <li class="nav-item">
                      <a
                        class="nav-link transition"
                        @click="$ga.event('Header', 'about')"
                        href="#about"
                        >{{ $t("Header.about") }}</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link transition"
                        @click="$ga.event('Header', 'resume')"
                        href="#resume"
                        >{{ $t("Header.resume") }}</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link transition"
                        @click="$ga.event('Header', 'works')"
                        href="#works"
                        >{{ $t("Header.works") }}</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link transition"
                        href="#contact"
                        @click="$ga.event('Header', 'contact')"
                        >{{ $t("Header.contact") }}</a
                      >
                    </li>
                    <li class="nav-item">
                      <nuxt-link
                        to="/blog"
                        class="nav-link transition"
                        @click="$ga.event('Header', 'blog')"
                        >{{ $t("Header.blog") }}</nuxt-link
                      >
                    </li>
                    <li class="nav-item" style="margin-left: 15px">
                      <a class="nav-link transition" href="#">{{
                        $t("Header.languages")
                      }}</a>
                      <ul class="submenu transition">
                        <li><a href="/">English</a></li>
                        <li><a href="/ko">한국어</a></li>
                      </ul>
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
  <!-- Header End -->
</template>

<script>
export default {
  name: "Header",
  methods: {
    changeLang(lang) {
      window.location.href = "/" + (lang === "en" ? "" : lang);
    },
    setColorMode(v) {
      this.$store.dispatch("setColorMode", v);
    },
  },
};
</script>
