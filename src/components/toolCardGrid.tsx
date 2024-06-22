import ToolCard from "./toolCard";

const ToolCardGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <ToolCard />
      <ToolCard />
    </div>
  );
};
export default ToolCardGrid;
