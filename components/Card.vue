<script setup>
const { pending, data: card } = useLazyAsyncData('card', () => $fetch('/api/getCard'))
const refresh = () => refreshNuxtData('card')
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="card-image">
        <img :src="card.image">
        <button v-show="!pending" @click="refresh" class="refresh-button">&#x21bb;</button>
      </div>
      <div class="card-content">
        <h2>{{ card.name }}</h2>
        <p>{{ card.backstory }}</p>
      </div>
      <div v-show="pending" class="loading-indicator"></div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: helvetica, arial, sans-serif;
}

.container {
  height: 100vh;
  width: 100vw;
  background: rgb(1, 42, 53);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 500px;
  position: relative;
  background: #fff;
}

.card-image {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.loading-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(1, 42, 53, 0.5);
  z-index: 1;
}

.loading-indicator::after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 5px solid #ccc;
  border-top-color: #333;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.card-image .refresh-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  background-color: #fff;
  border-radius: 25%;
  border: none;
  cursor: pointer;
  z-index: 1;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 200px;
  text-align: center;
}

.card-content h2 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.card-content p {
  margin: 10px 0 0;
  font-size: 14px;
  color: #666;
}
</style>
