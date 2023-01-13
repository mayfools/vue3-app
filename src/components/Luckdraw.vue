<template>
    <Tabbar v-model="active" :border="true" @change="handelTabbar()">
        <TabbarItem name="一等奖" icon="gem">一等奖</TabbarItem>
        <TabbarItem name="二等奖" icon="gift">二等奖</TabbarItem>
        <TabbarItem name="特等奖" icon="vip-card">特等奖</TabbarItem>
    </Tabbar>
    <ActionSheet v-model:show="show" :title="level" @closed="handelclose()">
        <div class="content">
            <Image
                round
                width="200px"
                height="200px"
                position="center"
                :src="obj.imgSrc"
            />
            <div>{{ obj.name }}</div>
            <div class="btnBox">
                <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="fn()">
  开始
</van-button>
                <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="end()">
  结束
</van-button>
            </div>
        </div>
    </ActionSheet>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Tabbar, TabbarItem, ActionSheet, Image  } from 'vant';
import 'vant/es/tabbar/style';
import 'vant/es/tabbar-item/style';
import 'vant/es/image/style';
import 'vant/es/action-sheet/style';
import headerList from '../assets/header.js'
import img3 from '/src/headImg/7.jpg'

const headerLists = reactive(headerList)
let obj = ref({
    name: '张三',
    imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
})
let level = ref('一等奖')
let active = ref('')
let show = ref(true)
let start = ref(null)
let index = ref(null)
function handelTabbar(this: { active: import("vue").Ref<string>; handelTabbar: () => void; }) {
    console.log(this.active)
    this.level = this.active
    this.show = true
}
function fn() {
    this.start = setInterval(() => {
        let index = Math.floor(Math.random() * this.headerLists.length)
        this.obj = this.headerLists[index]
        console.log(index)
        this.index = index
    }, 100)
}
function end() {
    this.obj = this.headerLists[this.index]
    console.log(this.headerLists[this.index],' =>this.headerLists[this.index]')
    console.log(this.obj, '=>this.obj')
    clearInterval(this.start)
}
function handelclose() {
    this.obj = {
        name: '张三',
        imgSrc: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
    }
}
</script>
<style>
.content {
    height: 400px;
    text-align: center;
}
.btnBox {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
}
</style>