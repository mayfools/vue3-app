<template>
    <div class="wrap">
        <van-notice-bar
            left-icon="volume-o"
            scrollable
            background="red"
            color="#fff"
            text="老麻逼俱乐部2022年终总结"
        />
        <div class="box">
            <div class="item" v-for="(item, index) in imgArr" :key="index">
                <img :src="item.imgPath" alt="1" @click="handelImg(item.imgPath)"/>
            </div>
        </div>
    </div>
    <Luckdraw />
</template>

<script setup lang="ts">
import Luckdraw from './components/Luckdraw.vue'
import { showImagePreview, NoticeBar } from 'vant';
import 'vant/es/image-preview/style';
import 'vant/es/notice-bar/style';
import { defineComponent, reactive } from 'vue'
import imgList from './assets/data.js'
defineComponent({Luckdraw})
const imgArr: any = reactive(imgList)
function handelImg(item:any) {
    showImagePreview([item])
}
</script>
<style scoped>
.wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.title_wrap {
    background: red;
}
.box {
    margin: 10px;
    column-count: 4;
    column-gap: 10px;
    height: 70%;
    overflow: hidden;
    padding: 0 10px;
    box-sizing: border-box;
}
.item {
    margin-bottom: 10px;
}
.item img{
    width: 100%;
    height:100%;
}
</style>
<style>
.van-notice-bar {
    font-size: 30px;
}
</style>
