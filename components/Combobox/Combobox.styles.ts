import { style } from '@vtex/admin-ui'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  borderRadius: '4px',
  backgroundColor: 'hsl(204 20% 100%)',
})

export const label = style({
  color: '$gray50',
})

export const combobox = style({
  height: '44px',
  width: '100%',
  borderRadius: '0.375rem',
  borderStyle: 'none',
  paddingX: '1rem',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: 'hsl(204 10% 10%)',
  border: '1px solid $gray30',
  outline: 'none',
  ':focus-within': {
    border: '1px solid rgb(59, 59, 59)',
    boxShadow: 'var(--admin-ui-shadow-ring-neutral)',
  },
})

export const popover = style({
  border: '1px solid $gray30',
  position: 'relative',
  zIndex: '50',
  display: 'flex',
  maxHeight: ' 300px',
  flexDirection: 'column',
  overflow: 'auto',
  overscrollBehavior: 'contain',
  borderRadius: '0.5rem',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'hsl(204 20% 88%)',
  backgroundColor: 'hsl(204 20% 100%)',
  padding: '0.5rem',
  color: 'hsl(204 10% 10%)',
  outline: '2px solid transparent',
  outlineOffset: '2px',
})

export const comboboxItem = style({
  display: 'flex',
  cursor: 'default',
  scrollMargin: '0.5rem',
  alignItems: 'center',
  gap: '0.5rem',
  borderRadius: '0.25rem',
  padding: '0.5rem',
  outline: 'none !important',

  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  '&[data-active-item]': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
})
