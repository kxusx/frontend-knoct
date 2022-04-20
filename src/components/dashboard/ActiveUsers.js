import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ActiveUsers = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            ACTIVE USERS
          </Typography>
        
              <Box
                sx={{
                  pt: 2,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Typography
                color="textPrimary"
                variant="subtitle1"
              >
                4000
              </Typography>
                <ArrowUpwardIcon color="success" />
                <Typography
                  color="success"
                  sx={{
                    mr: 1
                  }}
                  variant="body2"
                >
                  12%
                </Typography>
              </Box>
            

    
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Total Active Users
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 100,
              width: 100
            }}
          >
            <CircularProgressbarWithChildren value={66} >
              <div style={{ fontSize: 10, marginTop: -5 }}>
                <h1 align="center"><strong>65%</strong></h1>
                Active Users
              </div>
            </CircularProgressbarWithChildren>
          </Avatar>
        </Grid>
      </Grid>

    </CardContent>
  </Card>
);
