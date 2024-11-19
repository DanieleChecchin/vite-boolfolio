<script>
import axios from 'axios';

export default {
    name: 'ProjectsListItem',
    data() {
        return {

        }
    },
    props: {
        'projectObject': {
            type: Object,
            required: true,
        }
    },
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> {{ projectObject.name }} </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>