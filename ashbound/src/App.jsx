import React from 'react';
import SurvivorList from './components/SurvivorList';
import MissionList from './components/MissionList';
import { useState } from 'react';


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

  function handleSelectMission(missionId) {
    // Handler to update the selected mission ID
    setSelectedMissionId(missionId);
  }

  const selectedMission = missions.find(
    (mission) => mission.id === selectedMissionId,
  ); // Find the selected mission object

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

  const selectedTeam = survivors.filter((survivor) => {
    return selectedTeamIds.includes(survivor.id);
  }); // Get the selected survivor objects for the team



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
    </main>
  );
}

export default App;