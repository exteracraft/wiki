<!-- .vitepress/components/FeaturesSection.vue -->
<!-- source: https://github.com/cryals/linux-base/blob/main/docs/.vitepress/components/FeaturesSection.vue -->
<template>
    <div class="features-section">
      <div v-for="(feature, index) in features" :key="index" class="feature-card">
        <div class="feature-icon" v-html="feature.icon"></div>
        <h3>{{ feature.title }}</h3>
        <p v-html="feature.details"></p>
        <a v-if="feature.link" :href="feature.link" class="feature-link">{{ feature.linkText }}</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      features: {
        type: Array,
        required: true
      }
    }   
  };
  </script>
  
  <style scoped>
  .features-section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .feature-card {
    border: 0px solid #ddd;
    background-color: #1f2026;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    transition: transform 0.3s;
  }
  
  .feature-card:hover {
    transform: translateY(-10px);
  }
  
  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .feature-link {
    display: inline-block;
    margin-top: 1rem;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
    text-decoration: none;
  }
  
  .feature-link:hover {
    background-color: #0056b3;
  }

  
  </style>
  