<!--Home.vue-->
<template>
    <main class="flex flex-col w-2/3 pl-6 pr-4 pt-4 ">
        <article class="my-4 shadow">
            <div class="flex flex-col p-6 pt-2 bg-white">
                <a href="#" class="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600">Uncategorized</a>
                <router-link to="/read/slug" class="pb-4 text-3xl font-serif font-bold hover:text-gray-700 ">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</router-link>
                <p class="pb-3 text-sm">By <a href="#" class="font-semibold hover:text-gray-800">David Jacobs</a>, May 25, 2021</p>
                <p class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</p>
                <router-link to="/read/slug" class="uppercase text-xs text-blue-600 hover:text-yellow-500">Continue Reading <i class="fas fa-arrow-right"></i></router-link>
            </div>
        </article>
    </main>
    <aside class="w-1/3 pl-4 pr-6 pt-8">
        <section>
            <form class="flex">
            <input type="text" class="w-full px-3 py-2 rounded-l-lg focus:outline-none text-gray-800" placeholder="Search...">
            <button class="px-2 rounded-r-lg focus:outline-none text-center text-xl text-gray-400 hover:text-gray-900 bg-white"><i class="fas fa-search"></i></button>
            </form>
        </section>
        <section class="mt-8">
            <h3 class="mb-4 pb-2 text-2xl font-semibold border-b-2 border-yellow-500 text-blue-600 ">Categories</h3>
            <ul>
            <li class="mb-1">
                <a class="text-blue-900 hover:text-blue-500" href="#">Uncategorized (0)</a>
            </li>          
            </ul>
        </section>
    </aside>
</template>


<script>

</script>