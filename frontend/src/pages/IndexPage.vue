<template>
    <q-page class="column col-12 justify-evenly">
        <!-- Welcome Text -->
        <h1 class="col-12 col-md-6 bienvenida">
            Bienvenidos(as) <br />
            a mi web
        </h1>

        <!-- Navegation Menu -->
        <div class="row flex-center navBar">
            <q-btn class="btn-navbar" href="#podast">PodCast</q-btn>
            <q-btn class="btn-navbar" href="#turismo">Turismo</q-btn>
            <q-btn class="btn-navbar" href="#entrevistas">Entrevistas</q-btn>
            <q-btn class="btn-navbar" href="#eventos">Eventos</q-btn>
            <q-btn class="btn-navbar" href="#sketch">Sketch</q-btn>
        </div>

        <!-- All Posts Container -->
        <ContainerPostComponent class="col-12 col-md-6" />
        <ContactComponent class="col-12 col-md-6" />
    </q-page>
</template>

<script setup lang="ts">
//Import tools
import { useUserStore } from 'src/stores/user-store';
import ContainerPostComponent from 'src/components/ContainerPostComponent.vue';
import ContactComponent from 'src/components/ContactComponent.vue';

const userStores = useUserStore();
</script>

<style lang="scss" scoped>
.bienvenida {
    margin-top: 0.5em;
    padding-top: 0.5em;
}
.navBar {
    margin-top: 0.5em;
    margin-bottom: 10em;
}
.btn-navbar {
    color: whitesmoke;
    margin: 4px;
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #1976d2,
        0 0 0.8rem #1976d2, 0 0 2.8rem #1976d2, inset 0 0 1.3rem #1976d2;
}

@media screen and (max-width: 720px) {
    .bienvenida {
        margin-top: 2em;
        padding-top: 1em;
    }
}
</style>
