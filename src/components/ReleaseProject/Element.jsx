import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Masonry from "@mui/lab/Masonry";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import Avatar from "@mui/material/Avatar";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Element = ({ Data }) => {
    const [DataState, setDataState] = useState(Data);
    function handleDrag(result){
        if(!result.destination) return ;
        const items=Array.from(DataState);
        const [reorderedItem]=items.splice(result.source.index,1);
        items.splice(result.destination.index,0,reorderedItem);
        setDataState(items);
    }
    return (
    <DragDropContext onDragEnd={handleDrag}>
      <Droppable droppableId="contents">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {DataState.map((item, index) => (
              <Draggable key={index.toString()} draggableId={index.toString()} index={index}>
                {(provided) => (
                  <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <Stack
                      style={{
                        boxShadow: "3px 3px 20px #d2d2d2",
                        borderRadius: "8px",
                        marginBottom: "15px"
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "spaceBetween",
                          // alignItems: "center",
                        }}
                      >
                        <Box
                          style={{
                            margin: "10px",
                            display: "flex",
                            flexDirection: "column",
                            // justifyContent: "spaceBetween",
                            width: "90%",
                          }}
                        >
                          <Typography
                            style={{ fontFamily: "Nunito", fontSize: "15px" }}
                          >{`Release project > Stage 1`}</Typography>
                          <Typography
                            style={{
                              fontFamily: "Nunito",
                              fontWeight: 600,
                              fontSize: "17px",
                              wordSpacing: "5px",
                              margin: "10px 0px",
                              color: "#676767",
                            }}
                          >
                            {item.text}
                          </Typography>
                          <FlagRoundedIcon color={item.color} />
                        </Box>
                        <Box
                          sx={{ display: { xs: "flex", md: "flex" } }}
                          style={{
                            position: "relative",
                            top: "20px",
                            marginRight: "10px",
                          }}
                        >
                          <Avatar
                            sx={{
                              bgcolor: item.avatarC,
                              width: 30,
                              height: 30,
                              fontSize: "15px",
                            }}
                          >
                            {item.avatar}
                          </Avatar>
                        </Box>
                      </Box>
                    </Stack>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
          
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Element;
