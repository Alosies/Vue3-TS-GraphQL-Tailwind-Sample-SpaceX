<template>
  <div class="my-6 grid gap-3 place-items-center bg-slate-200 p-6 rounded-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 my-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <slot>Could not find the requested Data!</slot>
  </div>
</template>
