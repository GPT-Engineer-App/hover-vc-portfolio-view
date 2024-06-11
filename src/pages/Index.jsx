import { Container, SimpleGrid, Box, Text, VStack, Button } from "@chakra-ui/react";
import InvestmentCard from "../components/InvestmentCard";

const investments = [
  {
    logo: "https://via.placeholder.com/100",
    yearInvested: "2010",
    companyStatus: "IPO/Public NYSE: NET",
    investmentStage: "Early",
    sectors: "Technology, Enterprise",
  },
  {
    logo: "https://via.placeholder.com/100",
    yearInvested: "2012",
    companyStatus: "Private",
    investmentStage: "Growth",
    sectors: "Healthcare, Biotech",
  },
  // Add more investments as needed
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box mb={6}>
        <Text fontSize="4xl" fontWeight="bold">Enterprise</Text>
        <Button mt={2} colorScheme="blue">View All</Button>
      </Box>
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {investments.map((investment, index) => (
          <InvestmentCard key={index} {...investment} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;