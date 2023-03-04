<template>
    <q-page>
        <h1>Entrevistas</h1>
        <div class="row flex-center post-container">
            <template
                v-for="post of postsStore.allPostsByCategory"
                :key="post.id"
            >
                <CategoryCardComponent :post="post" class="q-ma-sm" />
            </template>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import { usePostsStore } from 'src/stores/post-store';
import CategoryCardComponent from 'src/components/CategoryCardComponent.vue';

const postsStore = usePostsStore();
postsStore.getAllPostsByCategory('Entrevistas');
</script>

<style lang="scss" scoped>
h1 {
    margin-bottom: 1.5em;
}
.post-container {
    padding-bottom: 1.5em;
}
</style>
