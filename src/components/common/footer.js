import React from 'react'

export default function Footer ({pages}) {
    // const [user, setUser] = useState(null)

    // useEffect(() => {
    //     firebase
    //         .auth()
    //         .onAuthStateChanged((authUser) => {
    //             if (authUser) {
    //                 setUser(authUser)
    //                 authUser.getIdTokenResult(true).then(function ({token}) {
    //                     localStorage.setItem('token', `Bearer ${token}`)
    //                 })
    //             }
    //         })
    // }, [user])

    return (
        <footer className="lavish-footer">
            <ul>
                {Array.isArray(pages) && pages.map((page, index) => (
                    <li key={index}>
                        <a href={page.path} >
                            - {page.title}
                        </a>
                    </li>
                ))}
            </ul>
            <p>Copyright © 2022 AweThentic Creations LLC. All rights reserved.</p>
        </footer>
    )
}