import React from "react";
import ListGroups from 'react-bootstrap/ListGroup'

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect
}) => {
  return (
    <ListGroups>
      {items.map(item => (
        <ListGroups.Item
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "active" : ""
          }
        >
          {item[textProperty]}
        </ListGroups.Item>
      ))}
    </ListGroups>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id"
};

export default ListGroup;
