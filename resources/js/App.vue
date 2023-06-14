<template>
    <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
        <!-- Logo text or image -->
        <div class="flex items-center justify-between mb-4 md:mb-0">
            <h1 class="leading-none text-2xl text-grey-darkest">
                <router-link to="/" class="no-underline text-grey-darkest hover:text-black">
                    Laravel Blog Vue Tailwind
                </router-link>
            </h1>

            <a class="text-black hover:text-orange md:hidden" href="#">
                <i class="fa fa-2x fa-bars"></i>
            </a>
        </div>
        <!-- END Logo text or image -->
    
        <!-- Search field -->
        <form class="mb-4 w-full md:mb-0 md:w-1/4">
            <label class="hidden" for="search-form">Search</label>
            <input class="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text">
            <button class="hidden">Submit</button>
        </form>
        <!-- END Search field -->
    
        <!-- Global navigation -->
        <nav>
            <ul class="list-reset md:flex md:items-center">
                <li class="md:ml-4">
                    <router-link to="/login" class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">
                        Login
                    </router-link>
                </li>
                <li class="md:ml-4">
                    <router-link to="/register" class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">
                        Register
                    </router-link>
                </li>
            </ul>
        </nav>
        <!-- END Global navigation -->
    </header>

    <router-view></router-view>

    
    <footer class="bg-gray-50 dark:bg-gray-800">
        <div class="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
            <div class="text-center">
                <a href="#" class="flex justify-center items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">                  
                    Ahmad Rhomario    
                </a>
                <span class="block text-sm text-center text-gray-500 dark:text-gray-400">© 2023-2023 <a href="#" class="hover:underline">Laravel Blog Vue Tailwind</a>. All Rights Reserved.
                </span>
            </div>
        </div>
    </footer>

</template>