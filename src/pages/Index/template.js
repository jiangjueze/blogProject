import auth from '@/api/auth.js'
import blog from '@/api/blog.js'

export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  methods: {
    onClick1(){
      this.$message.error('错了哦，这是一条错误信息')
    },

    onClick2(){
      this.$alert('这是一段内容','标题名称',{
        confirmButtonText:'确定',
        callback:action => {
          this.$message.success('成功弹窗')
        }
      })
    }
  },
};
