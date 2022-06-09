import { Box, Stack, VStack, Text, Image, Show } from "@chakra-ui/react";

export default function AboutMe() {
    return (
        <Box p={['1rem','2rem 18rem']}>
            <Stack align='center' spacing='2rem' direction={['column', 'row']}>
                <Image src='./profile-pic.JPG' boxSize={['xs','lg']} alt='profile-pic'/>
                <VStack>
                    <Text>
                        Hi! My name is Samuel Wheeler and I'm a web3 software developer with a focus on DeFi.
                        My professional background is as a consultant with a chemical engineering degree from Stanford University. 
                        The journey I took to get here wasn't the straightest path, starting off at a vineyard before working as a 
                        consultant at Veeva Systems and then eventually deciding that my passion lies in web3.
                    </Text>
                    <Text>
                        <br />
                        Like many others, during the pandemic I got interested in active investing, spending my time researching 
                        various financial derivatives to try and create delta neutral strategies and take advantage of theta decay.
                        Since everything was locked down I got pretty invested (no pun intended) in various options and futures 
                        plays. That path eventually led me to to the DeFi space and the incredible 
                        opportunity it provided, letting any indivdual lend, borrow, leverage, or really do whatever they wanted with 
                        their money. After spending a few months reading twitter threads in my spare time on everything from 
                        automated market makers to algorithmic stablecoins (rip UST) I decided that I wanted to change career 
                        paths. I quit my job to buckle down and learn all the necessary tools to transition to building web 
                        apps for DeFi. And now here I am!
                    </Text>
                    <Text>
                        <br />
                        Check out the Projects section to see my first project building an app to handle a common issue in with Facebook Marketplace: buyers not showing
                        up to actually buy the item. 
                    </Text>
                </VStack>
            </Stack>
            
        </Box>
    )
}