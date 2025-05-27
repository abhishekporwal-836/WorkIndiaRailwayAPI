const pool = require("../db/pool");

exports.addTrain = async (name, source, destination, totalSeats) => {
  await pool.execute(
    "INSERT INTO trains (name, source, destination, totalSeats) VALUES (?, ?, ?, ?)",
    [name, source, destination, totalSeats]
  );
};


exports.getAvailability = async (source, destination) => {
  const [trains] = await pool.execute(
    `SELECT t.*, (t.totalSeats - IFNULL(b.booked, 0)) AS availableSeats
     FROM trains t
     LEFT JOIN (
       SELECT trainId, COUNT(*) AS booked FROM bookings GROUP BY trainId
     ) b ON t.id = b.trainId
     WHERE t.source = ? AND t.destination = ?`,
    [source, destination]
  );
  return trains;
};
