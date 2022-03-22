import { Card, FormControl, Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

const CardWrapper = ({ children, title }) => (
  <Card>
    <Card.Header>
      <Card.Title>
        {title}
      </Card.Title>
    </Card.Header>

    <Card.Body>
      {children}
    </Card.Body>
  </Card>
)

const users = [
  {
    name: "Keven Leone",
    login: "kevenleone",
    bio: "Frontend-Engineer",
  },
  {
    name: "Zeno Rocha",
    login: "zenorocha",
    bio: "Zeno Rocha",
  },
  {
    name: "Liferay",
    login: "liferay",
    bio: "Open Source",
  },
  {
    name: "Linus Torvalds",
    login: "torvalds",
    bio: "Linux",
  }
]

const RecentUser = ({ login, name }) => (
  <>
    <img
      width={40}
      height={40}
      src={`https://github.com/${login}.png`} alt="" />
    <span> {name}</span>
  </>
)

async function customFetch(url) {
  const response = await fetch(url)
  const data = await response.json()

  return data
}

const App = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState();

  const onSearchUser = async () => {
    const user = await customFetch(`https://api.github.com/users/${username}`)
    const repos = await customFetch(`https://api.github.com/users/${username}/repos?per_page=100`)

    setUser({
      ...user,
      repos
    })
  }

  const onChange = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div className="container mt-4">
      <Row className="mb-4">
        <Col>
          <FormControl placeholder="Type a Github Username" onChange={onChange} />
        </Col>

        <Col>
          <Button onClick={onSearchUser} variant='primary'>Search User</Button>
        </Col>
      </Row>

      <CardWrapper title="Recent Users">
        {users.map((user) =>
          <RecentUser
            key={user.login}
            name={user.name}
            login={user.login}
            bio={user.bio} />
        )}
      </CardWrapper>

      {user && <CardWrapper title="Github User">
          <img
            className='rounded-circle'
            width={240}
            height={240}
            src={`https://github.com/${user.login}.png`}
            alt=""
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
      }
    </div>
  )
}

export default App;