import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { ActiveUsers } from '../components/dashboard/ActiveUsers';
import { Services } from '../components/dashboard/services';
import { Notifications } from '../components/dashboard/notifications';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { InActiveUsers } from '../components/dashboard/InActiveUsers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import { Expenditure } from '../components/dashboard/expenditure';
import { AccountDetails } from '../components/dashboard/accountDetails';

const Dashboard = () => (
  <>
    <Head> 
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <ActiveUsers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <InActiveUsers sx={{ height: '100%' }} />
          </Grid>
        
          {/* <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales sx={{ height: '100%' }} />
          </Grid> */}
          <Grid
            item
            lg={8}
            md={12}
            xl={12}
            xs={12}
          >
            <Services/>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <Expenditure sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <Notifications sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <AccountDetails sx={{ height: '100%' }} />
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
