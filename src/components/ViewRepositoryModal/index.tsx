import * as Dialog from "@radix-ui/react-dialog"
import { Content, Overlay } from "./styles"

export function ViewRepositoryModal() {
  return (
      <Dialog.Portal>
        <Overlay />
  
        <Content>
          <Dialog.Title>Meu Repo</Dialog.Title>
        </Content>
      </Dialog.Portal>
  )
}