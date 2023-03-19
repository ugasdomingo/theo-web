<script lang="ts" setup>
const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView(true);
};

defineProps({
    item: Object,
});
</script>

<template>
    <q-btn
        class="my-card"
        :class="{ red: item?.color }"
        :icon="item?.icon"
        :label="item?.title"
        :href="item?.id"
        stack
        glossy
    />
</template>

<style lang="scss" scoped>
.red {
    background-color: $accent;
}

.my-card {
    width: 10%;
    min-width: 100px;
    height: min-content;
    padding: 0.5em;
    color: antiquewhite;
    box-sizing: border-box;
}

@media screen and (max-width: 720px) {
}
</style>
