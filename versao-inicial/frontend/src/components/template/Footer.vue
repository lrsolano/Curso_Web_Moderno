<template>
    <footer class="footer">
        <span>Copyright <strong>Leonardo</strong> 2020</span>
    </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>
    .footer{
        grid-area: footer;
        background-color: #AAA;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px;
    }
</style>