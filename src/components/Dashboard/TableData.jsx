import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from "@mui/material/Avatar";
import LinearDeterminant from "./LinearDeterminant";
import GroupIcon from '@mui/icons-material/Group';
import { Typography } from '@mui/material';
import AtmIcon from '@mui/icons-material/Atm';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function createData(avatar,avC,name, country, Usage,PerColor, atm, activity) {
  return {avatar, avC,name, country, Usage,PerColor, atm, activity };
}
const rows = [
  createData('A','brown','Frozen yoghurt', 'https://flagcdn.com/28x21/au.png',20,'primary', 1, '5 minutes ago'),
  createData('SI','green','Ice cream sandwich', 'https://flagcdn.com/28x21/hk.png',60,'secondary', 0, '1 hour ago'),
  createData('RO','red','Eclair', 'https://flagcdn.com/28x21/pt.png', 70,'error', 0, 'Last week'),
  createData('P','teal','Cupcake', 'https://flagcdn.com/28x21/gb.png',10,'inherit', 1, '1 minute ago'),
  createData('T','purple','Gingerbread', 'https://flagcdn.com/28x21/se.png', 40,'success', 1, 'Last year'),
];

export default function TableData() {
  return (
    <TableContainer style={{width:'80%' }} component={Paper}>
      <Table sx={{ minWidth: 650,}} aria-label="simple table">
        <TableHead style={{backgroundColor:'#e2e2e273'}}>
          <TableRow >
            <TableCell style={{paddingLeft:'24px'}}><GroupIcon/></TableCell>
            <TableCell style={{fontSize:'18px',fontWeight:600}}>User</TableCell>
            <TableCell align='center' style={{fontSize:'18px',fontWeight:600,marginLeft:'-10px'}}>Country</TableCell>
            <TableCell align='left' style={{fontSize:'18px',fontWeight:600}}>Usage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
            <TableCell align='left' style={{fontSize:'18px',fontWeight:600}}>Payment</TableCell>
            <TableCell align='left' style={{fontSize:'18px',fontWeight:600}}>Activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell><Avatar  sx={{ bgcolor: row.avC }}>{row.avatar}</Avatar></TableCell>
              <TableCell component="th" scope="row">
                <Typography>
                {row.name}
                </Typography>
                <Typography style={{fontSize:'15px',color:'grey'}}>{'New | Regestered: Jan 1, 2001'}</Typography>
              </TableCell>
              <TableCell align='center' >
              <img src={row.country} alt="Country image" />
              </TableCell>
              <TableCell align='center'>
                <LinearDeterminant percentage={row.Usage} colour={row.PerColor}/>
              </TableCell>
              <TableCell align='center' >
              {row.atm?<AtmIcon sx={{ fontSize: 40 }}/>:<AttachMoneyIcon/>}
              </TableCell>
              <TableCell align='center' >
              <Typography style={{color:'grey', fontSize:'14px',textAlign:'left'}}>
                Last Login
              </Typography>
              <Typography style={{fontWeight:600,textAlign:'left'}}>{row.activity}</Typography>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
