<script setup></script>

<template>
  <div class="rounded-xl border-2 bg-white border-black shadow-xl">
    <div class="px-12 py-8">
      <div>
        <h1 class="text-2xl font-semibold">Welcome to Rumah IVAA</h1>
        <p class="text-sm text-gray-600 pt-4">
          We are grateful for your visit, kindly take a moment to fill out your
          contact information and provide us with feedback. Your comments will
          help us improve our service delivery to you in the future.
        </p>
      </div>
      <div class="pt-8 overflow-hidden">
        <div>
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label for="Name" class="text-sm text-gray-600">Name</label>
              <input
                type="text"
                class="mt-1 w-full border-b border-gray-600 px-4 py-2 bg-gray-100 text-sm focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="instance" class="text-sm text-gray-600"
                >Instance</label
              >
              <input
                type="text"
                class="mt-1 w-full border-b border-gray-600 px-4 py-2 bg-gray-100 text-sm focus:outline-none"
                placeholder="Instance"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="email" class="text-sm text-gray-600">Email</label>
              <input
                type="email"
                class="mt-1 w-full border-b border-gray-600 px-4 py-2 bg-gray-100 text-sm focus:outline-none"
                placeholder="your@email"
              />
              <div class="pt-6">
                <div
                  class="inline-block text-blue-100 border bg-blue-600 px-6 py-2"
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
