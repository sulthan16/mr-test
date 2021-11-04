<template>
  <div
    :class="[
      'group',
      'static',
      'w-[230px]',
      'h-[175px]',
      dt.color,
      'm-1',
      'rounded-md',
      'hover:bg-category-pattern',
      'hover:shadow-lg',
      'hover:rounded-md',
      'transform',
      'motion-safe:hover:h-[194px]',
      'hover:cursor-pointer',
    ]"
  >
    <div class="flex flex-col h-full items-center">
      <img :src="dt.file" class="m-auto" :alt="dt.name" />
      <label class="mx-auto text-1xl font-medium">{{ dt.name }}</label>
      <span class="mx-auto mb-6">22 items</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CategoryItem',
  props: {
    dt: {
      type: Object,
      default: () => null,
      required: true,
    },
  },
}
</script>