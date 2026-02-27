import "../styles/RoomGrid.css";
import RoomTile from "./RoomTile";

export default function RoomGrid({ rooms }) {
  return (
    <section className="room-grid">
      {rooms.map((room) => (
        <RoomTile key={room.name} room={room} />
      ))}
    </section>
  );
}