const Koa = require('koa');
// 创建一个Koa对象表示web app本身:
const app = new Koa();
let mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password:'123456',
  database: 'feishi_dev', 
  charset:'utf8', //应该设置编码（省略在某些情况下会有错误）
  //以下选项均为默认值（如果不需要变动可省略）
  acquireTimeout:10000, //获取连接的毫秒
  waitForConnections: true, //为true时，连接排队等待可用连接。为false将立即抛出错误
  connectionLimit: 10, //单次可创建最大连接数
  queueLimit: 0 //连接池的最大请求数，从getConnection方法前依次排队。设置为0将没有限制
});


app.use(async (ctx, next)=>{
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