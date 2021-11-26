// import * as cp from 'child_process';
import * as rpc from 'vscode-jsonrpc/node';

// let childProcess = cp.spawn("./node_modules/.bin/ts-node", ["./server.ts"]);

// Use stdin and stdout for communication:
let connection = rpc.createMessageConnection(
	new rpc.StreamMessageReader(process.stdin),
	new rpc.StreamMessageWriter(process.stdout));

let notification = new rpc.NotificationType<string>('testNotification');

connection.listen();

connection.sendNotification(notification, 'Hello World');