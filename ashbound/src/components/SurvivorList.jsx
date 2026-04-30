

function SurvivorList({ survivors }) {
  return (
    <section>
      <h2>Roster</h2>

      {survivors.length === 0 ? (
        <p>No survivors available.</p> // Display message if there are no survivors
      ) : (
        <div>
          {survivors.map((survivor) => ( // Map over survivors and display their details
          // Each survivor is displayed in an article element with their name, role, HP, stress, quirks, and mutations
            <article key={survivor.id}> 
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
