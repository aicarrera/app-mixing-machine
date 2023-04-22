import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image,Text, Stack, useToast, VStack, IconButton } from '@chakra-ui/react'

//import useMatomo from '@jonkoops/matomo-tracker-react/lib/useMatomo';
import { useEffect, useState } from 'react';
/**
 * TMP
 * @param r 
 * @returns 
 */
 

  function BasicCard({id, thumbnailUrl, title}) {
  const [value, setValue] = useState<number>(0);
  
  const [buttonState, setButtonState] = useState(null);
  
 
  function handleSelect(title,e) {  
   
   //trackEvent({ category: 'button', action: 'click-event'});  //matomo
  }

  
  
    return (  
      <VStack spacing={'5px'} paddingBottom={"15px"}>     
      <Card align={"center"} variant="elevated" >    
      <CardBody id={id} >
      <Stack mt='6' spacing='1' alignItems={"center"}> 
        <Heading size='sm'>{title}</Heading>   
        <Image className="BasicCard_thumbnail" alt="todo" src={thumbnailUrl}   borderRadius='full'  boxSize='50px'/>              
        </Stack>
      </CardBody>
      <CardFooter   justify='space-between'
          flexWrap='wrap'
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}>
       <Button id={'btn5'+title} onClick={e=>handleSelect(title,e)} colorScheme='blue'>Select</Button> 
  
      </CardFooter>
      </Card>
      
      </VStack> 
    );
  }
  
  export default BasicCard;
  