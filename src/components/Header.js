import React from 'react';
import { Box, Column, Heading } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './Header.css';

const Header = () => {
  return (
    <Box className="header-container" display="flex" direction="row" paddingY={2}>
      <Column span={12}>
        <Box padding={3}>
          <Heading size="lg">Digital Signature Service</Heading>
        </Box>
      </Column>
    </Box>
  );
};

export default Header;
