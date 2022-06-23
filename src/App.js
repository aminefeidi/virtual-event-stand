import React from 'react';
import background from './assets/images/stand.jpg';
import placeholder from './assets/images/placeholder.png';
import './App.css';
import {
	Image,
	Box,
	Button,
	ButtonGroup,
	IconButton,
	Drawer,
	DrawerOverlay,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	useDisclosure,
	Flex,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon, RepeatIcon, ViewIcon } from '@chakra-ui/icons';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ImageBanner from './Banners/ImageBanner';

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState('bottom');
	const [selectedBanner, setSelectedBanner] = React.useState(0);
	return (
		<>
			<TransformWrapper initialScale={1}>
				{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
					<React.Fragment>
						<TransformComponent
							wrapperStyle={{ maxWidth: '100%', height: '100vh' }}
						>
							<img style={{ width: '100%' }} src={background} alt="test" />

							{banners.map((banner, index) => (
								<ImageBanner
									key={index.toString()}
									onClick={() => {
										setSelectedBanner(index);
										onOpen();
									}}
									image={banner.imageUrl}
									top={banner.top}
									left={banner.left}
									h={banner.h}
									w={banner.w}
								/>
							))}
						</TransformComponent>
						<div className="tools">
							<ButtonGroup
								zIndex={30}
								pos="absolute"
								top={0}
								left={0}
								size="md"
								isAttached
								variant="outline"
							>
								<IconButton
									colorScheme="teal"
									variant="solid"
									onClick={() => zoomIn()}
									icon={<AddIcon />}
								/>
								<IconButton
									colorScheme="teal"
									variant="solid"
									onClick={() => zoomOut()}
									icon={<MinusIcon />}
								/>
								<IconButton
									colorScheme="teal"
									variant="solid"
									onClick={() => resetTransform()}
									icon={<RepeatIcon />}
								/>
								<IconButton
									colorScheme="teal"
									variant="solid"
									onClick={() => onOpen()}
									icon={<ViewIcon />}
								/>
							</ButtonGroup>
						</div>
					</React.Fragment>
				)}
			</TransformWrapper>
			<Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth="1px">
						Gallery {selectedBanner}
					</DrawerHeader>
					<DrawerBody>
						<Flex>
							{gallery.map(url => (
								<Image
									onClick={() => {
										banners[selectedBanner].imageUrl = url;
										onClose();
									}}
									cursor="pointer"
									display="inline-block"
									borderRadius={6}
									borderWidth={1}
									borderStyle="solid"
									borderColor="black"
									src={url}
									alt="none"
									fit="contain"
									width={100}
									heigth={100}
									m={2}
								/>
							))}
							<Image
								onClick={() => {
									banners[selectedBanner].imageUrl = null;
									onClose();
								}}
								cursor="pointer"
								display="inline-block"
								borderRadius={6}
								borderWidth={1}
								borderStyle="solid"
								borderColor="black"
								src={placeholder}
								alt="none"
								fit="contain"
								width={100}
								heigth={100}
								m={2}
							/>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

const banners = [
	{
		top: '55%',
		left: '10.5%',
		h: '21%',
		w: '10.7%',
		imageUrl: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
	},
	{
		top: '29%',
		left: '32.7%',
		h: '17%',
		w: '6.5%',
		imageUrl:
			'https://i.pinimg.com/originals/07/26/9a/07269aa4fdacdc0f7a6386bcdf1e51ae.jpg',
	},
	{
		top: '21%',
		left: '40.5%',
		h: '17%',
		w: '6.5%',
		imageUrl: null,
	},
	{
		top: '31%',
		left: '52%',
		h: '10%',
		w: '29%',
		imageUrl: null,
	},
	{
		top: '43%',
		left: '77%',
		h: '40%',
		w: '9%',
		imageUrl: null,
	},
];

const gallery = [
	'https://cdn.logo.com/hotlink-ok/logo-social.png',
	'https://i.pinimg.com/originals/07/26/9a/07269aa4fdacdc0f7a6386bcdf1e51ae.jpg',
	'https://cdn.pixabay.com/photo/2018/08/22/21/34/banner-3624694_960_720.png',
	'https://11veok1mf4bu3zvoiz4atmfn-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Sem-Titulo-2.png',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ATiUg17HuXkHqkRB436JTxNVqh55NdWSZQ&usqp=CAU',
	'https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550_1280.png',
];

export default App;
