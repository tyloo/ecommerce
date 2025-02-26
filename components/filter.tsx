'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { colors, conditions, filterOptions, sizes, sorts, types } from '@/data/filters'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown, X } from 'lucide-react'
import { useState } from 'react'

export function Filters() {
  const [sort, setSort] = useState('')
  const [filters, setFilters] = useState<Record<string, string>>({
    type: '',
    condition: '',
    size: '',
    color: ''
  })

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between gap-4'>
        <div className='flex flex-row gap-4'>
          <Filter
            label={filterOptions.type}
            value={filters.type}
            availableValues={types}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, type: value }))}
          />
          <Filter
            label={filterOptions.condition}
            value={filters.condition}
            availableValues={conditions}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, condition: value }))}
          />
          <Filter
            label={filterOptions.size}
            value={filters.size}
            availableValues={sizes}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, size: value }))}
          />
          <Filter
            label={filterOptions.color}
            value={filters.color}
            availableValues={colors}
            onValueChange={(value) => setFilters((prev) => ({ ...prev, color: value }))}
          />
        </div>
        <div>
          <Sort value={sort} onValueChange={setSort} />
        </div>
      </div>
      <div className='flex flex-row items-center justify-between gap-2'>
        <div>
          {filters.type && (
            <ActiveFilter
              filter='type'
              label={types[filters.type]}
              onRemoveFilter={() => setFilters((prev) => ({ ...prev, type: '' }))}
            />
          )}
          {filters.condition && (
            <ActiveFilter
              filter='condition'
              label={conditions[filters.condition]}
              onRemoveFilter={() => setFilters((prev) => ({ ...prev, condition: '' }))}
            />
          )}
          {filters.size && (
            <ActiveFilter
              filter='size'
              label={sizes[filters.size]}
              onRemoveFilter={() => setFilters((prev) => ({ ...prev, size: '' }))}
            />
          )}
          {filters.color && (
            <ActiveFilter
              filter='color'
              label={colors[filters.color]}
              onRemoveFilter={() => setFilters((prev) => ({ ...prev, color: '' }))}
            />
          )}
        </div>
        <div>{sorts[sort] && <ActiveFilter label={sorts[sort]} onRemoveFilter={() => setSort('')} />}</div>
      </div>
    </div>
  )
}

function Filter({
  label,
  value,
  availableValues,
  onValueChange
}: {
  label: string
  value: string
  availableValues: Record<string, string>
  onValueChange: (value: string) => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' role='combobox' aria-expanded={open} className='justify-between'>
          {label}
          <ChevronsUpDown className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] rounded-none p-0'>
        <Command>
          <CommandInput placeholder={`Search ${label}...`} className='h-9' />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {Object.entries(availableValues).map(([k, v]) => (
                <CommandItem
                  key={k}
                  value={k}
                  onSelect={(currentValue) => {
                    onValueChange(currentValue)
                    setOpen(false)
                  }}
                >
                  {v}
                  <Check className={cn('ml-auto', k === value ? 'opacity-100' : 'opacity-0')} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

function Sort({ value, onValueChange }: { value: string; onValueChange: (value: string) => void }) {
  return (
    <Select onValueChange={onValueChange} defaultValue={value}>
      <SelectTrigger className='w-[140px] rounded-none'>
        <SelectValue placeholder='Filtrer par' />
      </SelectTrigger>
      <SelectContent className='rounded-none'>
        <SelectGroup>
          {Object.entries(sorts).map(([value, label]) => (
            <SelectItem value={value} key={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function ActiveFilter({
  filter,
  label,
  onRemoveFilter
}: {
  filter?: keyof typeof filterOptions
  label: string
  onRemoveFilter: (value: string) => void
}) {
  return (
    <Badge className='gap-1 px-0.5 shadow-none'>
      <div className='p-1 text-xs'>{filter ? filterOptions[filter] : 'Sort'}</div>
      <div className='bg-background text-foreground rounded-md p-1 text-xs'>{label}</div>
      <Button
        size='icon'
        variant='link'
        onClick={() => (filter ? onRemoveFilter(filter) : onRemoveFilter('sort'))}
        className='mx-1 size-4 cursor-pointer text-white'
      >
        <X className='text-xs' />
      </Button>
    </Badge>
  )
}
