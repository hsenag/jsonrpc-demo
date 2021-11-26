import * as rpc from 'vscode-jsonrpc/node';


let connection = rpc.createMessageConnection(
	new rpc.StreamMessageReader(process.stdin),
	new rpc.StreamMessageWriter(process.stdout));

console.log("running");
let notification = new rpc.NotificationType<string>('testNotification');
connection.onNotification(notification, (param: string) => {
	console.log(param); // This prints Hello World
});

const getPromptReq = new rpc.RequestType<{}, {x: number}, void>('getPrompt');
connection.onRequest(getPromptReq, (params: {}) => {
  const {} = params;
  return { x: 5 };
});

connection.listen();
// process.stdin.on('data', (data) => console.log(data.toString()));
console.log("listening");
