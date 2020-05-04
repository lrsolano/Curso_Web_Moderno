<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="@/assets/logo.png" width="200" alt="Logo">
            <hr>
            <div class="auth-title">{{showSignup ? 'Cadastro': 'Login '}}</div>

            <input v-if="showSignup" v-model="user.name" placeholder="Nome" type="text">
            <input v-model="user.email" type="text" placeholder="E-mail">
            <input v-model="user.password" type="password" placeholder="Senha">
            <input v-if="showSignup" v-model="user.confirmPassword" type="password" placeholder="Confirme a Senha">
            <button v-if="showSignup" @click="signup" class="btn btn-primary">Registrar</button>
            <button v-else  @click="signin" class="btn btn-primary">Entrar</button>

            <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup">Já tem Cadastro? Acesse o Login!</span>
                <span v-else>Não tem cadastro? Registre-se aqui!</span>
            </a>

        </div>
    </div>
</template>

<script>

import {baseApiUrl, showError, userKey} from '@/global'
import axios from 'axios'
export default {
    name: 'Auth',
    data: function(){
        return{
            showSignup: false,
            user: {}
        }
    },
    methods:{
        signin(){
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({path: '/'})
                })
                .catch(showError)
        },
        signup(){
            axios.post(`${baseApiUrl}/signup`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.user = {}
                    this.showSignup = false
                })
                .catch(showError)
        }
    }

}
</script>

<style>
    .auth-content{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .auth-modal{
        background-color: #fff;
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .auth-title{
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .auth-modal input{
        border: 1px solid #BBB;
        width: 100%;
        margin-bottom: 15px;
        padding: 3px 8px;
        outline: none;
    }
    .auth-modal input:hover{
        box-shadow: 1px 3px 4px  rgb(0, 0, 0);
    }
    .auth-modal input:focus{
        border: 1px dotted #7C0061;
        box-shadow: 1px 3px 4px  rgb(0, 0, 0);
    }
    .auth-modal button{
        align-self: flex-end;
        padding: 5px 15px;
    }
    .auth-modal a{
        margin-top: 35px;
    }

    .auth-modal hr{
        border: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right, rgba(199, 56, 167,0), rgb(199, 56, 167), rgba(199, 56, 167,0));
    }
    
</style>