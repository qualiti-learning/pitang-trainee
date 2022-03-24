import CardWrapper from './CardWrapper'

const RecentUser = ({ login, name }) => (
    <>
      <img
        width={40}
        height={40}
        src={`https://github.com/${login}.png`} alt="" />
      <span> {name}</span>
    </>
  )

const RecentSearch = ({recentUsers = []}) => {
    return (
        <CardWrapper title="Recent Users">
            {recentUsers.map((user) =>
                <RecentUser
                    key={user}
                    name={user}
                    login={user}
                />
            )}
      </CardWrapper>
    )
}

export default RecentSearch