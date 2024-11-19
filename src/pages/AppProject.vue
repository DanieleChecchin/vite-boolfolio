<script>
import ProjectList from '../components/ProjectList.vue';


export default {
    name: 'AppProject',
    components: {
        ProjectList
    },
    data() {
        return {

        }
    },
    methods: {
    },
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="fw-bold fst-italic text-decoration-underline my-5 text-center"> Project List:</h1>
            </div>
            <ProjectList />
        </div>
    </div>

</template>

<style scoped></style>