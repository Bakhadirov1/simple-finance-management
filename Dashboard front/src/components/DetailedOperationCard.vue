<template>
    <div class="operation-card">
        <div class="card card-stats card-raised">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="statistics">
                            <div class="info">
                                <div class="icon icon-primary">
                                    <i class="now-ui-icons business_badge"></i>
                                </div>
                                <h3 class="info-title">
                                {{ operation._id }}
                                </h3>
                                <h6 class="stats-title">Operation ID</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="statistics">
                            <div class="info">
                                <div class="icon icon-primary">
                                    <i class="now-ui-icons ui-1_calendar-60"></i>
                                </div>
                                <h3 class="info-title">
                                {{ operation.Date }}
                                </h3>
                                <h6 class="stats-title">Date created</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="statistics">
                            <div class="info">
                                <div class="icon icon-primary">
                                    <i class="now-ui-icons business_money-coins"></i>
                                </div>
                                <h3 class="info-title">
                                {{ operation.Type }}
                                </h3>
                                <h6 class="stats-title">Type of operation</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="statistics">
                            <div class="info">
                                <div class="icon icon-primary">
                                    <i class="now-ui-icons business_money-coins"></i>
                                </div>
                                <h3 class="info-title">
                                {{ operation.Sum }}
                                </h3>
                                <h6 class="stats-title">Type of operation</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="statistics">
                            <div class="info">
                                <div class="icon icon-primary">
                                    <i class="now-ui-icons business_money-coins"></i>
                                </div>
                                <h3 class="info-title">
                                {{ operation.BalanceBefore }}
                                </h3>
                                <h6 class="stats-title">Balance before</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="statistics">
                            <div class="info">
                                <div class="icon icon-primary">
                                    <i class="now-ui-icons business_money-coins"></i>
                                </div>
                                <h3 class="info-title">
                                {{ operation.BalanceAfter }}
                                </h3>
                                <h6 class="stats-title">Balance after</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="statistics">
                            <div class="info">
                                <div class="icon icon-primary">
                                    <i class="now-ui-icons text_caps-small"></i>
                                </div>
                                <h3 class="info-title">
                                {{ operation.Description }}
                                </h3>
                                <h6 class="stats-title">Description</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import AnimatedNumber from '../components/AnimatedNumber';

export default {
    components: {
        AnimatedNumber,
    },
    props: {
        operation: Object
    }
}
</script>

<style>

</style>