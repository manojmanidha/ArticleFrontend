import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import AuthForm from './components/AuthForm';
import ArticleList from './components/ArticleList';
import ArticleForm from './components/ArticleForm';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setToken(null);
    setRole(null);
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Article App
          </Typography>
          {token ? (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          ) : null}
        </Toolbar>
      </AppBar>
      <Box mt={4}>
        {!token ? (
          <AuthForm setToken={setToken} setRole={setRole} />
        ) : (
          <>
            <ArticleList token={token} />
            {role === 'admin' && <ArticleForm token={token} />}
          </>
        )}
      </Box>
    </Container>
  );
}

export default App;
