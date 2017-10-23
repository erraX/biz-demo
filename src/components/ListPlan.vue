<template>
   <div class="list-plan">
       <el-tree
           class="list-plan-tree"
           :data="groupTree"
           :props="groupTreeProps"
           @node-click="handleNodeClick"
       />
       <div class="list-plan-filter">
           <el-select v-model="filter.type" placeholder="请选择类型">
               <el-option
                   v-for="item in filterOptions"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
               </el-option>
           </el-select>
           <el-input v-model="filter.keyword" placeholder="请输入关键词"></el-input>
       </div>
       <el-button type="primary">
           <router-link to="/user/addPlan">新建计划</router-link>
       </el-button>
       <div class="list-plan-table-container">
           <el-table
               stripe
               class="list-plan-table"
               style="width: 100%"
               :data="planList"
               @header-click="onClickHeader"
           >
               <el-table-column
                   v-for="c in columns"
                   header-align="center"
                   :key="c.prop"
                   :prop="c.prop"
                   :label="c.label"
                   :formatter="c.formatter"
               >
               </el-table-column>
           </el-table>
       </div>
       <div class="block">
           <el-pagination
               layout="prev, pager, next"
               :current-page="curPageNo"
               :total="totalLines"
               :page-size="20"
               @current-change="onPageChanged"
           >
           </el-pagination>
       </div>
   </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'ListPlan',

    data() {
        return {
            curPageNo: 0,
            totalPages: 0,
            totalLines: 0,
            filter: {
                type: '',
                keyword: '',
            },
            filterOptions: [
                {
                    label: 'label1',
                    value: 'value1',
                },
                {
                    label: 'label2',
                    value: 'value2',
                },
            ],
            planList: [],
            groupTree: [],
            groupTreeProps: {
                children: 'children',
                label: 'text',
            },
            columns: [
                {
                    prop: 'name',
                    label: '推广计划',
                },
                {
                    prop: 'planDeviceType',
                    label: '设备类型',
                    formatter: this.deviceTypeFormatter,
                },
                {
                    prop: 'consumeType',
                    label: '消费类型',
                },
                {
                    prop: 'status',
                    label: '状态',
                },
            ],
        };
    },

    watch: {
        filter: {
            handler(value) {
                this.search(this.filter);
            },
            deep: true,
        },
    },

    computed: {

    },

    mounted() {
        console.log(this.$route);
        this.$http.post('/user/listGroupTree')
            .then(data => {
                this.groupTree = data.body.model.tree
            });

        this.$http.post('/user/listPlanData', {
            order: 'asc',
            orderBy: 'status',
            page: 0,
            pageSize: 20,
            from: '2017-10-16',
            to: '2017-10-22',
            keyWord: '',
        }).then(data => {
            this.planList = data.body.model.list.data;
            this.totalPages = Math.ceil(data.body.model.list.totalSize / this.pageSize);
            this.totalLines = data.body.model.list.totalSize;
        });
    },

    methods: {
        onClickHeader(column, event) {
            console.log('column', column);
            console.log('event', event);
        },

        handleNodeClick(node) {
            this.$router.push(`/user/listGroup?planId=${node.id}&page=0`);
        },

        deviceTypeFormatter(row, column, cellValue) {
            return cellValue.name;
        },

        onPageChanged(nextNo) {
            console.log('nextNo', nextNo);
        },

        search: _.debounce(filter => {
            console.log('search:', filter);
        }, 500),
    }
};
</script>

<style lang="less" scoped>
    .list-plan-tree {
        position: absolute;
        left: 10px;
        top: 70px;
        width: 190px;
        max-height: 840px;
        overflow: hidden;
    }

    .list-plan-table-container {
        margin-left: 210px;
        margin-top: 10px;
    }

    .el-input {
        width: 194px;
    }
</style>
