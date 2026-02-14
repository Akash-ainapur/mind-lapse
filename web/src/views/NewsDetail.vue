<template>
  <div class="news-detail-view">
    <div class="news-container">
      <router-link to="/" class="back-link">← BACK TO FEED</router-link>
      
      <div v-if="post" class="post-content">
        <div class="post-header">
          <div class="badge yellow">{{ post.tag }}</div>
          <h1 class="post-title">{{ post.title }}</h1>
          <div class="post-meta">
            <span class="source-tag">SOURCE: {{ post.source }}</span> • <span>{{ post.readTime }}</span>
          </div>
        </div>

        <div v-if="post.synopsis" class="synopsis-box">
          <div class="synopsis-label">SYNOPSIS</div>
          <p>{{ post.synopsis }}</p>
        </div>

        <div class="post-body" v-html="post.content"></div>
        
        <div class="signal-footer">
          <div class="footer-label">ZERO-ROT VERDICT</div>
          <p>This news has been filtered for maximum signal. No fluff detected.</p>
        </div>
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
  max-width: 850px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.95);
  padding: 2rem 1.5rem;
  border: 4px solid var(--white);
  box-shadow: 15px 15px 0px var(--purple);
  box-sizing: border-box;
}
.back-link {
  font-family: 'Bungee', cursive;
  color: var(--lime);
  text-decoration: none;
  display: block;
  margin-bottom: 1.5rem;
  font-size: 0.8rem;
}
.post-header {
  margin-bottom: 2rem;
}
.post-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2rem, 8vw, 4.5rem);
  line-height: 0.9;
  margin: 1rem 0;
  text-transform: uppercase;
  overflow-wrap: break-word;
}
.post-meta {
  font-family: 'Bungee', cursive;
  font-size: 0.75rem;
  color: var(--pink);
  letter-spacing: 1px;
}
.source-tag {
  color: var(--yellow);
}

.synopsis-box {
  background: rgba(255, 255, 255, 0.05);
  border-left: 6px solid var(--lime);
  padding: 1.5rem;
  margin-bottom: 2.5rem;
  font-style: italic;
}
.synopsis-label {
  font-family: 'Bungee', cursive;
  font-size: 0.7rem;
  color: var(--lime);
  margin-bottom: 0.5rem;
}
.synopsis-box p {
  font-size: 1.1rem;
  line-height: 1.4;
  opacity: 0.9;
  margin: 0;
}

.post-body {
  font-size: clamp(1.1rem, 4vw, 1.4rem);
  line-height: 1.6;
  font-weight: 300;
}
.post-body :deep(h3) {
  font-family: 'Bungee', cursive;
  margin: 2.5rem 0 1rem 0;
  color: var(--yellow);
  font-size: clamp(1.2rem, 5vw, 1.8rem);
  text-transform: uppercase;
}
.post-body :deep(p) {
  margin-bottom: 1.5rem;
}
.post-body :deep(strong) {
  color: var(--lime);
  background: rgba(0, 255, 0, 0.1);
  padding: 0 0.4rem;
}

.signal-footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 2px dashed rgba(255, 255, 255, 0.2);
  text-align: center;
}
.footer-label {
  font-family: 'Bungee', cursive;
  font-size: 0.8rem;
  color: var(--pink);
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  .news-detail-view { padding: 5rem 2rem; }
  .news-container { padding: 4rem; }
}
</style>
