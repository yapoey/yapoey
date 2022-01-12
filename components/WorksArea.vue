<template>
  <!-- Start Works Area -->
  <section class="works-area section-padding sky-blue" id="works">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>{{ $t("WorkArea.myProject") }}</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->

      <div class="row mb-4">
        <div class="col-xs-12">
          <div class="filters">
            <ul>
              <li class="active" data-filter=".all">All</li>
              <li
                @click="$ga.event('WorksArea', 'Frontend')"
                :data-filter="'.' + $t('Common.frontend')"
              >
                {{ $t("Common.frontend") }}
              </li>
              <li
                @click="$ga.event('WorksArea', 'Backend')"
                :data-filter="'.' + $t('Common.fullStack')"
              >
                {{ $t("Common.fullStack") }}
              </li>
              <li
                @click="$ga.event('WorksArea', 'Practicing')"
                :data-filter="'.' + $t('Common.practicing')"
              >
                {{ $t("Common.practicing") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="filters-content">
        <div class="row grid">
          <!-- start single work item -->
          <div
            class="single-work col-lg-4 col-md-6 col-sm-12 all"
            v-for="project in $t('WorkArea.projects')"
            :class="project.type"
            @click="$ga.event('WorksArea', 'Projects', project.name)"
          >
            <div class="position-relative">
              <div class="thumb">
                <img
                  class="image img-fluid"
                  :width="project.width"
                  :height="project.height"
                  :src="'/assets/img/works/portfolio/' + project.img"
                  alt="work"
                />
              </div>
              <a
                class="overlay transition"
                target="_blank"
                :href="project.url"
              ></a>
              <div class="short-info transition">
                <h4>{{ project.name }}</h4>
                <div class="cat">{{ project.hash }}</div>
              </div>
            </div>
          </div>
          <!-- end single work item -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Works Area -->
</template>

<script>
export default {
  name: "WorksArea",
};
</script>
