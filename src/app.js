const Koa = require('koa');
// 创建一个Koa对象表示web app本身:
const app = new Koa();

app.use(async (ctx, next)=>{
	console.log('1111')
	await next();
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>Hello, koa2!</h1>';
})

app.use(async (ctx, next)=>{
	console.log('22222')
	await next();
	console.log('333333')
})

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');