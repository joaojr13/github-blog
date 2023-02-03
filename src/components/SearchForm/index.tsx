import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por repositórios" />
      {/* <button type="submit">
        Buscar
      </button> */}
    </SearchFormContainer>
  )
}