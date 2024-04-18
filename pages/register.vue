<template>
  <div class="max-w-md mx-auto p-6 bg-gray-100 rounded-lg">
    <h2 class="text-2xl font-bold mb-4 text-center">Register Form</h2>
    <form @submit.prevent="handleSubmit" @keydown.enter="handleSubmit">
      <div class="mb-4">
        <label for="username" class="block mb-1">Username:</label>
        <input type="text" id="username" v-model="formData.username" required
               class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-4">
        <label for="email" class="block mb-1">Email:</label>
        <input type="email" id="email" v-model="formData.email" required
               class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-4">
        <label for="password" class="block mb-1">Password:</label>
        <input type="password" id="password" v-model="formData.password" required
               class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <Button type="submit" label="register" :loading="isLoading"  />
    </form>


  </div>
</template>

<script setup lang="ts">
import Button from '../components/Button/Button.vue'
const formData = ref({
  username: '',
  email: '',
  password: ''
});

const isLoading = ref(false);

const handleSubmit = () => {
  console.log('dkhjbvj')
  // Handle form submission if needed
};

const register = () => {
  // Simulate API call or any async operation for registration
  isLoading.value = true;
  setTimeout(() => {
    console.log('Registration data:', formData.value);
    isLoading.value = false;
  }, 1500); // Simulating delay for registration
};
</script>
