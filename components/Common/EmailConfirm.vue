<template>
    <!--   Modal for transportation Done  -->
    <Ymodal>
        <div slot="body" class="h-modal h-modal-middle">
            <div class="d-flex flex-column justify-content-center text-center text-white font-size-26"
                 style="height: 190px; width: 260px; border-radius: 10px; background-color:#9767cd ">
                <div v-html="$t('Common.laughFace')" style="font-size: 44px"></div>
                <div class="mt-3" style="font-size: 22px">{{$t('Common.sent')}} !</div>
            </div>
        </div>
    </Ymodal>
</template>

<script>
    import Ymodal from "./Modal";
    export default {
        name: "EmailConfirm",
        components:{
            Ymodal
        }
    }
</script>
<style>
    .h-modal {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .h-modal-middle {
        align-items: center;
        position: fixed;
    }
</style>
