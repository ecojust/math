export default {
    id: state => {//通用的方法    在所有的组件中都可以通过计算属性中 this.$store.getters.todosList 获取的值
        return state.id
        //或者做一些其他数据处理
    },
    userinfo:state=>{
        var userinfo = localStorage.getItem('userinfo');
        return JSON.parse(userinfo);
    }
    
}
