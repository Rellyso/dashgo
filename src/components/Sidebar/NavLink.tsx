import { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import { Link as ChakraLink, Text } from "@chakra-ui/layout";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";
interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="bold">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}