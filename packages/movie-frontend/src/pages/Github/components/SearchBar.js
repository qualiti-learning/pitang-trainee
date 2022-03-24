import {useEffect, useState} from 'react'
import useDebounce from '../../../hooks/useDebounce';
import {Row, Col, FormControl, Button} from 'react-bootstrap'

export const RECENT_USER_KEY = 'recent_user';

async function customFetch(url) {
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const SearchBar = ({setLoading, setRecentUsers, setUser}) => {
    const [username, setUsername] = useState('');
    const debouncedValue = useDebounce(username, 500);

    useEffect(() => {
        console.log({username})
    }, [username])

    useEffect(() => {
        console.log({debouncedValue})
    }, [debouncedValue])
    
    const onChange = (event) => {
        setUsername(event.target.value)
    }
    
    const saveRecentUser = (user) => {
        const recentSearches = localStorage.getItem(RECENT_USER_KEY)

        if (!recentSearches) {
            setRecentUsers([user]);

            return localStorage.setItem(RECENT_USER_KEY, JSON.stringify([user]))
        }

        const recentSearchesArray = JSON.parse(recentSearches)

        if (!recentSearchesArray.includes(user)) {
            localStorage.setItem(RECENT_USER_KEY, JSON.stringify([...recentSearchesArray, user]))

            setRecentUsers([...recentSearchesArray, user]);
        }
    }

    const onSearchUser = async () => {
        setLoading(true);

        const [user, repos] = await Promise.all(
            [
                customFetch(`https://api.github.com/users/${username}`),
                customFetch(`https://api.github.com/users/${username}/repos?per_page=100`)
            ]
        );

        setLoading(false);

        saveRecentUser(username);

        setUser({
            ...user,
            repos
        })
    }

    return (
        <Row className="mb-4">
            <Col>
                <FormControl
                    placeholder="Type a Github Username" 
                    onChange={onChange}
                    value={username}
                />
            </Col>
            <Col>
                <Button 
                    onClick={onSearchUser} 
                    variant='primary'>
                        Search User
                    </Button>
            </Col>
        </Row>
    )
}

export default SearchBar