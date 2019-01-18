<template>
    <main>
        <div class="container app-container">
            <router-view></router-view>
        </div>
    </main>
</template>
<style lang="scss">
    @import "../sandbox/src/sandbox.scss";

    .container {
        margin-left:auto;
        margin-right:auto;
        max-width:70%;
    }

    button{
        border-radius:.4rem;
    }

    .pointer{
        cursor:pointer;
    }

    @media (min-width: 1440px) {
        .container {
            max-width: 1280px;
        }
    }

</style>