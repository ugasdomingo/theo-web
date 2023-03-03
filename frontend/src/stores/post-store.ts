//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';

export const usePostsStore = defineStore('posts', () => {
    const userStore = useUserStore();

    const allPosts = ref([]);

    const getAllPosts = async () => {
        try {
            const res = await api({
                url: '/posts',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });
            console.log(res.data)
            allPosts.value = res.data.map((item: any) => {
                return {
                    title: item.title,
                    url: item.url,
                    category: item.category,
                    description: item.description,
                };
            });
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const createPost = async (
        title: string,
        url: string,
        category: string,
        description: string
    ) => {
        try {
            const res = await api({
                url: '/posts',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
                data: {
                    title,
                    url,
                    category,
                    description,
                },
            });

        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    return { createPost, allPosts, getAllPosts };
});