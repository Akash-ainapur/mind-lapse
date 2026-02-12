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

const route = useRoute();

const posts = {
  'white-collar-rip': {
    title: 'White Collar RIP?',
    tag: 'AI',
    readTime: '2 MIN READ',
    content: `
      <p>Microsoft AI CEO Mustafa Suleyman recently dropped a bombshell that's echoing through college campuses worldwide. According to Suleyman, the next 18 months will see AI move beyond simple chat and into the full automation of core white-collar tasks.</p>
      <h3>The "Middle Management" Wipeout</h3>
      <p>Tasks usually handled by project managers, accountants, lawyers, and marketing associates are first in line. We're talking about a shift from "AI as a tool" to "AI as a colleague."</p>
      <p><strong>The Signal:</strong> Gen Z professionals need to pivot from "doing the task" to "orchestrating the agent." If you aren't learning how to prompt and manage AI workflows today, you're becoming obsolete in real-time.</p>
    `
  },
  'balloon-gate': {
    title: 'Balloon-Gate: Lasers vs. Latex',
    tag: 'TECH',
    readTime: '3 MIN READ',
    content: `
      <p>In a move that sounds like a plot from a satirical sci-fi movie, US customs officials in El Paso recently deployed a high-powered anti-drone laser from the DoD. The target? What they claimed was a "Mexican cartel drone breaching airspace."</p>
      <h3>The Truth</h3>
      <p>It turned out to be a party balloon. The laser was fired without FAA coordination, leading to a sudden and chaotic closure of El Paso airspace.</p>
      <p><strong>The Signal:</strong> This highlights the dangerous gap between "cool tech" and "responsible deployment." As autonomous defense systems become more common, the risk of "automated stupidity" scales with the hardware power.</p>
    `
  },
  'subscription-trap': {
    title: 'The Subscription Trap: You Own Nothing',
    tag: 'GEAR',
    readTime: '4 MIN READ',
    content: `
      <p>HP has officially entered the "Rent-to-Rent" era. Their new subscription service for Victus and Omen gaming laptops starts at $50/mo and goes up to $129/mo. The catch? You never, ever get to own the laptop.</p>
      <h3>The Trade-off</h3>
      <p>HP promises a new upgrade every year, but you're effectively paying a permanent tax on your gaming hobby. For Gen Z, who already struggles with the "rental economy," this is a massive red flag.</p>
      <h3>The Signal</h3>
      <p>Ownership is becoming a luxury. The move toward hardware-as-a-service (HaaS) is designed to create infinite revenue for corporations while stripping users of their assets.</p>
    `
  }
};

const post = computed(() => posts[route.params.slug]);
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
  font-size: clamp(1.8rem, 10vw, 3.5rem);
  line-height: 1;
  margin: 1rem 0;
  text-transform: uppercase;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}
.post-meta {
  font-family: 'Bungee', cursive;
  font-size: 0.8rem;
  color: var(--pink);
  line-height: 1.4;
}
.post-body {
  font-size: clamp(1.1rem, 4vw, 1.4rem);
  line-height: 1.5;
  font-weight: 300;
}
.post-body :deep(h3) {
  font-family: 'Bungee', cursive;
  margin: 2rem 0 1rem 0;
  color: var(--yellow);
  font-size: clamp(1.2rem, 5vw, 1.8rem);
}
.post-body :deep(p) {
  margin-bottom: 1.2rem;
}
.post-body :deep(strong) {
  color: var(--lime);
  background: rgba(0, 255, 0, 0.1);
  padding: 0 0.3rem;
}

@media (max-width: 600px) {
  .news-detail-view {
    padding: 1.5rem 0.5rem;
  }
  .news-container {
    padding: 1.2rem 0.8rem;
    border-width: 3px;
  }
}
</style>
