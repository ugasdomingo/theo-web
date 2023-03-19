<script setup lang="ts">
//Import tools
import { usePostsStore } from 'src/stores/post-store';

//Import Components
import CardPostComponent from 'src/components/cards/CardPostComponent.vue';

// Activate Stores
const postsStore = usePostsStore();

defineProps({
    categoryItem: Object,
});
</script>

<template>
    <div :id="categoryItem?.id" class="column flex-center post-container">
        <h3>{{ categoryItem?.title }}</h3>
        <div class="row flex-center">
            <template v-for="post of postsStore.podcast" :key="post.id">
                <CardPostComponent :post="post" class="q-ma-sm" />
            </template>
            <q-btn
                fab
                :to="categoryItem?.id"
                icon="mdi-arrow-right-circle-outline"
                color="accent"
                label="Ver todos"
                style="max-height: 24px"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
h3 {
    padding: 0.5em 0;
    margin: 0 0.5em;
    color: antiquewhite;
    font-family: 'customfont';
    font-weight: 500;
}
.post-container {
    padding: 0.5em 0;
    margin: 0 0.5em;
}

@media screen and (max-width: 720px) {
    h3 {
        padding: 0.2em;
    }
}
</style>
