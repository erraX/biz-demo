<template lang="html">
    <el-table-column
        :header-align="header-align"
        :label="label"
        :width="width"
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

</template>

<script>
export default {
    name: 'ActionColumn',

    props: {
        'header-align': {
            type: String,
            default: 'center',
        },

        width: {
            type: String,
            default: '100',
        },

        label: {
            type: String,
            required: true,
        },

        rowData: {
            type: Object,
            required: true,
        },

        actions: {
            type: Array,
        },
    },
}
</script>

<style lang="css">
</style>
