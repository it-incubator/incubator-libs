import {
  ButtonHTMLAttributes,
  ComponentType,
  ElementRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react'

import { CheckBoxSelected, CheckBoxUnselected, KeyboardArrowDown } from '../../assets/icons'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '../command/command'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Scrollbar } from '../scrollbar'
import { clsx } from 'clsx'

import multiSelectStyles from './multi-select.module.scss'
import s from './select.module.scss'

interface MultiSelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  className?: string
  defaultValue: string[]
  maxCount?: number
  onValueChange: (value: string[]) => void
  options: {
    icon?: ComponentType<{ className?: string }>
    label: string
    value: string
  }[]
  placeholder?: string
}
const ITEM_SELECTOR = `[cmdk-item=""]`
const SELECT_EVENT = `cmdk-item-select`

export const MultiSelect = forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      asChild = false,
      className,
      defaultValue = [],
      maxCount = 3,
      onValueChange,
      options,
      placeholder = 'Select options',
      ...props
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(defaultValue)
    const listRef = useRef<ElementRef<typeof CommandList>>(null)
    const selectedLabels = selectedValues.map(value => {
      const option = options.find(option => option.value === value)

      return option?.label
    })
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    useEffect(() => {
      if (JSON.stringify(selectedValues) !== JSON.stringify(defaultValue)) {
        setSelectedValues(defaultValue)
      }
    }, [defaultValue, selectedValues])

    const toggleOption = (value: string) => {
      const newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter(v => v !== value)
        : [...selectedValues, value]

      setSelectedValues(newSelectedValues)
      onValueChange(newSelectedValues)
    }

    const handleClear = () => {
      setSelectedValues([])
      onValueChange([])
    }

    const handleTogglePopover = () => {
      setIsPopoverOpen(prev => !prev)
    }

    const toggleAll = () => {
      if (selectedValues.length === options.length) {
        handleClear()
      } else {
        const allValues = options.map(option => option.value)

        setSelectedValues(allValues)
        onValueChange(allValues)
      }
    }

    function getSelectedItem() {
      return listRef.current?.querySelector(`${ITEM_SELECTOR}[aria-selected="true"]`)
    }

    return (
      <Popover onOpenChange={setIsPopoverOpen} open={isPopoverOpen}>
        <PopoverTrigger asChild>
          <button
            ref={ref}
            {...props}
            className={clsx(s.trigger, className)}
            onClick={handleTogglePopover}
          >
            {selectedLabels.length > 0 ? (
              <div>{selectedLabels.join(', ')}</div>
            ) : (
              <span className={'text-sm text-muted-foreground mx-3'}>{placeholder}</span>
            )}
            <KeyboardArrowDown className={s.icon} />
          </button>
        </PopoverTrigger>
        <PopoverContent
          align={'start'}
          asChild
          className={s.content}
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
        >
          <Command
            className={multiSelectStyles.viewport}
            loop
            onKeyDown={e => {
              if (e.key === ' ') {
                const item = getSelectedItem()

                if (item) {
                  const event = new Event(SELECT_EVENT)

                  item.dispatchEvent(event)
                }
              }
            }}
          >
            <Scrollbar maxHeight={158}>
              <CommandList ref={listRef}>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  <CommandItem
                    key={'all'}
                    onSelect={toggleAll}
                    style={{ opacity: 1, pointerEvents: 'auto' }}
                  >
                    <div className={multiSelectStyles.item}>
                      {selectedValues.length === options.length ? (
                        <CheckBoxSelected color={'var(--color-text-primary)'} />
                      ) : (
                        <CheckBoxUnselected color={'var(--color-text-primary)'} />
                      )}
                      <span>Select All</span>
                    </div>
                  </CommandItem>
                  {options.map(option => {
                    const isSelected = selectedValues.includes(option.value)

                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => toggleOption(option.value)}
                        style={{ opacity: 1, pointerEvents: 'auto' }}
                      >
                        <div className={multiSelectStyles.item}>
                          {isSelected ? (
                            <CheckBoxSelected color={'var(--color-text-primary)'} />
                          ) : (
                            <CheckBoxUnselected color={'var(--color-text-primary)'} />
                          )}
                          <span>{option.label}</span>
                        </div>
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              </CommandList>
            </Scrollbar>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
)

MultiSelect.displayName = 'MultiSelect'
