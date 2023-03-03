<template>
    <q-layout view="hhh lpR fFf" class="index-container">
        <q-header id="header" class="transparent">
            <q-toolbar class="flex-center">
                <router-link
                    to="/"
                    class="text-h1 text-white lobster"
                    style="text-decoration: none"
                >
                    Theo Oviedo
                </router-link>

                <div v-if="userStores.loggedIn">
                    <q-btn color="primary" @click="logout" class="btn">
                        Cerrar Sesión
                    </q-btn>
                    <q-btn color="accent" to="subir-post" class="btn">
                        Subir Post
                    </q-btn>
                </div>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
            <q-page-sticky position="bottom-right" :offset="[18, 18]">
                <div class="column">
                    <q-btn
                        fab
                        href="#header"
                        icon="mdi-whatsapp"
                        color="green"
                    />
                    <q-btn
                        fab
                        href="#header"
                        icon="keyboard_arrow_up"
                        color="accent"
                    />
                </div>
            </q-page-sticky>
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user-store';

const userStores = useUserStore();
const router = useRouter();

const logout = async () => {
    await userStores.logout();
    userStores.loggedIn = false;
    router.push('/');
};
</script>

<style lang="scss" scoped>
.btn {
    margin: 8px;
}
.index-container {
    background-image: url('../../public/images/Hero-grande.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

@media screen and (max-width: 720px) {
    .index-container {
        background-image: url('../../public/images/Hero-pequeno.jpg');
        background-size: auto;
    }
}
</style>
