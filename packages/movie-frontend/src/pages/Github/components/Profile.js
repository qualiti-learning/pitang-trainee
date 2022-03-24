import CardWrapper from "./CardWrapper"

const Profile = ({user}) => {
    return (
        <CardWrapper title="Github User">
          <img
            alt=""
            className='rounded-circle'
            height={240}
            src={`https://github.com/${user.login}.png`}
            width={240}
          />

          <h1>{user.name}</h1>
          <strong>{user.login}</strong>
          <p>{user.bio}</p>

          <ul>
            {user.repos.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </CardWrapper>
    )
}

export default Profile