<template>


  <nav class="py-4 px-2 bg-emerald-100 flex items-center ">
    <Icon name="ep:menu" />
    <b class="px-1 text-lg">Custom Components Webreinvent</b>
  </nav>
  <div class="w-[260px] h-screen overflow-scroll fixed  bg-yellow-100 flex flex-col gap-1">
    <router-link to="/button">
      <Button severity="contrast" link label="Button" />
    </router-link>
    <router-link to="/radio-button">
      <Button severity="contrast" link label="Radio Button" />
    </router-link>

  </div>


</template>
<script setup lang="ts">
//code starts
import Button from '../components/Button/Button.vue';

const handleClick = (event: MouseEvent) => {
  console.log('Button Clicked', event)
}
</script>
