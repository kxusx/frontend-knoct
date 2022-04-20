import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
// const React, { useState } = require('react');
// const ReactDOM = require('react-dom');
// const WorldMap = require('react-world-map');
import MapChart from "./MapChart";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Grid
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const countries = [
    {
      id: uuid(),
      name: 'Australia',
      sales: '1,431',
      updatedAt: "Today",
      per: '40%',
    },
    {
      id: uuid(),
      name: 'Russia',
      sales:'25,000',
      updatedAt: "Yesterday",
      per: '20%',
    },
    {
      id: uuid(),
      name: 'United States',
      sales:'15,000',
      per: '15%',
    },
    {
      id: uuid(),
      name: 'China',
      sales:'5000',
      updatedAt: "Today",
      per: '10%',
    },
  ];

  export const Map = (props) => (
    <Card {...props}>
      <CardHeader
        title="Verification by Country"
      />
      <Divider /> 
        <Table>
            <TableBody>

            <TableCell>
                <Table>
                <TableBody>
                    {countries.map(country => (
                        <TableRow
                        hover
                        key={country.id}
                      >
                          <TableCell>
                          <div style = {{alignContent:"right"}}>
                            {country.name}
                            </div>
                          </TableCell>
                        <TableCell>
                        <div style = {{alignContent:"right", size:20}}>
                            Sales : {country.sales} <ArrowUpwardIcon color="success" />
                            </div>
                        </TableCell>
                        <TableCell>
                        <div style = {{alignContent:"right",size:20}}>
                            {country.per}
                            </div>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
             
                </TableCell>

            <TableCell>
            <div>
                <MapChart />
            </div>
            </TableCell>
            </TableBody>
            </Table>
      <Divider />
      
    </Card>
  );
  