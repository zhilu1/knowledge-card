<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String
})

const emit = defineEmits(['change', 'delete'])

const count = ref(0)
</script>

<template>
  <div class="demoBlock card">
    <h1>{{title}}</h1>
    <div>
      <!-- message slot -->
      <slot name="message"></slot>
    </div>

    <div>
      <!-- message slot -->
      <slot name="code"></slot>
    </div>

    <div>
      <!-- message slot -->
      <slot name="result"></slot>
    </div>
  </div>

</template>

<style scoped>
.card {
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  /* flex-basis: 35px; */
  /* white-space: nowrap; */
}
.demoBlock {
  display: block;
  width: fit-content;
  text-align: left;
  /* float: left; */
  margin: 10em auto;
  padding: 2%;
}
</style>
