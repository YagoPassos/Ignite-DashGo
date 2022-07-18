import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType, } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" alignItems="center" {...rest}>
                <Icon as={icon} />
                <Text ml='4' fontWeight='medium'>{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}