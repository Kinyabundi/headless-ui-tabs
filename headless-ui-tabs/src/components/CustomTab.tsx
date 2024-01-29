import { Tab } from "@headlessui/react"
import { ITab } from "../types/Tab"

interface CustomTabProps {
  tabs: ITab[]
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const CustomTab = ({ tabs }: CustomTabProps) => {
  return (
    <Tab.Group>
      <Tab.List className={"flex space-x-1 rounded-xl bg-blue-900/20 p-1"}>
        {tabs.map((item) => <Tab key={item.uid} className={({ selected }) => classNames('w-full rounded-lg py-2.5 text-sm font-medium leading-5',
          'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2', selected
          ? 'bg-white text-blue-700 shadow'
          : 'text-blue-400 hover:bg-white/[0.12] hover:text-white')}>{item.title}</Tab>)}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((item) => <Tab.Panel key={item.uid}>{item.content}</Tab.Panel>)}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default CustomTab
