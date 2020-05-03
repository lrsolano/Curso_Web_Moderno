<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .content{
        grid-area: content;
        background-color: rgba(183, 122, 233, 0.3);
        padding: 20px;
    }
</style>