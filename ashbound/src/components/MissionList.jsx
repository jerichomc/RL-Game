

function MissionList({ missions, selectedMissionId, onSelectMission }) {
  return (
    <section>
      <h2>Available Missions</h2>

      {missions.length === 0 ? (
        <p>No missions available.</p>
      ) : (
        <div>
          {missions.map((mission) => (
            <article
              key={mission.id} // Use mission ID as key
              onClick={() => onSelectMission(mission.id)} // Call handler with mission ID on click
              style={{
                border:
                  mission.id === selectedMissionId
                    ? "2px solid #8b5cf6"
                    : "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              <h3>{mission.name}</h3>
              <p>{mission.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default MissionList;
