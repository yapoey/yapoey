<template>
    <div @click="expand = !expand">
        <div class="d-flex">
            <div class="icon d-flex align-items-center justify-content-center">
                <span class="icon-briefcase"></span>
            </div>
            <div class="text pl-3">
                <span class="date">{{job.duration}}</span>
                <h4>{{job.title}}</h4>
                <span class="position d-block m-0">{{job.employmentType}}</span>
                <span class="position">{{job.company}}</span>
            </div>
        </div>
        <div class="d-flex justify-content-center" style="margin: 0 0 -15px 0">
            <i v-if="expand === false" class="fa fa-angle-double-down" aria-hidden="true"></i>
        </div>
        <pre v-if="expand">
            {{job.des}}
            </pre>
        <div class="d-flex justify-content-center" style="margin: 15px 0 -15px 0">
            <i v-if="expand === true" class="fa fa-angle-double-up" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            job: Object
        },
        name: "textTruncate",
        data() {
            return {
                expand: false
            }
        },
    }
</script>
<style>
    pre {
        white-space: pre-line;
        color: inherit !important;
        font-size: inherit !important;
        font-family: inherit !important;
    }
</style>
