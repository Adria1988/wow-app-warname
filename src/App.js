import React, { useState } from 'react';
const ClassSelector = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSpec, setSelectedSpec] = useState('');
  const [selectedSubSpec, setSelectedSubSpec] = useState('');
  
  const handleClassChange = (e) => {
  setSelectedClass(e.target.value);
  setSelectedSpec('');
  setSelectedSubSpec('');
  };
  
  const handleSpecChange = (e) => {
  setSelectedSpec(e.target.value);
  setSelectedSubSpec('');
  };
  
  const classOptions = [
    'Paladin',
    'Druid',
    'Priest',
    'Shaman',
    'Warrior',
    'Mage',
    'Warlock',
    'Hunter',
    'Rogue'
  ];

  const specOptions =  selectedClass === 'Druid'
    ? ['Feral', 'Restoration','Balance','Tank']
    : selectedClass === 'Shaman'
    ? ['Elemental', 'Enchancement','Restoration']
    : selectedClass === 'Priest'
      ? ['Shadow', 'Disci','Holy']
      : selectedClass === 'Warrior'
        ? ['Arms', 'Fury','Tank']
        : selectedClass === 'Paladin'
        ? ['Retry', 'Hpala','Palatank']
        : selectedClass === 'Mage'
        ? ['Forst', 'Mage','Arcane']
        : selectedClass === 'Warlock'
        ? ['Affliction', 'Demonology','Destruction']
        : selectedClass === 'Hunter'
        ? ['Survival', 'Marksmanship','Beast']
        : selectedClass === 'Rogue'
        ? ['Assassination', 'Mutilation','Combat']
        : [];


  return (
    <div>
      <select value={selectedClass} onChange={handleClassChange}>
        <option value="">Seleccione una clase</option>
        {classOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      {selectedClass && (
        <select value={selectedSpec} onChange={handleSpecChange}>
          <option value="">Seleccione una especialización</option>
          {specOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )}

      {selectedSpec && <p>Elegiste la clase: {selectedClass} y la especialización: {selectedSpec}</p>}
      {selectedSubSpec && <p>Elegiste la sub-especialización: {selectedSubSpec}</p>}
    </div>
  );
};

export default ClassSelector;
