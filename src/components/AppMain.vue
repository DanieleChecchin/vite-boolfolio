<script>
import axios from 'axios';

export default {
    data() {
        return {
            projectList: [],
            apiUrl: 'http://127.0.0.1:8000/api/projects',
        }
    },
    methods: {
        getProjects() {
            axios.get(this.apiUrl)
                .then((response) => {
                    // handle success
                    console.log(response.data.result);
                    this.projectList = response.data.result;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="fw-bold fst-italic text-decoration-underline my-5 text-center"> Project List</h1>
            </div>
            <div class="col-12">
                <div class="card" v-for="project in projectList" :key="project.id">
                    <div class="card-body">
                        <h5 class="card-title"> {{ project.name }} </h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>