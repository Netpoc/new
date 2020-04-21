<template>
  <v-container fluid>
      <v-row justify="center">
          <p class="display-2">Photo Gallery</p>
          
      </v-row>
      <v-row justify="center">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <v-card
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></v-card>
      </v-row>
  </v-container>
</template>
 
<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
        images: [
          'https://drive.google.com/uc?id=1FXiO6SvdNTCcdBVJBEer8H8de9PjHtHh',
          'https://drive.google.com/uc?id=1GB9ZlNqS9bbn1EcsdgwBC1RPuY0t9iMz',
          'https://drive.google.com/uc?id=1gYv4Br1McJaNckcI5Y_9Aoer58MQnQ5I',
          'https://drive.google.com/uc?id=1FyJeD4_EI3qkxr7_dOCwcoQbApWajeFt',
          'https://drive.google.com/uc?id=1-fQoqfzab6uXFXXizymAI8a_CzaHqjsX',
          'https://drive.google.com/uc?id=1iXBTuDe8ct00xQGNToRGu0YtCdE_Xfg8',
          'https://drive.google.com/uc?id=1N2_8OanUtsvFPZPSVTTYU6RiuZRpdTCK',
          'https://drive.google.com/uc?id=13W4AbvLz_l_6R-WQYyp3liYgqzlkMamL',
          'https://drive.google.com/uc?id=1_VpQ5otsX6LLy2nHO-cmxLZhE0H9sFDJ',
          'https://drive.google.com/uc?id=1JX8v0l_uEzqJFyzGYJGBQiKCEVmTq6HG',
          'https://drive.google.com/uc?id=1rvOQhKAFYjRlyUZHoaNGxXmlS1Y8JVkd',
          'https://drive.google.com/uc?id=16DOChcf2W93CVghCZOHBGYwttZYzUomj',
        ],
        index: null
      };
    },
 
    components: {
      'gallery': VueGallery
    },
  }
</script> 
 
<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style> 