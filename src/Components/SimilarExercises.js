import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ExerciseCard from './ExerciseCard';
import HorizontalScrollbar from '../Components/HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises, currentExerciseId }) => {
  if(!targetMuscleExercises.length || !equipmentExercises.length) return <Loader />
  return (
    <Box p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Similar Exercises for <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{targetMuscleExercises[0].target}</span>
      </Typography>

      <Stack direction='row' sx={{ p:'2', position:'relative' }}>
        <HorizontalScrollbar data={targetMuscleExercises} currentExerciseId={currentExerciseId}/>
      </Stack>

      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Other exercises using <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{equipmentExercises[0].equipment}</span>
      </Typography>

      <Stack direction='row' sx={{ p:'2', position:'relative' }}>
        <HorizontalScrollbar data={equipmentExercises} currentExerciseId={currentExerciseId}/>
      </Stack>
    </Box>
  )
}

export default SimilarExercises;
