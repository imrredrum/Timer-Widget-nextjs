import {
  Box,
  buttonClasses,
  CardActions,
  cardActionsClasses,
  CardContent,
  cardContentClasses,
} from '@mui/material'
import React from 'react'

const SectionLayout: React.FC<
  React.PropsWithChildren<{ actions: React.ReactNode[] }>
> = ({ actions, children }) => {
  return (
    <Box
      sx={{
        [`.${cardContentClasses.root}`]: {
          mt: '-1px',
          border: '1px solid',
          borderColor: 'divider',
          borderLeft: 'none',
          borderRight: 'none',
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
      <CardActions>{actions}</CardActions>
    </Box>
  )
}

export default SectionLayout
