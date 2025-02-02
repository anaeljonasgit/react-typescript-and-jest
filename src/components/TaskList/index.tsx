type TaskListProps = {
  tasks: string[];
};

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div className="TaskListContainer">
      <div className="TaskList">
        {tasks.map((task, t) => {
          return <h1 key={task + t}>{task}</h1>;
        })}
      </div>
    </div>
  );
};

export default TaskList;
