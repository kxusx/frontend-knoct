import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { ActiveUsers } from '../components/dashboard/ActiveUsers';
import { Services } from '../components/dashboard/services';
import { Notifications } from '../components/dashboard/notifications';
import { Report } from '../components/dashboard/report';
import {Map} from '../components/dashboard/map';
import { InActiveUsers } from '../components/dashboard/InActiveUsers';

import { DashboardLayout } from '../components/dashboard-layout';
import { Expenditure } from '../components/dashboard/expenditure';
import { AccountDetails } from '../components/dashboard/accountDetails';

const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard
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
        <div style={{ size: 50, marginLeft: 30, marginBottom: 20 }}>
          Good Morning , Mark. Welcome to Knoct
        </div>
        <div class="gridContainer">
          <div class="activeUsers">
            <ActiveUsers />
          </div>
          <div class="inActiveUsers">
            <InActiveUsers />
          </div>
          <div class="report">
            <Report sx={{ height: '100%' }} />
          </div>
          <div class="notification">
            <Notifications />
          </div>
          <div class="expenditure">
            <Expenditure />
          </div>
          <div class="services">
            <Services />
          </div>
          <div class="accountDetails">
            <AccountDetails />
          </div>
          <div class="map">
            <Map />
            </div>
        </div>
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

//----------------------------------------------------------------------------------------------------------------------
{/* <Grid
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


            <Grid
            item
            lg={8}
            md={12}
            xl={4}
            xs={12}
          >
            <Report sx={{ height: '100%' }} />
          </Grid>

        
          <Grid
            item
            lg={8}
            md={12}
            xl={12}
            xs={12}
          >
            <Report sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={4}
            xs={12}
          >
            <Expenditure sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={4}
            xs={12}
          >
            <Notifications sx={{ height: '100%' }} />
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            xl={4}
            xs={12}
          >
            <AccountDetails sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={6}
            xs={12}
          >
            <Services/>
          </Grid>
          
         
          
        </Grid> */}