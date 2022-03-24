import { useEffect, useState} from 'react'

import Profile from "./components/Profile"
import RecentSearch from "./components/RecentSearch"
import SearchBar, {RECENT_USER_KEY} from "./components/SearchBar"
import Loading from "./components/Loading"

const Github = () => {
    const [recentUsers, setRecentUsers] = useState([]);

    const [user, setUser] = useState();
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        const recentUsersStorage = localStorage.getItem(RECENT_USER_KEY)

        if (recentUsersStorage) {
            setRecentUsers(JSON.parse(recentUsersStorage))
        }
    }, [setRecentUsers])

    return (
        <main className="container mt-4">
            <SearchBar
                setLoading={setLoading} 
                setRecentUsers={setRecentUsers} 
                setUser={setUser} 
            />

            <RecentSearch recentUsers={recentUsers} />

            {isLoading ? <Loading /> : user && <Profile user={user} />}
        </main>
    )
}

export default Github