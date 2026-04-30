import React from 'react';
import SurvivorList from './components/SurvivorList';


function App() {
  const survivors = [
    {
      id: 1,
      name: 'Mara',
      role: 'Scout',
      hp: 10,
      maxHp: 10,
      stress: 0,
      quirks: ['Sharp-Eyed'],
      mutations: ['Night Vision'],
      inventory: [],
      equippedWeapon : null,
    },
    {
      id: 2,
      name: 'Gage',
      role: 'Bruiser',
      hp: 12,
      maxHp: 12,
      stress: 1,
      quirks: ['Stubborn'],
      mutations: [],
      inventory: [],
      equippedWeapon: null,
    },
    {
      id: 3,
      name: 'Iris',
      role: 'Medic',
      hp: 9,
      maxHp: 9,
      stress: 0,
      quirks: ['Calm Under Pressure'],
      mutations: ['Toxic Resistance'],
      inventory: [],
      equippedWeapon: null,
    },

  ];

  return (
    <main>
      <h1>Ashbound</h1>
      <p>Manage your survivors and send them into the wasteland...</p>

      <SurvivorList survivors={survivors} />
    </main>
  )
}

export default App;