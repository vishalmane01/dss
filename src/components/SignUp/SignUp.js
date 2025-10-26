import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { auth, signInWithGoogle, generateUserDocument } from '../../firebase/firebase';
import {
  Box,
  Button,
  Toast,
  Container,
  Text,
  TextField,
  Heading,
} from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './SignUp.css'; // ✅ Import your custom CSS

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, { displayName });
      navigate('/');
    } catch (error) {
      setError('Error Signing up with email and password');
    }

    setEmail('');
    setPassword('');
    setDisplayName('');
  };

  return (
    <div className="signup-page">
      <Box padding={3}>
        <Container>
          <Box padding={3} className="signup-card">
            {error && <Toast text={error} />}
            <Heading size="md" align="center">Create Account</Heading>
            <Text align="center" color="subtle" size="sm">
              Join us by creating your free account
            </Text>

            <Box padding={2}>
              <TextField
                id="displayName"
                onChange={event => setDisplayName(event.value)}
                placeholder="Enter your name"
                label="Name"
                value={displayName}
                type="text"
              />
            </Box>
            <Box padding={2}>
              <TextField
                id="email"
                onChange={event => setEmail(event.value)}
                placeholder="Enter your email"
                label="Email"
                value={email}
                type="email"
              />
            </Box>
            <Box padding={2}>
              <TextField
                id="password"
                onChange={event => setPassword(event.value)}
                placeholder="Enter your password"
                label="Password"
                value={password}
                type="password"
              />
            </Box>

            <Box padding={2} marginTop={3}>
              <Button
                onClick={event => createUserWithEmailAndPasswordHandler(event, email, password)}
                text="Sign up"
                color="blue"
                inline
              />
            </Box>

            <Box padding={2}>
              <Text align="center" size="sm">or</Text>
            </Box>

            <Box padding={2}>
              <Button onClick={signInWithGoogle} text="Sign in with Google" color="red" inline />
            </Box>

            <Box padding={2} marginTop={2}>
              <Text align="center">Already have an account?</Text>
              <Link to="/" className="signup-link">
                Sign in here
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default SignUp;
