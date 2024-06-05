import { Box, Container, Flex, Heading, Link, Spacer, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
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
        </Box>
      </Flex>
      <VStack spacing={4} mt={8}>
        <Heading>Welcome to MyApp</Heading>
        <Box>
          <Heading size="md">Your Blank Canvas</Heading>
          <p>Chat with the agent to start making edits.</p>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;