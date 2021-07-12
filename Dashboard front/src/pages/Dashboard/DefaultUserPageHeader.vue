<template>
  <div class="panel-header panel-header-sm">
      <h1 class="chart_description">Chart, representing balance change history:</h1>
      <header-chart v-if="isLoaded" :height="255" :data="dataCollection.datasets" :labels="dataCollection.labels"></header-chart>
  </div>
</template>
<script>
import HeaderChart from "./Pages/UserProfile/HeaderChart";
import { mapGetters, mapActions } from "vuex";

export default {
    components: {
        HeaderChart
    },
    data() {
        return {
            isLoaded: false,
            dataCollection: null
        };
    },
    async mounted(){
        await this.fetchOperations();
        this.fillData();
    },
    computed: {
        ...mapGetters({
            operations: 'operations'
        })
    },
    methods: {
        ...mapActions({
            fetchOperations: 'fetchOperations'
        }),
        async fillData() {
            this.isLoaded = false;
            const operations = this.operations;
            const datas = [];
            const labels = [];
            const operaionsLastElementIndex = operations.length - 1;
            operations.forEach(element => datas.push(element.BalanceBefore));
            datas.push(operations[operaionsLastElementIndex].BalanceAfter);
            operations.forEach(element => labels.push(element.stringDate));
            console.log(labels)
            labels.push('Now');
            
            this.dataCollection = {
                labels: labels || [],
                datasets: datas || []
            };
            this.isLoaded = true;
        }
    }
};
</script>
<style scoped>
.panel-header-sm {
    height: 550px;
}

.chart_description {
    color: #FFF;
    width: 80%;
    padding-bottom: 50px;
    margin: 0 auto;
}
</style>
