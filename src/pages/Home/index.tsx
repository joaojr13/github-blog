import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { HomeContainer, InfoRepositoriesContainer, RepositoriesContainer } from "./styles";
import { SearchForm } from '../../components/SearchForm/index';
import { RepositoryCard } from "../../components/RepositoryCard";

export function Home() {
  return (
    <div>
      <HomeContainer>
        <InfoRepositoriesContainer>
          <span>Repositórios</span>
          <span>0 repositórios</span>
        </InfoRepositoriesContainer>
        <SearchForm />

        <RepositoriesContainer>
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
        </RepositoriesContainer>
      </HomeContainer>
    </div>
  )
}