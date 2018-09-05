<template>
  <div class="home">
    <section class="hero is-primary">
      <div class="hero-body container">
        <h2 class="subtitle">
          レシピ
        </h2>
      </div>
    </section>
    <section class="section">
      <text-form-with-add title="レシピ名称" subtitle="レシピ別名"> </text-form-with-add>
      <!-- レシピ概要 -->
      <div class="columns is-centered">
        <div class="column is-variable is-1">
          <label class="label">レシピ概要</label>
        </div>
        <div class="column is-variable is-8">
          <div class="control">
            <input class="input" type="text" placeholder="概要">
          </div>
        </div>
      </div>
      <!-- ソートの優先度 -->
      <div class="columns is-centered">
        <div class="column is-variable is-1">
          <label class="label">優先度</label>
        </div>
        <div class="column is-variable is-8">
          <div class="control has-icons-right">
            <input class="input" type="text" placeholder="999">
            <span class="icon is-small is-right has-text-success">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
      </div>
      <!-- キーワード -->
      <text-form-add title="キーワード"> </text-form-add>
      <br>
      <br>
      <input type="submit" value="登録" class="button is-primary">
      <br>

      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import TextFormWithAdd from "@/components/TextFormWithAdd.vue";
import TextFormAdd from "@/components/TextFormAdd.vue";

@Component({
  components: {
    HelloWorld,
    TextFormWithAdd,
    TextFormAdd
  }
})
export default class Home extends Vue {}
</script>
