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
          <div class="stream-header">LIVE SIGNAL PULSE</div>
          <div class="pulse-items">
            <div v-for="(s, i) in signals" :key="i" class="pulse-item">
              <div class="pulse-meta">{{ s.tag }}</div>
              <div class="pulse-text">{{ s.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="feed">
      <h2 class="section-title">LATEST DROPS</h2>
      <div class="news-grid">
        <router-link to="/feed" class="news-card-link">
          <div class="news-card">
            <div class="card-tag">AI</div>
            <h3>White Collar RIP?</h3>
            <p>Microsoft AI CEO says AI will automate project managers and accountants in 18 months.</p>
            <div class="card-footer">
              <span>2 MIN READ</span>
              <span class="arrow">→</span>
            </div>
          </div>
        </router-link>

        <router-link to="/feed" class="news-card-link">
          <div class="news-card alt">
            <div class="card-tag">TECH</div>
            <h3>Balloon-Gate</h3>
            <p>US officials fired an anti-drone laser at... a party balloon. Absurd tech news.</p>
            <div class="card-footer">
              <span>3 MIN READ</span>
              <span class="arrow">→</span>
            </div>
          </div>
        </router-link>

        <router-link to="/feed" class="news-card-link">
          <div class="news-card">
            <div class="card-tag">GEAR</div>
            <h3>The Subscription Trap</h3>
            <p>HP is now renting out gaming laptops for $129/mo with zero option to own.</p>
            <div class="card-footer">
              <span>4 MIN READ</span>
              <span class="arrow">→</span>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const signals = [
  { tag: 'BREAKING', text: 'OpenAI Sora access rolling out to creators next week.' },
  { tag: 'TRENDING', text: 'The "Apple Glass" hype cycle begins again.' },
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
