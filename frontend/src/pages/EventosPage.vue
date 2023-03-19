<template>
    <q-page>
        <h1>PodCast</h1>
        <div class="row flex-center post-container">
            <template
                v-for="post of postsStore.allPostsByCategory"
                :key="post.id"
            >
                <CardPostComponent :post="post" class="q-ma-sm" />
            </template>
        </div>
    </q-page>
</template>

<script setup lang="ts">
//Import tools
import { usePostsStore } from 'src/stores/post-store';

//Import components
import CardPostComponent from 'src/components/cards/CardPostComponent.vue';

//Activate tools
const postsStore = usePostsStore();

// Get all Eventos post
postsStore.getAllPostsByCategory('Eventos');
</script>

<style lang="scss" scoped>
h1 {
    margin-bottom: 1.5em;
}
.post-container {
    padding-bottom: 1.5em;
}
</style>
