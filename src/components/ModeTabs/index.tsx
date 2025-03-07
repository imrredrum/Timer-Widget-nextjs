'use client'

import type { TMode } from '@/libs/types'
import {
  HourglassEmptyRounded as HourglassEmptyRoundedIcon,
  TimerOutlined as TimerOutlinedIcon,
} from '@mui/icons-material'
import { Tab, tabClasses, Tabs } from '@mui/material'

const ModeTabs: React.FC<{
  mode: TMode
  onChange: (newValue: TMode) => void
}> = ({ mode, onChange }) => (
  <Tabs
    value={mode}
    onChange={(_, value: TMode) => onChange(value)}
    variant='fullWidth'
    sx={{
      width: 1 / 1,
      [`.${tabClasses.root}`]: {
        minHeight: 48,
      },
    }}
  >
    <Tab
      icon={<HourglassEmptyRoundedIcon />}
      iconPosition='start'
      label='Timer'
      value='timer'
    />
    <Tab
      icon={<TimerOutlinedIcon />}
      iconPosition='start'
      label='Stopwatch'
      value='stopwatch'
    />
  </Tabs>
)

export default ModeTabs
