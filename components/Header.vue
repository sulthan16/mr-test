<template>
  <nav :class="['w-full z-30 top-0 text-white', 'shadow-lg', 'lg:shadow-none']">
    <div
      class="
        w-full
        container
        mx-auto
        flex flex-wrap
        items-center
        justify-between
        mt-0
        py-3
      "
    >
      <div class="pl-4 md:pl-24 flex items-center">
        <a href="#">
          <div class="flex pr-6">
            <img
              class="flex-1 h-[35px]"
              src="@/static/assets/product/logo.png"
              alt="logo"
            />
          </div>
        </a>
        <div
          class="
            mx-32
            flex-grow
            lg:flex lg:items-center lg:w-auto
            hidden
            lg:block
            mt-2
            lg:mt-0
            text-black
            p-4
            lg:p-0
            z-20
          "
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="no-underline py-2 px-4 cursor-pointer">Home</li>
            <li class="no-underline py-2 px-4 cursor-pointer">About</li>
            <li class="no-underline py-2 px-4 cursor-pointer">Promotions</li>
            <li class="no-underline py-2 px-4 cursor-pointer">Blog</li>
            <li class="no-underline py-2 px-4 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>

      <div>
        <div class="flex items-center">
          <button class="text-black w-[120px] h-[50px] relative py-2 px-1.5">
            <div class="flex flex-wrap items-center">
              <span class="mx-auto text-sm font-medium">Masuk</span>
            </div>
          </button>
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
        </div>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>