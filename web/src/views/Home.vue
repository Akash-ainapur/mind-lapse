<template>
  <div class="home-view">
    <section class="hero">
      <div class="hero-left">
        <h1 class="hero-title">
          <span class="word-1">MIND</span>
          <span class="word-2">LAPSE</span>
        </h1>
        <div class="badge-row">
          <span class="badge yellow">AI NEWS</span>
          <span class="badge pink">TECH TRENDS</span>
        </div>
        <p class="tagline">The premium tech radar for the next generation. <br><span class="accent">NO FLUFF.</span> <span class="glitch">JUST SIGNAL.</span></p>
        
        <div class="hero-actions">
          <router-link to="/game" class="cta-crazy">
            <span class="cta-text">FILTER THE NOISE ⚡</span>
          </router-link>
          
          <div class="hero-nav">
            <router-link to="/hype" class="nav-link">HYPE INDEX</router-link>
            <router-link to="/chat" class="nav-link">SIGNAL CHAT</router-link>
            <router-link to="/archive" class="nav-link">ARCHIVE</router-link>
          </div>
        </div>
      </div>
      
      <div class="hero-right">
        <div class="signal-stream">
          <div class="stream-header">THE PULSE</div>
          <div class="pulse-items">
            <div v-for="(s, i) in pulses" :key="i" class="pulse-item">
              <div class="pulse-meta">{{ s.tag }}</div>
              <div class="pulse-text">{{ s.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="feed">
      <h2 class="section-title">ZERO-ROT FEED</h2>
      <div class="news-grid">
        <router-link 
          v-for="post in news" 
          :key="post.slug" 
          :to="'/feed?slug=' + post.slug" 
          class="news-card-link"
        >
          <div class="news-card" :class="{ alt: post.tag === 'TECH' }">
            <div class="card-tag">{{ post.tag }}</div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <div class="card-footer">
              <span>{{ post.readTime }}</span>
              <span class="arrow">→</span>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import news from '../data/news.json';

const pulses = [
  { tag: 'BREAKING', text: 'OpenAI Sora access rolling out to creators next week.' },
  { tag: 'TRENDING', text: 'The \"Apple Glass\" hype cycle begins again.' },
  { tag: 'TECH', text: 'Nvidia hits new ATH as H200 chips ship.' }
];
</script>

<style scoped>
.home-view {
  padding: 2rem;
}
.news-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>
