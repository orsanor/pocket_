// JSX - JAVASCRIPT XML -> HMTL
import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/ui/create-goal'
import { EmptyGoals } from './components/ui/empty-goals'
import { Summary } from './components/ui/summary'

export function App() {
  return (
    <Dialog>
      {/* { <EmptyGoals/>*/}

      <Summary />

      <CreateGoal />
    </Dialog>
  )
}
