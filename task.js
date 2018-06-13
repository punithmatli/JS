var exp=require('express');
var app=exp();
app.use(ex.static('public'));

app.set('port',process.env.PORT||5000)

app.listen(app.get('port'),function() {
	console.log('server listening');
})