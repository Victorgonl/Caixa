import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost/sd', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then()
  .catch((err) => {
    console.log(err);
  });

mongoose.Promise = global.Promise;

export default mongoose;
