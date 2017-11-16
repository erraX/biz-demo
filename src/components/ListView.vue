<template lang="html">
  <div :class="listCls">
      <div class="filter">
          <el-form
              ref="filterForm"
              :inline="true"
              :model="filterForm"
              :rules="filterRules"
              label-width="70px" label-suffix=":"
          >
              <el-form-item label="类型" prop="type">
                  <el-select v-model="filterForm.type" placeholder="请选择">
                      <el-option
                          v-for="item in typeOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                      </el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="关键字" prop="keyword">
                  <el-input
                      v-model="filterForm.keyword"
                      placeholder="请输入内容"
                  />
              </el-form-item>
              <el-form-item label="日期" prop="date">
                  <el-date-picker
                      v-model="filterForm.date"
                      type="daterange"
                      placeholder="选择日期范围">
                  </el-date-picker>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
          </el-form>
          <div class="batch-action">
              <el-button>暂停</el-button>
              <el-button>恢复</el-button>
              <el-button>编辑</el-button>
              <el-button>删除</el-button>
          </div>
      </div>
      <div class="list">
           <el-table
               stripe
               class="list-plan-table"
               style="width: 100%"
               :data="filteredTableData"
               @header-click="onClickHeader"
               @selection-change="onSelectionChange"
           >
               <el-table-column
                   type="selection"
                   width="55"
               >
               </el-table-column>
               <el-table-column
                   header-align="center"
                   label="推广计划"
                   align="center"
                   prop="name"
               >
                    <el-popover slot-scope="column" trigger="hover" placement="right-end" width="100">
                        <p>暂停</p>
                        <p>恢复</p>
                        <p>编辑</p>
                        <p>删除</p>
                        <div slot="reference" class="name-wrapper">
                            <router-link
                                :to="'/plan/detail?id=' + column.row.id"
                            >
                                {{ column.row.name }}
                            </router-link>
                        </div>
                   </el-popover>
               </el-table-column>

               <el-table-column
                   v-for="c in columns"
                   header-align="center"
                   align="center"
                   :key="c.prop"
                   :prop="c.prop"
                   :label="c.label"
                   :formatter="c.formatter"
               />
           </el-table>
      </div>
      <div class="pagination">
         <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page.no"
              :page-sizes="[10, 20, 50, 100]"
              :page-size.sync="page.size"
              layout="total, sizes, prev, pager, next, jumper"
              :total="page.total">
          </el-pagination>
      </div>
  </div>
</template>

<script>

import _ from 'lodash';
import { listPlanData } from '@/api';

export default {
    props: [],

    data() {
        return {

            /**
             * 过滤属性表单
             *
             * @type {Object}
            */
            filterForm: {
                type: null,
                date: [],
                keyword: '',
            },

            /**
             * 表单中被选中的行
             *
             * @type {Array}
             */
            selectedRows: [],

            /**
             * 类型下拉框数据
             *
             * @type {Array}
             */
            typeOptions: [
                { value: 0, label: '手机' },
                { value: 1, label: 'PC' },
            ],

            /**
             * 过滤属性表单验证
             *
             * @type {Object}
             */
            filterRules: {
                keyword: [
                    { required: true, message: '请输入关键词', trigger: 'blur' },
                    { min: 3, max: 5, message: '关键词长度在 3 到 5 个字符', trigger: 'blur' },
                ],
            },

            /**
             * 分页数据
             *
             * @type {Object}
             */
            page: {
                no: 1,
                size: 20,
                total: 0,
            },

            /**
             * 排序属性
             *
             * @type {Object}
             */
            order: {
                by: '',
                method: 'desc',
            },

            /**
             * 后端返回的表格数据
             *
             * @type {Array}
             */
            tableData: [],

            /**
             * 表格列属性
             *
             * @type {Array}
             */
            columns: [
                {
                    prop: 'planDeviceType',
                    label: '设备类型',
                    formatter: (row, column, val) => val.name,
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

    computed: {
        listCls() {
            return [
                'list',
                this.class,
            ];
        },

        filteredTableData() {
            return this.tableData;
        },

        filterParams() {
            return {
                order: this.order.method,
                orderBy: this.order.by,
                page: this.page.no,
                pageSize: this.page.size,
                from: this.filterForm.date[0],
                to: this.filterForm.date[1],
                keyword: this.filterForm.keyword,
            };
        },
    },

    created() {
        this.fetchList();
    },

    methods: {
        fetchList() {
            listPlanData(this.filterParams)
                .then(data => {
                    this.tableData = data.model.list.data;
                    this.page.total = data.model.list.totalSize;
                });
        },

        onSubmit() {
            this.$refs.filterForm.validate(valid => {
                if (valid) {
                    this.fetchList();
                }
            });
        },

        onClickHeader({ type, property }) {
            if (type === 'selection') {
                return;
            }

            // 切换排序字段，总是 `asc`
            if (this.order.by !== property) {
                this.order.method = 'asc';
            }
            else {
                this.toggleOrderMethod();
            }

            this.order.by = property;

            // this.onSubmit();
        },

        toggleOrderMethod() {
            this.order.method = this.order.method === 'desc' ? 'asc' : 'desc';
        },

        handleSizeChange(size) {
            this.page.size = size;
        },

        handleCurrentChange(no) {
            this.page.no = no;
        },

        onSelectionChange(selection) {
            this.selectedRows = selection.map(s => s.id);
        },
    },
}
</script>

<style lang="less" scoped>
    a {
        color: #000;
    }
</style>
