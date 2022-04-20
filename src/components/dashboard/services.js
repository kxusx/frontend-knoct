import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';

const services = [
  {
    id: uuid(),

    service: {
      name: 'Background Checks'
    },
    verified:11,
    declined:11,
    total:14,

  },
  {
    id: uuid(),

    service: {
      name: 'Background Checks'
    },
    verified:11,
    declined:11,
    total:14,
  },
  {
    id: uuid(),

    service: {
      name: 'Background Checks'
    },
    verified:11,
    declined:11,
    total:14,
  },
  {
    id: uuid(),

    service: {
      name: 'Background Checks'
    },
    verified:11,
    declined:11,
    total:14,
  },
  {
    id: uuid(),

    service: {
      name: 'Background Checks'
    },
    verified:11,
    declined:11,
    total:14,
  },
  {
    id: uuid(),

    service: {
      name: 'Background Checks'
    },
    verified:11,
    declined:11,
    total:14,
  }
];

export const Services = (props) => (
  <Card {...props}>
    <CardHeader title="Services" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Most Used Services
              </TableCell>
              
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Verified
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Declined
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                <div style = {{alignContent:"right"}}>
                  {order.service.name}
                  </div>
                </TableCell>
                
                <TableCell>
                <div style = {{color:"green"}}>
                 {order.verified}
                 </div>
                </TableCell>
                <TableCell>
                <div style = {{color:"red"}}>
                  {order.declined}
                </div>
                </TableCell>
                <TableCell>
                  {order.total}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    
  </Card>
);
