<template>
  <div>
    <Header />
    <section class="hidden md:block md:m-5 md:mx-16 md:mt-16 md:mb-0">
      <div class="container mx-auto flex flex-wrap">
        <div class="w-full md:w-1/2 pt-32 px-16 flex flex-col">
          <h1
            class="
              font-sans
              text-2xl
              md:text-6xl
              w-full
              font-medium
              text-green
              mb-4
            "
          >
            Good Food Us Good Mood
          </h1>
          <span class="font-sans text-1xl font-sm"
            >I Would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.</span
          >
          <div class="flex flex-wrap mt-4">
            <button
              class="
                rounded-full
                text-white
                w-[160px]
                h-[50px]
                bg-green
                relative
                py-2
                px-1.5
                hover:bg-primary
                focus:outline-none
                mr-2
                focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
              "
            >
              <div class="flex flex-wrap items-center">
                <span class="mx-auto font-medium text-base"
                  >Daftar Sekarang</span
                >
              </div>
            </button>
            <button
              class="
                rounded-full
                w-[160px]
                h-[50px]
                bg-doughnut-color
                relative
                py-2
                px-1.5
                hover:bg-doughnut-color
                focus:outline-none
                focus:ring-2
                focus:ring-purple-600
                focus:ring-opacity-50
              "
            >
              <div class="flex flex-wrap items-center">
                <span class="mx-auto font-medium text-base">About Us</span>
              </div>
            </button>
          </div>
        </div>
        <div class="relative w-full md:w-1/2">
          <img src="@/static/assets/product/image-join.png" alt="big-menu" />
          <!-- <img
            src="@/static/assets/product/cardProfile.png"
            class="absolute bottom-0.5 -left-32"
            alt="card-profile"
          /> -->
        </div>
      </div>
    </section>
    <section class="block md:hidden md:m-5 md:mx-16 pt-10 pb-16">
      <div class="container mx-auto flex flex-wrap">
        <div class="w-full md:w-1/2 md:pt-32 px-5 flex flex-col">
          <h1
            class="
              font-sans
              text-4xl
              md:text-6xl
              w-full
              font-medium
              text-green
              mb-4
            "
          >
            Good Food Us Good Mood
          </h1>
          <img src="@/static/assets/product/image-join.png" alt="big-menu" />
          <span class="font-sans text-1xl font-sm"
            >I Would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.</span
          >
          <div class="flex flex-wrap mt-4">
            <button
              class="
                rounded-full
                text-white
                w-[120px]
                h-[50px]
                bg-green
                relative
                py-2
                px-1.5
                hover:bg-primary
                focus:outline-none
                mr-2
                focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
              "
            >
              <div class="flex flex-wrap items-center">
                <span class="mx-auto text-xs font-medium">Daftar Sekarang</span>
              </div>
            </button>
            <button
              class="
                rounded-full
                w-[120px]
                h-[50px]
                bg-doughnut-color
                relative
                py-2
                px-1.5
                hover:bg-doughnut-color
                focus:outline-none
                focus:ring-2
                focus:ring-purple-600
                focus:ring-opacity-50
              "
            >
              <div class="flex flex-wrap items-center">
                <span class="mx-auto text-xs font-medium">About Us</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="ml-5 mt-5 mb-5 md:m-16 md:mt-0">
      <div class="flex flex-col">
        <div class="container mx-auto w-full">
          <h1 class="font-sans text-2xl md:text-4xl w-full font-medium">
            Browser Our Category
          </h1>
          <span
            class="w-full font-sans text-2xl md:text-4xl font-medium text-green"
            >Receipt</span
          >
        </div>
      </div>
    </section>
    <section class="container mx-auto">
      <div class="w-full h-[250px] overflow-auto md:overflow-hidden">
        <div class="relative flex flex-row mt-5" ref="content">
          <div v-for="(item, key) in categories" :key="key">
            <category-item :dt="item" />
          </div>
        </div>
      </div>
    </section>
    <div class="container mx-auto relative">
      <div class="absolute right-16 hidden md:block">
        <prev-button class="float-left m-2" :onClick="goLeft" />
        <next-button class="float-right m-2" :onClick="goRight" />
      </div>
    </div>
    <section class="m-5 md:m-16">
      <div class="flex flex-col">
        <div class="container mx-auto w-full">
          <h1 class="font-sans text-2xl md:text-4xl w-full font-medium">
            Browser Our Tranding
          </h1>
          <span
            class="w-full font-sans text-2xl md:text-4xl font-medium text-green"
            >Receipt</span
          >
        </div>
        <div
          class="
            container
            mx-auto
            flex flex-wrap
            content-center
            w-full
            mt-5
            md:mt-16
          "
        >
          <template v-for="(item, key) in receipts">
            <receipt :key="key" :data="item" />
          </template>
        </div>
        <div class="container mx-auto mt-5 w-auto">
          <button
            class="
              rounded-full
              text-white
              w-[160px]
              h-[50px]
              bg-green
              relative
              py-2
              px-1.5
              hover:bg-primary
              focus:outline-none
              focus:ring-2
              focus:ring-purple-600
              focus:ring-opacity-50
            "
          >
            <div class="flex flex-wrap items-center">
              <span class="mx-auto font-medium text-base">ALL Receipt</span>
            </div>
          </button>
        </div>
      </div>
    </section>
    <section class="m-5 md:mx-16 md:mt-16 invisible md:visible">
      <Footer />
    </section>
  </div>
