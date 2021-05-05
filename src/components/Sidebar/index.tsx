import { Box } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Drawer, DrawerOverlay } from "@chakra-ui/modal";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    <Drawer isOpen={true} placement="left" onClose={() => { }}>
      <DrawerOverlay>

      </DrawerOverlay>
    </Drawer>
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}