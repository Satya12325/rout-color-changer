function UserCard({ id, email, name, avatar }) {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        gap: 2,
        padding: 5,
        margin: 2
      }}
    >
      <img src={avatar} alt={id} />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div>{name}</div>
        <div>{email}</div>
      </div>
    </div>
  );
}

export default UserCard;
