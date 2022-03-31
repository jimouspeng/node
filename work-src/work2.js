const { parentPort, workerData } = require('worker_threads')

console.log('work2.js----------------')

console.log('work2: log workerData-------------------', workerData)

parentPort.on('message', (msg) => {
    console.log('work2接受到了主线程的消息')
    msg.myport.postMessage('work2 send this``````````````````````````````````````')
})
