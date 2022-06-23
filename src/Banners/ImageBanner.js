import React from 'react';
import placeholder from '../assets/images/placeholder.png';
import { Image, Box } from '@chakra-ui/react';

function ImageBanner(props) {
	return (
		<Box
			pos="absolute"
			display="relative"
			top={props.top}
			left={props.left}
			h={props.h}
			w={props.w}
			boxShadow="inner"
			rounded="md"
			bg="#C2CBD2"
		>
			<div onClick={props.onClick} className="pulse"></div>
			<Image
				fit="cover"
				w="100%"
				h="100%"
				p="6px"
				src={props.image ?? placeholder}
				alt="logo"
			/>
		</Box>
	);
}

export default ImageBanner;
