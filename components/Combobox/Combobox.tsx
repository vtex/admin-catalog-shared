import {
  Combobox as DefaultCombobox,
  ComboboxItem,
  ComboboxPopover,
  useComboboxStore,
} from '@ariakit/react'
import { AnyObject, Box, csx } from '@vtex/admin-ui'
import { FormState } from '@vtex/admin-ui-form'
import { ReactNode, useState } from 'react'
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
}

export const Combobox = (props: ComboboxProps) => {
  const { list, label, name, state, placeholder } = props

  const [filteredList, setFilteredList] = useState(list)

  const combobox = useComboboxStore({ gutter: 4, sameWidth: true })

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
        onChange={(evt) =>
          setFilteredList(
            list.filter((item) =>
              item.label.toLowerCase().includes(evt.target.value.toLowerCase())
            )
          )
        }
      />

      <ComboboxPopover store={combobox} className={csx(styles.popover)}>
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
      </ComboboxPopover>
    </Box>
  )
}
