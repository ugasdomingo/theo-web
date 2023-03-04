<script setup lang="ts">
//Import tools
import { usePostsStore } from 'src/stores/post-store';
import { ref } from 'vue';

//Components
import CardPostComponent from 'src/components/CardPostComponent.vue';

//logic
const postsStore = usePostsStore();
const podcast = ref([]);
const turismo = ref([]);
const entrevistas = ref([]);
const eventos = ref([]);
const sketch = ref([]);

const getAllPosts = async () => {
    await postsStore.getAllPosts();

    //Order by category
    postsStore.allPosts.map((item: any) => {
        if (item.category == 'PodCast') {
            if (podcast.value.length <= 2) {
                podcast.value.push(item);
            }
        }
        if (item.category == 'Turismo') {
            if (turismo.value.length <= 2) {
                turismo.value.push(item);
            }
        }
        if (item.category == 'Entrevistas') {
            if (entrevistas.value.length <= 2) {
                entrevistas.value.push(item);
            }
        }
        if (item.category == 'Eventos') {
            if (eventos.value.length <= 2) {
                eventos.value.push(item);
            }
        }
        if (item.category == 'Sketch') {
            if (sketch.value.length <= 2) {
                sketch.value.push(item);
            }
        }
    });
};
getAllPosts();
</script>

<template>
    <q-page>
        <div id="podast" class="row flex-center post-container">
            <h3>PodCast</h3>
            <template v-for="post of podcast" :key="post.id">
                <CardPostComponent :post="post" class="q-ma-sm" />
            </template>
            <q-btn
                fab
                to="podcast"
                icon="mdi-arrow-right-circle-outline"
                color="green"
                label="Ver todos"
            />
        </div>
        <div id="turismo" class="row flex-center post-container2">
            <h3>Turismo</h3>
            <template v-for="post of turismo" :key="post.id">
                <CardPostComponent :post="post" class="q-ma-sm" />
            </template>
            <q-btn
                fab
                to="turismo"
                icon="mdi-arrow-right-circle-outline"
                color="green"
                label="Ver todos"
            />
        </div>
        <div id="entrevistas" class="row flex-center post-container">
            <h3>Entrevistas</h3>
            <template v-for="post of entrevistas" :key="post.id">
                <CardPostComponent :post="post" class="q-ma-sm" />
            </template>
            <q-btn
                fab
                to="entrevistas"
                icon="mdi-arrow-right-circle-outline"
                color="green"
                label="Ver todos"
            />
        </div>
        <div id="eventos" class="row flex-center post-container2">
            <h3>Eventos</h3>
            <template v-for="post of eventos" :key="post.id">
                <CardPostComponent :post="post" class="q-ma-sm" />
            </template>
            <q-btn
                fab
                to="eventos"
                icon="mdi-arrow-right-circle-outline"
                color="green"
                label="Ver todos"
            />
        </div>
        <div id="sketch" class="row flex-center post-container">
            <h3>Sketch</h3>
            <template v-for="post of sketch" :key="post.id">
                <CardPostComponent :post="post" class="q-ma-sm" />
            </template>
            <q-btn
                fab
                to="sketch"
                icon="mdi-arrow-right-circle-outline"
                color="green"
                label="Ver todos"
            />
        </div>
    </q-page>
</template>

<style lang="scss" scoped>
h3 {
    padding: 1.5em;
    text-shadow: 2px 2px 50px #fff;
    font-family: 'customfont';
}
.post-container {
    padding: 48px 12px;
    margin: 8px;
    border: 0.2rem solid #fff;
    border-radius: 2rem;
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #1976d2,
        0 0 0.8rem #1976d2, 0 0 2.8rem #1976d2, inset 0 0 1.3rem #1976d2;
}
.post-container2 {
    padding: 48px 12px;
    margin: 8px;
    border: 0.2rem solid #fff;
    border-radius: 2rem;
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #c10015,
        0 0 0.8rem #c10015, 0 0 2.8rem #c10015, inset 0 0 1.3rem #c10015;
}
@media screen and (max-width: 720px) {
    h3 {
        padding: 0.2em;
    }
}
</style>
