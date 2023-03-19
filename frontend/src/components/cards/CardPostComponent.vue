<script setup lang="ts">
//Import Tools
import { useUserStore } from 'src/stores/user-store';
import { usePostsStore } from 'src/stores/post-store';
import { useQuasar } from 'quasar';
import { ref } from 'vue';

//Activate tools
const userStores = useUserStore();
const postsStore = usePostsStore();
const $q = useQuasar();
const loadding = ref(false);

const deletePost = async (id: string, category: string) => {
    loadding.value = true;
    await postsStore.deletePost(id);
    await postsStore.getAllPostsByCategory(category);
    loadding.value = false;
    $q.notify('Post Eliminado');
};

//Props
defineProps({
    post: Object,
});
</script>

<template>
    <div class="column">
        <q-card class="my-card cursor-pointer">
            <q-video :src="post?.url" />
            <q-card-section>
                <p class="q-py-xs text-center">
                    {{ post?.title }}
                </p>
            </q-card-section>
        </q-card>
        <div v-if="userStores.loggedIn">
            <q-btn
                glossy
                color="primary"
                @click="deletePost(post?.id, post?.category)"
                label="Eliminar"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
p {
    color: antiquewhite;
    font-weight: 400;
    padding: 0;
}
.my-card {
    width: 100%;
    max-width: 250px;
    max-height: 250px;
    padding: 1em;
    background-color: $dark;
}
</style>
