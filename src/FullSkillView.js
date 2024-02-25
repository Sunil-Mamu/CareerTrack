import { Link } from "react-router-dom";
const Card = ({ name }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-10">
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
};
const FullSkillView = ({ skills }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {skills?.map((skill, index) => (
        <Link to={`/${skill.name}`} key={index}>
          <Card key={index} name={skill.name} />
        </Link>
      ))}
    </div>
  );
};
export default FullSkillView;
