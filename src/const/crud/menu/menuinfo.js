export const tableoption = {
	index: true,
	indexLabel: 'ID',
	height: '200px',
	border: false,
	align: 'center',
	menuAlign: 'center',
	submitText: '更新',
	column: [
		{
			label: '菜单ID',
			prop: 'id',
			readonly: 'true'
		},
		{
			label: '父ID',
			prop: 'pid'
		},
		{
			label: '名称',
			prop: 'name'
		},
		{
			label: '图标',
			prop: 'icon'
		},
		{
			label: '排序',
			prop: 'sort'
		},
		{
			label: '连接地址',
			prop: 'path'
		},
		{
			label: '组件路径',
			prop: 'component'
		},
		{
			label: '內部菜单',
			prop: 'iframe'
		},
		{
			label: '创建时间',
			type: 'datetime',
			readonly: true,
			format: 'yyyy-MM-dd hh:mm:ss',//显示的时间格式
			prop: 'createTime'
		}
	]
}
