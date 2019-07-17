<template>
	<section>
		<!--S 表格-->
		<el-table :data="list" highlight-current-row v-loading="showLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection" width="40">
			</el-table-column>
			<el-table-column type="index" width="40">
			</el-table-column>
			<el-table-column label="头像" width="70">
				 <template slot-scope="scope">
				 	<img :src="scope.row.avatar" class="avatar"/>
				 </template>
			</el-table-column>
			<el-table-column prop="author" label="作者" width="100">
			</el-table-column>
			<el-table-column label="题目" width="220">
				<template slot-scope="scope">
					<audio class="audio" preload="none" controls="controls">
						<source :src="scope.row.audio">
					</audio>
				</template>
			</el-table-column>
			<el-table-column prop="correctAnswer" label="正确答案" width="200">
			</el-table-column>
			<el-table-column label="错误答案" width="200">
				<template slot-scope="scope">
					<ol class="list_answer">
						<li v-for="v in scope.row.wrongAnswers">{{v}}</li>
					</ol>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="100">
				<template slot-scope="scope">
					<el-button :circle="true" size="small" icon="el-icon-right" type="success" :disabled="scope.row.status" @click="handleAdopt(scope.$index, scope.row)"></el-button>
					<el-button :circle="true" size="small" icon="el-icon-wrong" type="danger" @click="handleDel(scope.$index, scope.row)"></el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--E 表格-->
		<!--S 工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="changeCurrentPage" :page-size="size" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
		<!--E 工具条-->
	</section>
</template>
<script>
export default {
	data() {
		return {
			list: [],
			total: 0,
			page: 1,
			size:10,
			showLoading: false,
			sels: [],//列表选中列

		}
	},
	mounted() {
		this.getList();
	},
	methods: {
		//切换页码
		changeCurrentPage(val) {
			this.page = val;
			this.getList();
		},
		//获取待审核列表
		getList() {
			let para = {
				page: this.page
			};
			this.showLoading = true;
			setTimeout(()=>{
				this.total = 20;
				this.list=[
					{
		                id:1,
		                author:"张三",
		                audio:"http://pic.ibaotu.com/00/58/90/86y888piCftQ.mp3",
		                avatar:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3142065931,2964741326&fm=27&gp=0.jpg",
		                correctAnswer:"正确答案",
		               	wrongAnswers:["错误答案1","错误答案2","错误答案3"],
		               	status:0
		            },
					{
		                id:2,
		                author:"李四",
		                audio:"http://pic.ibaotu.com/00/58/90/86y888piCftQ.mp3",
		                avatar:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3142065931,2964741326&fm=27&gp=0.jpg",
		                correctAnswer:"正确答案",
		                wrongAnswers:["错误答案1","错误答案2","错误答案3"],
		                status:1
		            }
				]
				this.showLoading = false;
				
			},1000)
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
					this.getUsers();
				},500)
			}).catch(() => {

			});
		},
		//选中
		selsChange: function (sels) {
			this.sels = sels;
		},
		//批量删除
		batchRemove: function () {
			var ids = this.sels.map(item => item.id).toString();
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
					this.getUsers();
				},500)
			}).catch(() => {

			});
		}
	}
}
</script>
<style scoped>
.avatar{
	width: 50px;
	height: 50px;
}
.audio{
	width: 200px;
	height: 30px;
}
.list_answer{
	margin: 0;
	padding-left:10px ;
}
</style>