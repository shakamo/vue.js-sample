<template>
  <div>
    <!-- レシピ名称 -->
    <div class="columns is-centered">
      <div class="column is-variable is-1">
        <label class="label">{{title}}</label>
      </div>
      <div class="column is-variable is-8">
        <div class="control">
          <input class="input" type="text" v-bind:placeholder="title">
        </div>
      </div>
    </div>
    <!-- レシピ別名 -->
    <div class="columns is-centered">
      <div class="column is-variable is-1">
      </div>
      <div class="column is-variable is-7">
        <div class="control">
          <input class="input" type="text" v-bind:placeholder="subtitle">
        </div>
      </div>
      <div class="column is-variable is-1">
        <a class="button is-danger is-outlined">
          <span>Delete</span>
          <span class="icon is-small">
            <i class="fas fa-times"></i>
          </span>
        </a>
      </div>
    </div>
    <!-- 追加ボタン -->
    <div class="columns is-centered">
      <div class="column is-variable is-offset-1 is-2">
        <div class="control">
          <a class="button is-info is-outlined">{{subtitle}}を追加</a>
        </div>
      </div>
      <div class="column is-variable is-6">
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TextFormWithAdd extends Vue {
  @Prop() private title!: string;
  @Prop() private subtitle!: string;
}
</script>

<style scoped lang="scss">
</style>
