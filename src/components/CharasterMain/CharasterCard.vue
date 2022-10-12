<template>
     <div class='charactersCard'>
     <div class='container'>
         <p class='charactersCard_number'>01</p>
         <img class='charactersCard_img' src='@/assets/icon/Arrow.svg' alt="arrow" />
     </div>
      <h3 class='charactersCard_title'>Нацуки Субару</h3>
</div>
</template>

<script>
export default {
     name: 'CharasterCard',
}
</script>

<style  scoped>
   .charactersCard {
     background-image: url(../../assets/img/sybary.jpeg);
     background: linear-gradient(0deg, rgba(27, 27, 27, 0.68), rgba(223, 219, 219, 0) 99.44%), url(../../assets/img/sybary.jpeg);
     background-position: center ;
     margin-left: 75px;
     margin-top: 22px;
     width: 357px;  
     height: 355px;
     border-radius: 35px;
   }

   .charactersCard:hover {
     box-shadow: 0px 0px 2px 2px #E24B4B;
     opacity: 0.9;
   }
   .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
   }
   .charactersCard_number {
        color: white;
        font-size: 32px;
        margin-left: 16px;
        margin-top: 12px;
   }
   .charactersCard_img {
        margin-right: 22px;
        margin-top: 10px;
   }
   .charactersCard_title {
        color: white;
        font-size: 32px;
        margin-top: 200px;
        margin-left: 22px;
        margin-right: 49px;
        font-weight: semibold;
   }
</style>