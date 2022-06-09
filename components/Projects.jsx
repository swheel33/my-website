import { Box, Link, VStack, Text } from "@chakra-ui/react";

export default function Projects() {
    return (
        <Box p='2rem' w={['100%', '40%']}>
            <VStack align='start'>
                <Text fontSize='3xl' fontWeight='bold'>SafeDeposit</Text>
                <Text>A Facebook Marketplace or Craigslist deposits handling app, solving the problem of buyers never showing up for 
                    pickup with a deposit, but keeping the buyer at ease using an escrow like service with smart contracts to handle the 
                    deposit. Built on Rinkeby to allow for easy testing.
                </Text>
                <Link isExternal href='https://safe-deposit.vercel.app/'>
                    <Text color='blue'>Website</Text>
                </Link>
                <Link isExternal href='https://github.com/swheel33/safe-deposit'>
                    <Text color='blue'>Github</Text>
                </Link>
                <Link isExternal href='https://rinkeby.etherscan.io/address/0xAEA66E013CDA1e8675eA757cD9ADDA4b466578Dd'>
                    <Text color='blue'>Verified Contract Address</Text>
                </Link>
            </VStack>
        </Box>
    )
}