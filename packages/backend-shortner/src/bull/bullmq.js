import { Queue, Worker } from 'bullmq';
import IORedis from 'ioredis';

const connection = new IORedis({ maxRetriesPerRequest: null, enableReadyCheck: false,  });
const myQueue = new Queue('foo');

async function addJobs() {
    await myQueue.add('myJobName', { foo: 'bar' });
    await myQueue.add('myJobName', { qux: 'baz' });
}

await addJobs();

const myWorker = new Worker('myworker', async (job) => { }, { connection });

myWorker.on('completed', (job, returnvalue) => {
    console.log("On Completed")
    // Do something with the return value.
});

myWorker.on('failed', (job, error) => {
    console.log("On Failed")
    // Do something with the return value.
  });