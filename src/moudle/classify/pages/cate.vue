<template>
	<section>
		<!--S 工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true">
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!--E 工具条-->
		<!--S 表格-->
		<el-table :data="catelist" highlight-current-row v-loading="showLoading" style="width:100%;">
			<el-table-column prop="id" label="ID"  width="40"></el-table-column>
			<el-table-column prop="cnName" label="名称" width="150"></el-table-column>
			<el-table-column prop="enName" label="翻译" width="300"></el-table-column>
			<el-table-column prop="icon" label="图标" width="200"></el-table-column>
			<el-table-column label="颜色" width="100" >
				<template slot-scope="scope">
					<div class="rect_color" v-bind:style="{backgroundColor:scope.row.color}"></div>
					<!--<el-color-picker v-model="scope.row.color" ></el-color-picker>-->
				</template>
			</el-table-column>
			<el-table-column label="操作" align="right">
				<template slot-scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--E 表格-->
	</section>
</template>
<script>
import {fetchGetCateList} from "../server/server.js"
export default {
	data() {
		return {
			catelist: [],
			showLoading: false

		}
	},
	mounted() {
		this.getCateList();
	},
	methods: {
		//获取分类列表
		getCateList() {
			this.showLoading = true;
			let params = {
      			opt: "getCateList"
    		}
			fetchGetCateList(params).then(data=>{
				this.catelist=data;
				this.showLoading = false;
			})
		},
		//添加
		handleAdd(){
			
		},
		//编辑
		handleEdit(index,row){
			
		},
		//删除
		handleDel(index,row){
			this.$confirm('确认删除选中记录吗？', '提示', {
				type: 'warning'
			}).then(() => {
				this.showLoading = true;
				let para = { ids: ids };
				setTimeout(()=>{
					this.showLoading = false;
					this.$message({
						message: '删除成功',
						type: 'success'
					});
				},500)
			}).catch(() => {

			});
		}
	}
}
</script>
<style scoped>
.rect_color{
	width: 40px;
	height: 40px;
	border-radius: 5px;
}
</style>