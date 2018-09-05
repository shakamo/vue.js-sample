<template>
  <div class="hello">
    <div class="columns is-centered">
      <div class="column is-variable is-1">
        <label class="label">{{title}}</label>
      </div>
      <div class="column is-variable is-7">
        <div class="control">
          <input class="input" type="text" placeholder="">
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
          <a class="button is-info is-outlined">{{title}}を追加</a>
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
export default class HelloWorld extends Vue {
  @Prop() private title!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
