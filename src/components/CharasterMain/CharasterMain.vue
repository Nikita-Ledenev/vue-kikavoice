<template>
      <div class="characters">
         <h2 class='characters_text'>Персонажи</h2>
         <div class='charactersgrid'>
           <CharasterCard v-for="card in 6 " v-bind:key="card"/> 
         </div>
         <div class='pagination'>
           <button class='pagination_btn'>
             <img class='btn_arrow' src="@/assets/icon/vector.svg" alt="vector" />
           </button>
              <span class='pagination_number'>{{nubmer}}</span>
           <button class='pagination_btn_next'>
             <img class='btn_arrow_next' src="@/assets/icon/vector.svg" alt="vector" />
           </button>
         </div>
    </div>
</template>

<script>
import CharasterCard from '@/components/CharasterMain/CharasterCard.vue'
export default {
     name: 'CharasterMain',
    components: {
     CharasterCard
    },
    data () {
         return {
              nubmer: '1/3'
         }
    }
}
</script>


<style scoped>
  .characters {
       max-width: 100%;
       height: 1210px;
       background: radial-gradient(50% 50% at 50% 50%, #D06464 0%, rgba(240, 25, 25, 0.640625) 0%, rgba(236, 33, 33, 0.582864) 15.1%, rgba(166, 91, 91, 0) 100%), #0D0D0D;
  }
  .characters_text {
       display: flex;
       color: white;
       align-items: center;
       justify-content: center;
       font-size: 48px;
       font-weight: normal;
       padding-top: 23px
  }
  .charactersgrid {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       grid-template-rows: repeat(2, 1fr);
       grid-column-gap: 40px;
       grid-row-gap: 50px;
       padding-left: 30px;
  }
  .pagination {
       display: flex;
       align-items: center;
       justify-content: center;
       margin-top: 131px
  }
  .pagination_btn {
       width: 56px;
       height: 24px;
       background: red;
       border-radius: 35px;
       margin-right: 25px;
       border: none;
  }
  .btn_arrow {
       margin-left: 0px;
  }
  .pagination_number {
       display: flex;
       align-items: center;
       color: white;
       font-size: 32px;
  }
  .pagination_btn_next {
       width: 56px;
       height: 24px;
       background: red;
       border-radius: 35px;
       margin-left: 25px;
       border: none;
  }
  .btn_arrow_next {
       margin-left: 0px;
       transform: rotate(180deg);
  }
  @media (max-width: 2600px) {
       .charactersgrid {
            padding-left: 225px;
       }
  }
  @media (max-width: 1680px) {
       .charactersgrid {
            padding-left: 30px;
       }
  }

</style>