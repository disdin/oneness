import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex',flexDirection:'column'}}>
      <Box sx={{ minWidth: 35, display: 'flex',flexDirection:'row',justifyContent:'space-between' }}>
        <Typography style={{fontWeight:600,fontSize:'17px',textAlign:'left'}} variant="body2" color={props.colour}>{`${Math.round(
          props.value,
        )}%`}</Typography>
        <Typography style={{fontSize:'14px',color:'grey',margin:'auto 0px',right:'0px'}}>Jun 11, 2021 - Jun 10, 2021</Typography>
      </Box>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress color={props.colour} variant="determinate" {...props} />
      </Box>
      
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.  color={props.colour}
   */
  value: PropTypes.number.isRequired,
};

export default function LinearDeterminant({percentage,colour}) {
    return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={percentage} colour={colour} />
    </Box>
  );
}
