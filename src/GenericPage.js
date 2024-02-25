import SkillTreeExample from "./treeExample";
//this is where we change the data into trees
function parseSkillTreeData(data) {
  return data.steps.map((step, index) => {
    return {
      id: step.name.replace(/\s+/g, "-").toLowerCase(),
      title: step.name,
      collapsable: true,
      tooltip: {
        content: `Learn about ${step.name}`,
      },
      children: step.sub_steps.map((subStep) => ({
        id: subStep.name.replace(/\s+/g, "-").toLowerCase(),
        title: subStep.name,
        tooltip: {
          content: `Learn about ${subStep.name}`,
        },
        children: [],
      })),
    };
  });
}
function parseSkillTreeData0(data) {
  const trees = [];

  data.steps.forEach((step, index) => {
    if (index % 3 === 0) {
      trees.push({
        id: step.name.replace(/\s+/g, "-").toLowerCase(),
        title: step.name,
        collapsable: true,
        tooltip: {
          content: `Learn about ${step.name}`,
        },
        children: step.sub_steps.map((subStep) => ({
          id: subStep.name.replace(/\s+/g, "-").toLowerCase(),
          title: subStep.name,
          tooltip: {
            content: `Learn about ${subStep.name}`,
          },
          children: [],
        })),
      });
    } else {
      const lastIndex = trees.length - 1;
      trees[lastIndex].children.push(
        ...step.sub_steps.map((subStep) => ({
          id: subStep.name.replace(/\s+/g, "-").toLowerCase(),
          title: subStep.name,
          tooltip: {
            content: `Learn about ${subStep.name}`,
          },
          children: [],
        }))
      );
    }
  });

  return trees;
}
function parseSkillTreeData3(data) {
  const tree = {
    id: data._id,
    title: data.name,
    tooltip: {
      content: `Learn about ${data.name}`,
    },
    children: [],
  };

  data.steps.forEach((step) => {
    const stepNode = {
      id: step.name.replace(/\s+/g, "-").toLowerCase(),
      title: step.name,
      tooltip: {
        content: `Learn about ${step.name}`,
      },
      children: [],
    };

    step.sub_steps.forEach((subStep) => {
      stepNode.children.push({
        id: subStep.name.replace(/\s+/g, "-").toLowerCase(),
        title: subStep.name,
        tooltip: {
          content: `Learn about ${subStep.name}`,
        },
        children: [],
      });
    });

    tree.children.push(stepNode);
  });

  return [tree];
}

function parseSkillTreeData2(data) {
  const tree = {
    id: data._id,
    title: data.name,
    tooltip: {
      content: `Learn about ${data.name}`,
    },
    children: [],
  };

  let index = 0;
  data.steps.forEach((step) => {
    step.sub_steps.forEach((subStep) => {
      const subStepNode = {
        id: subStep.name.replace(/\s+/g, "-").toLowerCase(),
        title: subStep.name,
        tooltip: {
          content: `Learn about ${subStep.name}`,
        },
        children: [],
      };

      if (index > 0) {
        // Connect the current sub-step to the previous one
        tree.children[index - 1].children.push(subStepNode);
      } else {
        // Connect the first sub-step to the step node
        const stepNode = {
          id: step.name.replace(/\s+/g, "-").toLowerCase(),
          title: step.name,
          tooltip: {
            content: `Learn about ${step.name}`,
          },
          children: [subStepNode],
        };
        tree.children.push(stepNode);
      }

      index++;
    });
  });

  return [tree];
}
function parseSkillTreeData1(data) {
  const tree = {
    id: data._id,
    title: data.name,
    tooltip: {
      content: `Learn about ${data.name}`,
    },
    children: [],
  };

  let index = 0;
  let currentParent = null;
  data.steps.forEach((step) => {
    step.sub_steps.forEach((subStep) => {
      const subStepNode = {
        id: subStep.name.replace(/\s+/g, "-").toLowerCase(),
        title: subStep.name,
        tooltip: {
          content: `Learn about ${subStep.name}`,
        },
        children: [],
      };

      if (index % 3 === 0) {
        // Create a new step node for every third sub-step
        const stepNode = {
          id: step.name.replace(/\s+/g, "-").toLowerCase(),
          title: step.name,
          tooltip: {
            content: `Learn about ${step.name}`,
          },
          children: [subStepNode],
        };

        // Add the step node to the tree
        tree.children.push(stepNode);
        currentParent = stepNode;
      } else {
        // Add the sub-step to the current step node
        currentParent.children.push(subStepNode);
      }

      index++;
    });
  });

  return [tree];
}
const GenericPageComoonent = ({ name, skills }) => {
  const skillTreeData = parseSkillTreeData(skills);
  localStorage["experience"] = 3;
  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>{name} Page Component</h2>
      <p>This is the content of the {name} Page component.</p>
      <SkillTreeExample name={name} data={skillTreeData} />
    </div>
  );
};

export default GenericPageComoonent;
