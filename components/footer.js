import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div>
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Daniel Chu. All Rights Reserved.
      </Box>
      <Box align="center" opacity={0.1} fontSize="sm">
        Credits: <a href="https://github.com/craftzdog/craftzdog-homepage">Theme</a> | {' '}
        <a href="https://sketchfab.com/3d-models/charmander-voxel-pixel-f371dd6b2c8f4ba78455f21e8153c358">Charmander Voxel</a>
      </Box>
    </div>
  )
}

export default Footer
