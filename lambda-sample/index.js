// indes.js
var pg = require('pg');

var conString = "tcp://pguser:pgpasswd@pg.xxxxxxxxxx.us-east-1.rds.amazonaws.com:5432/example";

var queryString = (function () {/*
  SELECT * FROM t_todo_data
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

exports.handler = function(event, context){
  console.log("trying to connect...");
  pg.connect(conString, function(err, client) {
    if(err) {
      console.log('>> Could not connect to postgresql.', err);
      context.fail(err);
      return;
    }
    console.log(">> Connected.");
    client.query(queryString, function(err, result) {
      if(err) {
        console.log('error running query', err);
        context.fail(err);
        return;
      }
      var jsonResult = JSON.stringify( result );
      console.log(">>> successful query. jsonResult: " +  jsonResult);
      client.end();
      context.succeed(result["rows"]);
    });
  });
}
