import { Button, Flex, Stack, FormLabel, FormControl } from "@chakra-ui/react"
import Link from "next/link"
import {useForm} from 'react-hook-form'
import { Input } from "../components/Form/input"

export default function SignIn() {

	const { register, handleSubmit} = useForm()

	function handleSignIn(){

	}	

	return (
		<Flex
			w="100vw"
			h="100vh"
			align="center"
			justify="center"
		>
			<Flex
				as='form'
				width="100%"
				maxWidth={360}
				bgColor="gray.800"
				p='8'
				borderRadius={8}
				flexDir='column'
			>
				<Stack spacing='4'>
					<Input name="email" type="email" label="Email" ref={register}/>
					<Input name="password" type="password" label="Password" ref={register}/>
				</Stack>
				<Link href='/dashboard'>
					<Button type='submit' mt='6' colorScheme='pink' size='lg'> Entrar</Button>
				</Link>
			</Flex>
		</Flex >
	)
}