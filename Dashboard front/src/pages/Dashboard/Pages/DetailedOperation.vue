<template>
<div class="operation-detailed">
    <!-- <div class="row">
        <div class="col-lg-8 col-md-7">
            <el-table >
                <el-table-column
                min-width="50"
                type="index"
                prop="id">
                </el-table-column>
                <el-table-column
                min-width="150"
                label="Operation id">
                </el-table-column>
                <el-table-column
                min-width="150"
                label="hmm">
                </el-table-column>
                <el-table-column
                min-width="150"
                label="hmm">
                </el-table-column>
            </el-table>
        </div>
    </div> -->
    <router-link :to="{name: 'User Page'}">
        
        <n-button type="default">
            <span class="btn-label"><i class="now-ui-icons arrows-1_minimal-left"></i></span>
            Back 
        </n-button>
    </router-link>
    
    <detailed-operation-card :operation="operation">

    </detailed-operation-card>
    
</div>
</template>

<script>
import { Table, TableColumn } from "element-ui";
import { mapGetters, mapActions } from "vuex";
import DetailedOperationCard from "../../../components/DetailedOperationCard";
export default {
    name: "Operations",
    components: {
        [Table.name]: Table,
        [TableColumn.name]: TableColumn,
        DetailedOperationCard
    },
    async mounted() {
        await this.fetchOperation(this.$route.params.operationId);
        console.log(this.operation)
    },
    computed: {
        ...mapGetters({
            operation: 'operation'
        })
    },
    methods: {
        ...mapActions({
            fetchOperation: 'fetchOperation'
        })
    }
};
</script>
<style scoped>
    .operation-detailed {
        margin-top: 30px;
    }
    .btn-block {
        width: auto;
    }
    .card {
        margin-top: 20px;
    }
</style>