</template>

<script>
import PrevButton from '@/components/PrevButton.vue'
import NextButton from '@/components/NextButton.vue'
import CategoryItem from '@/components/CategoryItem.vue'
import Receipt from '@/components/Receipt.vue'
import Footer from '@/components/Footer.vue'
import cupacake from '@/static/assets/icons/cupacake.svg'
import doughnut from '@/static/assets/icons/doughnut.svg'
import kebab from '@/static/assets/icons/kebab.svg'
import pizza from '@/static/assets/icons/pizza.svg'
import salmon from '@/static/assets/icons/salmon.svg'
import pizzaPaper from '@/static/assets/product/pizza-paperoni.png'
export default {
  components: { PrevButton, NextButton, CategoryItem, Receipt, Footer },
  data() {
    return {
      categories: [
        {
          name: 'Cupcake',
          file: cupacake,
          color: 'bg-cupcake-color',
        },
        {
          name: 'Pizza',
          file: pizza,
          color: 'bg-pizza-color',
        },
        {
          name: 'Kebab',
          file: kebab,
          color: 'bg-kebab-color',
        },
        {
          name: 'Salmon',
          file: salmon,
          color: 'bg-salmon-color',
        },
        {
          name: 'Doughnut',
          file: doughnut,
          color: 'bg-doughnut-color',
        },
        {
          name: 'Cupcake',
          file: cupacake,
          color: 'bg-cupcake-color',
        },
        {
          name: 'Pizza',
          file: pizza,
          color: 'bg-pizza-color',
        },
        {
          name: 'Kebab',
          file: kebab,
          color: 'bg-kebab-color',
        },
        {
          name: 'Salmon',
          file: salmon,
          color: 'bg-salmon-color',
        },
        {
          name: 'Doughnut',
          file: doughnut,
          color: 'bg-doughnut-color',
        },
      ],
      receipts: [
        {
          name: 'Pizza Paperoni',
          category: 'pizza',
          file: pizzaPaper,
          color: 'bg-cupcake-color',
        },
        {
          name: 'Pizza Meat',
          category: 'pizza',
          file: pizzaPaper,
          color: 'bg-pizza-color',
        },
        {
          name: 'Donner Kebab',
          category: 'kebab',
          file: pizzaPaper,
          color: 'bg-kebab-color',
        },
        {
          name: 'Salmon Roll',
          category: 'salmom',
          file: pizzaPaper,
          color: 'bg-salmon-color',
        },
        {
          name: 'Cupcake Choco',
          category: 'cupcake',
          file: pizzaPaper,
          color: 'bg-cupcake-color',
        },
        {
          name: 'Doughnut Milk',
          category: 'doughnut',
          file: pizzaPaper,
          color: 'bg-doughnut-color',
        },
        {
          name: 'Doughnut Unicorn',
          category: 'doughnut',
          file: pizzaPaper,
          color: 'bg-doughnut-color',
        },
        {
          name: 'Kathi Kebab',
          category: 'kebab',
          file: pizzaPaper,
          color: 'bg-kebab-color',
        },
      ],
      clickedIndex: 0,
      marginLeft: '0px',
      marginLeftMinimum: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
    this.marginLeftMinimum =
      this.$refs.content.clientWidth - this.$refs.content.scrollWidth
    console.log(this.marginLeftMinimum)
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    },
    goRight() {
      if (this.$refs.content.clientWidth <= this.$refs.content.scrollWidth) {
        console.log(-190 * (this.clickedIndex + 1))
        if (-190 * (this.clickedIndex + 1) < this.marginLeftMinimum) {
          if (this.marginLeft !== this.marginLeftMinimum + 'px') {
            this.clickedIndex = this.clickedIndex + 1
          }
          this.$refs.content.style.marginLeft = this.marginLeftMinimum + 'px'
        } else {
          this.clickedIndex = this.clickedIndex + 1
          this.$refs.content.style.marginLeft = -190 * this.clickedIndex + 'px'
        }
        this.marginLeft = this.$refs.content.style.marginLeft
      }
    },
    goLeft() {
      if (this.marginLeft !== '0px') {
        this.clickedIndex = this.clickedIndex - 1
        this.$refs.content.style.marginLeft = -190 * this.clickedIndex + 'px'
        this.marginLeft = this.$refs.content.style.marginLeft
      }
    },
  },
}
</script>