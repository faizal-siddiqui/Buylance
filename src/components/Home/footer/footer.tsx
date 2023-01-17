import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('#ffffff', '#ffffff')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>MY ACCOUNT</ListHeader>
            <Link href={'#'}>Orders</Link>
            <Link href={'#'}>Returns/Refunds</Link>
            <Link href={'#'}>Track Orders</Link>
            <Link href={'#'}>Frequently Asked Questions</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>POLICIES</ListHeader>
            <Link href={'#'}>Payment Options</Link>
            <Link href={'#'}>Terms & Conditions of Use</Link>
            <Link href={'#'}>Terms & Conditions of <br /> Membership Program</Link>
            <Link href={'#'}>Offer Terms & Conditions</Link>
            <Link href={'#'}>Returns & Exchange Policy</Link>
            <Link href={'#'}>Shipping Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>




          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>CONTACT US</ListHeader>
            <Link href={'#'}>Customer Support</Link>
            <Link style={{fontWeight:"bold"}} href={'#'}>ABOUT US</Link>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Aditya Birla Fashion & Retail Ltd</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>MEN</ListHeader>
            <Link href={'#'}>Shirts</Link>
            <Link href={'#'}>T-shirts</Link>
            <Link href={'#'}>Jeans</Link>
            <Link href={'#'}>Lounge <br /> Pant </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>WOMEN</ListHeader>
            <Link href={'#'}>T-shirts</Link>
            <Link href={'#'}>Jackets</Link>
            <Link href={'#'}>Jeans</Link>
            <Link href={'#'}>Leggings</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>JUNIORS</ListHeader>
            
            <Link href={'#'}>T-shirts</Link>
            <Link href={'#'}>Jackets</Link>
            <Link href={'#'}>Jeans</Link>
            <Link href={'#'}>Leggings</Link>          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2018 Madura Fashion & Lifestyle A Division of Aditya Birla Fashion & Retail Limited. All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/Abof-111020508179123'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UCl01uDTh0xy0jAzGOMjQiAQ'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/abof_india/'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}