function SurvivorList({
  survivors,
  selectedTeamIds,
  onToggleTeamMember,
  missionSelected,
}) {
  return (
    <section>
      <h2>Roster</h2>

      {survivors.length === 0 ? (
        <p>No survivors available.</p>
      ) : (
        <div>
          {survivors.map((survivor) => (
            <article
              key={survivor.id}
              onClick={() => onToggleTeamMember(survivor.id)}
              style={{
                border: selectedTeamIds.includes(survivor.id)
                  ? '2px solid #2f6fed'
                  : '1px solid #ccc',
                cursor: missionSelected ? 'pointer' : 'not-allowed',
                opacity: missionSelected ? 1 : 0.6,
              }}
            >
              <h3>{survivor.name}</h3>
              <p>Role: {survivor.role}</p>
              <p>
                HP: {survivor.hp}/{survivor.maxHp}
              </p>
              <p>Stress: {survivor.stress}</p>
              <p>Quirks: {survivor.quirks.join(', ') || 'None'}</p>
              <p>Mutations: {survivor.mutations.join(', ') || 'None'}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default SurvivorList;
