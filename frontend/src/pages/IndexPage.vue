<template>
    <q-page class="column col-12 justify-evenly">
        <!-- Welcome Text -->
        <h1 class="col-12 col-md-6 bienvenida">¿Qué quieres ver hoy?</h1>

        <!-- Internal Navegation Menu -->
        <div class="row flex-center navBar">
            <template v-for="item of itemMenu" :key="item.id">
                <CardMenuComponent :item="item" class="q-ma-sm" />
            </template>
        </div>

        <!-- All Posts Container -->
        <ContainerPostComponent class="col-12 col-md-6" />

        <!-- Contact -->
        <ContactComponent class="col-12 col-md-6" />
    </q-page>
</template>

<script setup lang="ts">
//Import Components
import ContainerPostComponent from 'src/components/ContainerPostComponent.vue';
import ContactComponent from 'src/components/ContactComponent.vue';
import CardMenuComponent from 'src/components/cards/CardMenuComponent.vue';

//Items to show in Menu
const itemMenu = [
    { id: '#podcast', title: 'PodCast', icon: 'mdi-microphone' },
    {
        id: '#turismo',
        title: 'Turismo',
        icon: 'mdi-airplane-takeoff',
        color: 'true',
    },
    { id: '#entrevistas', title: 'Entrevistas', icon: 'mdi-video-account' },
    {
        id: '#eventos',
        title: 'Eventos',
        icon: 'mdi-party-popper',
        color: 'true',
    },
    { id: '#sketch', title: 'sketch', icon: 'mdi-emoticon-lol' },
];
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

@media screen and (max-width: 720px) {
    .bienvenida {
        margin-top: 2em;
        padding-top: 1em;
    }
}
</style>
