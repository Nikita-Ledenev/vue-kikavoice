
<template>
     <div class="container">
          <HeaderSite @open="$emit('open')"/>
          <div class='title_main'>
         <h1 class='text_main'>
           Всем Привет с вами <span class='text_hover'>Kika</span>!
           <h2 class='text_info'>
           На данном сайте вы сможете найти,<br/> весь контент связанный с озвучкой <br/> за 5 лет моей работы
         </h2>
         </h1>
        </div> 
     </div>
</template>

<script>
   import HeaderSite from '@/components/Header/HeaderSite.vue'
export default {
     name: 'LayoutMain',
     components: {
     HeaderSite,
     }
}
</script>

<style  scoped>
   .container {
       background-image: url(../../assets/img/background.jpg)  ;
       max-width: 100%;
       background-size: cover;
       height: 100vh;
   }
   .title_main {
        display: flex;
        margin-top: 313px;
        margin-left: 150px;
   }
   .text_main {
        color: white;
        font-size: 48px;
        font-weight: medium;
   }
  .text_hover {
       color: #E24B4B ;
  }
  .text_info {
       color: white;
       margin-top: 11px;
       font-size: 22px;
       font-weight: medium;
  }
</style>