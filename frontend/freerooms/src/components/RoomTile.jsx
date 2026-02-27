const availability_colours = [
  { min: 0, max: 0, colour: "#ff4d4d" },
  { min: 1, max: 5, colour: "#ff9100ff" },
  { min: 6, max: 9999, colour: "#66ff66" }
];

function getDotColour(numRooms) {
  return availability_colours.find((a) => numRooms >= a.min && numRooms <= a.max).colour;
}

function RoomTile({ room }) {
  const dotColour = getDotColour(room.rooms_available);

  return (
    <article className="room-tile">
      <img
        src={room.building_picture || room.building_file}
        alt={room.name}
        className="room-tile__image"
      />
      <div
        className="room-tile__badge"
        style={{ "--dot-colour": dotColour }}
      >
        {room.rooms_available} rooms available
      </div>
      <div className="room-tile__name">{room.name}</div>
    </article>
  );
}

export default RoomTile;