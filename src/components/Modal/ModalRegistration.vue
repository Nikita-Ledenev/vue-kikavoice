<template>
     <div class="container" tabindex="-1" @click.self="close" @keydown.esc="close">
         <div class="modal">
              <button @click="close" class="btn"><p class="btn_text">Close</p></button>
              <form @submit.prevent="formSubmit" >
                 <div class="registration">
                  <input class="login" placeholder="Login" v-model='login' type="text">
                  <input class="mail" placeholder="Password" v-model='password' type="text"/>
                </div>
                <button type="submit">Отправить</button>
              </form>
         </div>
     </div>
</template>

<script>
export default {
     name: 'ModalRegistration',
     emits: ['close'],
     data() {
          return {
               login: '',
               password: ''
          }
     },
     mounted() {
        this.$el.focus()
     },
     methods: {
          close() {
               this.$emit('close')
          },
          formSubmit() {
               this.signIn()
          },
          async signIn() {
             const res = await fetch(localStorage.getItem('post'), {
                  method: 'POST',
                  headers: {
                       'Content-Type': 'application/json'
                  },
                  credentials: 'include',
                  body: JSON.stringify({
                    login: this.login,
                    password: this.password
                  })
             }).then(res => res.json()) 
             console.log(res)
          }
     }
}
</script>

<style scoped>
   .container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        inset: 0;
        z-index: 10;
        background-color:rgba(0, 0, 0, 0.8);
        
        
   }
   .container:focus {
        outline: none;
   }
   .modal {
        background-color: white;
        width: 800px;
        height: 600px;
   }
   
   .registration {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 250px;
   }
   .login {
        width: 500px;
        height: 25px;
        border-radius: 5px;
        border: orangered solid 1px;
   }
   .mail {
      width: 500px;
      height: 25px;
      margin-top: 5px;
      border-radius: 5px;
      border: orangered solid 1px;
   }
   .btn {
        
        background: red;
        width: 50px;
        border-radius: 5px;
        margin-left: 740px;
        margin-top: 10px;
        border: none;
        border: orangered solid 1px;
   }
   .btn_text {
        color: white;
   }
</style>