import { Box, Text, Image, VStack } from "@chakra-ui/react";
import { useState } from "react";

const InvestmentCard = ({ logo, yearInvested, companyStatus, investmentStage, sectors }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      position="relative"
      width="250px"
      height="150px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {isHovered ? (
        <VStack spacing={2} p={4} bg="blue.500" color="white" width="100%" height="100%">
          <Text>Year Invested: {yearInvested}</Text>
          <Text>Company Status: {companyStatus}</Text>
          <Text>Investment Stage: {investmentStage}</Text>
          <Text>Sectors: {sectors}</Text>
        </VStack>
      ) : (
        <Image src={logo} alt="Company Logo" boxSize="100px" />
      )}
    </Box>
  );
};

export default InvestmentCard;