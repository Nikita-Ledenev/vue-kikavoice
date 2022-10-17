<template>
           <div>
     <header class='container'>
          <a class='logo' href='#'>
            KikaVoice
          </a>  
          <div class='nav_menu'>
            <a class='charester' :href="link" >{{value[0]}}</a>   
            <a class='anime' :href="link">{{value[1]}}</a>   
            <a class='content' :href="link">{{value[2]}}</a>
          </div>
          <div class='btn_container'>
             <a  :href="link">
              <img class="telegram_img" v-svg-inline src="@/assets/icon/telegram.svg" alt="">
             </a>
             <button  class='btn_input'><span class='input_text'>Войти</span></button>
             <button @click="$emit('open')" class='btn_registration'><span class='registrationtext_text'>Регистрация</span></button>
          </div>
     </header>
</div>
</template>


<script>

export default {
      name:"HeaderSite",
      components: {
      },
      data() {
         return {
               value: [
                     'Персонажи',
                     'Аниме',
                     'Контент'
               ],
               link: 'https://t.me/KikaHOME'
         }
      }
}
</script>


<style  scoped>
   .container {
     display: flex;
     justify-content: space-between;
     padding-left: 150px;
     padding-right: 150px;
     color: white;
   }
   .logo {
         font-size: 36px;
         color: white;
         margin-top: 27px;
         text-decoration: none;
   }
   .nav_menu {
         font-size: 20px;
         margin-top: 42px;
         padding-left: 275px;
         
   }
   .charester {
         margin-right: 15px;
         color: white;
         text-decoration: none;
   }
   .anime {
         margin-right: 15px;
         color: white;
         text-decoration: none;
   }
   .content {
         color: white;
         text-decoration: none;
   }
   .btn_container  {
         display: flex;
         align-items: center;
         justify-content: space-between;
   }
   .telegram_img {
         
         margin-top: 40px;
         padding-right: 10px
   }
   .btn_input {
         border-radius: 65px;
         background: #EB3636;
         width: 97px;
         height: 45px;
         margin-top: 35px;
         margin-left: 20px;
         border: none;
   }
  .input_text {
        color: white;
        font-size: 20px;
  }
  .btn_registration {
        border-radius: 65px;
        background: #EB3636;
        width: 175px;
        height: 45px;
        margin-top: 35px;
        margin-left: 20px;
        border: none;
  }
  .registrationtext_text {
        color: white;
        font-size: 20px;
  }
</style>

