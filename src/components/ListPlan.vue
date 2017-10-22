<template>
   <div class="list-plan">
       <el-tree 
           class="list-plan-tree"
           :data="groupTree" 
           :props="groupTreeProps" 
           @node-click="handleNodeClick" 
       />
       <el-table
           stripe
           class="list-plan-table"
           :data="planList"
           style="width: 100%"
        >
           <el-table-column
               prop="name"
               label="推广计划"
               width="180"
            >
           </el-table-column>
           <el-table-column
               prop="planDeviceType"
               label="设备类型"
               width="180"
               :formatter="deviceTypeFormater"
            >
           </el-table-column>
       </el-table>
   </div>
</template>

<script>
export default {
    name: 'ListPlan',

    data() {
        return {
            planList: [],
            groupTree: [],
            groupTreeProps: {
                children: 'children',
                label: 'text'
            }
        };
    },

    computed: {
    
    },

    created() {
    },

    mounted() {
        this.$http.post('/user/listGroupTree')
            .then(data => {
                this.groupTree = data.body.model.tree
            });

        this.$http.post('/user/listPlanData')
            .then(data => {
                this.planList = data.body.model.list.data
            });
    },

    methods: {
        handleNodeClick(node) {
            this.$router.push(`/user/listGroup?planId=${node.id}&page=0`);
        },

        deviceTypeFormater(row, column, cellValue) {
            return cellValue.name;
        }
    }
};
</script>

<style lang="less" scoped>
.list-plan-tree {
    width: 160px;
    max-height: 720px;
    overflow: hidden;
}
</style>
