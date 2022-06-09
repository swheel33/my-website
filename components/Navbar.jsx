import { Box, Button, Flex, Heading, HStack, Image, Menu, MenuButton, MenuItem, MenuList, Text, IconButton, Show } from "@chakra-ui/react";
import { AiOutlineMenu } from 'react-icons/ai'

export default function Navbar({setIsAboutMe, setIsHome, setIsProjects}) {
    const handleAboutClick = () => {
        setIsAboutMe(true);
        setIsHome(false);
        setIsProjects(false);
    }

    const handleProjectsClick = () => {
        setIsProjects(true);
        setIsHome(false);
        setIsAboutMe(false);
    }

    const handleHomeClick = () => {
        setIsHome(true);
        setIsProjects(false);
        setIsAboutMe(false);
    }
    
    return (
        <Box shadow='xl'>
            <Flex p=' 0.5rem 1rem' justify='space-between'>
                <HStack>
                    <Image src='./profile-pic.JPG' borderRadius='full' boxSize={['2rem','4rem']}/>
                    <Heading size={['md', '2xl']}>Samuel Wheeler</Heading>
                    <Show above='md'>
                        <Text fontSize='xl' p='1rem'>Web3 Developer</Text>
                    </Show>
                    
                </HStack>
                <Show above='md'>
                    <HStack>
                        <Button variant='ghost' onClick={handleHomeClick}>Home</Button>
                        <Button variant='ghost' onClick={handleAboutClick}>About</Button>
                        <Button variant='ghost' onClick={handleProjectsClick}>Projects</Button>
                    </HStack>
                </Show>
                <Show below='md'>
                    <Flex align='center'>
                        <Menu>
                            <MenuButton as={IconButton} icon={<AiOutlineMenu />}/>
                            <MenuList>
                                <MenuItem onClick={handleHomeClick}>Home</MenuItem>
                                <MenuItem onClick={handleAboutClick}>About</MenuItem>
                                <MenuItem onClick={handleProjectsClick}>Projects</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Show>
            </Flex>
        </Box>
    )
}