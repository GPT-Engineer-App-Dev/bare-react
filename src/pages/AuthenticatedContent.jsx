import { Box, Container, Heading, Text } from "@chakra-ui/react";

const AuthenticatedContent = () => {
  return (
    <Container maxW="container.xl" mt={8}>
      <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Heading size="lg" mb={4}>Authenticated Content</Heading>
        <Text fontSize="md">This content is only visible to authenticated users.</Text>
      </Box>
    </Container>
  );
};

export default AuthenticatedContent;