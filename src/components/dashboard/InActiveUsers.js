import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const InActiveUsers = (props) => (
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
            INACTIVE USERS
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
                1000
              </Typography>
                <ArrowDownwardIcon color="error" />
                <Typography
                  color="error"
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
            Total InActive Users
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
            <CircularProgressbarWithChildren value={35} >
              <div style={{ fontSize: 10, marginTop: -5 }}>
                <h1 align="center"><strong>35%</strong></h1>
                InActive Users
              </div>
            </CircularProgressbarWithChildren>
          </Avatar>
        </Grid>
      </Grid>

    </CardContent>
  </Card>
);
