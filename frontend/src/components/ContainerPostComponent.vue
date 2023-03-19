<script setup lang="ts">
//Import tools
import { usePostsStore } from 'src/stores/post-store';

//Components
import DisplayCardPostComponent from 'src/components/DisplayCardPostComponent.vue';

//Get All Post
const postsStore = usePostsStore();
const get_data = async () => {
    await postsStore.getAllPosts();
};
get_data();

//Categorys to display posts
const allCategoryItem = [
    { id: 'podcast', title: 'PodCast' },
    { id: 'turismo', title: 'Turismo' },
    { id: 'entrevistas', title: 'Entrevistas' },
    { id: 'eventos', title: 'Eventos' },
    { id: 'sketch', title: 'Sketch' },
];
</script>

<template>
    <q-page>
        <template
            v-for="categoryItem of allCategoryItem"
            :key="categoryItem.id"
        >
            <DisplayCardPostComponent
                :categoryItem="categoryItem"
                class="column q-ma-sm"
            />
        </template>
    </q-page>
</template>

<style lang="scss" scoped></style>
