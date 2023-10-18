import React from 'react';

const ErrorPage = () => {
    return (
        <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 class="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1>
        <h1 class="block text-2xl font-bold text-white"></h1>
        <p class="mt-3 text-gray-600 dark:text-gray-400">Oops, something went wrong.</p>
        <p class="text-gray-600 dark:text-gray-400">Sorry, we couldn't find your page.</p>
        </div>
    );
};

export default ErrorPage;