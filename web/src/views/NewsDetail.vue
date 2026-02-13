<template>
  <div class="news-detail-view">
    <div class="news-container">
      <router-link to="/" class="back-link">← BACK TO FEED</router-link>
      
      <div v-if="post" class="post-content">
        <div class="post-header">
          <div class="badge yellow">{{ post.tag }}</div>
          <h1 class="post-title">{{ post.title }}</h1>
          <div class="post-meta">
            <span>BY MIND LAPSE EDITORIAL</span> • <span>{{ post.readTime }}</span>
          </div>
        </div>

        <div class="post-body" v-html="post.content"></div>
      </div>
      
      <div v-else class="not-found">
        <h1>404: SIGNAL LOST</h1>
        <router-link to="/">RETURN HOME</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import news from '../data/news.json';

const route = useRoute();
const post = computed(() => news.find(p => p.slug === route.params.slug));
</script>

<style scoped>
.news-detail-view {
  padding: 2rem 1rem;
  min-height: 100vh;
}
.news-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.95);
  padding: 1.5rem 1rem;
  border: 4px solid var(--white);
  box-shadow: 10px 10px 0px var(--purple);
  box-sizing: border-box;
}
.back-link {
  font-family: 'Bungee', cursive;
  color: var(--lime);
  text-decoration: none;
  display: block;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}
.post-header {
  margin-bottom: 2.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1.5rem;
}
.post-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.6rem, 8vw, 3.5rem);
  line-height: 1.1;
  margin: 0.5rem 0;
  text-transform: uppercase;
  overflow-wrap: anywhere;
  word-break: normal;
  hyphens: auto;
}
.post-meta {
  font-family: 'Bungee', cursive;
  font-size: 0.7rem;
  color: var(--pink);
  line-height: 1.4;
}
.post-body {
  font-size: clamp(1rem, 4vw, 1.2rem);
  line-height: 1.5;
  font-weight: 300;
}
.post-body :deep(h3) {
  font-family: 'Bungee', cursive;
  margin: 1.5rem 0 0.8rem 0;
  color: var(--yellow);
  font-size: 1.2rem;
}
.post-body :deep(p) {
  margin-bottom: 1rem;
}
.post-body :deep(strong) {
  color: var(--lime);
  background: rgba(0, 255, 0, 0.1);
}

@media (min-width: 768px) {
  .news-detail-view { padding: 4rem 2rem; }
  .news-container { padding: 3rem; border-width: 4px; box-shadow: 20px 20px 0px var(--purple); }
  .post-title { font-size: 4rem; line-height: 0.9; }
  .post-body { font-size: 1.4rem; line-height: 1.6; }
  .post-body :deep(h3) { font-size: 1.8rem; }
}
</style>
