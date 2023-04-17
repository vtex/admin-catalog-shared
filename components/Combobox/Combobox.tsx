import {
  Combobox as DefaultCombobox,
  ComboboxItem,
  ComboboxPopover,
  useComboboxStore,
} from '@ariakit/react'
import { AnyObject, Box, Flex, IconPlus, Text, csx } from '@vtex/admin-ui'
import { FormState } from '@vtex/admin-ui-form'
import { ReactNode, useMemo, useState } from 'react'
import * as styles from './Combobox.styles'

type ComboboxProps = {
  name: string
  label: string
  state: FormState
  list: {
    value: string
    label: string
  }[]
  placeholder?: string
  defaultSelected?: AnyObject[]
  getOptionValue?: (item: AnyObject) => string
  renderOption?: (item: AnyObject) => ReactNode
  isLoading?: boolean
  creatable?: boolean
}

export const Combobox = (props: ComboboxProps) => {
  const { list, label, name, state, placeholder, creatable = false } = props

  const [searchValue, setSearchValue] = useState('')

  const filteredList = useMemo(
    () =>
      searchValue
        ? list.filter((item) => item.label.toLowerCase().includes(searchValue))
        : list,
    [list, searchValue]
  )

  const combobox = useComboboxStore({ gutter: 4, sameWidth: true })

  const handleCreate = () => {
    state.setValue(name, searchValue)
    combobox.setValue(searchValue)
    combobox.setOpen(false)
  }

  const shouldShowCreate = creatable && !!searchValue

  return (
    <Box csx={styles.wrapper}>
      <label htmlFor={name} className={csx(styles.label)}>
        {label}
      </label>
      <DefaultCombobox
        id={name}
        store={combobox}
        placeholder={placeholder}
        className={csx(styles.combobox)}
        onChange={(evt) => setSearchValue(evt.target.value)}
      />

      <ComboboxPopover store={combobox} className={csx(styles.popover)}>
        <Text variant="detail" tone="secondary" csx={{ padding: '9.5px 24px' }}>
          Select a {label.toLocaleLowerCase()} {creatable && 'or create one'}
        </Text>
        {filteredList.map((item) => (
          <ComboboxItem
            key={item.value}
            className={csx(styles.comboboxItem)}
            value={item.label}
            onClick={() => state.setValue(name, item.value)}
          >
            {item.label}
          </ComboboxItem>
        ))}
        {shouldShowCreate && (
          <button
            type="button"
            onClick={handleCreate}
            style={{
              appearance: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
            }}
          >
            <Flex
              align={'center'}
              csx={{
                gap: '8px',
                height: '36px',
                padding: '18px 24px',
                borderTop: '1px solid #DDDDDD',
              }}
            >
              <IconPlus />
              <Text variant="detail" tone="secondary">
                Create <strong>{searchValue}</strong>
              </Text>
            </Flex>
          </button>
        )}
      </ComboboxPopover>
    </Box>
  )
}
