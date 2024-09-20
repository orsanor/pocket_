// JSX - JAVASCRIPT XML -> HMTL
import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/ui/create-goal'
import { EmptyGoals } from './components/ui/empty-goals'
import { Summary } from './components/ui/summary'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
