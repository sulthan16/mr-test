<template>
  <div
    :class="[
      'w-full h-[292px] md:w-[287.5px] md:h-[306px] rounded-md my-1 md:m-2 hover:bg-category-pattern hover:shadow-lg hover:rounded-md hover:cursor-pointer',
      data.color,
    ]"
  >
    <div class="flex flex-col h-full p-2">
      <img
        :src="data.file"
        class="w-1/2 mt-3 md:mt-10 rounded-md"
        :alt="data.name"
      />
      <label class="pt-2 text-2xl font-medium">{{ data.name }}</label>
      <span class="pt-2">{{ data.category }}</span>
      <!-- <span class="pt-4 mb-2">22 items</span> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Receipt',
  props: {
    data: {
      type: Object,
      default: () => null,
      required: true,
    },
  },
}
</script>