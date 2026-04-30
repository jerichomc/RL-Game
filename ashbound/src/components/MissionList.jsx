

function MissionList({ missions }) {
  return (
    <section>
      <h2>Available Missions</h2>

      {missions.length === 0 ? (
        <p>No missions available.</p>
      ) : (
        <div>
          {missions.map((mission) => (
            <article key={mission.id}>
              <h3>{mission.name}</h3>
              <p>Type: {mission.type}</p>
              <p>Difficulty: {mission.difficulty}</p>
              <p>Danger: {mission.danger}</p>
              <p>Rewards: {mission.rewards.join(', ')}</p>
              <p>Risks: {mission.risks.join(', ')}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default MissionList;
