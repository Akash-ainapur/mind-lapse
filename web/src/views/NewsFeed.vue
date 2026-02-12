<template>
  <div class="news-feed-view">
    <router-link to="/" class="close-btn">×</router-link>
    
    <swiper
      direction="vertical"
      :slides-per-view="1"
      :space-between="0"
      :mousewheel="true"
      class="feed-swiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(post, slug) in posts" :key="slug">
        <div class="reel-card" :style="{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(' + post.image + ')' }">
          <div class="reel-content">
            <div class="badge yellow">{{ post.tag }}</div>
            <h2 class="reel-title">{{ post.title }}</h2>
            <p class="reel-excerpt">{{ post.excerpt }}</p>
            <router-link :to="'/news/' + slug" class="read-more">READ FULL SIGNAL →</router-link>
          </div>

          <div class="reel-actions">
            <div class="action-item" @click="toggleLike(slug)">
              <span class="icon" :class="{ liked: likedPosts[slug] }">❤️</span>
              <span class="count">{{ (post.likes || 0) + (likedPosts[slug] ? 1 : 0) }}</span>
            </div>
            <div class="action-item" @click="sharePost(post)">
              <span class="icon">✈️</span>
              <span class="count">SHARE</span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const likedPosts = reactive({});

const posts = {
  'white-collar-rip': {
    title: 'White Collar RIP?',
    tag: 'AI',
    excerpt: 'Microsoft AI CEO says most white-collar tasks will be automated in 18 months. Are you ready?',
    likes: 1240,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000'
  },
  'balloon-gate': {
    title: 'Balloon-Gate',
    tag: 'TECH',
    excerpt: 'US officials fired a laser at a party balloon. The gap between tech and responsibility is growing.',
    likes: 850,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1000'
  },
  'subscription-trap': {
    title: 'The Subscription Trap',
    tag: 'GEAR',
    excerpt: 'HP starts renting gaming laptops. You own nothing and you will be "happy". Red alert.',
    likes: 2100,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000'
  }
};

function toggleLike(slug) {
  likedPosts[slug] = !likedPosts[slug];
}

function sharePost(post) {
  if (navigator.share) {
    navigator.share({
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    });
  } else {
    alert('Sharing is not supported on this browser, but the link is copied!');
  }
}
</script>

<style scoped>
.news-feed-view {
  height: 100vh;
  width: 100vw;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
}
.feed-swiper {
  height: 100%;
  width: 100%;
}
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 2.5rem;
  color: #fff;
  z-index: 300;
  text-decoration: none;
  font-family: 'Bungee', cursive;
}
.reel-card {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3rem 1.5rem;
  position: relative;
}
.reel-content {
  max-width: 80%;
  margin-bottom: 2rem;
}
.reel-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.8rem, 7vw, 3.5rem);
  line-height: 1;
  text-transform: uppercase;
  margin: 0.5rem 0;
  text-shadow: 2px 2px 0px #000;
}
.reel-excerpt {
  font-size: clamp(0.9rem, 3.5vw, 1.2rem);
  font-weight: 300;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.4;
  text-shadow: 1px 1px 0px #000;
}
.read-more {
  display: inline-block;
  font-family: 'Bungee', cursive;
  color: var(--lime);
  text-decoration: none;
  border-bottom: 2px solid var(--lime);
  font-size: 0.8rem;
}
.reel-actions {
  position: absolute;
  right: 10px;
  bottom: 150px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  z-index: 10;
}
.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background: rgba(0,0,0,0.3);
  padding: 5px;
  border-radius: 10px;
}
.icon {
  font-size: 1.8rem;
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
  transition: transform 0.2s;
}
.icon.liked {
  color: var(--pink);
  transform: scale(1.2);
}
.action-item:hover .icon {
  transform: scale(1.1);
}
.count {
  font-family: 'Bungee', cursive;
  font-size: 0.7rem;
  margin-top: 0.3rem;
  color: #fff;
}

@media (max-width: 600px) {
  .reel-card {
    padding-bottom: 5rem;
  }
  .reel-actions {
    right: 10px;
    bottom: 80px;
  }
  .reel-content {
    max-width: 90%;
  }
}
</style>
