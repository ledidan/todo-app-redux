import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import filterListSlice from "./filterSlice";
// import {
//   priorityFilterChange,
//   searchFilterChange,
//   statusFilterChange,
// } from "../../redux/action";
const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchState] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState([]);
  const dispatch = useDispatch();
  // const searchTextChange = useSelector(todoRemainingSelector);

  const handleSearchChange = (e) => {
    setSearchState(e.target.value);
    dispatch(filterListSlice.actions.searchFilterChange(e.target.value));
  };

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
    dispatch(filterListSlice.actions.statusFilterChange(e.target.value));
  };

  const handlePriorityChange = (value) => {
    setFilterPriority(value);
    dispatch(filterListSlice.actions.prioritiesFilterChange(value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleSearchChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={filterPriority}
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
      </Col>
    </Row>
  );
}
