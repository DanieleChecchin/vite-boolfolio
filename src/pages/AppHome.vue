<script>
import axios from 'axios';

export default {
    name: 'AppHome',
    data() {
        return {
            projectList: [],
            apiUrl: 'http://127.0.0.1:8000/api/projects',
        }
    },
    methods: {
    },
    created() {
    }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="fw-bold fst-italic text-decoration-underline my-5 text-center"> Home</h1>
            </div>
            <div class="col-12">

            </div>
        </div>
    </div>

</template>

<style scoped></style>