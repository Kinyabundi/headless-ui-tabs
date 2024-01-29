import { ITab } from './types/Tab'
import CustomTab from './components/CustomTab'

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
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg/1200px-Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg' alt='Stuff' />
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

