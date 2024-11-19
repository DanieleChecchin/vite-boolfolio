<script>
import axios from 'axios';
import ProjectsListItem from './ProjectsListItem.vue';
import AppLoader from './AppLoader.vue';

export default {
    name: 'ProjectsList',
    components: {
        ProjectsListItem,
        AppLoader,
    },
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
    },
    computed: {
        loaded() {
            return this.projectList.length > 0;
        },

    }
}
</script>

<template>

    <div class="loader" v-if="!loaded">
        <AppLoader />
    </div>

    <div class="col-12" v-else>
        <ProjectsListItem class="card" v-for="project in projectList" :key="project.id" :projectObject="project" />
    </div>

</template>

<style scoped></style>