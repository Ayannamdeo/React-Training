// 9.Implement a responsive sidebar navigation using Material-UI's Drawer component. Include links that allow users to navigate between different sections of your web app.
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {Link, BrowserRouter} from 'react-router-dom';
import Routing from './Routing';

export function Q9(){
const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const linkarray=['about','charts','setting'];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Link to={`/${linkarray[index]}`} >{linkarray[index]}</Link>
            </ListItemButton>
          </ListItem>
        ))}
       
      </List>
      <Divider />
    </Box>
  );

  return (
    <BrowserRouter>
    <Routing />
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
    </BrowserRouter>

  );
}