<!-- 扩展 -->

application.js —— this指向：app对象
调用：this.app
 

context.js —— this指向：ctx对象
调用：this.ctx
 

request.js —— this指向：ctx.request对象
调用：this.ctx.request
 

response.js —— this指向：ctx.response对象
调用：this.ctx.response
 

helper.js —— this指向：ctx.helper对象
调用：this.ctx.helper