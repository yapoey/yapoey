<template>
  <!-- Welcome Area Start -->
  <section class="hero-area sky-blue d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <!-- Start Hero Caption -->
          <div class="hero-caption">
            <span class="subheading">{{$t('HeroArea.hey')}}</span>
            <h1>{{$t('HeroArea.YapoeY')}}</h1>
            <p style="margin-bottom: 20px">{{$t('HeroArea.motto')}}</p>
            <div>
              {{$t('HeroArea.Iam')}}
              <div id="typed-strings">
              <!-- Animated Text Writer -->
              <span>{{$t('HeroArea.freelancer')}}</span>
              <span>{{$t('HeroArea.frontend')}}</span>
              <span>{{$t('HeroArea.backend')}}</span>
            </div>
            <span class="LR-C" id="typed" style="white-space:pre;"></span>
            </div>
            <a :href="$t('doc.pdf')"
               @click="$ga.event('HeroArea','Download Short CV')"
               class="btn radius-btn">
              {{$t('HeroArea.shortCv')}}
            </a>
          </div>
          <!-- End Hero Caption -->
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Hero Right Image -->
          <div class="hero-img">
            <img src="/assets/img/hero/heroRight.png" alt="Hero image" />
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Animated Shape -->
    <div class="hero-shape custom-animation">
      <img src="/assets/img/hero/hero-shape.png" alt="animation shape" />
    </div>
  </section>
  <!-- Welcome Area End -->
</template>
<script>
  export default {
    name: "HeroArea",
  };
</script>

