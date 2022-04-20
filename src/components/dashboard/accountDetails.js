import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
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
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const products = [
  {
    id: uuid(),
    name: 'hfuqwihfujfnnfk',
    imageUrl: '/static/images/products/p.png',
    updatedAt: "Today"
  },
  {
    id: uuid(),
    name: 'ndkjqbdkjqbdjkqbd',
    imageUrl: '/static/images/products/w.png',
    updatedAt: "Yesterday"
  },
  {
    id: uuid(),
    name: 'djjqhdwkdnqkdbnkjhq',
    imageUrl: '/static/images/products/r.png',
    updatedAt: "25, Jan 2022"
  },
  {
    id: uuid(),
    name: 'jdhuwhduwhdkjwnf',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: "Today"
  },
  // {
  //   id: uuid(),
  //   name: 'dhuqhdhquhdkuqd',
  //   imageUrl: '/static/images/products/product_5.png',
  //   updatedAt: "Today"
  // }
];

export const AccountDetails = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Account Details"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${product.updatedAt}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    
  </Card>
);
