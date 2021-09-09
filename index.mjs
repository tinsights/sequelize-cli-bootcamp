import db from './models/index.mjs';

const [, , operation, ...args] = process.argv;

switch (operation) {
  case ('create'): {
    db.Trip.create({
      name: process.argv[3],
    })
      .then((trip) => {
        console.log('success!');
        console.table(trip);
      })
      .catch((error) => console.log(error));
    break;
  }
  case ('add-attrac'): {
    if (args.length < 2) {
      console.error('Insufficient parameters');
      process.exit(1);
    }
    const tripName = args[0];
    const attracName = args[1];
    db.Trip.findOne({
      where: {
        name: tripName,
      },
    })
      .then((trip) => db.Attraction.create({
        name: attracName,
        trip_id: trip.id,
      }))
      .then((newAttrac) => {
        console.log('Success!');
        console.table(newAttrac);
      })
      .catch((err) => console.error(err));
    break;
  }
  default:
    console.log("what's that?");
    break;
}
