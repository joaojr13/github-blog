import * as Dialog from "@radix-ui/react-dialog";
import { Star } from "phosphor-react";
import { ViewRepositoryModal } from "../ViewRepositoryModal";
import { RepositoriesCard, RepositoriesCardHeader } from "./styles";

export function RepositoryCard() {
  return (
    <RepositoriesCard>
      <RepositoriesCardHeader>
        <span>Meu repo</span>
        <button>
          <Star size={24} weight="fill" />
        </button>
      </RepositoriesCardHeader>
      <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>Ver mais</button>
        </Dialog.Trigger>
        <ViewRepositoryModal />
      </Dialog.Root>
      <div>
      </div>

    </RepositoriesCard>
  )
}