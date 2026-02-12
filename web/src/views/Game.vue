<template>
  <div class="game-view">
    <div class="game-header">
      <h1 class="title">BRAIN ROT GAME</h1>
      <p>Click the <strong>HIGH SIGNAL</strong> bubbles. Avoid the <strong>CLICKBAIT</strong>!</p>
      <div class="stats">
        <span>SCORE: {{ score }}</span>
        <span>TIME: {{ timeLeft }}s</span>
      </div>
    </div>

    <div class="game-area" ref="gameArea">
      <div v-for="obj in objects" 
           :key="obj.id" 
           class="game-obj"
           :class="obj.type"
           :style="{ left: obj.x + 'px', top: obj.y + 'px' }"
           @click="handleClick(obj)">
        {{ obj.text }}
      </div>
    </div>

    <div v-if="gameOver" class="overlay">
      <div class="modal">
        <h2>{{ score >= 10 ? 'SIGNAL MASTER' : 'BRAIN ROT RECOVERY' }}</h2>
        <p>FINAL SCORE: {{ score }}</p>
        <button @click="startGame" class="cta-crazy">RETRY</button>
        <router-link to="/" class="nav-link">EXIT</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const score = ref(0);
const timeLeft = ref(30);
const gameOver = ref(false);
const objects = ref([]);
const gameArea = ref(null);
let gameInterval, timerInterval;

const items = [
  { text: 'EPSTEIN FILES', type: 'high' },
  { text: 'AI AGENTS', type: 'high' },
  { text: 'SORA LEAKS', type: 'high' },
  { text: 'GTA VI', type: 'high' },
  { text: 'DEEP STATE', type: 'high' },
  { text: 'FREE MONEY', type: 'low' },
  { text: 'SHOCKING!', type: 'low' },
  { text: 'CLICK ME', type: 'low' },
  { text: 'BRAIN ROT', type: 'low' },
  { text: 'AD REVENUE', type: 'low' }
];

function startGame() {
  score.value = 0;
  timeLeft.value = 30;
  gameOver.value = false;
  objects.value = [];
  
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  
  gameInterval = setInterval(spawnObject, 800);
  timerInterval = setInterval(() => {
    timeLeft.value--;
    if (timeLeft.value <= 0) endGame();
  }, 1000);
}

function spawnObject() {
  if (gameOver.value) return;
  const item = items[Math.floor(Math.random() * items.length)];
  const obj = {
    id: Date.now(),
    ...item,
    x: Math.random() * (window.innerWidth - 150),
    y: Math.random() * (window.innerHeight - 150)
  };
  objects.value.push(obj);
  setTimeout(() => {
    objects.value = objects.value.filter(o => o.id !== obj.id);
  }, 2000);
}

function handleClick(obj) {
  if (obj.type === 'high') {
    score.value += 1;
  } else {
    score.value -= 2;
  }
  objects.value = objects.value.filter(o => o.id !== obj.id);
}

function endGame() {
  gameOver.value = true;
  clearInterval(gameInterval);
  clearInterval(timerInterval);
}

onMounted(startGame);
onUnmounted(() => {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
});
</script>

<style scoped>
.game-view {
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding: 2rem;
}
.game-header { text-align: center; font-family: 'Bungee', cursive; }
.stats { display: flex; justify-content: center; gap: 4rem; font-size: 2rem; color: var(--yellow); }
.game-obj {
  position: absolute;
  padding: 1rem 2rem;
  font-family: 'Bungee', cursive;
  border: 4px solid var(--black);
  cursor: pointer;
  transition: transform 0.1s;
  user-select: none;
}
.game-obj.high { background: var(--lime); color: var(--black); box-shadow: 8px 8px 0px var(--purple); }
.game-obj.low { background: var(--pink); color: var(--white); box-shadow: 8px 8px 0px var(--yellow); }
.overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 100;
}
.modal {
  background: var(--purple); border: 8px solid var(--white); padding: 4rem; text-align: center;
  box-shadow: 20px 20px 0px var(--pink);
}
.modal h2 { font-family: 'Bungee', cursive; font-size: 3rem; margin-bottom: 2rem; }
</style>
