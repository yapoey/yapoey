<template>
    <!-- Start Contact Area -->
    <section class="contact-area section-padding" id="contact">
        <div class="container">
            <!-- Start Section Title -->
            <div class="row mb-50">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>{{$t('ContactArea.contact')}}</h2>
                    </div>
                </div>
            </div>
            <!-- End Section Title -->

            <div class="row">
                <div class="col-lg-3 col-md-4 mb-5 mb-lg-0">
                    <div class="contact-left">
                        <div class="media align-items-center">
                            <div class="media-icon">
                                <i class="icon-envelope-letter"></i>
                            </div>
                            <div class="media-body">
                                <h4>{{$t('Common.email')}}</h4>
                                <span>{{$t('Common.vEmail')}}</span>
                            </div>
                        </div>

                        <div class="media align-items-center">
                            <div class="media-icon">
                                <i class="icon-screen-smartphone"></i>
                            </div>
                            <div class="media-body">
                                <h4>{{$t('Common.phone')}}</h4>
                                <span>{{$t('Common.vPhone')}}</span>
                            </div>
                        </div>

                        <div class="media align-items-center">
                            <div class="media-icon">
                                <i class="icon-map"></i>
                            </div>
                            <div class="media-body">
                                <h4>Location</h4>
                                <span>Seoul South Korea</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 offset-lg-2 col-md-8">
                    <form
                            id="contact-form"
                            class="row contact-form"
                            @submit.prevent="sendEmail">
                        <div class="col-xs-12 col-sm-6">
                            <div class="form-group">
                                <input
                                        type="text"
                                        class="form-control"
                                        name="from_name"
                                        v-model="fromName"
                                        id="from_name"
                                        :placeholder="$t('ContactArea.enterName')"
                                />
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <div class="form-group">
                                <input
                                        type="email"
                                        class="form-control"
                                        name="user_email"
                                        v-model="userEmail"
                                        id="user_email"
                                        :placeholder="$t('ContactArea.urEmail')"
                                />
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12">
                            <div class="form-group">
                                <input
                                        type="text"
                                        class="form-control"
                                        name="subject"
                                        v-model="subject"
                                        :placeholder="$t('ContactArea.enterDiscussion')"
                                />
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12">
                            <div class="form-group">
                <textarea
                        name="message"
                        id="message"
                        v-model="message"
                        class="form-control"
                        :placeholder="$t('ContactArea.enterMsg')"
                ></textarea>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12">
                            <div class="button-field">
                                <button type="submit" class="btn radius-btn"
                                        :disabled="!message || !userEmail || !fromName">
                                    Send Message now
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <EmailConfirm v-if="showConfirm"/>
    </section>
    <!-- End Contact Area -->
</template>

<script>
    import emailjs from 'emailjs-com'
    import EmailConfirm from "./Common/EmailConfirm";

    export default {
        name: "ContactArea",
        data() {
            return {
                showConfirm: false,
                userEmail: null,
                message: null,
                fromName: null,
                subject: null
            }
        },
        methods: {
            sendEmail(e) {
                emailjs.sendForm('service_9dxpbwb', 'template_fmk2lxt', e.target, 'user_ologjhW4akqcLHXTxGGqe')
                    .then(res => {
                        if (res.status === 200) {
                            this.showConfirm = true
                            this.userEmail = this.message = this.subject = this.fromName = null
                            this.$ga.event('contact us', 'email sent')
                            let vue = this
                            setTimeout(function () {
                                vue.showConfirm = false;
                            }, 1300);
                        }
                    })
            },
        },
        components: {
            EmailConfirm
        }
    };

</script>
