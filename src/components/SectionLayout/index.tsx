'use client'

import { useFullscreen } from '@/providers/fullscreen'
import { Fullscreen as FullscreenIcon } from '@mui/icons-material'
import {
  Box,
  buttonClasses,
  CardActions,
  cardActionsClasses,
  CardContent,
  cardContentClasses,
  IconButton,
  Stack,
} from '@mui/material'

const SectionLayout: React.FC<
  React.PropsWithChildren<{
    actions: React.ReactNode[]
  }>
> = ({ actions, children }) => {
  const { isFullscreen, onToggle } = useFullscreen()

  return (
    <Stack
      alignItems='stretch'
      sx={{
        flexGrow: 1,
        [`.${cardContentClasses.root}`]: {
          flexGrow: 1,
          mt: '-1px',
          border: '1px solid',
          borderColor: 'divider',
          borderLeft: 'none',
          borderRight: 'none',
          display: 'flex',
          justifyContent: isFullscreen ? 'center' : 'flex-start',
          alignItems: 'center',
        },
        [`.${cardActionsClasses.root}`]: {
          p: 2,
          [`.${buttonClasses.root}`]: {
            minWidth: 72,
            borderRadius: 0.5,
            py: 0.25,
          },
        },
        [`.${cardActionsClasses.spacing}`]: {
          gap: 1,
        },
      }}
    >
      <CardContent>{children}</CardContent>
      <CardActions>
        {actions}
        <Box flexGrow={1} />
        <IconButton sx={{ p: 0.25 }}>
          <FullscreenIcon onClick={onToggle} />
        </IconButton>
      </CardActions>
    </Stack>
  )
}

export default SectionLayout
