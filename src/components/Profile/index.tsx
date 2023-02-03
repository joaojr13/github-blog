import { ProfileContainer, ProfileInfo, ProfileInfoFooter, ProfileInfoHeader } from "./styles";
import { useEffect, useState } from 'react';
import { apiGithub } from "../../lib/axios";
import { ArrowSquareUpRight, Buildings, GithubLogo, Users } from "phosphor-react";
import { NavLink } from "react-router-dom";

interface Profile {
  login: string,
  html_url: string,
  avatar_url: string,
  name: string,
  company: string,
  bio: string,
  followers: number,
}

export function Profile() {
  const [profile, setProfile] = useState<Profile>({} as Profile);

  useEffect(() => {
    fetchProfile('joaojr13');
  }, [])

  async function fetchProfile(username: string){
    const response = await apiGithub.get(`/users/${username}`); 
    setProfile(response.data);
  }

  return (
    <ProfileContainer>
      <img src={profile.avatar_url} alt="" />

      <ProfileInfo>
        <ProfileInfoHeader>
          <span>{profile.name}</span>
          <a href={profile.html_url} target="blank">
            GITHUB
            <ArrowSquareUpRight size={18} />
          </a>
        </ProfileInfoHeader>

        <p>{profile.bio}</p>

        <ProfileInfoFooter>
          <span>
            <GithubLogo size={18}/>
            {profile.login}
          </span>
          <span>
            <Buildings size={18}/>
            {profile.company}
          </span>
          <span>
            <Users size={18}/>
            {profile.followers} seguidores
          </span>
        </ProfileInfoFooter>
      </ProfileInfo>

    </ProfileContainer>
  )
}