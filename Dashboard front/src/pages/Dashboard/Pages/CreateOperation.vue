<template>
    <div class="operation-create">
        <router-link :to="{name: 'User Page'}">
        
            <n-button type="default">
                <span class="btn-label"><i class="now-ui-icons arrows-1_minimal-left"></i></span>
                Back 
            </n-button>
        </router-link>
        <card>
            <h4 class="card-title"> Create operation</h4>
            <form @submit.prevent="submit">
                <div class="row w-50">
                    <div class="col-md-4">
                        <label class="select-header">
                            Operation type *
                        </label>
                        
                        <el-select class="select-primary" size="small" placeholder="Select type" v-model="selects.simple">
                            <el-option v-for="option in selects.types" class="select-primary" :value="option.value"
                            :label="option.label"
                            :key="option.label">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="col-md-4">
                        <fg-input type="number" label="Operation sum" placeholder="Sum of operation" v-model="sumOfOperation">
                            
                        </fg-input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <fg-input label="Description of the operation">
                            <textarea
                            class="form-control"
                            placeholder="Text"
                            v-model="descriptionOfOperation"
                            >
                            </textarea>
                        </fg-input>
                    </div>
                </div>
                <n-button native-type="submit" type="success" round block>
                Create operation
              </n-button>
            </form>
            <p>
                <span class="star">*</span> - "+" stands for advenet, "-" stands for expenditure
            </p>
            
        </card>
        
    </div>
</template>
    
<script>
import { Select, Option } from "element-ui";
import Card from '../../../components/Cards/Card.vue';
import { mapActions } from "vuex";

export default {
    components: {
        [Select.name]: Select,
        Card,
        [Option.name]: Option
    },
    data() {
        return {
            selects: {
                simple: '',
                types: [
                    {value: '+', label: '+'},
                    {value: '-', label: '-'}
                ]
            },
            sumOfOperation: '',
            descriptionOfOperation: '',
        }
    },
    methods: {
        ...mapActions({
            createOperation: 'createOperation'
        }),
        submit() {
            
            const body = {
                Type: this.selects.simple,
                Sum: this.sumOfOperation,
                Description: this.descriptionOfOperation
            }
            this.createOperation(body)
        }
    }
}
</script>
<style scoped>
.operation-create {
        margin-top: 30px;
    }
.row {
    margin-bottom: 20px;
}
.select-header {
    margin-bottom: 8px !important;
}

.el-select .el-input .el-input__inner {
    margin: 0;
}

.star {
    color: #f96332;
}
</style> 