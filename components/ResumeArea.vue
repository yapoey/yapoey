<template>
  <!-- Resume Area Start -->
  <section class="resume-area section-padding" id="resume">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>{{ $t("ResumeArea.resume") }}</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->
      <div class="row">
        <div class="col-lg-3 d-none d-lg-block">
          <!-- Start Resume Nav -->
          <nav id="navi">
            <ul>
              <li>
                <a
                  href="#page-1"
                  @click="$ga.event('ResumeArea', 'Education')"
                  >{{ $t("ResumeArea.Education") }}</a
                >
              </li>
              <li>
                <a
                  href="#page-2"
                  @click="$ga.event('ResumeArea', 'Experience')"
                  >{{ $t("ResumeArea.Experience") }}</a
                >
              </li>
              <li>
                <a href="#page-3" @click="$ga.event('ResumeArea', 'Skills')">{{
                  $t("ResumeArea.Skills")
                }}</a>
              </li>
              <!--              <li><a href="#page-4">Awards</a></li>-->
            </ul>
          </nav>
          <!-- End Resume Nav -->
        </div>
        <div class="col-lg-9 col-md-12">
          <!-- Start Education -->
          <div id="page-1" class="page one">
            <h3 class="heading">{{ $t("ResumeArea.Education") }}</h3>
            <div
              class="resume-wrap transition d-flex"
              v-for="item in $t('ResumeArea.educations')"
              @click="$ga.event('AboutArea', 'Education Details', item.name)"
            >
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-graduation"></span>
              </div>
              <div class="text pl-3 pb-0">
                <span class="date">{{ item.year }}</span>
                <h4>{{ item.degree }}</h4>
                <span class="position m-0">{{ item.name }}</span>
                <!--                <p>-->
                <!--                  {{item.des}}-->
                <!--                </p>-->
              </div>
            </div>
          </div>
          <!-- End Education -->

          <!-- Start Experience -->
          <div id="page-2" class="page two">
            <h3 class="heading">{{ $t("ResumeArea.Experience") }}</h3>
            <div
              class="resume-wrap transition d-flex flex-column"
              v-for="job in $t('ResumeArea.experiences')"
              @click="$ga.event('AboutArea', 'Experience Details', job.company)"
            >
              <Experience :job="job" />
            </div>
          </div>
          <!-- End Experience -->

          <!-- start Skills -->
          <div id="page-3" class="page three">
            <h3 class="heading">{{ $t("ResumeArea.Skills") }}</h3>
            <div class="resume-wrap transition d-flex flex-column">
              <h4>{{ $t("ResumeArea.WebDevelop") }}</h4>
              <div class="mt-2 d-flex flex-justify-web-develop flex-wrap">
                <div
                  class="d-flex flex-column justify-content-center text-center"
                  style="height: 100px; width: 100px"
                  v-for="icon in webDevelopmentIcons"
                  :key="icon.id"
                >
                  <img
                    v-if="icon.url != null"
                    class="align-self-center"
                    :src="'/assets/img/works/webdevelop/' + icon.url"
                    height="50"
                    width="50"
                    :alt="icon.name"
                  />
                  <span class="position mt-1">{{ icon.name }}</span>
                </div>
              </div>
            </div>

            <div class="resume-wrap transition d-flex flex-column">
              <h4>{{ $t("ResumeArea.WebHosting") }}</h4>
              <div
                class="mt-2 d-flex flex-justify-hosting-management flex-wrap"
              >
                <div
                  class="d-flex flex-column justify-content-center text-center"
                  style="height: 100px; width: 100px"
                  v-for="icon in hostingManagement"
                  :key="icon.id"
                >
                  <img
                    v-if="icon.url != null"
                    class="align-self-center"
                    :src="'/assets/img/works/management/' + icon.url"
                    height="50"
                    width="50"
                    :alt="icon.name"
                  />
                  <span class="position mt-1">{{ icon.name }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end skills -->

          <!-- Start Skills -->
          <!--          <div id="page-3" class="page three">-->
          <!--            <h3 class="heading">Skills</h3>-->
          <!--            <div class="row">-->
          <!--              <div class="col-md-6">-->
          <!--                <div class="progress-wrap">-->
          <!--                  <h5>Photoshop</h5>-->
          <!--                  <div class="progress">-->
          <!--                    <div class="progress-bar" style="width:90%">-->
          <!--                      <span>90%</span>-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div class="col-md-6">-->
          <!--                <div class="progress-wrap">-->
          <!--                  <h5>jQuery</h5>-->
          <!--                  <div class="progress">-->
          <!--                    <div class="progress-bar" style="width:85%">-->
          <!--                      <span>85%</span>-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div class="col-md-6">-->
          <!--                <div class="progress-wrap">-->
          <!--                  <h5>HTML5</h5>-->
          <!--                  <div class="progress">-->
          <!--                    <div class="progress-bar" style="width:95%">-->
          <!--                      <span>95%</span>-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div class="col-md-6">-->
          <!--                <div class="progress-wrap">-->
          <!--                  <h5>CSS3</h5>-->
          <!--                  <div class="progress">-->
          <!--                    <div class="progress-bar" style="width:90%">-->
          <!--                      <span>90%</span>-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div class="col-md-6">-->
          <!--                <div class="progress-wrap">-->
          <!--                  <h5>WordPress</h5>-->
          <!--                  <div class="progress">-->
          <!--                    <div class="progress-bar" style="width:70%">-->
          <!--                      <span>70%</span>-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--              <div class="col-md-6">-->
          <!--                <div class="progress-wrap">-->
          <!--                  <h5>SEO</h5>-->
          <!--                  <div class="progress">-->
          <!--                    <div class="progress-bar" style="width:80%">-->
          <!--                      <span>80%</span>-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
          <!-- End Skills -->

          <!-- Start Awards -->
          <!--          <div id="page-4" class="page four">-->
          <!--            <h3 class="heading">Awards</h3>-->
          <!--            <div class="resume-wrap transition d-flex">-->
          <!--              <div-->
          <!--                class="icon d-flex align-items-center justify-content-center"-->
          <!--              >-->
          <!--                <span class="icon-badge"></span>-->
          <!--              </div>-->
          <!--              <div class="text pl-3">-->
          <!--                <span class="date">2014-2015</span>-->
          <!--                <h4>Top 10 Web Developer</h4>-->
          <!--                <span class="position">Mansoura University</span>-->
          <!--                <p>-->
          <!--                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text-->
          <!--                  used in laying out print, graphic or web designs. The passage-->
          <!--                  is attributed to an unknown typesetter in the 15th century who-->
          <!--                  is thought to have.-->
          <!--                </p>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="resume-wrap transition d-flex">-->
          <!--              <div-->
          <!--                class="icon d-flex align-items-center justify-content-center"-->
          <!--              >-->
          <!--                <span class="icon-badge"></span>-->
          <!--              </div>-->
          <!--              <div class="text pl-3">-->
          <!--                <span class="date">2014-2015</span>-->
          <!--                <h4>Top 5 LeaderShip Exellence Winner</h4>-->
          <!--                <span class="position">Mansoura University</span>-->
          <!--                <p>-->
          <!--                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text-->
          <!--                  used in laying out print, graphic or web designs. The passage-->
          <!--                  is attributed to an unknown typesetter in the 15th century who-->
          <!--                  is thought to have.-->
          <!--                </p>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="resume-wrap transition d-flex">-->
          <!--              <div-->
          <!--                class="icon d-flex align-items-center justify-content-center"-->
          <!--              >-->
          <!--                <span class="icon-badge"></span>-->
          <!--              </div>-->
          <!--              <div class="text pl-3">-->
          <!--                <span class="date">2014-2015</span>-->
          <!--                <h4>Top 4 Web Tester</h4>-->
          <!--                <span class="position">Mansoura University</span>-->
          <!--                <p>-->
          <!--                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text-->
          <!--                  used in laying out print, graphic or web designs. The passage-->
          <!--                  is attributed to an unknown typesetter in the 15th century who-->
          <!--                  is thought to have.-->
          <!--                </p>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
          <!-- End Awards -->
        </div>
      </div>
    </div>
  </section>
  <!-- Resume Area End -->
</template>
<script>
import Experience from "./Common/Experience";

export default {
  name: "ResumeArea",
  data() {
    return {
      webDevelopmentIcons: [
        { id: 1, url: "bootstrap.png", name: "Bootstrap" },
        { id: 2, url: "css3.png", name: "CSS" },
        { id: 3, url: "html5.png", name: "HTML" },
        { id: 4, url: "javascript.png", name: "Javascript" },
        { id: 5, url: "jquery.png", name: "Jquery" },
        { id: 6, url: "laravel.png", name: "Laravel" },
        { id: 7, url: "nodejs.png", name: "Express.js" },
        { id: 8, url: "vue.png", name: "Vue.js" },
        { id: 9, url: "sass.png", name: "sass" },
        { id: 10, url: "php.png", name: "php" },
        { id: 11, url: "webpack.png", name: "Webpack" },
        { id: 12, url: null, name: " " }, // for equalize the space
      ],
      hostingManagement: [
        { id: 1, url: "aws.png", name: "AWS" },
        { id: 2, url: "googleCloud.png", name: "Google Cloud" },
        { id: 6, url: "docker.png", name: "Docker" },
        { id: 3, url: "github.png", name: "Github" },
        { id: 4, url: "bitbucket.png", name: "Bitbucket" },
        { id: 5, url: "jira.png", name: "Jira" },
      ],
    };
  },
  components: {
    Experience,
  },
};
</script>
<style>
.flex-justify-web-develop {
  justify-content: space-around;
}

.flex-justify-hosting-management {
  justify-content: space-around;
}

@media only screen and (min-width: 1200px) {
  .flex-justify-web-develop {
    justify-content: initial;
  }
}

@media only screen and (min-width: 490px) {
  .flex-justify-hosting-management {
    justify-content: initial;
  }
}
</style>
