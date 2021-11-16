<template>
    <div>
        <transition name="modal">
            <div class="modal-mask" v-on:touchmove="onTouchmove">
                <slot name="body" class="bg-success">
                    default body
                </slot>
            </div>
        </transition>
    </div>

</template>

<script>
    export default {
        name: 'Modal',
        props:{
            maskActivation:{
                type: Boolean,
                delete: false
            }
        },
        methods:{
            onTouchmove: function (event) {
                console.log(event)
                event.preventDefault()
            },
        }
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, .6);
        /*display: table;*/
        transition: opacity .3s ease;
    }
    .popups-enter .popups-container,
    .popups-leave-active .popups-container {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
</style>
