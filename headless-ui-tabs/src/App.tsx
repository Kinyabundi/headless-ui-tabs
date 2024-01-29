import { ITab } from './types/Tab'
import CustomTab from './components/CustomTab'
import People from './components/People'

function App() {

  const tabItems: ITab[] = [
    {
      title: "Dashboard",
      content: <p>
        This is a tab for dashboard
      </p>,
      uid: "dashboard"
    },
    {
      title: "Documents",
      content: <p>
        This is a tab for documents
      </p>,
      uid: "documents"
    },
    {
      title: "People",
      content: <>
       <People />
      </>,
      uid: "people",
    }
  ]

  return (
    <div className='w-full max-w-md px-2 py-16 sm:px-0 mx-auto'>
      <CustomTab tabs={tabItems} />
    </div>
  )
}

export default App

