import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
// import { addToDo } from "../../redux/action";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoRemainingSelector } from "../../redux/selectors";
import todoListSlice from "./todoSlice";

export default function TodoList() {
  const [toDoName, setToDoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const toDoList = useSelector(todoRemainingSelector);
  // const searchText = useSelector(searchTextSelectors);
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addToDo({
        id: uuidv4(),
        name: toDoName,
        priority: priority,
        completed: false,
      })
    );
    setToDoName("");
    setPriority("Medium");
  };
  const handleInputChange = (e) => {
    setToDoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {toDoList.map((toDo) => (
          <Todo
            key={toDo.id}
            id={toDo.id}
            name={toDo.name}
            prioriry={toDo.priority}
            completed={toDo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={toDoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
