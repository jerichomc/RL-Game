
import SurvivorList from "./components/SurvivorList";
import MissionList from "./components/MissionList";
import { useState } from "react";

function App() {
  const survivors = [
    {
      id: 1,
      name: "Mara",
      role: "Scout",
      hp: 10,
      maxHp: 10,
      stress: 0,
      quirks: ["Sharp-Eyed"],
      mutations: ["Night Vision"],
      inventory: [],
      equippedWeapon: null,
    },
    {
      id: 2,
      name: "Gage",
      role: "Bruiser",
      hp: 12,
      maxHp: 12,
      stress: 1,
      quirks: ["Stubborn"],
      mutations: [],
      inventory: [],
      equippedWeapon: null,
    },
    {
      id: 3,
      name: "Iris",
      role: "Medic",
      hp: 9,
      maxHp: 9,
      stress: 0,
      quirks: ["Calm Under Pressure"],
      mutations: ["Toxic Resistance"],
      inventory: [],
      equippedWeapon: null,
    },
  ];

  const missions = [
    {
      id: 1,
      name: "Abandoned Pharmacy",
      type: "scavenge",
      difficulty: 2,
      danger: 2,
      rewards: ["medicine", "supplies"],
      risks: ["injury", "combat"],
      possibleEnemies: ["Raider", "Infected"],
    },
    {
      id: 2,
      name: "Collapsed Overpass",
      type: "combat",
      difficulty: 3,
      danger: 4,
      rewards: ["scrap", "ammo"],
      risks: ["injury"],
      possibleEnemies: ["Raider"],
    },
    {
      id: 3,
      name: "Old Emergency Shelter",
      type: "recruit",
      difficulty: 1,
      danger: 1,
      rewards: ["new survivor", "food"],
      risks: ["stress"],
      possibleEnemies: [],
    },
  ];

  const [selectedMissionId, setSelectedMissionId] = useState(null);
  const [selectedTeamIds, setSelectedTeamIds] = useState([]);
  const [activeMission, setActiveMission] = useState(null);

  function handleSelectMission(missionId) {
    // Handler to update the selected mission ID
    setSelectedMissionId(missionId);
  }

  const selectedMission = missions.find(
  (mission) => mission.id === selectedMissionId,
);

const selectedTeam = survivors.filter((survivor) => {
  return selectedTeamIds.includes(survivor.id);
});

const canStartMission = Boolean(selectedMission) && selectedTeam.length > 0;

function handleStartMission() {
  if (!selectedMission) {
    return;
  }

  if (selectedTeam.length === 0) {
    return;
  }

  setActiveMission({
    mission: selectedMission,
    team: selectedTeam,
    status: "in-progress",
  });
}


  function handleToggleTeamMember(survivorId) {
    // Handler to toggle survivor selection for the team
    if (!selectedMissionId) return; // Do nothing if no mission is selected

    setSelectedTeamIds((currentTeam) => {
      if (currentTeam.includes(survivorId)) {
        return currentTeam.filter((id) => id !== survivorId); // Remove from team if already selected
      }

      return [...currentTeam, survivorId]; // Add to team if not already selected
    });
  }
  return (
    <main>
      <h1>Ashbound</h1>
      <p>Manage your survivors and send them into the wasteland...</p>

      <SurvivorList
        survivors={survivors}
        selectedTeamIds={selectedTeamIds}
        onToggleTeamMember={handleToggleTeamMember}
        missionSelected={Boolean(selectedMission)} // Pass whether a mission is selected
      />
      <MissionList
        missions={missions} // Pass the missions data
        selectedMissionId={selectedMissionId} // Pass the selected mission ID
        onSelectMission={handleSelectMission} // Pass the handler
      />
      <section>
        <h2>Selected Mission</h2>
        {selectedMission ? (
          <p>
            {selectedMission.name} ({selectedMission.type})
          </p>
        ) : (
          <p>No mission selected.</p>
        )}
      </section>
      <section>
        <h2>Current Team</h2>

        {!selectedMission ? (
          <p>Select a mission before choosing a team.</p>
        ) : selectedTeam.length === 0 ? (
          <p>No survivors selected.</p>
        ) : (
          <div>
            {selectedTeam.map((survivor) => (
              <p key={survivor.id}>
                {survivor.name} ({survivor.role})
              </p>
            ))}
          </div>
        )}
      </section>
      <section>
        <h2>Mission Controls</h2>

        <button onClick={handleStartMission} disabled={!canStartMission}>
          Start Mission
        </button>

        {!selectedMission && <p>Select a mission first.</p>}
        {selectedMission && selectedTeam.length === 0 && (
          <p>Select at least one survivor.</p>
        )}
      </section>
      <section>
        <h2>Active Mission</h2>

        {activeMission ? (
          <div>
            <p>
              Mission: {activeMission.mission.name} (
              {activeMission.mission.type})
            </p>
            <p>Status: {activeMission.status}</p>
            <p>
              Team:{" "}
              {activeMission.team.map((survivor) => survivor.name).join(", ")}
            </p>
          </div>
        ) : (
          <p>No mission started.</p>
        )}
      </section>
    </main>
  );
}

export default App;
