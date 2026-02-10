const dns = require('dns');
const url = require('url');

// Your connection string from .env
const connectionString = 'mongodb+srv://tanvimadani88888_db_user:Madani9606@acesclub.z3bqtvh.mongodb.net/';

try {
    const parsed = new url.URL(connectionString);
    const hostname = parsed.hostname;

    console.log(`Testing DNS resolution for: _mongodb._tcp.${hostname}`);

    dns.resolveSrv(`_mongodb._tcp.${hostname}`, (err, addresses) => {
        if (err) {
            console.error('❌ DNS Lookup Failed!');
            console.error(`Error Code: ${err.code}`);
            console.error('This confirms your network cannot resolve the MongoDB SRV record.');
            console.error('\nPOSSIBLE CAUSES:');
            console.error('1. Your ISP or University Firewall blocks these DNS queries.');
            console.error('2. You are not connected to the internet.');
            console.error('\nSOLUTION:');
            console.error('Use the "Standard Connection String" (older format) which looks like:');
            console.error('mongodb://<user>:<password>@cluster0-shard-00-00.mongodb.net:27017,...');
        } else {
            console.log('✅ DNS Lookup Successful!');
            console.log('SRV Records found:', addresses);
            console.log('\nIf you still cannot connect, check your IP Whitelist in MongoDB Atlas.');
        }
    });
} catch (e) {
    console.error('Invalid connection string format');
}
