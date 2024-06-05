import { Box, Container, Flex, Heading, Link, Spacer, VStack, Input, Button, FormControl, FormLabel, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { supabase } from "../integrations/supabase/index.js";
import { Link as RouterLink } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { session, logout } = useSupabaseAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast({
        title: "Login failed",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login successful",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }

    setLoading(false);
  };

  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/" margin="0 1rem" color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/about" margin="0 1rem" color="white">
            About
          </Link>
          <Link as={RouterLink} to="/contact" margin="0 1rem" color="white">
            Contact
          </Link>
          {session && (
            <>
              <Link as={RouterLink} to="/authenticated-content" margin="0 1rem" color="white">
                Authenticated Content
              </Link>
              <Button onClick={logout} colorScheme="red" size="sm" ml={4}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Flex>
      <VStack spacing={4} mt={8}>
        <Heading>Welcome to MyApp</Heading>
        <Box>
          <Heading size="md">Your Blank Canvas</Heading>
          <p>Chat with the agent to start making edits.</p>
        </Box>
        {!session && (
          <Box as="form" onSubmit={handleLogin} width="100%" maxW="md" p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
            <VStack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button type="submit" colorScheme="blue" isLoading={loading} width="full">
                Login
              </Button>
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;