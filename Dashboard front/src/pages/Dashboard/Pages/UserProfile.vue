<template>
  <div class="row">
    
    <div class="col-lg-8 col-md-7">
      <edit-profile-form> </edit-profile-form>
    </div>
    <div class="col-lg-4 col-md-5">
      <user-card :user="user"> </user-card>
    </div>
    <div class="col-lg-12">
      <card>
      <div slot="header" class="d-flex justify-content-between">
        <h4 class="card-title">All operations</h4>
        <router-link :to=" {name: 'Create Operation' }"><n-button type="success"> Create operation</n-button></router-link>
        
      </div>
      <div class="row">
        <div class="col-sm-12">
          <el-table :data="operations">
            <el-table-column min-width="50" type="index"></el-table-column>
            <el-table-column min-width="150" prop="Type" label="Operation type">
            </el-table-column>
            <el-table-column min-width="200" prop="stringDate" label="Date">
            </el-table-column>
            <el-table-column min-width="150" prop="Sum" label="Sum">
            </el-table-column>
            <el-table-column
              min-width="150"
              header-align="right"
              label="Actions"
              align="right"
            >
              <template slot-scope="scope">
                <router-link :to="{name: 'operationDetailed', params: { operationId: getId(scope.$index, operations)}}">
                  <el-tooltip content="Detailed info" :open-delay="300" placement="top">
                    <n-button type="info" size="sm" icon>
                      <i class="now-ui-icons users_single-02"></i>
                    </n-button>
                  </el-tooltip>
                </router-link>
              </template>
              
            </el-table-column>
          </el-table>
        </div>
      </div>
    </card>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "./UserProfile/EditProfileForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
import Card from '../../../components/Cards/Card.vue';
import { Table, TableColumn } from "element-ui";
import { mapGetters, mapActions } from "vuex";


export default {
  components: {
    EditProfileForm,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    UserCard,
    Card,
    
  },
  data() {
    return {
      apiData: [

      ],
      tableData: [
        {
          name: "Andrew Mike",
          job: "Develop",
          salary: "€ 99,225",
          active: false
        },
        {
          name: "John Doe",
          job: "Design",
          salary: "€ 89,241",
          active: false
        },
        {
          name: "Alex Mike",
          job: "Design",
          salary: "€ 92,144",
          active: false
        },
        {
          name: "Mike Monday",
          job: "Marketing",
          salary: "€ 49,990",
          active: true
        },
        {
          name: "Paul dickens",
          job: "Communication",
          salary: "€ 69,201",
          active: true
        }
      ]
    };
  },
  mounted(){
    this.fetchOperations();
    this.fetchUser()
  },
  computed: {
    ...mapGetters({
      operations: 'operations',
      user: 'user'
    })
  },
  methods: {
    ...mapActions({
      fetchOperations: 'fetchOperations',
      fetchUser: 'fetchUser'
    }),
    getId(index, data) {
      return data[index]._id
    }
  }
};
</script>
<style scoped>
.content {
  background-color: #fff;
}
</style>
