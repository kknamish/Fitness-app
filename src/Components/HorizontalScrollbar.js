import React from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart, currentExerciseId }) => {
  console.log(data);
  if(!currentExerciseId){
    currentExerciseId = "0000";
  }

  return (
    <ScrollMenu>
        {data.filter((item) => (item.id!==currentExerciseId)).map((item) => (
            <Box 
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item} 
                m="0 40px"
            >
                {isBodyPart ?
                  <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                : <ExerciseCard exercise={item} />}
            </Box>
        ))} 
    </ScrollMenu>
  )
}

export default HorizontalScrollbar;
