import React from "react";
import { SkillTree, SkillProvider, SkillTreeGroup } from "beautiful-skill-tree";

const skyrimSkillTreeData = [
  {
    id: "oneHanded",
    title: "One-Handed",
    tooltip: {
      content: "The art of combat using one-handed weapons.",
    },
    children: [
      {
        id: "armsman",
        title: "Armsman",
        tooltip: {
          content: "Increase damage dealt with one-handed weapons.",
        },
        children: [],
      },
      {
        id: "dualFlurry",
        title: "Dual Flurry",
        tooltip: {
          content: "Dual wielding attacks are faster.",
        },
        children: [],
      },
      // More skills under One-Handed if needed
    ],
  },
  {
    id: "archery",
    title: "Archery",
    tooltip: {
      content: "The art of combat using bows and arrows.",
    },
    children: [
      {
        id: "overdraw",
        title: "Overdraw",
        tooltip: {
          content: "Increase bow damage.",
        },
        children: [],
      },
      {
        id: "eagleEye",
        title: "Eagle Eye",
        tooltip: {
          content: "Pressing Block while aiming will zoom in your view.",
        },
        children: [],
      },
      // More skills under Archery if needed
    ],
  },
  {
    id: "sneak",
    title: "Sneak",
    tooltip: {
      content: "The art of moving unseen and unheard.",
    },
    children: [
      {
        id: "stealth",
        title: "Stealth",
        tooltip: {
          content: "You are 20% harder to detect when sneaking.",
        },
        children: [],
      },
      {
        id: "muffle",
        title: "Muffle",
        tooltip: {
          content: "Move more quietly with sneaking.",
        },
        children: [],
      },
      // More skills under Sneak if needed
    ],
  },
];

const handleSave = (storage, treeId, skills) => {
  console.log(storage, treeId, skills);
};

const savedData = {};

const SkillTreeExample = ({ name, data }) => {
  return (
    <SkillProvider>
      <SkillTreeGroup>
        {() => (
          <SkillTree
            height
            treeId={`${name}SkillTree`}
            title={`${name} Skill Tree`}
            data={data}
            collapsible
            handleSave={handleSave}
            savedData={savedData}
          />
        )}
      </SkillTreeGroup>
    </SkillProvider>
  );
};

export default SkillTreeExample;
