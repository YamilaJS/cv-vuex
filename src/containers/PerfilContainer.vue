<template>
    <h1 v-text="perfil.h1"/>
</template>
<script>
import {mapState} from 'vuex';
export default {   
    computed: mapState({
        perfil: state => state.articles.perfil
    })
}
</script>
<style>

</style>
