const forecast = require('./utils/weather');

const address = process.argv[2];

if(!address) {
   console.log('Please provide a location and try again');
} else {
   forecast(address, (err, data) => {
      if(err) console.error(err);
      console.log(data);
   })
}

