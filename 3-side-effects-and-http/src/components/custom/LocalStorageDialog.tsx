import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

interface Props {
  name: string
  age: number
  setName: (name: string) => void
  setAge: (age: number) => void
}
function LocalStorageDialog({ userState }: { userState: Props }) {
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const { name, setName, age, setAge } = userState

  return (
    <Dialog open={showDialog}>
      <DialogTrigger asChild>
        <Button onClick={() => setShowDialog(true)}>Daten ändern</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>LocalStorage</DialogTitle>
          <DialogDescription>
            Hier kannst du deinen Namen und dein Alter ändern. Diese Daten
            werden im LocalStorage gespeichert.
          </DialogDescription>
        </DialogHeader>

        <Label>
          Name
          <Input
            type="text"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            placeholder="Name"
          />
        </Label>
        <Label>
          Wie alt bist du?
          <Input
            type="number"
            value={age}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAge(parseInt(e.target.value))
            }
            placeholder="Alter"
          />
        </Label>

        <DialogFooter>
          <Button
            onClick={() => {
              localStorage.setItem('name', name)
              localStorage.setItem('age', age.toString())
              setShowDialog(false)
            }}
          >
            Speichern
          </Button>

          <Button
            onClick={() => {
              localStorage.clear()
              setName('')
              setAge(0)
              setShowDialog(false)
            }}
          >
            Löschen
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default LocalStorageDialog
